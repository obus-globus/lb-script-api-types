import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Metadata } from '../../../../org/apache/tika/metadata/Metadata.d.ts'
import type { ContentHandler } from '../../../../org/xml/sax/ContentHandler.d.ts'
export interface EmbeddedDocumentExtractor extends Object{
    parseEmbedded(arg0: InputStream, arg1: ContentHandler, arg2: Metadata, arg3: boolean): void;
    shouldParseEmbedded(arg0: Metadata): boolean;
}