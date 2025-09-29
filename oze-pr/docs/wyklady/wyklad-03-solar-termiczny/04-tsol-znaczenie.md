---
sidebar_position: 4
title: "T*SOL – znaczenie programu dla projektanta"
---

import { 
  SlideContainer, 
  Slide, 
  KeyPoints, 
  SupportingDetails, 
  InfoBox,
  WarningBox,
  SuccessBox,
  InstructorNotes,
  VisualSeparator 
} from '@site/src/components/SlideComponents';

<SlideContainer>

<Slide title="🎯 Dlaczego T*SOL?" type="info">

<KeyPoints title="🏢 Znaczenie w praktyce biurowej">

- 🎯 **Dedykacja do ST**: biblioteki kolektorów (parametry z certyfikacji), zasobników i osprzętu, gotowe schematy
- ⚡ **Produktywność**: szybka iteracja wariantów, spójne raporty „dla inwestora i banku"
- 🛡️ **Kontrola ryzyk**: ostrzeżenia dot. stagnacji, przegrzewów, strat cyrkulacji; wizualizacja profili temperatur

</KeyPoints>

<SupportingDetails title="💡 Kluczowe zalety">

- 📚 **Kompletność bibliotek** - parametry z certyfikacji Solar Keymark
- 🚀 **Szybkość iteracji** - minuty zamiast godzin
- 📊 **Profesjonalne raporty** - gotowe dla inwestorów i banków
- ⚠️ **Ostrzeżenia systemowe** - kontrola ryzyk projektowych

</SupportingDetails>

<InstructorNotes>
**Dlaczego T*SOL?**

**🎯 Dedykacja do systemów solarnych termicznych:**
- Specjalistyczne narzędzie stworzone wyłącznie dla ST
- Kompletne biblioteki komponentów z parametrami z certyfikacji
- Gotowe schematy hydrauliczne dla różnych zastosowań
- Optymalizacja pod kątem projektów komercyjnych

**⚡ Produktywność projektowa:**
- Szybka iteracja wariantów - minuty zamiast godzin
- Spójne raporty „dla inwestora i banku" - profesjonalna dokumentacja
- Automatyzacja powtarzalnych zadań projektowych
- Integracja z procesami biznesowymi

**🛡️ Kontrola ryzyk:**
- Ostrzeżenia dotyczące stagnacji, przegrzewów, strat cyrkulacji
- Wizualizacja profili temperatur i przepływów
- Walidacja parametrów w czasie rzeczywistym
- Minimalizacja błędów projektowych

**💡 Praktyczne wskazówki:**
Dlaczego T*SOL? To specjalistyczne narzędzie dla ST z kompletnością bibliotek i raportów. Minimalizuje czas iteracji i wspiera kontrolę ryzyk w projektach komercyjnych.
</InstructorNotes>

</Slide>

<VisualSeparator type="technical" />

<Slide title="🧰 Kluczowe moduły i funkcje" type="tip">

<KeyPoints title="🔧 Co daje T*SOL">

- 🗃️ **Baza komponentów**: kolektory, zasobniki (pojemność, straty, warstwowość), pompy
- 🔄 **Schematy hydrauliczne**: glikol, drain‑back, dwie wężownice, kombinowane
- 🌤️ **Meteo i profile**: Meteonorm, import CSV (godzinowe/dzienne)
- 🌳 **Zacienienie i układ pól**: odstępy rzędów, przeszkody, kąty/azymuty
- 💰 **Ekonomia**: koszty, ceny energii, LCOH, SPBT; porównania wariantowe
- 📊 **Raportowanie**: zestawienia energetyczne, wykresy, listy komponentów, podsumowania do wniosków

</KeyPoints>

<SupportingDetails title="🔄 Pełny cykl projektowy">

- 📥 **Dane wejściowe** - lokalizacja, meteo, profile, komponenty
- ⚙️ **Konfiguracja** - schematy, parametry, sterowanie
- 🧪 **Symulacja** - obliczenia roczne, analiza wyników
- 📋 **Raportowanie** - dokumentacja, warianty, rekomendacje

</SupportingDetails>

<InstructorNotes>
**Kluczowe moduły i funkcje:**

**🗃️ Baza komponentów:**
- Kolektory z parametrami z certyfikacji Solar Keymark
- Zasobniki (pojemność, straty, warstwowość)
- Pompy, zawory, wymienniki, akcesoria

