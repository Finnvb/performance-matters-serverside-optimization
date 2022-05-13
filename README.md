
# Reflect for Effect 
Geef je project een titel en schrijf in één zin wat het is.

## Serverside Performance Optimalisatie
Beschrijf de website die je hebt geoptimaliseerd, voeg screenshots van de performance audit voor en na het uitvoeren en beschrijf de verbeterde performance. Met andere woorden, welke winst heb je behaald door dit allemaal te doen! Voeg de url en een screenshot van de geoptimaliseerde website toe. 

### Voor
![afbeelding](https://user-images.githubusercontent.com/26089533/165938474-84c8b0f9-f266-4b42-b8c6-b3cb5682ad43.png)

![afbeelding](https://user-images.githubusercontent.com/26089533/165938692-ab53ec24-ea13-4ff2-9eed-f9a27c243896.png)

![afbeelding](https://user-images.githubusercontent.com/26089533/165938780-3546ce08-13ed-4edd-be28-6690ca5e466f.png)

### Na
![afbeelding](https://user-images.githubusercontent.com/26089533/168280438-b7d3607b-8a30-4807-92b3-20a9b26c2f5e.png)

![afbeelding](https://user-images.githubusercontent.com/26089533/168280597-67f4f89c-9f3c-4863-9973-7bd437863030.png)



### Minifying

Ik heb styles.css en loginStyles.css geminified. Om dit te doen heb ik gebruik gemaakt van PostCSS. Ik heb hiervoor een scriptje geschreven wat ervoor zorgt dat alle regels CSS achtereenvolgens op één string worden geschreven. Dit zorgt voor CSS bestanden met minder bytes. Dit scheelt toch 1.8 KB aan data.

### Code splitting

Op de loginpage en formpage werd app.js ook ingeladen terwijl dit bestand niet werd gebruikt op de login- en formpage. De verwijzing naar dit bestand in login.ejs en form.ejs heb ik verwijderd. app.js wordt alleen op index.ejs gebruikt.

### Caching

Ik heb de Cache-control header gebruikt zodat er om de 5 minuten een request kan worden gedaan naar de server. Dit zorgt ervoor dat er niet constant requests worden gemaakt naar de server. Gebruikers laden de bestanden vanuit hun cache en de cache wordt elke 5 minuten ververst. Dit zorgt voor minder verkeer richting de server. 

### Compressie

Voor de compressie heb ik de express compression package gebruikt. Dit verkleint de bestanden op een bepaald manier en scheelt ook een aantal bytes.

## Bronnen
- [Minify met PostCSS](https://benborgers.com/posts/node-minify-css)
- [Cache headers in Express](https://regbrain.com/article/cache-headers-express-js)
- [Compressie met express](http://expressjs.com/en/resources/middleware/compression.html)


## Licentie

![GNU GPL V3](https://www.gnu.org/graphics/gplv3-127x51.png)

This work is licensed under [GNU GPLv3](./LICENSE).
