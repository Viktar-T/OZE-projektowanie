---
sidebar_position: 2
title: "Składniki programu - FrontEnd, Logika, Symulacje, DBs"
---

# Składniki programu komputerowego

## Typy programów

### Programy konsolowe
- Interfejs tekstowy
- Szybkie działanie
- Niskie wymagania systemowe
- Przykład: kalkulatory PV, narzędzia do analizy wiatru

### Aplikacje webowe
- Dostęp przez przeglądarkę
- Nie wymagają instalacji
- Współdzielenie projektów
- Przykład: SolarEdge Designer, Helioscope

### Aplikacje mobilne (Android/iOS)
- Dostępność w terenie
- Szybkie pomiary i kalkulacje
- Synchronizacja z systemami głównymi

## Architektura oprogramowania

### FrontEnd (Interfejs użytkownika)
- **GUI (Graphical User Interface)** - graficzny interfejs użytkownika
- **Wizualizacja 3D** - modele budynków i instalacji
- **Wykresy i raporty** - prezentacja wyników
- **Formularze** - wprowadzanie danych projektowych

### Logika biznesowa
- **Algorytmy obliczeniowe** - kalkulacje energetyczne
- **Reguły projektowe** - normy i standardy
- **Walidacja danych** - sprawdzanie poprawności wprowadzonych danych
- **Optymalizacja** - dobór najlepszych rozwiązań

### Moduły symulacyjne
- **Symulacja nasłonecznienia** - modelowanie promieniowania słonecznego
- **Symulacja wiatru** - analiza zasobów wietrznych
- **Symulacja pracy systemu** - modelowanie rocznej produkcji
- **Analiza zacienienia** - obliczanie strat od cieni

### Bazy danych

#### Typy baz danych w oprogramowaniu OZE
- **Baza komponentów** - moduły PV, falowniki, akumulatory
- **Baza klimatyczna** - dane meteorologiczne
- **Baza lokalizacji** - współrzędne geograficzne, strefy klimatyczne
- **Baza norm** - przepisy i standardy

#### Przykład: PV*SOL
- **Baza modułów PV** - ponad 20,000 modeli
- **Baza falowników** - parametry techniczne
- **Dane klimatyczne** - ponad 8,000 lokalizacji
- **Baza cenowa** - koszty komponentów i robocizny

## Integracja komponentów

### API (Application Programming Interface)
- Łączenie różnych systemów
- Automatyczny import/eksport danych
- Integracja z CAD/CAM

### Chmura obliczeniowa
- Przetwarzanie rozproszone
- Backup projektów
- Współpraca zespołowa