**🔄 Schematy hydrauliczne:**
- Glikol + wymiennik - standardowy układ
- Drain‑back - układ bez glikolu
- Dwie wężownice - zaawansowane rozwiązania
- Kombinowane - hybrydowe układy

**🌤️ Meteo i profile:**
- Meteonorm - globalne bazy danych meteorologicznych
- Import CSV - własne profile zapotrzebowania
- Rozdzielczość godzinowa/dzienna

**🌳 Zacienienie i układ pól:**
- Odstępy rzędów - unikanie samocieniowania
- Przeszkody - kominy, attyki, drzewa
- Kąty/azymuty - optymalizacja ekspozycji

**💰 Ekonomia:**
- Koszty inwestycyjne i eksploatacyjne
- Ceny energii, inflacja
- LCOH, SPBT - metryki finansowe
- Porównania wariantowe

**📊 Raportowanie:**
- Zestawienia energetyczne
- Wykresy i wizualizacje
- Listy komponentów (BOM)
- Podsumowania dla wniosków

**💡 Praktyczne wskazówki:**
Moduły i funkcje pokrywają pełny cykl projektowy: dane wejściowe → konfiguracja → symulacja → raporty.
</InstructorNotes>

</Slide>

<VisualSeparator type="success" />

<Slide title="✅ Dobre praktyki użytkowe" type="success">

<KeyPoints title="📋 Z doświadczenia biurowego">

1. 📝 **Nazewnictwo projektów/wariantów**: `ST_DHW_[Miasto]_YYYYMM_V1A`
2. 🔄 **Jedna zmiana na wariant** (łatwiejsza interpretacja różnic)
3. 📊 **Profil z danych rzeczywistych**, gdy możliwe (import z liczników)
4. 🔍 **Sanity‑check uzysku**: kWh/m²·rok vs. benchmarki
5. 🌞 **Walidacja letnia**: brak stagnacji? rozważ heat‑dump/zmianę sterowania

</KeyPoints>

<SuccessBox title="💡 Korzyści standaryzacji">

- ⏰ **Skrócony czas** przeglądów i audytów
- 📋 **Łatwiejsza komunikacja** w zespole
- 🔍 **Szybsza identyfikacja** wariantów
- 📊 **Lepsza dokumentacja** projektowa

</SuccessBox>

<InstructorNotes>
**Dobre praktyki użytkowe:**

**📝 Nazewnictwo projektów/wariantów:**
- Konwencja: `ST_DHW_[Miasto]_YYYYMM_V1A`
- Przykład: `ST_DHW_Warszawa_202412_V1A`
- Korzyści: łatwa identyfikacja, porządek w plikach

**🔄 Jedna zmiana na wariant:**
- Zmieniaj tylko jeden parametr na wariant
- Łatwiejsza interpretacja różnic
- Szybsza identyfikacja wpływu zmian

**📊 Profil z danych rzeczywistych:**
- Import z liczników, gdy możliwe
- Weryfikacja sum rocznych
- Test szczytów P95/P99

**🔍 Sanity‑check uzysku:**
- Porównaj kWh/m²·rok z benchmarkami
- Dla Polski: 250-450 kWh/m²·rok (c.w.u.)
- Sprawdź spójność z literaturą

**🌞 Walidacja letnia:**
- Sprawdź ryzyko stagnacji
- Rozważ heat‑dump lub zmianę sterowania
- Test różnych harmonogramów

**💡 Praktyczne wskazówki:**
Standaryzacja nazewnictwa i procedur skraca czas przeglądów oraz ułatwia audyt projektu.
</InstructorNotes>

</Slide>

<VisualSeparator type="warning" />

<Slide title="🧪 Zaawansowane wskazówki" type="tip">

<KeyPoints title="🚀 Gdzie zyskasz najwięcej">

- 🔧 **Własny model kolektora**: parametry z Solar Keymark (η₀, a₁, a₂)
- 🧼 **Antylegionella**: test harmonogramów a wpływ na f_sol i OPEX
- 🔄 **Cyrkulacja**: osobny obieg i harmonogram – kontrola strat nocnych
- 🌞 **Sezonowy heat‑dump**: odbiornik techniczny lub basen
- 📊 **Analiza wrażliwości**: ±10–20% na profil, ceny, izolacje

</KeyPoints>

