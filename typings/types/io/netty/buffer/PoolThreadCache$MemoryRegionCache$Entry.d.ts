import type { PoolChunk } from '../../../io/netty/buffer/PoolChunk.d.ts'
import type { Recycler$EnhancedHandle } from '../../../io/netty/util/Recycler$EnhancedHandle.d.ts'
import type { ObjectPool$Handle } from '../../../io/netty/util/internal/ObjectPool$Handle.d.ts'
import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class PoolThreadCache$MemoryRegionCache$Entry<T extends unknown> extends Object {
    constructor(arg0: ObjectPool$Handle<PoolThreadCache$MemoryRegionCache$Entry<Object>>)
    // private chunk: PoolChunk<T>;
    // private handle: number;
    // private nioBuffer: ByteBuffer;
    // private normCapacity: number;
    // private recyclerHandle: Recycler$EnhancedHandle<PoolThreadCache$MemoryRegionCache$Entry<Object>>;
    recycle(): void;
    unguardedRecycle(): void;
}