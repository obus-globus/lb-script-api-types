import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface CleanableDirectBuffer extends Object{
    buffer(): ByteBuffer;
    clean(): void;
    hasMemoryAddress(): boolean;
    memoryAddress(): number;
}