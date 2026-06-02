import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { Exception } from '../../../../java/lang/Exception.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { EmbeddedDocumentExtractor } from '../../../../org/apache/tika/extractor/EmbeddedDocumentExtractor.d.ts'
import type { Metadata } from '../../../../org/apache/tika/metadata/Metadata.d.ts'
import type { ParseContext } from '../../../../org/apache/tika/parser/ParseContext.d.ts'
import type { Parser } from '../../../../org/apache/tika/parser/Parser.d.ts'
import type { ContentHandler } from '../../../../org/xml/sax/ContentHandler.d.ts'
export class ParsingEmbeddedDocumentExtractor extends Object implements EmbeddedDocumentExtractor {
    constructor(arg0: ParseContext)
    // private context: ParseContext;
    readonly writeFileNameToContent: boolean;
    getDelegatingParser(): Parser;
    isWriteFileNameToContent(): boolean;
    parseEmbedded(arg0: InputStream, arg1: ContentHandler, arg2: Metadata, arg3: boolean): void;
    recordException(arg0: Exception, arg1: ParseContext): void;
    setWriteFileNameToContent(arg0: boolean): void;
    shouldParseEmbedded(arg0: Metadata): boolean;
}