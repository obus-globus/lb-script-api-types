import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { Path } from '../../../../java/nio/file/Path.d.ts'
import type { EmbeddedBytesSelector } from '../../../../org/apache/tika/extractor/EmbeddedBytesSelector.d.ts'
import type { ParsingEmbeddedDocumentExtractor } from '../../../../org/apache/tika/extractor/ParsingEmbeddedDocumentExtractor.d.ts'
import type { TikaInputStream } from '../../../../org/apache/tika/io/TikaInputStream.d.ts'
import type { Metadata } from '../../../../org/apache/tika/metadata/Metadata.d.ts'
import type { ParseContext } from '../../../../org/apache/tika/parser/ParseContext.d.ts'
import type { ContentHandler } from '../../../../org/xml/sax/ContentHandler.d.ts'
export class RUnpackExtractor extends ParsingEmbeddedDocumentExtractor {
    constructor(arg0: ParseContext, arg1: number)
    // private bytesExtracted: number;
    readonly embeddedBytesSelector: EmbeddedBytesSelector;
    // private maxEmbeddedBytesForExtraction: number;
    getEmbeddedBytesSelector(): EmbeddedBytesSelector;
    // private parse(arg0: InputStream, arg1: ContentHandler, arg2: Metadata): void;
    parseEmbedded(arg0: InputStream, arg1: ContentHandler, arg2: Metadata, arg3: boolean): void;
    // private parseWithBytes(arg0: TikaInputStream, arg1: ContentHandler, arg2: Metadata): void;
    setEmbeddedBytesSelector(arg0: EmbeddedBytesSelector): void;
    // private storeEmbeddedBytes(arg0: Path, arg1: Metadata): void;
}