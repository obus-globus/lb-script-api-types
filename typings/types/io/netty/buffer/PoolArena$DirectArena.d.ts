import type { PoolArena } from '../../../io/netty/buffer/PoolArena.d.ts'
import type { PoolChunk } from '../../../io/netty/buffer/PoolChunk.d.ts'
import type { PooledByteBuf } from '../../../io/netty/buffer/PooledByteBuf.d.ts'
import type { PooledByteBufAllocator } from '../../../io/netty/buffer/PooledByteBufAllocator.d.ts'
import type { SizeClasses } from '../../../io/netty/buffer/SizeClasses.d.ts'
import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
export class PoolArena$DirectArena extends PoolArena<ByteBuffer> {
    constructor(arg0: PooledByteBufAllocator, arg1: SizeClasses)
    destroyChunk(arg0: PoolChunk<ByteBuffer>): void;
    isDirect(): boolean;
    memoryCopy(arg0: ByteBuffer, arg1: number, arg2: PooledByteBuf<ByteBuffer>, arg3: number): void;
    newByteBuf(arg0: number): PooledByteBuf<ByteBuffer>;
    newChunk(arg0: number, arg1: number, arg2: number, arg3: number): PoolChunk<ByteBuffer>;
    newUnpooledChunk(arg0: number): PoolChunk<ByteBuffer>;
}