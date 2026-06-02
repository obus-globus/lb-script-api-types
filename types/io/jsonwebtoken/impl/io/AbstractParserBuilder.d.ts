import type { Deserializer } from '../../../../io/jsonwebtoken/io/Deserializer.d.ts'
import type { Parser } from '../../../../io/jsonwebtoken/io/Parser.d.ts'
import type { ParserBuilder } from '../../../../io/jsonwebtoken/io/ParserBuilder.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class AbstractParserBuilder<T extends Object | number | string | boolean, B extends ParserBuilder<T, B>> extends Object implements ParserBuilder<T, B> {
    constructor()
    // private deserializer: Deserializer<{ [key: string]: Object | null }>;
    // private provider: Provider;
    build(): Parser<T>;
    doBuild(): Parser<T>;
    json(arg0: Deserializer<{ [key: string]: Object | null }>): B;
    provider(arg0: Provider): B;
    self(): B;
}