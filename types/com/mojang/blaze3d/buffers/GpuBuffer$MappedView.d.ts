import type { AutoCloseable } from '../../../../java/lang/AutoCloseable.d.ts'
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface GpuBuffer$MappedView extends AutoCloseable, Object{
    close(): void;
    data(): ByteBuffer;
}