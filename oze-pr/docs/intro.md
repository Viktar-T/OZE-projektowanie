---
sidebar_position: 1
---

# Wprowadzenie

Poznaj **Docusaurus w mniej niż 5 minut**.

## Pierwsze kroki

Zacznij od **utworzenia nowej strony**.

Albo **wypróbuj Docusaurusa od razu** poprzez **[docusaurus.new](https://docusaurus.new)**.

### Wymagania

- [Node.js](https://nodejs.org/en/download/) version 18.0 or above:
  - When installing Node.js, you are recommended to check all checkboxes related to dependencies.

## Wygeneruj nową stronę

Wygeneruj nową stronę Docusaurus, korzystając z **szablonu classic**.

Szablon classic zostanie automatycznie dodany do projektu po uruchomieniu polecenia:

```bash
npm init docusaurus@latest my-website classic
```

Możesz wpisać to polecenie w Command Prompt, Powershell, Terminalu lub innym zintegrowanym terminalu edytora.

Polecenie zainstaluje także wszystkie niezbędne zależności wymagane do uruchomienia Docusaurusa.

## Uruchom swoją stronę

Uruchom serwer deweloperski:

```bash
cd my-website
npm run start
```

Polecenie `cd` zmienia katalog roboczy. Aby pracować z nowo utworzoną stroną Docusaurus, przejdź do jej katalogu w terminalu.

Polecenie `npm run start` buduje stronę lokalnie i uruchamia serwer deweloperski pod adresem http://localhost:3000/.

Otwórz `docs/intro.md` (tę stronę) i edytuj kilka linii: strona **przeładuje się automatycznie** i wyświetli zmiany.
