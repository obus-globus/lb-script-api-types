import type { Object } from '../../../../java/lang/Object.d.ts'
import type { EmbeddedDocumentExtractor } from '../../../../org/apache/tika/extractor/EmbeddedDocumentExtractor.d.ts'
import type { EmbeddedDocumentExtractorFactory } from '../../../../org/apache/tika/extractor/EmbeddedDocumentExtractorFactory.d.ts'
import type { Metadata } from '../../../../org/apache/tika/metadata/Metadata.d.ts'
import type { ParseContext } from '../../../../org/apache/tika/parser/ParseContext.d.ts'
export class ParsingEmbeddedDocumentExtractorFactory extends Object implements EmbeddedDocumentExtractorFactory {
    constructor()
    readonly writeFileNameToContent: boolean;
    newInstance(arg0: Metadata, arg1: ParseContext): EmbeddedDocumentExtractor;
    setWriteFileNameToContent(arg0: boolean): void;
}