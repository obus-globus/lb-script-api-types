import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Parser } from '../../../../org/apache/tika/parser/Parser.d.ts'
export abstract class ParserFactory extends Object {
    constructor(arg0: JavaMap<string, string>)
    // private args: JavaMap<string, string>;
    build(): Parser;
}