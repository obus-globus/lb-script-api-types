import type { Parser } from '../../../../org/apache/tika/parser/Parser.d.ts'
import type { ParserFactory } from '../../../../org/apache/tika/parser/ParserFactory.d.ts'
export class AutoDetectParserFactory extends ParserFactory {
    static TIKA_CONFIG_PATH: string;
    constructor(arg0: { [key: string]: string })
    build(): Parser;
}