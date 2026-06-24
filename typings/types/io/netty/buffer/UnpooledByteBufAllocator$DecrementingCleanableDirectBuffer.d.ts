import type { UnpooledByteBufAllocator$1 } from '../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { ByteBufAllocator } from '../../../io/netty/buffer/ByteBufAllocator.d.ts'
import type { UnpooledByteBufAllocator } from '../../../io/netty/buffer/UnpooledByteBufAllocator.d.ts'
import type { CleanableDirectBuffer } from '../../../io/netty/util/internal/CleanableDirectBuffer.d.ts'
import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class UnpooledByteBufAllocator$DecrementingCleanableDirectBuffer extends Object implements CleanableDirectBuffer {
    private constructor(arg0: ByteBufAllocator, arg1: CleanableDirectBuffer)
    constructor(arg0: ByteBufAllocator, arg1: CleanableDirectBuffer, arg2: UnpooledByteBufAllocator$1)
    private constructor(arg0: ByteBufAllocator, arg1: CleanableDirectBuffer, arg2: number)
    constructor(arg0: ByteBufAllocator, arg1: CleanableDirectBuffer, arg2: number, arg3: UnpooledByteBufAllocator$1)
    // private alloc: UnpooledByteBufAllocator;
    // private delegate: CleanableDirectBuffer;
    buffer(): ByteBuffer;
    clean(): void;
    hasMemoryAddress(): boolean;
    memoryAddress(): number;
}