import serial
from AWSIoTPythonSDK.MQTTLib import AWSIoTMQTTClient #Import from AWS-IoT Library
from datetime import date, datetime
from time import sleep
import time
import ssl
from pymongo import MongoClient
import json

ser = serial.Serial ("/dev/ttyAMA0", 38400,timeout=50)

myMQTTClient = AWSIoTMQTTClient("new_Client")
myMQTTClient.configureEndpoint("myendpoint", 8883)
myMQTTClient.configureCredentials("rootCA.pem","private.pem.key", "certificate.pem.crt")
myMQTTClient.configureOfflinePublishQueueing(-1) # Infiniteoffline Publish queueing
myMQTTClient.configureDrainingFrequency(2) # Draining: 2 Hz
myMQTTClient.configureConnectDisconnectTimeout(10) # 10 sec
myMQTTClient.configureMQTTOperationTimeout(5) # 5 sec

client = MongoClient()
client = MongoClient('MongoDB URI)

connecting_time = time.time() + 15

if time.time() < connecting_time: #try connecting to AWS for 10 seconds
 myMQTTClient.connect()
 myMQTTClient.publish("rpi2/info", "connected", 0)
 print "MQTT Client connection success!"

while True:

 now = datetime.utcnow() #get date and time
 current_time = now.strftime('%Y-%m-%dT%H:%M:%SZ')

#Recieve Data from Sensors with UART
 received_data = ser.read() #read serial port
 data_left = ser.inWaiting() #check for remaining byte
 received_data += ser.read(data_left)
 Temperature = received_data[:5]
 Light_Sensor = received_data[6:]

 payload = '{"deviceID":"'+ '2' +'" ,"device location": "'+"The Alameda & Race" + '", "timestamp": "' + current_time + '","temperature": ' + Temperature[:5] + ',"Light Sensor": '+ Light_Sensor[:3] + ' }'
 print payload #print payload for reference

#Actual Payload being transmitted
 myMQTTClient.publish("rpi2/data", payload, 0) #publish thepayload
 db_temp = {
 "deviceID":'Temperature sensor 2',
 "device location":'First & Santa clara',
 "device type":"SJ one",
 "timestamp":current_time ,
 "value": Temperature
 }
 json_data = json.dumps(db_temp)
 temp.insert_one(db_temp)
 db_light = {
 "deviceID":'Light sensor 1',
 "device location":'First & Santa clara',
 "device type":"SJ one",
 "timestamp":current_time ,
 "value": Light_Sensor
 }
 json_data = json.dumps(db_light)
 light.insert_one(db_light)
 time.sleep(1000)