<WarningBox title="⚠️ Projekty wysokiego ryzyka">

- 🏢 **Obiekty niestabilne** - zmienne profile odbioru
- 🌡️ **Ekstremalne temperatury** - mikroklimaty
- 🔄 **Złożone sterowanie** - niestandardowe logiki
- 📊 **Wysokie wymagania** - precyzja wyników

</WarningBox>

<InstructorNotes>
**Zaawansowane wskazówki:**

**🔧 Własny model kolektora:**
- Parametry z Solar Keymark (η₀, a₁, a₂)
- Własne charakterystyki temperaturowe
- Weryfikacja z danymi producenta

**🧼 Antylegionella:**
- Test różnych harmonogramów (1×/tydz., 2×/tydz.)
- Wpływ na f_sol i OPEX
- Optymalizacja kosztów vs. bezpieczeństwo

**🔄 Cyrkulacja:**
- Osobny obieg z harmonogramem
- Kontrola strat nocnych
- Optymalizacja czasów pracy pomp

**🌞 Sezonowy heat‑dump:**
- Odbiornik techniczny lub basen
- Zabezpieczenie przed stagnacją
- Wykorzystanie nadwyżek letnich

**📊 Analiza wrażliwości:**
- ±10–20% na profil zapotrzebowania
- ±10–20% na ceny energii
- ±10–20% na parametry izolacji
- Identyfikacja krytycznych parametrów

**⚠️ Projekty wysokiego ryzyka:**
Zaawansowane wskazówki są kluczowe dla projektów o podwyższonym ryzyku (np. obiekty o niestabilnym profilu odbioru).
</InstructorNotes>

</Slide>

<VisualSeparator type="danger" />

<Slide title="⚠️ Najczęstsze ostrzeżenia i reakcje" type="warning">

<KeyPoints title="🚨 Szybkie remedia">

- 🔥 **„Ryzyko stagnacji"** → większy magazyn, zmiana ΔT, heat‑dump
- 🌡️ **„Zbyt wysokie temperatury w obiegu"** → przepływy, zawory mieszające, izolacje
- ⚙️ **„Taktowanie pomp"** → zwiększ histerezy, sprawdź lokalizację czujników

</KeyPoints>

<WarningBox title="🔍 Diagnoza problemów">

- 📊 **Analiza profili** - sprawdź temperatury i przepływy
- ⚙️ **Weryfikacja sterowania** - progi ΔT, lokalizacja czujników
- 🔄 **Test wariantów** - porównaj różne konfiguracje

</WarningBox>

<InstructorNotes>
**Najczęstsze ostrzeżenia i reakcje:**

**🔥 „Ryzyko stagnacji":**
- **Przyczyna**: Przewymiarowanie kolektorów, mały magazyn
- **Remedium**: Większy magazyn, zmiana ΔT, heat‑dump
- **Prewencja**: Analiza letnia, test różnych konfiguracji

**🌡️ „Zbyt wysokie temperatury w obiegu":**
- **Przyczyna**: Niewystarczające przepływy, brak zaworów mieszających
- **Remedium**: Zwiększ przepływy, dodaj zawory mieszające, popraw izolacje
- **Prewencja**: Weryfikacja hydrauliki, test skrajnych warunków

**⚙️ „Taktowanie pomp":**
- **Przyczyna**: Zbyt małe histerezy, zła lokalizacja czujników
- **Remedium**: Zwiększ histerezy, popraw lokalizację czujników
- **Prewencja**: Test sterowania, weryfikacja logiki

**🔍 Diagnoza problemów:**
- **Analiza profili** - sprawdź temperatury i przepływy w czasie
- **Weryfikacja sterowania** - progi ΔT, lokalizacja czujników
- **Test wariantów** - porównaj różne konfiguracje

**💡 Praktyczne wskazówki:**
Traktuj ostrzeżenia jako element QC. Zapisuj decyzje i skutki w wariantach A/B.
</InstructorNotes>

</Slide>

<VisualSeparator type="info" />

<Slide title="📎 Mini‑case (przykład biurowy)" type="info">

<KeyPoints title="🏨 Hotel – 80 pokoi, c.w.u.">

- ☀️ **60 m² płaskich kolektorów**, 2×1000 l zasobniki
- 📊 **Wyniki**: f_sol 45–55%, uzysk 18–24 MWh/rok, SPBT 6–9 lat
- ⚠️ **Ryzyko**: stagnacja latem przy obłożeniu &lt;30% → heat‑dump lub tryb basenowy

