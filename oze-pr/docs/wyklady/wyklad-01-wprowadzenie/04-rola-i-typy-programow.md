---
title: "Rola i typy programów w energetyce odnawialnej"
---

Przepływ pracy w projektach OZE obejmuje szereg etapów i narzędzi.

## 3.1 Zbieranie i akwizycja danych
- Źródła: stacje meteo (irradiancja, temperatura, wiatr), SCADA, smart metery, bazy satelitarne
- Narzędzia/komunikacja: Modbus TCP/RTU, DNP3; IoT (LoRaWAN, NB-IoT); edge gateways

## 3.2 Przetwarzanie i walidacja danych
- Oczyszczanie, usuwanie wartości odstających, interpolacja braków
- Narzędzia: Python (Pandas, NumPy), Apache Kafka (streaming), Apache Spark (big data)

Przykład w Python/Pandas:

```python
import pandas as pd
import numpy as np

# Usuwanie wartości odstających (3 sigma)
df = df[np.abs(df['irradiance'] - df['irradiance'].mean()) <= (3*df['irradiance'].std())]

# Interpolacja brakujących danych
df['temperature'] = df['temperature'].interpolate(method='linear')
```

## 3.3 Symulacja i analiza
- PV: PV*SOL (model jedno-/dwudiodowy, straty DC/AC), PVsyst, SAM (NREL)
- Wiatr: WindPRO (wake effects), WAsP (mapy wiatru)
- MATLAB/Simulink – modelowanie systemów

Przykład (ideowy) równania diody:

```matlab
Iph = 8.2; Io = 2.3e-8; Rs = 0.221; Rsh = 415; n = 1.3;
I = Iph - Io*(exp((V + I*Rs)/(n*Vt)) - 1) - (V + I*Rs)/Rsh;
```

## 3.4 Optymalizacja systemów
- Algorytmy: genetyczne, PSO, programowanie liniowe, sieci neuronowe
- Narzędzia: MATLAB Optimization Toolbox, Python (SciPy, CVXPY, scikit-learn), Gurobi/CPLEX

## 3.5 Wizualizacja i raportowanie
- Power BI, Grafana, Tableau, custom dashboards (React/Angular + D3.js)
- 3D i AR/VR: Unity 3D, AR do informacji eksploatacyjnych

## 3.6 Wspomaganie decyzji
- Analizy: NPV, IRR, LCOE, Monte Carlo, sensitivity
- Utrzymanie: predykcyjne, optymalizacja harmonogramów, zapasy części

## Studium przypadku (mini)

Założenia: dach 50 kWp w zabudowie miejskiej, częściowe zacienienia od attyk i masztów, profil odbioru 8:00–18:00, rozliczenie prosumenckie net-billing.

- Dane: irradiancja TMY + pomiary lokalne temperatury, zdjęcia drona.
- Narzędzia: SketchUp (geometria), PV*SOL (symulacja i optymalizacja łańcuchów), Python (analiza profilu odbioru), Excel/Power BI (raport ekonomiczny).
- Decyzje: konfiguracja stringów, dobór falownika z MPPT, ocena autokonsumpcji vs. magazyn energii.

Zadanie: wskaż trzy ryzyka modelowania i jak je ograniczyć (np. błędna charakterystyka modułu, niepewność zacienień sezonowych, degradacja).


