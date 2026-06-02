import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { EmbeddedDocumentExtractor } from '../../../../org/apache/tika/extractor/EmbeddedDocumentExtractor.d.ts'
import type { Metadata } from '../../../../org/apache/tika/metadata/Metadata.d.ts'
import type { ParseContext } from '../../../../org/apache/tika/parser/ParseContext.d.ts'
export interface EmbeddedDocumentExtractorFactory extends Serializable, Object{
    newInstance(arg0: Metadata, arg1: ParseContext): EmbeddedDocumentExtractor;
}