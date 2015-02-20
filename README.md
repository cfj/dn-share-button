# DN share button

> A snippet that creates a button for sharing stories on [Designer News](https://news.layervault.com/).

![Sample image](http://i.imgur.com/45jlYky.png "Submit to Designer News")

## Usage

Insert this where you want the button to appear:

```js
<a data-share="dn"></a>
<script>(function(d,s,i){var j;var f=d.getElementsByTagName(s)[0];if(!d.getElementById(i)){j=d.createElement(s);
j.id=i;j.src='http://fsfg.se/dn-button.min.js';f.parentNode.insertBefore(j,f);}})(document,'script','dn-btn-js');</script>
```

## License

MIT © [Jonathan Svärdén](http://svarden.se)