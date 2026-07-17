import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Deserializer } from '../../../../io/jsonwebtoken/io/Deserializer.d.ts'
import type { Parser } from '../../../../io/jsonwebtoken/io/Parser.d.ts'
import type { ParserBuilder } from '../../../../io/jsonwebtoken/io/ParserBuilder.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class AbstractParserBuilder<T extends unknown, B extends ParserBuilder<T, B>> extends Object implements ParserBuilder<T, B> {
    constructor()
    // private deserializer: Deserializer<JavaMap<string, Object | null>>;
    // private provider: JavaMap<any, any>;
    build(): Parser<T>;
    doBuild(): Parser<T>;
    json(arg0: Deserializer<JavaMap<string, Object | null>>): B;
    provider(arg0: JavaMap<any, any>): B;
    self(): B;
}