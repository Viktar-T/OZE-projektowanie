---
sidebar_position: 3
title: "PV*SOL: architektura obliczeniowa i modelowanie falowników"
---

PV*SOL łączy intuicyjny interfejs z zaawansowanym silnikiem obliczeniowym.

## Model temperatury modułów
- Uwzględnia typ instalacji (wolnostojąca, BIPV, montaż dachowy), prędkość wiatru i wymianę ciepła przez promieniowanie oraz konwekcję.
- Równanie bilansu cieplnego rozwiązywane jest numerycznie; krok czasowy dostosowywany do warunków (dla skrajnych przypadków może być krótszy niż godzinowy).

## Model falownika
- Względna charakterystyka sprawności η_rel(P_DC) oraz szczegółowe krzywe pracy.
- MPPT: weryfikacja, czy napięcie MPP stringu mieści się w zakresie trackera w każdym kroku.
- Uwzględnienie poboru w trybie standby/nocnym oraz progu mocy startu.

## Baza danych komponentów
- Dziesiątki tysięcy modułów i falowników, tysiące systemów baterii oraz urządzenia towarzyszące (optymalizatory, EV). Dane aktualizowane przez producentów.

Efekt: realistyczne odwzorowanie pracy systemu PV w zmiennych warunkach, które stanowi podstawę wiarygodnych analiz energetycznych i ekonomicznych.


