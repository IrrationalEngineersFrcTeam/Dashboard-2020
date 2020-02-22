import webbrowser
import logging
from networktables import NetworkTables


url = 'index.html'
chrome_path = 'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe %s'

logging.basicConfig(level=logging.DEBUG)


NetworkTables.initialize(server='10.62.39.2')

table = NetworkTables.getTable("limelight")
table.putNumber('stream', 2)



webbrowser.get(chrome_path).open(url)





