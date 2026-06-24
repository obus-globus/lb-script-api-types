import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { ContainerExtractor } from '../../../../org/apache/tika/extractor/ContainerExtractor.d.ts'
import type { EmbeddedResourceHandler } from '../../../../org/apache/tika/extractor/EmbeddedResourceHandler.d.ts'
import type { ParserContainerExtractor } from '../../../../org/apache/tika/extractor/ParserContainerExtractor.d.ts'
import type { Metadata } from '../../../../org/apache/tika/metadata/Metadata.d.ts'
import type { MediaType } from '../../../../org/apache/tika/mime/MediaType.d.ts'
import type { ParseContext } from '../../../../org/apache/tika/parser/ParseContext.d.ts'
import type { Parser } from '../../../../org/apache/tika/parser/Parser.d.ts'
import type { StatefulParser } from '../../../../org/apache/tika/parser/StatefulParser.d.ts'
import type { ContentHandler } from '../../../../org/xml/sax/ContentHandler.d.ts'
export class ParserContainerExtractor$RecursiveParser extends StatefulParser {
    static withFallbacks(paramarg0: Parser[], paramarg1: MediaType[]): Parser;
    static withTypes(paramarg0: Parser, paramarg1: MediaType[]): Parser;
    static withoutTypes(paramarg0: Parser, paramarg1: MediaType[]): Parser;
    private constructor(null_: ParserContainerExtractor, arg1: Parser, arg2: ContainerExtractor, arg3: EmbeddedResourceHandler)
    // private extractor: ContainerExtractor;
    // private handler: EmbeddedResourceHandler;
    getSupportedTypes(arg0: ParseContext): MediaType[];
    parse(arg0: InputStream, arg1: ContentHandler, arg2: Metadata, arg3: ParseContext): void;
}