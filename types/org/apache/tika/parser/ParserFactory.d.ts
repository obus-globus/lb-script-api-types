import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Parser } from '../../../../org/apache/tika/parser/Parser.d.ts'
export abstract class ParserFactory extends Object {
    constructor(arg0: { [key: string]: string })
    // private args: { [key: string]: string };
    build(): Parser;
}