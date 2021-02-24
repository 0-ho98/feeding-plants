#include <SoftwareSerial.h>
#define DEBUG true

String income_wifi = "";

SoftwareSerial esp01(2,3); 

 
 
void setup() {
  Serial.begin(9600);
  esp01.begin(9600); // your esp's baud rate might be different
  sendData("AT+RST\r\n",2000,DEBUG); // reset module
  sendData("AT+CWMODE=2\r\n",1000,DEBUG); // configure as access point (working mode: AP+STA)
  sendData("AT+CWSAP=\"ESP-01\",\"1234test\",11,0\r\n",1000,DEBUG); // join the access point
  sendData("AT+CIFSR\r\n",1000,DEBUG); // get ip address
  sendData("AT+CIPSERVER=1,80\r\n",1000,DEBUG); // turn on server on port 80
}

 



void loop() {

  if (esp01.available()) { 
    if (esp01.find("+LSPD,")) {
      income_wifi = esp01.readStringUntil('\r');
      String wifi_temp = income_wifi.substring(income_wifi.indexOf("GET /")+5, income_wifi.indexOf("HTTP/1.1")-1);
      Serial.println(wifi_temp);
    }
  }
}

 

String sendData(String command, const int timeout, boolean debug) {

  String response = "";

  esp01.print(command); // send the read character to the esp01

  long int time = millis();

  while( (time+timeout) > millis()) {

    while(esp01.available()) {  // The esp has data so display its output to the serial window 

      char c = esp01.read(); // read the next character.
      response+=c;

    }

  }

  if(debug) Serial.print(response);

  return response;
}