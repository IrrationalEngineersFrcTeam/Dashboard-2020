import webbrowser
from networktables import NetworkTables


url = 'index.html'
chrome_path = 'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe %s'

NetworkTables.initialize()
table = NetworkTables.getTable("limelight")

webbrowser.get(chrome_path).open(url)


table.putNumber('stream', 2)
