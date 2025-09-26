---
title: "Rola i typy programów w energetyce odnawialnej"
---

:::info 🔧 Rola i typy programów w energetyce odnawialnej

## 🔄 Przepływ pracy w projektach OZE

- 📋 **Seria etapów** wymagających różnych narzędzi
- 🔗 **Integracja** między systemami i danymi
- 🎯 **Optymalizacja** całego procesu

:::

:::tip 📊 Zbieranie i akwizycja danych

## 📡 Źródła danych

- 🌤️ **Stacje meteo** (irradiancja, temperatura, wiatr)
- 🖥️ **SCADA** - systemy nadzoru
- 📱 **Smart metery** - inteligentne liczniki
- 🛰️ **Bazy satelitarne** - dane z satelitów

## 🔗 Narzędzia komunikacji

- 📡 **Modbus TCP/RTU, DNP3** - protokoły przemysłowe
- 🌐 **IoT** (LoRaWAN, NB-IoT) - sieci IoT
- 🔧 **Edge gateways** - bramy brzegowe

:::

:::note 🔄 Przetwarzanie i walidacja danych

## 🧹 Procesy oczyszczania

- 🗑️ **Usuwanie wartości odstających**
- 📈 **Interpolacja braków**
- ✅ **Walidacja jakości danych**

## 💻 Narzędzia

- 🐍 **Python** (Pandas, NumPy)
- 🌊 **Apache Kafka** (streaming)
- ⚡ **Apache Spark** (big data)

:::

:::tip ⚡ Symulacja i analiza

## ☀️ Systemy fotowoltaiczne

- 🎯 **PV*SOL** (model jedno-/dwudiodowy, straty DC/AC)
- 📊 **PVsyst** - modelowanie strat i zacienienia
- 📈 **SAM (NREL)** - analiza techno-ekonomiczna

## 💨 Energia wiatrowa

- 🌪️ **WindPRO** (wake effects)
- 🗺️ **WAsP** (mapy wiatru)

## 🧮 Modelowanie systemów

- 📊 **MATLAB/Simulink** - modelowanie systemów

:::

:::warning 🎯 Optymalizacja systemów

## 🤖 Algorytmy optymalizacji

- 🧬 **Algorytmy genetyczne**
- 🐝 **PSO** (Particle Swarm Optimization)
- 📊 **Programowanie liniowe**
- 🧠 **Sieci neuronowe**

## 🔧 Narzędzia

- 📊 **MATLAB Optimization Toolbox**
- 🐍 **Python** (SciPy, CVXPY, scikit-learn)
- ⚙️ **Gurobi/CPLEX** - solvery optymalizacyjne

:::

:::info 📊 Wizualizacja i raportowanie

## 🎨 Narzędzia wizualizacji

- 📈 **Power BI, Grafana, Tableau** - platformy analityczne
- 🖥️ **Custom dashboards** (React/Angular + D3.js)
- 🥽 **3D i AR/VR**: Unity 3D, AR do informacji eksploatacyjnych

:::

:::note 🎯 Wspomaganie decyzji

## 💰 Analizy ekonomiczne

- 📊 **NPV, IRR, LCOE** - wskaźniki finansowe
- 🎲 **Monte Carlo** - analiza ryzyka
- 📈 **Sensitivity analysis** - analiza wrażliwości

## 🔧 Utrzymanie predykcyjne

- 📅 **Optymalizacja harmonogramów**
- 📦 **Zapasy części**
- 🔮 **Predykcyjne utrzymanie**

:::

:::tip 🏠 Studium przypadku - Dach 50 kWp

## 🎯 Założenia projektu

- 🏙️ **Zabudowa miejska** z częściowymi zacienieniami
- ⏰ **Profil odbioru** 8:00–18:00
- 💰 **Rozliczenie prosumenckie** net-billing

## 📊 Dane i narzędzia

- 📈 **Dane**: irradiancja TMY + pomiary lokalne, zdjęcia drona
- 🔧 **Narzędzia**: SketchUp (geometria), PV*SOL (symulacja), Python (analiza), Excel/Power BI (raport)

:::

:::danger 💡 Zadanie praktyczne

## ⚠️ Wskaż trzy ryzyka modelowania

