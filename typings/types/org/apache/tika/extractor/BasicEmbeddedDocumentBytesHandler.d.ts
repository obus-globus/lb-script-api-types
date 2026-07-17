import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { AbstractEmbeddedDocumentBytesHandler } from '../../../../org/apache/tika/extractor/AbstractEmbeddedDocumentBytesHandler.d.ts'
import type { Metadata } from '../../../../org/apache/tika/metadata/Metadata.d.ts'
import type { EmbeddedDocumentBytesConfig } from '../../../../org/apache/tika/pipes/extractor/EmbeddedDocumentBytesConfig.d.ts'
export class BasicEmbeddedDocumentBytesHandler extends AbstractEmbeddedDocumentBytesHandler {
    constructor(arg0: EmbeddedDocumentBytesConfig)
    // private config: EmbeddedDocumentBytesConfig;
    // private docBytes: JavaMap<number, number[]>;
    add(arg0: number, arg1: Metadata, arg2: InputStream): void;
    close(): void;
    getDocument(arg0: number): InputStream;
}