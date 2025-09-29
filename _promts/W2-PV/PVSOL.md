
## PV*SOL, PV*SOL premium — architektura, porównanie i scalony proces budowy projektu

### 1) Architektura narzędzia (warstwy)

- Interfejs 2D/3D: definicja geometrii dachów i terenu, przeszkód, stref bezpieczeństwa; układ poziomy lub pionowy, rzędy na dachu płaskim, balasty.
- Biblioteki komponentów: moduły, falowniki (MPPT, zakresy napięć i prądów), magazyny energii, optymalizatory, systemy montażowe.
- Silnik irradiancji i zacienienia: siatka czasowo-przestrzenna, horyzont terenowy, wzajemne zacienianie; korekty kąta padania, model temperatury ogniw.
- Silnik elektryczny: obliczenia napięcia i prądu stringów, bilans MPPT, straty kablowe (DC/AC), krzywe sprawności falowników, sterowanie mocą czynną i bierną, clipping.
- Warstwa symulacji energetycznej: PR, produkcja specyficzna, rozkład strat (soiling, mismatch, zacienienie, temperatura, okablowanie, konwersja AC).
- Raportowanie i BOM: PDF z założeniami, wynikami, wykresami, schematami i pełnym zestawieniem materiałów.

### 2) PV*SOL vs PV*SOL premium — porównanie funkcjonalne

| Obszar                 | PV*SOL           | PV*SOL premium                                                                        |
| ---------------------- | ---------------- | ------------------------------------------------------------------------------------- |
| Model 3D i zacienienie | Podstawowe 3D/2D | Zaawansowane 3D z siatką zacienienia, horyzontem i dokładnym cieniowaniem obiektów |
| Wariantowanie          | Podstawowe       | Rozszerzone warianty, wygodne porównywanie i kopiowanie projektów                   |
| Biblioteki             | Standardowe      | Poszerzone bazy oraz częstsze aktualizacje                                           |
| Raporty i BOM          | Standard         | Rozszerzone raporty (więcej wykresów, detali elektrycznych) oraz pełniejszy BOM    |
| Integracje i eksport   | Ograniczone      | Szersze formaty importu i eksportu, lepsza praca na warstwach                         |
| Użycie dydaktyczne    | Wystarczające   | Preferowane do zadań wymagających dokładnej analizy cieni i napięć               |

Uwaga: na zajęciach preferujemy edycję premium, gdy kluczowe są cienie, bilans MPPT, szczegółowe raporty i przygotowanie do audytu.

### 3) Modele obliczeniowe — na co uważać

- Zacienienie: gęstość siatki i krok czasowy silnie wpływają na dokładność strat; przy przeszkodach stosuj siatkę średnią lub wysoką.
- Temperatura ogniw: model NOCT lub prosty model termiczny powierzchni — krytyczny dla napięć i sprawności; poprawnie ustaw temperaturę minimalną i maksymalną.
- Falowniki: zakres napięcia MPP, napięcia startu i wyłączenia, maksymalne napięcie DC; krzywe sprawności przy częściowym obciążeniu; limity prądowe wejść i MPPT.
- Magazyny energii: sprawność cyklu, strategia ładowania i rozładowania, ograniczenia mocy (jeśli stosowane).

### 4) Scalony proces budowy projektu w PV*SOL lub PV*SOL premium (12 kroków)

1. Utwórz projekt i ustaw lokalizację: wybierz meteodane (rok reprezentatywny), strefę czasową oraz temperatury minimalne i maksymalne.
2. Zbuduj geometrię 2D/3D: dachy, kąty, azymut, strefy od krawędzi; zaimportuj plan lub plik DXF, jeśli jest dostępny.
3. Zamodeluj przeszkody i horyzont: kominy, attyki, drzewa; ustaw siatkę zacienienia adekwatną do złożoności sceny.
4. Wybierz moduł: moc, wymiary, współczynniki temperaturowe; potwierdź parametry z kartą katalogową producenta.
5. Rozmieść pola modułów: zachowaj odstępy i korytarze; sprawdź odległości przeciw-zacieniowe na dachu płaskim.
6. Dobierz falownik: moc AC, liczba MPPT; wstępnie określ docelowe DC/AC ratio (często 1.1–1.3, w zależności od klimatu i orientacji).
7. Zaprojektuj stringi: liczba modułów w łańcuchu; sprawdź, czy napięcie łańcucha zimą nie przekracza maksymalnego napięcia DC falownika, czy napięcie pracy mieści się w zakresie MPPT w całym zakresie temperatur oraz czy prądy wejściowe i bilans MPPT są poprawne.
8. Okablowanie i spadki napięć: długości i przekroje DC oraz AC; utrzymuj spadki w granicach zaleceń (typowo poniżej 1–2% DC i 1–3% AC).
9. Ustal straty dodatkowe: soiling (sezonowość), mismatch, kąt padania, zabrudzenia; udokumentuj wszystkie założenia w projekcie.
10. Uruchom symulację: oceń PR, produkcję specyficzną, krzywą mocy (clipping) oraz wkład poszczególnych strat.
11. Iteruj warianty: porównaj co najmniej dwa warianty — inny falownik, inne DC/AC, inne rozmieszczenie; porównaj wskaźniki i wykresy.
12. Raport i BOM: wygeneruj PDF; dołącz założenia, schematy, listę materiałów; przygotuj krótkie wnioski i ewentualne ograniczenia.

### 5) Zintegrowana checklista jakości (QA)

- Meteo i temperatury: lokalizacja poprawna, temperatury minimalne zgodne z danymi klimatycznymi.
- Geometria: odległości od krawędzi i przeszkód zachowane, korytarze serwisowe przewidziane.
- Zacienienie: gęstość siatki adekwatna, uwzględniono horyzont i sezonowość.
- Elektryka: napięcie jałowe łańcucha zimą poniżej maksimum DC; napięcie pracy mieści się w zakresie MPPT; prądy wejściowe nieprzekroczone.
- DC/AC: dobrane i uzasadnione; analiza clippingu wykonana.
- Straty: spadki napięć w normie; założenia soiling i mismatch udokumentowane.
- Raport: pełny i spójny (założenia, wykresy, BOM, schemat), jednolite jednostki i legendy.

### 6) Najczęstsze błędy i szybkie remedia

- Zbyt wysokie napięcie łańcucha zimą: zmniejsz liczbę modułów w stringu lub wybierz falownik o wyższym dopuszczalnym napięciu DC.
- Poza zakresem MPPT latem: zwiększ liczbę modułów w stringu lub zmień model falownika.
- Nadmierny clipping: obniż DC/AC ratio albo wybierz falownik o większej mocy AC.
- Asymetria MPPT: przeorganizuj stringi, aby odpowiadały obszarom o podobnym nasłonecznieniu.
- Duże spadki napięć: zwiększ przekroje kabli lub skróć trasy przewodów.

### 7) Mini-case do ćwiczeń

- Wejście: dach 35 stopni, azymut minus 20 stopni, moduł 400 W, cel 10–12 kWp.
- Zadanie: zaprojektuj dwa warianty różniące się DC/AC (1.15 vs 1.30), porównaj PR i udział clippingu; wybierz wariant z lepszym bilansem strat.
