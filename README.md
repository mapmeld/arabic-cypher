# arabic-cypher

[![Greenkeeper badge](https://badges.greenkeeper.io/mapmeld/arabic-cypher.svg)](https://greenkeeper.io/)

Right-to-left friendly graph database queries

In English:

```
MATCH (a:Person)
MATCH a -[b:ARTIST_OF]-> (c:Artwork)
RETURN a, b, c
```

In Arabic:

<div dir="rtl">
تجد (ا:دد)
</div>

<div dir="rtl">
تجد ا -{خ:ثثث}> (ث:زز)
</div>

<div dir="rtl">
الرد مع ا، خ، ث
</div>

### Usage

```javascript
standard_cypher_string = arabicCypher(rtl_cypher_string);
```

Currently supports:

|| Cypher | Arabic ||
--------------------
|| MATCH  |  ووو   ||
|| RETURN |  ععع   ||

### License

Open source, MIT license
