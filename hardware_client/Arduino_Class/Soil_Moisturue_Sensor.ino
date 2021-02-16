int soil_pin = A0; //A0 핀으로 읽어오기

void setup() {
  Serial.begin(9600);
}

void loop() {
  int water = analogRead(soil_pin); //토양 수분값 읽어오기 (Analog 0~1023)
  // 0 ------ 400 --- 500 -------1000 --- 1023
  //   매우 습함      적정값         매우 건조

  Serial.println(water);
  delay(2000);
}
