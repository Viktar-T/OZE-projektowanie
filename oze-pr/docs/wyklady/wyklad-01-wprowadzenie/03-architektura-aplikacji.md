---
title: "Architektura aplikacji w systemach OZE"
---

:::info 🏗️ Architektura aplikacji w systemach OZE

## 🎯 Wielowarstwowa architektura

- 📈 **Skalowalność** - dostosowanie do rosnących potrzeb
- 🔒 **Bezpieczeństwo** - ochrona danych i systemów
- ⚡ **Efektywność** - optymalne wykorzystanie zasobów

:::

:::tip 🖥️ Warstwa prezentacji (Front-end)

## 💻 Typy aplikacji

- 🌐 **Aplikacje webowe** (React, Angular, Vue.js)
- 📱 **Aplikacje mobilne** (iOS/Android, React Native, Flutter)
- 🖥️ **Aplikacje desktopowe** (Qt, WPF)

## 🎨 Kluczowe cechy

- 📊 **Intuicyjne dashboardy** (yield, PR, dostępność)
- ⚡ **Wizualizacja danych** w czasie rzeczywistym
- 🚨 **Alerty i raporty**
- 📱 **Responsywność**

:::

:::note 🔗 Warstwa middleware/API Gateway

## ⚙️ Funkcjonalności

- 🌐 **API RESTful** - standardowa komunikacja
- 🔐 **Uwierzytelnianie i autoryzacja** (JWT, OAuth 2.0)
- ⚖️ **Load balancing** - rozkład obciążenia
- 🚦 **Rate limiting** - ograniczenie przepustowości
- 💾 **Cache** - buforowanie danych

:::

:::tip ⚙️ Warstwa usług (Back-end)

## 🧮 Silniki symulacyjne

- 📊 **Modele matematyczne**
- 📈 **Prognozy produkcji**
- 🎯 **Optymalizacja systemów**

## 🔄 Przetwarzanie danych

- 🔄 **ETL** - Extract, Transform, Load
- ⚡ **Strumieniowanie** - przetwarzanie w czasie rzeczywistym
- 🤖 **Detekcja anomalii ML** - uczenie maszynowe

## 💻 Języki programowania

- 🐍 **Python** (NumPy, Pandas, SciPy; Django/Flask)
- 📊 **MATLAB/Simulink**
- 🔧 **Julia, C++**

:::

:::info 🗄️ Warstwa baz danych

## 📊 Typy baz danych

- ⏰ **Bazy czasowe**: InfluxDB, TimescaleDB, Prometheus
- 🔗 **Bazy relacyjne**: PostgreSQL, MySQL
- 📄 **Bazy dokumentowe**: MongoDB, Elasticsearch

## 🌱 Zastosowania w OZE

- 📊 **Dane pomiarowe** (SCADA)
- 📈 **Dane historyczne**
- 🔍 **Wyszukiwanie i analiza**

:::

:::note ☁️ Warstwa infrastruktury

## 🌐 Chmura i konteneryzacja

- ☁️ **Chmura**: AWS/Azure/GCP
- 🐳 **Orkiestracja**: Kubernetes, Docker
- 🔧 **Edge computing**: przetwarzanie lokalne

## 🌐 IoT i akwizycja danych

- 📡 **Protokoły**: Modbus, DNP3, IEC 61850
- 🖥️ **SCADA** - systemy nadzoru
- 📊 **Smart sensors** - inteligentne czujniki

:::

:::tip 📊 Przepływ danych - od czujnika do wykresu

## 🔄 Przykład praktyczny

1. 📡 **Czujnik irradiancji** → gateway edge (filtracja medianowa, uśrednianie minutowe)
2. 🌊 **Strumień do brokera** (Kafka/MQTT) → walidacja, wzbogacanie metadanymi
3. 🔄 **ETL do bazy czasowej** (InfluxDB/TimescaleDB) + archiwizacja w obiekcie (S3)
4. 🔗 **Backend wystawia API** (agregacje, KPI PR/yield) → Frontend wizualizuje

:::

:::success ✅ Dobre praktyki architektoniczne

## 🎯 Kluczowe zasady

- 🔧 **Separacja odpowiedzialności** i kontrakty API (OpenAPI)
- 🔄 **Idempotentne przetwarzanie** strumieni (obsługa duplikatów/lagów)
- 📊 **Strategia braków danych** (imputacja vs. oznaczanie luk)
- 📈 **Monitoring i alerty** (Prometheus + Grafana), SLO dla opóźnień i dostępności

