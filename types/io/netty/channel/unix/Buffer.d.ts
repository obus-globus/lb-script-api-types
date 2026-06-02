import type { CleanableDirectBuffer } from '../../../../io/netty/util/internal/CleanableDirectBuffer.d.ts'
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Buffer extends Object {
    static addressSize(): number;
    static allocateDirectBufferWithNativeOrder(paramarg0: number): CleanableDirectBuffer;
    static allocateDirectWithNativeOrder(paramarg0: number): ByteBuffer;
    static free(paramarg0: ByteBuffer): void;
    static memoryAddress(paramarg0: ByteBuffer): number;
    static wrapMemoryAddress(paramarg0: number, paramarg1: number): ByteBuffer;
    static wrapMemoryAddressWithNativeOrder(paramarg0: number, paramarg1: number): ByteBuffer;
    private constructor()
}