**Przykłady ryzyk:**
- 🔧 Błędna charakterystyka modułu
- 🌤️ Niepewność zacienień sezonowych  
- 📉 Degradacja systemu

**✍️ Zadanie**: Jak je ograniczyć?

:::

<details>
<summary>🎓 Wykładowca: Wprowadzenie do przepływu pracy (Kliknij aby rozwinąć)</summary>

**Przepływ pracy w projektach OZE obejmuje szereg etapów i narzędzi.**

</details>

<details>
<summary>🎓 Wykładowca: Szczegóły akwizycji danych (Kliknij aby rozwinąć)</summary>

**Zbieranie i akwizycja danych**

- Źródła: stacje meteo (irradiancja, temperatura, wiatr), SCADA, smart metery, bazy satelitarne
- Narzędzia/komunikacja: Modbus TCP/RTU, DNP3; IoT (LoRaWAN, NB-IoT); edge gateways

</details>

<details>
<summary>🎓 Wykładowca: Przykład kodu Python (Kliknij aby rozwinąć)</summary>

**Przykład w Python/Pandas:**

```python
import pandas as pd
import numpy as np

# Usuwanie wartości odstających (3 sigma)
df = df[np.abs(df['irradiance'] - df['irradiance'].mean()) <= (3*df['irradiance'].std())]

# Interpolacja brakujących danych
df['temperature'] = df['temperature'].interpolate(method='linear')
```

</details>

<details>
<summary>🎓 Wykładowca: Przykład równania diody (Kliknij aby rozwinąć)</summary>

**Przykład (ideowy) równania diody:**

```matlab
Iph = 8.2; Io = 2.3e-8; Rs = 0.221; Rsh = 415; n = 1.3;
I = Iph - Io*(exp((V + I*Rs)/(n*Vt)) - 1) - (V + I*Rs)/Rsh;
```

</details>

<details>
<summary>🎓 Wykładowca: Szczegóły optymalizacji (Kliknij aby rozwinąć)</summary>

**Optymalizacja systemów**

- Algorytmy: genetyczne, PSO, programowanie liniowe, sieci neuronowe
- Narzędzia: MATLAB Optimization Toolbox, Python (SciPy, CVXPY, scikit-learn), Gurobi/CPLEX

</details>

<details>
<summary>🎓 Wykładowca: Szczegóły wizualizacji (Kliknij aby rozwinąć)</summary>

**Wizualizacja i raportowanie**

- Power BI, Grafana, Tableau, custom dashboards (React/Angular + D3.js)
- 3D i AR/VR: Unity 3D, AR do informacji eksploatacyjnych

</details>

<details>
<summary>🎓 Wykładowca: Szczegóły wspomagania decyzji (Kliknij aby rozwinąć)</summary>

**Wspomaganie decyzji**

- Analizy: NPV, IRR, LCOE, Monte Carlo, sensitivity
- Utrzymanie: predykcyjne, optymalizacja harmonogramów, zapasy części

</details>

<details>
<summary>🎓 Wykładowca: Szczegóły studium przypadku (Kliknij aby rozwinąć)</summary>

**Studium przypadku (mini)**

Założenia: dach 50 kWp w zabudowie miejskiej, częściowe zacienienia od attyk i masztów, profil odbioru 8:00–18:00, rozliczenie prosumenckie net-billing.

- Dane: irradiancja TMY + pomiary lokalne temperatury, zdjęcia drona.
- Narzędzia: SketchUp (geometria), PV*SOL (symulacja i optymalizacja łańcuchów), Python (analiza profilu odbioru), Excel/Power BI (raport ekonomiczny).
- Decyzje: konfiguracja stringów, dobór falownika z MPPT, ocena autokonsumpcji vs. magazyn energii.

Zadanie: wskaż trzy ryzyka modelowania i jak je ograniczyć (np. błędna charakterystyka modułu, niepewność zacienień sezonowych, degradacja).

</details>

<details>
<summary>🎓 Wykładowca: Instrukcje zadania (Kliknij aby rozwinąć)</summary>

**Zadanie: wskaż trzy ryzyka modelowania i jak je ograniczyć (np. błędna charakterystyka modułu, niepewność zacienień sezonowych, degradacja).**

</details>