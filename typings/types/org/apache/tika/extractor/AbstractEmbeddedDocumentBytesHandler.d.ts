import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { EmbeddedDocumentBytesHandler } from '../../../../org/apache/tika/extractor/EmbeddedDocumentBytesHandler.d.ts'
import type { Metadata } from '../../../../org/apache/tika/metadata/Metadata.d.ts'
import type { EmbeddedDocumentBytesConfig } from '../../../../org/apache/tika/pipes/extractor/EmbeddedDocumentBytesConfig.d.ts'
export abstract class AbstractEmbeddedDocumentBytesHandler extends Object implements EmbeddedDocumentBytesHandler {
    constructor()
    ids: number[];
    add(arg0: number, arg1: Metadata, arg2: InputStream): void;
    close(): void;
    getEmitKey(arg0: string, arg1: number, arg2: EmbeddedDocumentBytesConfig, arg3: Metadata): string;
    getIds(): number[];
}