# arabic-cypher

Right-to-left friendly graph database queries

In English:

```
MATCH (a:Person)
MATCH a -[b:ARTIST_OF]-> (c:Artwork)
RETURN a, b, c
```

In Arabic:

```
ووو (ا:دد)
ووو ا -{خ:ثثث}> (ث:زز)
ععع ا، خ، ث
```

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
