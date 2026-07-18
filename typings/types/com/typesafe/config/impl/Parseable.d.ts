import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { ConfigIncludeContext } from '../../../../com/typesafe/config/ConfigIncludeContext.d.ts'
import type { ConfigOrigin } from '../../../../com/typesafe/config/ConfigOrigin.d.ts'
import type { ConfigParseOptions } from '../../../../com/typesafe/config/ConfigParseOptions.d.ts'
import type { ConfigParseable } from '../../../../com/typesafe/config/ConfigParseable.d.ts'
import type { ConfigSyntax } from '../../../../com/typesafe/config/ConfigSyntax.d.ts'
import type { AbstractConfigValue } from '../../../../com/typesafe/config/impl/AbstractConfigValue.d.ts'
import type { ConfigDocument } from '../../../../com/typesafe/config/parser/ConfigDocument.d.ts'
import type { File } from '../../../../java/io/File.d.ts'
import type { Reader } from '../../../../java/io/Reader.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { URL } from '../../../../java/net/URL.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class Parseable extends Object implements ConfigParseable {
    static newFile(paramarg0: File, paramarg1: ConfigParseOptions): Parseable;
    static newNotFound(paramarg0: string, paramarg1: string, paramarg2: ConfigParseOptions): Parseable;
    static newProperties(paramarg0: JavaMap<any, any>, paramarg1: ConfigParseOptions): Parseable;
    static newReader(paramarg0: Reader, paramarg1: ConfigParseOptions): Parseable;
    static newResources(paramarg0: Class<Object>, paramarg1: string, paramarg2: ConfigParseOptions): Parseable;
    static newResources(paramarg0: string, paramarg1: ConfigParseOptions): Parseable;
    static newString(paramarg0: string, paramarg1: ConfigParseOptions): Parseable;
    static newURL(paramarg0: URL, paramarg1: ConfigParseOptions): Parseable;
    constructor()
    // private includeContext: ConfigIncludeContext;
    // private initialOptions: ConfigParseOptions;
    // private initialOrigin: ConfigOrigin;
    contentType(): ConfigSyntax;
    createOrigin(): ConfigOrigin;
    // private fixupOptions(arg0: ConfigParseOptions): ConfigParseOptions;
    guessSyntax(): ConfigSyntax;
    includeContext(): ConfigIncludeContext;
    options(): ConfigParseOptions;
    origin(): ConfigOrigin;
    parse(): JavaMap<any, any>;
    parse(arg0: ConfigParseOptions): JavaMap<any, any>;
    parseConfigDocument(): ConfigDocument;
    // private parseDocument(arg0: ConfigOrigin, arg1: ConfigParseOptions): ConfigDocument;
    parseDocument(arg0: ConfigParseOptions): ConfigDocument;
    parseValue(): AbstractConfigValue;
    // private parseValue(arg0: ConfigOrigin, arg1: ConfigParseOptions): AbstractConfigValue;
    parseValue(arg0: ConfigParseOptions): AbstractConfigValue;
    postConstruct(arg0: ConfigParseOptions): void;
    rawParseDocument(arg0: ConfigOrigin, arg1: ConfigParseOptions): ConfigDocument;
    // private rawParseDocument(arg0: Reader, arg1: ConfigOrigin, arg2: ConfigParseOptions): ConfigDocument;
    rawParseValue(arg0: ConfigOrigin, arg1: ConfigParseOptions): AbstractConfigValue;
    // private rawParseValue(arg0: Reader, arg1: ConfigOrigin, arg2: ConfigParseOptions): AbstractConfigValue;
    reader(): Reader;
    reader(arg0: ConfigParseOptions): Reader;
    relativeTo(arg0: string): ConfigParseable;
    toString(): string;
}