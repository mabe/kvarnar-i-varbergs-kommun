# Kvarnar i Varbergs kommun

En webbplats som presenterar en historisk utredning om kvarnar i Varbergs kommun, genomförd 1971 och publicerad i Hallandsbygd 1974.

## Om projektet

Projektet tillgängliggör dokumentation om de kvarnar som funnits i Varbergs kommun, inklusive både väderkvarnar och vattenkvarnar. Materialet är hämtat från Vedige-Assallstorps Hembygdsförening.

- **Webbplats:** [https://mabe.github.io/kvarnar-i-varbergs-kommun/](https://mabe.github.io/kvarnar-i-varbergs-kommun/)
- **Utredningsår:** 1971
- **Publicering:** Hallandsbygd 1974
- **Källa:** [Vedige-Assallstorps Hembygdsförening](https://www.hembygd.se/veddigeassallstorp)
- **Original-PDF:** [Kvarnar i Varbergs kommun (PDF)](https://filer.hembygd.se/veddigeassallstorp/uploads/files/2020/04/02/Kvarnar%20i%20Varbergs%20kommun%20utredning%201971,%20Hallandsbygd%201974.pdf)

## Teknik

Webbplatsen är byggd med [Jekyll](https://jekyllrb.com/) och temat [jekyll-theme-minimal](https://github.com/pages-themes/minimal), och publiceras via GitHub Pages.

## Lokal utveckling

### Förutsättningar

- Ruby och Bundler

### Starta webbplatsen lokalt

```bash
bundle install
bundle exec jekyll serve
```

Webbplatsen är sedan tillgänglig på `http://localhost:4000`.

## Projektstruktur

- `_mills/` – Datafiler för varje dokumenterad kvarn (Jekyll collection)
- `_layouts/` – Layoutmallar för Jekyll
- `_plugins/` – Jekyll-plugin för svensk sortering
- `index.html` – Startsida med lista över kvarnar
- `_config.yml` – Jekyll-konfiguration