---
sidebar_position: 1
title: Systemy fotowoltaiczne
---

# Systemy fotowoltaiczne

## Najważniejsze informacje

- Konwersja promieniowania słonecznego na energię elektryczną w modułach PV
- W Polsce optymalny kąt nachylenia 25–40° i azymut blisko południa
- Unikaj zacienień; przy złożonych dachach rozważ optymalizatory/mikroinwertery
- Typowy współczynnik przewymiarowania DC/AC: 1.1–1.3 (kontroluj clipping)
- Współczynnik wydajności PR: 75–90% zależnie od jakości i warunków

## Minimalny workflow projektowy

1. Dane meteo (PVGIS/Meteonorm) i dobór kąta oraz azymutu
2. Dobór mocy DC i inwertera, konfiguracja stringów i MPPT
3. Dobór przekrojów przewodów i zabezpieczeń DC/AC, SPD i uziemienia
4. Model zacienień i estymacja strat (PR)
5. Symulacja produkcji i analiza ekonomiczna

## Oprogramowanie

- PV*SOL — modelowanie 3D, zacienienia, raporty
- PVsyst — szczegółowe modelowanie i analiza strat
- Sunny Design — szybkie wstępne wymiarowanie

## Materiały i literatura

import LiteratureList from '@site/src/components/LiteratureList';

<LiteratureList topic="software" title="Podręczniki oprogramowania" />

## Powiązane materiały

- [Wykład 2: Systemy fotowoltaiczne — podstawy projektowania](/docs/wyklady/wyklad-02-pv-podstawy)

## Laboratoria i projekty

- [Laboratorium/Projekt — Systemy fotowoltaiczne](/docs/projekty/photovoltaic%20systems)
