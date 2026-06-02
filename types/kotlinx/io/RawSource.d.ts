import type { AutoCloseable } from '../../java/lang/AutoCloseable.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Buffer } from '../../kotlinx/io/Buffer.d.ts'
export interface RawSource extends AutoCloseable, Object{
    close(): void;
    readAtMostTo(sink: Buffer, byteCount: number): number;
}