:::

:::danger ❓ Pytania kontrolne

## 🧠 Sprawdź swoją wiedzę

1. **🔍 Dlaczego bazy czasowe są lepsze do danych pomiarowych niż klasyczny MySQL?**
2. **💰 Jak ograniczyć koszty transferu chmurowego dla zdalnej farmy PV?**
3. **📊 Co musi wiedzieć frontend, aby poprawnie prezentować niepewność danych?**

:::

<details>
<summary>🎓 Wykładowca: Wprowadzenie do architektury (Kliknij aby rozwinąć)</summary>

**Współczesne aplikacje OZE opierają się na wielowarstwowej architekturze zapewniającej skalowalność, bezpieczeństwo i efektywność.**

</details>

<details>
<summary>🎓 Wykładowca: Szczegóły front-end (Kliknij aby rozwinąć)</summary>

**Warstwa prezentacji (Front-end)**

- Aplikacje webowe (React, Angular, Vue.js)
- Aplikacje mobilne (iOS/Android, React Native, Flutter)
- Aplikacje desktopowe (Qt, WPF)
- Cechy: intuicyjne dashboardy (yield, PR, dostępność), wizualizacja danych w czasie rzeczywistym, alerty/raporty, responsywność

</details>

<details>
<summary>🎓 Wykładowca: Szczegóły middleware (Kliknij aby rozwinąć)</summary>

**Warstwa middleware/API Gateway**

- API RESTful
- Uwierzytelnianie i autoryzacja (JWT, OAuth 2.0)
- Load balancing, rate limiting, cache

</details>

<details>
<summary>🎓 Wykładowca: Szczegóły back-end (Kliknij aby rozwinąć)</summary>

**Warstwa usług (Back-end)**

- Silniki symulacyjne: modele matematyczne, prognozy produkcji, optymalizacja
- Przetwarzanie danych: ETL, strumieniowanie, detekcja anomalii ML
- Języki: Python (NumPy, Pandas, SciPy; Django/Flask), MATLAB/Simulink, Julia, C++

</details>

<details>
<summary>🎓 Wykładowca: Szczegóły baz danych (Kliknij aby rozwinąć)</summary>

**Warstwa baz danych**

- Bazy czasowe: InfluxDB, TimescaleDB, Prometheus
- Bazy relacyjne: PostgreSQL, MySQL
- Bazy dokumentowe i wyszukiwarki: MongoDB, Elasticsearch

</details>

<details>
<summary>🎓 Wykładowca: Szczegóły infrastruktury (Kliknij aby rozwinąć)</summary>

**Warstwa infrastruktury**

- Chmura: AWS/Azure/GCP
- Orkiestracja/konteneryzacja: Kubernetes, Docker
- Edge computing: przetwarzanie lokalne, redukcja opóźnień, praca offline
- IoT i akwizycja: Modbus, DNP3, IEC 61850; SCADA; smart sensors

</details>

<details>
<summary>🎓 Wykładowca: Szczegóły przepływu danych (Kliknij aby rozwinąć)</summary>

**Przepływ danych – od czujnika do wykresu (przykład)**

1) Czujnik irradiancji → gateway edge (filtracja medianowa, uśrednianie minutowe).
2) Strumień do brokera (Kafka/MQTT) → walidacja, wzbogacanie metadanymi.
3) ETL do bazy czasowej (InfluxDB/TimescaleDB) + archiwizacja w obiekcie (S3).
4) Backend wystawia API (agregacje, KPI PR/yield) → Frontend wizualizuje.

</details>

<details>
<summary>🎓 Wykładowca: Szczegóły dobrych praktyk (Kliknij aby rozwinąć)</summary>

**Dobre praktyki architektoniczne (na projektach OZE)**

- separacja odpowiedzialności i kontrakty API (OpenAPI),
- idempotentne przetwarzanie strumieni (obsługa duplikatów/lagów),
- strategia braków danych (imputacja vs. oznaczanie luk),
- monitoring i alerty (Prometheus + Grafana), SLO dla opóźnień i dostępności.

</details>

<details>
<summary>🎓 Wykładowca: Pytania kontrolne (Kliknij aby rozwinąć)</summary>

**Pytania kontrolne**

1) Dlaczego bazy czasowe są lepsze do danych pomiarowych niż klasyczny MySQL?
2) Jak ograniczyć koszty transferu chmurowego dla zdalnej farmy PV?
3) Co musi wiedzieć frontend, aby poprawnie prezentować niepewność danych?

</details>