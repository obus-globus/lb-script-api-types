import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { ConfigOrigin } from '../../../../com/typesafe/config/ConfigOrigin.d.ts'
import type { ConfigParseOptions } from '../../../../com/typesafe/config/ConfigParseOptions.d.ts'
import type { ConfigSyntax } from '../../../../com/typesafe/config/ConfigSyntax.d.ts'
import type { Parseable } from '../../../../com/typesafe/config/impl/Parseable.d.ts'
import type { File } from '../../../../java/io/File.d.ts'
import type { Reader } from '../../../../java/io/Reader.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { URL } from '../../../../java/net/URL.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Parseable$ParseableProperties extends Parseable {
    static newFile(paramarg0: File, paramarg1: ConfigParseOptions): Parseable;
    static newNotFound(paramarg0: string, paramarg1: string, paramarg2: ConfigParseOptions): Parseable;
    static newProperties(paramarg0: JavaMap<any, any>, paramarg1: ConfigParseOptions): Parseable;
    static newReader(paramarg0: Reader, paramarg1: ConfigParseOptions): Parseable;
    static newResources(paramarg0: Class<Object>, paramarg1: string, paramarg2: ConfigParseOptions): Parseable;
    static newResources(paramarg0: string, paramarg1: ConfigParseOptions): Parseable;
    static newString(paramarg0: string, paramarg1: ConfigParseOptions): Parseable;
    static newURL(paramarg0: URL, paramarg1: ConfigParseOptions): Parseable;
    constructor(arg0: JavaMap<any, any>, arg1: ConfigParseOptions)
    // private props: JavaMap<any, any>;
    createOrigin(): ConfigOrigin;
    guessSyntax(): ConfigSyntax;
    rawParseValue(arg0: ConfigOrigin, arg1: ConfigParseOptions): JavaMap<any, any>;
    reader(): Reader;
    reader(arg0: ConfigParseOptions): Reader;
    toString(): string;
}