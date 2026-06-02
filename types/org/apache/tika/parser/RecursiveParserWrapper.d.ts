import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { AtomicInteger } from '../../../../java/util/concurrent/atomic/AtomicInteger.d.ts'
import type { Metadata } from '../../../../org/apache/tika/metadata/Metadata.d.ts'
import type { MediaType } from '../../../../org/apache/tika/mime/MediaType.d.ts'
import type { ParseContext } from '../../../../org/apache/tika/parser/ParseContext.d.ts'
import type { Parser } from '../../../../org/apache/tika/parser/Parser.d.ts'
import type { ParserDecorator } from '../../../../org/apache/tika/parser/ParserDecorator.d.ts'
import type { ContentHandler } from '../../../../org/xml/sax/ContentHandler.d.ts'
export class RecursiveParserWrapper extends ParserDecorator {
    static getResourceName(paramarg0: Metadata, paramarg1: AtomicInteger): string;
    static withFallbacks(paramarg0: E[], paramarg1: MediaType[]): Parser;
    static withTypes(paramarg0: Parser, paramarg1: MediaType[]): Parser;
    static withoutTypes(paramarg0: Parser, paramarg1: MediaType[]): Parser;
    constructor(arg0: Parser)
    constructor(arg0: Parser, arg1: boolean)
    // private catchEmbeddedExceptions: boolean;
    // private inlineContent: boolean;
    getSupportedTypes(arg0: ParseContext): MediaType[];
    parse(arg0: InputStream, arg1: ContentHandler, arg2: Metadata, arg3: ParseContext): void;
}