import type { MediaType } from '../../../../org/apache/tika/mime/MediaType.d.ts'
import type { Parser } from '../../../../org/apache/tika/parser/Parser.d.ts'
import type { ParserDecorator } from '../../../../org/apache/tika/parser/ParserDecorator.d.ts'
export class StatefulParser extends ParserDecorator {
    static withFallbacks(paramarg0: E[], paramarg1: MediaType[]): Parser;
    static withTypes(paramarg0: Parser, paramarg1: MediaType[]): Parser;
    static withoutTypes(paramarg0: Parser, paramarg1: MediaType[]): Parser;
    constructor(arg0: Parser)
}