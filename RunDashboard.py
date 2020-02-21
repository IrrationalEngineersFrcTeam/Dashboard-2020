import webbrowser
import logging
import sys
from networktables import NetworkTables


url = 'index.html'
chrome_path = 'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe %s'

logging.basicConfig(level=logging.DEBUG)


NetworkTables.initialize()

NetworkTables.getTable("limelight").putNumber('stream', 2)

print(NetworkTables.getTable("SmartDashboard").getBoolean('targetFound', False))

webbrowser.get(chrome_path).open(url)

i=1

while(True):
	i+=1

	#print(NetworkTables.getTable("limelight").getNumber('tx', -2))





