## Sunny Design — architektura, integracje i scalony proces budowy projektu

### 1) Architektura narzędzia (warstwy)

- **Interfejs webowy**: kreatory projektów (dach płaski/skośny/grunt), proste modelowanie powierzchni, układy montażowe i orientacje.
- **Biblioteka komponentów**: moduły PV, falowniki (szczególnie SMA), akcesoria; reguły doboru łańcuchów i weryfikatory zakresów.
- **Silnik wymiarowania DC/AC**: kontrola napięć (Voc, Vmpp, Vstart/Vstop), prądów i bilansu MPPT, wyliczanie DC/AC ratio i obciążenia inwerterów.
- **Warstwa środowiskowa**: dane nasłonecznienia/temperatury dla lokalizacji, uproszczone modele strat (kable, soiling, orientacja).
- **Raportowanie i warianty**: generowanie raportów PDF z podsumowaniem wyników, konfiguracją łańcuchów i listą komponentów; szybkie kopiowanie wariantów.

### 2) Sunny Design (Web) — możliwości i ograniczenia (dla praktyka)

| Obszar              | Co potrafi Sunny Design                                       | Uwaga dla projektanta                          |
| ------------------- | ------------------------------------------------------------- | ---------------------------------------------- |
| Dobór łańcuchów | Automatyczne i ręczne, walidacja zakresów napięć/prądów | Sprawdź Tmin/Tmax i różne konfiguracje MPPT |
| Model 3D            | Uproszczony (bez pełnej siatki zacienienia 3D)               | Dla złożonych cieni rozważ PV*SOL premium   |
| Meteodane           | Wbudowane profile irradiancji i temperatur                    | Weryfikuj z PVGIS dla sanity-check             |
| Raporty             | Czytelne PDF-y ofertowo-techniczne                            | Dobrze na presales/koncepty                    |
| Ekosystem           | Spójność z falownikami SMA                                 | Najszybszy workflow przy SMA                   |

### 3) Integracje i ekosystem

- Naturalna integracja logiki doboru z rodziną falowników **SMA** (wejścia MPPT, zakresy napięć, ograniczenia prądowe).
- Możliwość generowania materiałów dla klienta (raport/konfiguracja), eksport podstawowych danych projektu.

### 4) Scalony proces budowy projektu w Sunny Design (10 kroków)

1. **Utwórz projekt**: wybierz lokalizację, typ dachu (płaski/skośny) lub grunt, ustaw kierunek i kąt.
2. **Zdefiniuj powierzchnie i ograniczenia**: marginesy od krawędzi, strefy niedostępne, korytarze serwisowe.
3. **Wybierz moduły PV**: moc, wymiary; w razie potrzeby dopasuj siatkę ułożenia (pitch/tilt na dachu płaskim).
4. **Dobierz falownik(i)**: moc AC, liczba MPPT, zakresy napięć; rozważ docelowe **DC/AC ratio**.
5. **Automatyczny dobór łańcuchów**: pozwól narzędziu rozmieścić stringi; przejrzyj propozycję.
6. **Ręczna korekta stringów** (jeśli trzeba): wyrównaj długości i warunki pracy między wejściami MPPT.
7. **Ustaw straty podstawowe**: soiling, spadki napięć, orientacja; zanotuj przyjęte wartości.
8. **Analiza wyników**: produkcja roczna, PR (jeśli podane), obciążenie inwerterów, DC/AC ratio, ostrzeżenia walidatora.
9. **Warianty A/B**: np. jeden duży falownik vs dwa mniejsze; porównaj uzysk i wskaźniki.
10. **Raport**: wygeneruj PDF; sprawdź czytelność i kompletność (konfiguracja łańcuchów, komponenty, wyniki).

### 5) Checklista QA (wersja „lekka”)

- Lokalizacja i kąt/azymut zgodne z założeniami?
- Zakresy napięć/prądów dla każdego MPPT w porządku (zimą i latem)?
- DC/AC ratio uzasadnione?
- Założenia strat (soiling, spadki) zapisane i spójne między wariantami?
- Raport zawiera konfigurację łańcuchów i listę głównych komponentów?

### 6) Typowe błędy i szybkie remedia

- **Przekroczenie napięcia zimą** → zmniejsz moduły w stringu lub zmień falownik.
- **Nierówny bilans MPPT** → przełóż stringi między wejściami, by wyrównać obciążenia.
- **Za wysoki clipping** → obniż DC/AC lub podnieś moc AC falownika.
- **Zbyt optymistyczne straty** → zwiększ soiling/spadki do wartości konserwatywnych.

### 7) Mini‑case (warianty SMA)

- **Wejście**: dach płaski ~80 kWp, moduł 400 W.
- **Zadanie**: wariant A — 2× falownik ~40 kW; wariant B — 3× ~27 kW. Porównaj obciążenie MPPT, rozkład stringów i DC/AC; wybierz wariant lepszy pod kątem serwisu i strat.
