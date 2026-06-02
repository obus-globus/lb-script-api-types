import type { Closeable } from '../../../../java/io/Closeable.d.ts'
import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Metadata } from '../../../../org/apache/tika/metadata/Metadata.d.ts'
export interface EmbeddedDocumentBytesHandler extends Closeable, Object{
    add(arg0: number, arg1: Metadata, arg2: InputStream): void;
    getIds(): number[];
}