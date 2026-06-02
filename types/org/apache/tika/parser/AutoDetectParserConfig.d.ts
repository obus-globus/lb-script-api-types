import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { ConfigBase } from '../../../../org/apache/tika/config/ConfigBase.d.ts'
import type { EmbeddedDocumentExtractorFactory } from '../../../../org/apache/tika/extractor/EmbeddedDocumentExtractorFactory.d.ts'
import type { MetadataWriteFilterFactory } from '../../../../org/apache/tika/metadata/writefilter/MetadataWriteFilterFactory.d.ts'
import type { DigestingParser$DigesterFactory } from '../../../../org/apache/tika/parser/DigestingParser$DigesterFactory.d.ts'
import type { ContentHandlerDecoratorFactory } from '../../../../org/apache/tika/sax/ContentHandlerDecoratorFactory.d.ts'
import type { Element } from '../../../../org/w3c/dom/Element.d.ts'
export class AutoDetectParserConfig extends ConfigBase implements Serializable {
    static DEFAULT: AutoDetectParserConfig;
    static load(paramarg0: Element): AutoDetectParserConfig;
    constructor()
    constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number)
    readonly contentHandlerDecoratorFactory: ContentHandlerDecoratorFactory;
    readonly digesterFactory: DigestingParser$DigesterFactory;
    readonly embeddedDocumentExtractorFactory: EmbeddedDocumentExtractorFactory;
    readonly maximumCompressionRatio: number;
    readonly maximumDepth: number;
    readonly maximumPackageEntryDepth: number;
    readonly metadataWriteFilterFactory: MetadataWriteFilterFactory;
    readonly outputThreshold: number;
    readonly spoolToDisk: number;
    readonly throwOnZeroBytes: boolean;
    getContentHandlerDecoratorFactory(): ContentHandlerDecoratorFactory;
    getDigesterFactory(): DigestingParser$DigesterFactory;
    getEmbeddedDocumentExtractorFactory(): EmbeddedDocumentExtractorFactory;
    getMaximumCompressionRatio(): number;
    getMaximumDepth(): number;
    getMaximumPackageEntryDepth(): number;
    getMetadataWriteFilterFactory(): MetadataWriteFilterFactory;
    getOutputThreshold(): number;
    getSpoolToDisk(): number;
    getThrowOnZeroBytes(): boolean;
    setContentHandlerDecoratorFactory(arg0: ContentHandlerDecoratorFactory): void;
    setDigesterFactory(arg0: DigestingParser$DigesterFactory): void;
    setEmbeddedDocumentExtractorFactory(arg0: EmbeddedDocumentExtractorFactory): void;
    setMaximumCompressionRatio(arg0: number): void;
    setMaximumDepth(arg0: number): void;
    setMaximumPackageEntryDepth(arg0: number): void;
    setMetadataWriteFilterFactory(arg0: MetadataWriteFilterFactory): void;
    setOutputThreshold(arg0: number): void;
    setSpoolToDisk(arg0: number): void;
    setThrowOnZeroBytes(arg0: boolean): void;
    toString(): string;
}