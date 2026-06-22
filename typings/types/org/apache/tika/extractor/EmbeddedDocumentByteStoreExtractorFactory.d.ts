import type { Object } from '../../../../java/lang/Object.d.ts'
import type { EmbeddedDocumentExtractor } from '../../../../org/apache/tika/extractor/EmbeddedDocumentExtractor.d.ts'
import type { EmbeddedDocumentExtractorFactory } from '../../../../org/apache/tika/extractor/EmbeddedDocumentExtractorFactory.d.ts'
import type { Metadata } from '../../../../org/apache/tika/metadata/Metadata.d.ts'
import type { ParseContext } from '../../../../org/apache/tika/parser/ParseContext.d.ts'
export interface EmbeddedDocumentByteStoreExtractorFactory extends Object, EmbeddedDocumentExtractorFactory{
    newInstance(arg0: Metadata, arg1: ParseContext): EmbeddedDocumentExtractor;
}