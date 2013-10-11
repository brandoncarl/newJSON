# newJSON
      
  JSON parser capable of handling standard and newline-delimited JSON
  
## Installation

    $ npm install newjson

## Comments

```
  var newJSON = require('newjson');
  
  
  newJSON.parse(json);          // works
  newJSON.parse(newlineJSON);   // also works
  
```


This function converts the following:

		{ "field1": "value1", "field2": "value2", "field3": "value3" }
		{ "fieldA": "valueA", "fieldB": "valueB", "fieldC": "valueC" }

into:

		{
			record1:	{ "field1": "value1", "field2": "value2", "field3": "value3" },
			record2:	{ "fieldA": "valueA", "fieldB": "valueB", "fieldC": "valueC" }
		}


You can specify a "handle" by passing { handle : "myhandle" } as a second argument.
e.g. `newJSON.parse(newlineJSON, { handle : "myhandle" } => { myhandle1 : ... }`
