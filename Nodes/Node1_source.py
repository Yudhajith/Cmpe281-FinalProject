from AWSIoTPythonSDK.MQTTLib import AWSIoTMQTTClient #Import
from AWS-IoT Library
import time #To create delay
from datetime import date, datetime #To get date and time
import Adafruit_DHT #Import DHT Library for sensor
from pymongo import MongoClient
import json

sensor_name = Adafruit_DHT.DHT11
sensor_pin = 02

myMQTTClient = AWSIoTMQTTClient("new_Client")
myMQTTClient.configureEndpoint("myendpoint", 8883)
myMQTTClient.configureCredentials("rootCA.pem","private.pem.key", "certificate.pem.crt")
myMQTTClient.configureOfflinePublishQueueing(-1) # Infiniteoffline Publish queueing
myMQTTClient.configureDrainingFrequency(2) # Draining: 2 Hz
myMQTTClient.configureConnectDisconnectTimeout(10) # 10 sec
myMQTTClient.configureMQTTOperationTimeout(5) # 5 sec

client = MongoClient()
client = MongoClient('mongodb uri')
connecting_time = time.time() + 15

if time.time() < connecting_time: #try connecting to AWS for 10 seconds
 myMQTTClient.connect()
 myMQTTClient.publish("rpi1/info", "connected", 0)
 print "MQTT Client connection success!"
 
db = client['project-281']
temp = db.Temperature
humi = db.Humidity

while True:
 now = datetime.utcnow() #get date and time
 current_time = now.strftime('%Y-%m-%dT%H:%M:%SZ')
 humidity, temperature = Adafruit_DHT.read_retry(sensor_name,sensor_pin)
 payload = '{"deviceID":"'+ '1' +'" ,"device location":"'+"First & Santa Clara" + '", "timestamp": "' + current_time +'","temperature": ' + str(temperature) + ',"Humidity": '+str(humidity) + ' }'
 print payload #print payload for reference

#Actual Payload being transmitted
 time.sleep(1)
 db_temp = {
 "deviceID":'Temperature sensor 1',
 "device location": "The Alameda & Race",
 "device type":"DHT11",
 "timestamp":current_time ,
 "value": str(temperature)
 }
 myMQTTClient.publish("rpi1/data", payload, 0) #publish thepayload
 json_data = json.dumps(db_temp)
 temp.insert_one(db_temp)

 db_humi = {
 "deviceID":'Humidity Sensor 1',
 "device location": "The Alameda",
 "device type":"DHT11",
 "timestamp":current_time ,
 "value": str(humidity)
 }
 myMQTTClient.publish("rpi1/data", db_humi, 0) #publish thepayload
 json_data = json.dumps(db_humi)
 humi.insert_one(db_humi)

 time.sleep(1000)