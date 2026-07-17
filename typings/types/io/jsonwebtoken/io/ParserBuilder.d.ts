import type { JavaMap } from '../../../JavaMap.d.ts'
import type { Deserializer } from '../../../io/jsonwebtoken/io/Deserializer.d.ts'
import type { Parser } from '../../../io/jsonwebtoken/io/Parser.d.ts'
import type { Builder } from '../../../io/jsonwebtoken/lang/Builder.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface ParserBuilder<T extends unknown, B extends ParserBuilder<T, B>> extends Builder<Parser<T>>, Object{
    json(arg0: Deserializer<JavaMap<string, Object | null>>): B;
    provider(arg0: JavaMap<any, any>): B;
}