Fez Plugin for Sweet.js Compilation

```
rule.each("src/*.sjs", fez.mapFile("lib/%f.js"), sweetjs({'modules': ['your-macros']}));
```

## Options

### modules

List of packages that export modules.

(Haven't tested to see how to pass macros from in your package.)

### readableNames

**Experimental** option to remove the $123s from variable names in the compiled output.

### escodegen

Config Object passed to escodegen.