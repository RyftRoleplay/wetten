# Bijdragen

Bedankt dat je wilt bijdragen aan de Ryft Wettenbundel. Open bij voorkeur eerst een issue voor inhoudelijke wijzigingen, zodat vooraf duidelijk is of de wijziging gewenst is en waar deze thuishoort.

## Werkwijze

1. Controleer of er al een issue of pull request bestaat voor dezelfde wijziging.
2. Maak een aparte branch voor je wijziging. Werk niet direct op `main`.
3. Houd wijzigingen gericht: combineer geen inhoudelijke wijziging met grote opmaak- of structuurwijzigingen.
4. Voeg waar mogelijk een bron of verwijzing toe bij nieuwe of aangepaste wetgeving.
5. Test lokaal voordat je een pull request opent.

## Lokaal testen

Installeer de dependencies:

```sh
python -m pip install -r requirements.txt
```

Start een lokale preview:

```sh
mkdocs serve
```

Controleer voor een pull request of de documentatie zonder waarschuwingen bouwt:

```sh
mkdocs build --strict
```

## Markdown en opmaak

Voor consistente Markdown-opmaak gebruiken we Prettier, bijvoorbeeld via de Visual Studio Code extension [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode).

Gebruik bestandsnamen in kleine letters met koppeltekens, bijvoorbeeld `nieuwe-wet.md`. Plaats afbeeldingen bij voorkeur in een `img`-map binnen de relevante documentatiemap.

## Headings

Gebruik deze heading-structuur:

| Onderdeel | Heading |
| --- | --- |
| Naam wet | `#` |
| Boek | `##` |
| Titel, hoofdstuk, afdeling | `###` |
| Bijlage | `###`, met de titel cursief |
| Artikel | `####` |

Valt een onderdeel niet precies binnen deze structuur, sluit dan zo goed mogelijk aan bij de bestaande documenten.

## Navigatie

Voeg nieuwe pagina's ook toe aan `mkdocs.yml` als ze via de navigatie bereikbaar moeten zijn. Houd de volgorde logisch binnen de bestaande categorieën.
