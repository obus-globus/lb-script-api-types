import type { Object } from '../../../../java/lang/Object.d.ts'
import type { EmbeddedBytesSelector } from '../../../../org/apache/tika/extractor/EmbeddedBytesSelector.d.ts'
import type { EmbeddedDocumentByteStoreExtractorFactory } from '../../../../org/apache/tika/extractor/EmbeddedDocumentByteStoreExtractorFactory.d.ts'
import type { EmbeddedDocumentExtractor } from '../../../../org/apache/tika/extractor/EmbeddedDocumentExtractor.d.ts'
import type { Metadata } from '../../../../org/apache/tika/metadata/Metadata.d.ts'
import type { ParseContext } from '../../../../org/apache/tika/parser/ParseContext.d.ts'
export class RUnpackExtractorFactory extends Object implements EmbeddedDocumentByteStoreExtractorFactory {
    static DEFAULT_MAX_EMBEDDED_BYTES_FOR_EXTRACTION: number;
    constructor()
    readonly embeddedBytesExcludeEmbeddedResourceTypes: string[];
    readonly embeddedBytesExcludeMimeTypes: string[];
    readonly embeddedBytesIncludeEmbeddedResourceTypes: string[];
    readonly embeddedBytesIncludeMimeTypes: string[];
    readonly maxEmbeddedBytesForExtraction: number;
    readonly writeFileNameToContent: boolean;
    // private createEmbeddedBytesSelector(): EmbeddedBytesSelector;
    newInstance(arg0: Metadata, arg1: ParseContext): EmbeddedDocumentExtractor;
    setEmbeddedBytesExcludeEmbeddedResourceTypes(arg0: string[]): void;
    setEmbeddedBytesExcludeMimeTypes(arg0: string[]): void;
    setEmbeddedBytesIncludeEmbeddedResourceTypes(arg0: string[]): void;
    setEmbeddedBytesIncludeMimeTypes(arg0: string[]): void;
    setMaxEmbeddedBytesForExtraction(arg0: number): void;
    setWriteFileNameToContent(arg0: boolean): void;
}