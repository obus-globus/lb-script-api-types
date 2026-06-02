import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { EmbeddedDocumentBytesHandler } from '../../../../org/apache/tika/extractor/EmbeddedDocumentBytesHandler.d.ts'
import type { Metadata } from '../../../../org/apache/tika/metadata/Metadata.d.ts'
import type { MetadataListFilter } from '../../../../org/apache/tika/metadata/listfilter/MetadataListFilter.d.ts'
export class PipesServer$MetadataListAndEmbeddedBytes extends Object {
    constructor(arg0: Metadata[], arg1: EmbeddedDocumentBytesHandler)
    readonly embeddedDocumentBytesHandler: Optional<EmbeddedDocumentBytesHandler>;
    metadataList: Metadata[];
    filter(arg0: MetadataListFilter): void;
    getEmbeddedDocumentBytesHandler(): EmbeddedDocumentBytesHandler;
    getMetadataList(): Metadata[];
    hasEmbeddedDocumentByteStore(): boolean;
    toBePackagedForStreamEmitter(): boolean;
}