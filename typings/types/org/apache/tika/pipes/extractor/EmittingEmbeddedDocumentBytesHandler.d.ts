import type { InputStream } from '../../../../../java/io/InputStream.d.ts'
import type { AbstractEmbeddedDocumentBytesHandler } from '../../../../../org/apache/tika/extractor/AbstractEmbeddedDocumentBytesHandler.d.ts'
import type { Metadata } from '../../../../../org/apache/tika/metadata/Metadata.d.ts'
import type { FetchEmitTuple } from '../../../../../org/apache/tika/pipes/FetchEmitTuple.d.ts'
import type { EmitKey } from '../../../../../org/apache/tika/pipes/emitter/EmitKey.d.ts'
import type { EmitterManager } from '../../../../../org/apache/tika/pipes/emitter/EmitterManager.d.ts'
import type { StreamEmitter } from '../../../../../org/apache/tika/pipes/emitter/StreamEmitter.d.ts'
import type { EmbeddedDocumentBytesConfig } from '../../../../../org/apache/tika/pipes/extractor/EmbeddedDocumentBytesConfig.d.ts'
export class EmittingEmbeddedDocumentBytesHandler extends AbstractEmbeddedDocumentBytesHandler {
    constructor(arg0: FetchEmitTuple, arg1: EmitterManager)
    // private containerEmitKey: EmitKey;
    // private embeddedDocumentBytesConfig: EmbeddedDocumentBytesConfig;
    // private emitter: StreamEmitter;
    add(arg0: number, arg1: Metadata, arg2: InputStream): void;
    close(): void;
}