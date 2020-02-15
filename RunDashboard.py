import webbrowser
from networktables import NetworkTables


url = 'index.html'
chrome_path = 'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe %s'

NetworkTables.initialize(server='roborio-XXX-frc.local')
#NetworkTables.initialize()

NetworkTables.getTable("limelight").putNumber('stream', 2)

print(NetworkTables.getTable("limelight").getNumber('stream', -1))

webbrowser.get(chrome_path).open(url)