</KeyPoints>

<SupportingDetails title="💡 Kluczowe wnioski">

- 🏊 **Heat‑dump do basenu** - wykorzystanie nadwyżek letnich
- 🔄 **Tryb basenowy** - alternatywne odbiory ciepła
- 📊 **Optymalizacja sterowania** - harmonogramy sezonowe
- 💰 **Analiza ekonomiczna** - wpływ na SPBT i OPEX

</SupportingDetails>

<InstructorNotes>
**Mini‑case (przykład biurowy):**

**🏨 Hotel – 80 pokoi, c.w.u.:**
- **Lokalizacja**: Do wyboru (np. Warszawa, Kraków)
- **Kolektory**: 60 m² płaskich kolektorów
- **Magazyn**: 2×1000 l zasobniki
- **Profil**: Typowy hotel, sezonowość, weekendy

**📊 Wyniki symulacji:**
- **f_sol**: 45–55% (zależnie od sezonu)
- **Uzysk**: 18–24 MWh/rok
- **SPBT**: 6–9 lat (zależnie od ceny energii)
- **LCOH**: 0.15-0.25 PLN/kWh

**⚠️ Ryzyko stagnacji:**
- **Problem**: Stagnacja latem przy obłożeniu &lt;30%
- **Rozwiązanie**: Heat‑dump lub tryb basenowy
- **Korzyści**: Wykorzystanie nadwyżek, poprawa f_sol

**💡 Kluczowe wnioski:**
- **Heat‑dump do basenu** - wykorzystanie nadwyżek letnich
- **Tryb basenowy** - alternatywne odbiory ciepła
- **Optymalizacja sterowania** - harmonogramy sezonowe
- **Analiza ekonomiczna** - wpływ na SPBT i OPEX

**💡 Praktyczne wskazówki:**
Case ilustruje kompromis: komfort/higiena vs. efektywność i OPEX.
</InstructorNotes>

</Slide>

<VisualSeparator type="tip" />

<Slide title="❓ FAQ projektanta (skrót)" type="tip">

<KeyPoints title="🤔 Najczęstsze pytania">

- 🌤️ **Ile danych meteo?** – pełny rok godzinowy; dla mikroklimatów korekty
- 🔥 **Pompa ciepła jako źródło szczytowe?** – tak, jako wspomagające
- 📊 **Jak raportować do finansującego?** – wyniki bazowe + warianty + wrażliwość + lista założeń

</KeyPoints>

<SupportingDetails title="💡 Dodatkowe wskazówki">

- 📋 **Standaryzacja raportów** - spójne formaty i metryki
- 🔄 **Warianty A/B** - porównanie rozwiązań
- 📊 **Analiza wrażliwości** - identyfikacja ryzyk
- 📝 **Dokumentacja założeń** - źródła danych i parametry

</SupportingDetails>

<InstructorNotes>
**FAQ projektanta (skrót):**

**🌤️ Ile danych meteo potrzebuję?**
- **Odpowiedź**: Pełny rok godzinowy; dla mikroklimatów korekty ±5-10%
- **Źródła**: TMY, Meteonorm, lokalne stacje
- **Weryfikacja**: Porównaj z innymi źródłami

**🔥 Czy mogę modelować pompę ciepła jako źródło szczytowe?**
- **Odpowiedź**: Tak, jako źródło wspomagające
- **Uwagi**: Sprawdź kompatybilność z wersją T*SOL
- **Parametry**: Moc, COP, zakresy temperatur

**📊 Jak raportować do finansującego?**
- **Wyniki bazowe** - metryki energetyczne i ekonomiczne
- **Warianty** - porównanie rozwiązań
- **Wrażliwość** - analiza ryzyk (±20%)
- **Lista założeń** - źródła danych i parametry

**💡 Dodatkowe wskazówki:**
- **Standaryzacja raportów** - spójne formaty i metryki
- **Warianty A/B** - porównanie rozwiązań
- **Analiza wrażliwości** - identyfikacja ryzyk
- **Dokumentacja założeń** - źródła danych i parametry

**💡 Praktyczne wskazówki:**
FAQ pomaga ujednolicić komunikację z interesariuszami projektu.
</InstructorNotes>

</Slide>

</SlideContainer>


