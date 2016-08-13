# arabic-cypher

Right-to-left friendly graph database queries

In English:

```
MATCH (a:Person)
MATCH a -[b:ARTIST_OF]-> (c:Artwork)
RETURN a, b, c
```

In Arabic:

<code dir="rtl">
ووو (ا:دد)
</code>

<code dir="rtl">
ووو ا -{خ:ثثث}> (ث:زز)
</code>

<code dir="rtl">
ععع ا، خ، ث
</code>

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
