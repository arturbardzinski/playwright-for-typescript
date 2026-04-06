# 09. Praca z API i JSON

W automatyzacji testow API to codziennosc: wysylasz request i sprawdzasz odpowiedz.

## Co sprawdzac zawsze?

1. status HTTP (`200`, `201`, `400`, ...)
2. kluczowe pola w JSON
3. czy typy danych sa poprawne (`string`, `number`, ...)

## Przyklad myslenia testowego

Masz odpowiedz:

```json
{ "status": "ok", "version": "1.2.0" }
```

Sprawdzasz:

- czy `status === "ok"`
- czy `version` jest tekstem

## Dlaczego typowanie pomaga?

Interfejsy wymuszaja, zebys od razu wiedzial, jakie pola sa oczekiwane.
Bez tego latwo przeoczyc blad w API i test przejdzie "przypadkiem".
