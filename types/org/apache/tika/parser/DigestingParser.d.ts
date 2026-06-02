import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { Metadata } from '../../../../org/apache/tika/metadata/Metadata.d.ts'
import type { MediaType } from '../../../../org/apache/tika/mime/MediaType.d.ts'
import type { DigestingParser$Digester } from '../../../../org/apache/tika/parser/DigestingParser$Digester.d.ts'
import type { ParseContext } from '../../../../org/apache/tika/parser/ParseContext.d.ts'
import type { Parser } from '../../../../org/apache/tika/parser/Parser.d.ts'
import type { ParserDecorator } from '../../../../org/apache/tika/parser/ParserDecorator.d.ts'
import type { ContentHandler } from '../../../../org/xml/sax/ContentHandler.d.ts'
export class DigestingParser extends ParserDecorator {
    static withFallbacks(paramarg0: E[], paramarg1: MediaType[]): Parser;
    static withTypes(paramarg0: Parser, paramarg1: MediaType[]): Parser;
    static withoutTypes(paramarg0: Parser, paramarg1: MediaType[]): Parser;
    constructor(arg0: Parser, arg1: DigestingParser$Digester, arg2: boolean)
    // private digester: DigestingParser$Digester;
    // private skipContainerDocument: boolean;
    parse(arg0: InputStream, arg1: ContentHandler, arg2: Metadata, arg3: ParseContext): void;
    // private shouldDigest(arg0: Metadata): boolean;
}