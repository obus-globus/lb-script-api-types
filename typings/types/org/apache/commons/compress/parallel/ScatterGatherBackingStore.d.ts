import type { Closeable } from '../../../../../java/io/Closeable.d.ts'
import type { InputStream } from '../../../../../java/io/InputStream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface ScatterGatherBackingStore extends Closeable, Object{
    close(): void;
    closeForWriting(): void;
    getInputStream(): InputStream;
    writeOut(arg0: number[], arg1: number, arg2: number): void;
}