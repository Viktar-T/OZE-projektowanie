---
sidebar_position: 1
title: Systemy fotowoltaiczne
---

# Systemy fotowoltaiczne

## Przegląd technologii

Systemy fotowoltaiczne (PV) konwertują energię słoneczną bezpośrednio na energię elektryczną za pomocą ogniw fotowoltaicznych.

## Podstawy technologii PV

### Ogniwa fotowoltaiczne
- **Krzem monokrystaliczny** - najwyższa sprawność (18-22%)
- **Krzem polikrystaliczny** - dobra sprawność (15-18%)
- **Krzem amorficzny** - niższa sprawność (6-10%)
- **Technologie cienkowarstwowe** - CIGS, CdTe

### Parametry modułów
- **STC (Standard Test Conditions)** - 1000 W/m², 25°C, AM 1.5
- **NOCT (Nominal Operating Cell Temperature)** - 800 W/m², 20°C, 1 m/s
- **Krzywe charakterystyczne I-V** - prąd, napięcie, moc
- **Współczynniki temperaturowe** - α (prąd), β (napięcie), γ (moc)

## Komponenty systemu PV

### Moduły fotowoltaiczne
- Konstrukcja modułu (szkło, EVA, ogniwa, folia tylna)
- Łączenie ogniw w moduły (szeregowe, równoległe)
- Parametry elektryczne (moc, napięcie, prąd)
- Gwarancje i degradacja

### Falowniki (inwertery)
- **Stringowe** - dla pojedynczych stringów
- **Mikroinwertery** - dla pojedynczych modułów
- **Centralne** - dla całych instalacji
- **Optymalizatory mocy** - MPPT na poziomie modułu

### Systemy montażowe
- **Konstrukcje dachowe** - skośne, płaskie
- **Konstrukcje naziemne** - tracking, fixed-tilt
- **Konstrukcje fasadowe** - BIPV
- **Materiały** - aluminium, stal nierdzewna

### Zabezpieczenia i monitoring
- **Zabezpieczenia DC** - bezpieczniki, wyłączniki
- **Zabezpieczenia AC** - wyłączniki różnicowoprądowe
- **Systemy monitoringu** - SCADA, portale internetowe
- **Ochrona odgromowa** - uziemienie, SPD

## Projektowanie instalacji PV

### Analiza zasobów słonecznych
- **Źródła danych** - PVGIS, Meteonorm, NASA
- **Promieniowanie globalne** - bezpośrednie, rozproszone, odbite
- **Kąty optymalne** - azymut, nachylenie
- **Albedo** - współczynnik odbicia powierzchni

### Wymiarowanie systemu
- **Dobór mocy DC/AC** - współczynnik przewymiarowania
- **Łączenie w stringi** - napięcie, prąd, moc
- **Spadki napięć** - przewody DC/AC
- **Analiza zacienień** - diagramy cieni, optymalizatory

### Symulacja produkcji energii
- **Modele matematyczne** - Sandia, PVsyst
- **Straty systemowe** - temperaturowe, zacienienia, brud
- **Współczynnik wydajności PR** - Performance Ratio
- **Profil produkcji** - miesięczny, roczny

## Oprogramowanie projektowe

### PV*SOL
- Projektowanie instalacji PV
- Symulacja produkcji energii
- Analiza ekonomiczna
- Dokumentacja projektowa

### PVsyst
- Zaawansowane modelowanie
- Analiza zacienień
- Optymalizacja parametrów
- Raporty techniczne

## Materiały i literatura

import LiteratureList from '@site/src/components/LiteratureList';

<LiteratureList topic="software" title="Podręczniki oprogramowania" />

## Powiązane wykłady

- [Wykład 2: Systemy fotowoltaiczne — podstawy projektowania](/docs/wyklady/wyklad-02-pv-podstawy)
- [Wykład 3: Oprogramowanie do projektowania systemów PV](/docs/wyklady/wyklad-03-oprogramowanie-pv)

## Laboratoria i projekty

- [Laboratorium - Systemy fotowoltaiczne](/docs/laboratoria/photovoltaic%20systems)
- [Projekt - Systemy fotowoltaiczne](/docs/projekty/photovoltaic%20systems)
