import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { Metadata } from '../../../../org/apache/tika/metadata/Metadata.d.ts'
import type { MediaType } from '../../../../org/apache/tika/mime/MediaType.d.ts'
import type { ParseContext } from '../../../../org/apache/tika/parser/ParseContext.d.ts'
import type { Parser } from '../../../../org/apache/tika/parser/Parser.d.ts'
import type { RecursiveParserWrapper$ParserState } from '../../../../org/apache/tika/parser/RecursiveParserWrapper$ParserState.d.ts'
import type { StatefulParser } from '../../../../org/apache/tika/parser/StatefulParser.d.ts'
import type { ContentHandler } from '../../../../org/xml/sax/ContentHandler.d.ts'
export class RecursiveParserWrapper$EmbeddedParserDecorator extends StatefulParser {
    static withFallbacks(paramarg0: E[], paramarg1: MediaType[]): Parser;
    static withTypes(paramarg0: Parser, paramarg1: MediaType[]): Parser;
    static withoutTypes(paramarg0: Parser, paramarg1: MediaType[]): Parser;
    private constructor(null_: RecursiveParserWrapper$EmbeddedParserDecorator, arg1: Parser, arg2: string, arg3: string, arg4: RecursiveParserWrapper$ParserState)
    // private embeddedIdPath: string;
    // private location: string;
    // private parserState: RecursiveParserWrapper$ParserState;
    parse(arg0: InputStream, arg1: ContentHandler, arg2: Metadata, arg3: ParseContext): void;
}