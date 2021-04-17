//#include <LiquidCrystal.h>
// #include <dht_nonblocking.h>
#include <DHT.h>

// DHT11
#define DHTPIN11 3
#define DHTTYPE11 DHT11
DHT dht11(DHTPIN11, DHTTYPE11);

const int ledPin =  13;  

void setup()
{
  Serial.begin(9600);
  dht11.begin();

  // initialize the LED pin as an output:
  pinMode(ledPin, OUTPUT);
}

void loop()
{
  // Wait a few seconds between measurements.
  delay(2000);

  float tempDHT11 = dht11.readTemperature();
  float humDHT11 = dht11.readHumidity();

  // Check if readings have failed
  if (isnan(tempDHT11))
  {
    Serial.println("Failed to read from DHT 11 sensor!");
    return;
  }

  if ( humDHT11 < 55 ) {
    digitalWrite(ledPin, HIGH);
    Serial.println(humDHT11);

  } else {
    digitalWrite(ledPin, LOW);
    Serial.println(humDHT11);
  }

  // Serial.print("DHT11 Temperature: ");
  // Serial.print(tempDHT11);
  // Serial.print(" \xC2\xB0");
  // Serial.print("C ");
  // Serial.print(" | ");
  // Serial.print("DHT11 Humidity: ");
  // Serial.print(humDHT11);
  // Serial.println(" %");

}
