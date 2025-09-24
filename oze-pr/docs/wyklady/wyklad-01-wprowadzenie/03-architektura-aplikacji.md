---
title: "Architektura aplikacji w systemach OZE"
---

Współczesne aplikacje OZE opierają się na wielowarstwowej architekturze zapewniającej skalowalność, bezpieczeństwo i efektywność.

## 2.1 Warstwa prezentacji (Front-end)
- Aplikacje webowe (React, Angular, Vue.js)
- Aplikacje mobilne (iOS/Android, React Native, Flutter)
- Aplikacje desktopowe (Qt, WPF)
- Cechy: intuicyjne dashboardy (yield, PR, dostępność), wizualizacja danych w czasie rzeczywistym, alerty/raporty, responsywność

## 2.2 Warstwa middleware/API Gateway
- API RESTful
- Uwierzytelnianie i autoryzacja (JWT, OAuth 2.0)
- Load balancing, rate limiting, cache

## 2.3 Warstwa usług (Back-end)
- Silniki symulacyjne: modele matematyczne, prognozy produkcji, optymalizacja
- Przetwarzanie danych: ETL, strumieniowanie, detekcja anomalii ML
- Języki: Python (NumPy, Pandas, SciPy; Django/Flask), MATLAB/Simulink, Julia, C++

## 2.4 Warstwa baz danych
- Bazy czasowe: InfluxDB, TimescaleDB, Prometheus
- Bazy relacyjne: PostgreSQL, MySQL
- Bazy dokumentowe i wyszukiwarki: MongoDB, Elasticsearch

## 2.5 Warstwa infrastruktury
- Chmura: AWS/Azure/GCP
- Orkiestracja/konteneryzacja: Kubernetes, Docker
- Edge computing: przetwarzanie lokalne, redukcja opóźnień, praca offline
- IoT i akwizycja: Modbus, DNP3, IEC 61850; SCADA; smart sensors

## Przepływ danych – od czujnika do wykresu (przykład)

1) Czujnik irradiancji → gateway edge (filtracja medianowa, uśrednianie minutowe).
2) Strumień do brokera (Kafka/MQTT) → walidacja, wzbogacanie metadanymi.
3) ETL do bazy czasowej (InfluxDB/TimescaleDB) + archiwizacja w obiekcie (S3).
4) Backend wystawia API (agregacje, KPI PR/yield) → Frontend wizualizuje.

## Dobre praktyki architektoniczne (na projektach OZE)

- separacja odpowiedzialności i kontrakty API (OpenAPI),
- idempotentne przetwarzanie strumieni (obsługa duplikatów/lagów),
- strategia braków danych (imputacja vs. oznaczanie luk),
- monitoring i alerty (Prometheus + Grafana), SLO dla opóźnień i dostępności.

## Pytania kontrolne

1) Dlaczego bazy czasowe są lepsze do danych pomiarowych niż klasyczny MySQL?
2) Jak ograniczyć koszty transferu chmurowego dla zdalnej farmy PV?
3) Co musi wiedzieć frontend, aby poprawnie prezentować niepewność danych?


