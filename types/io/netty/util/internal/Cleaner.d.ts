import type { CleanableDirectBuffer } from '../../../../io/netty/util/internal/CleanableDirectBuffer.d.ts'
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface Cleaner extends Object{
    allocate(arg0: number): CleanableDirectBuffer;
    freeDirectBuffer(arg0: ByteBuffer): void;
}