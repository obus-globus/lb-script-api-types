import type { UnpooledDirectByteBuf } from '../../../io/netty/buffer/UnpooledDirectByteBuf.d.ts'
import type { Recycler$EnhancedHandle } from '../../../io/netty/util/Recycler$EnhancedHandle.d.ts'
import type { FastThreadLocal } from '../../../io/netty/util/concurrent/FastThreadLocal.d.ts'
import type { ObjectPool$Handle } from '../../../io/netty/util/internal/ObjectPool$Handle.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class ByteBufUtil$ThreadLocalDirectByteBuf extends UnpooledDirectByteBuf {
    constructor(arg0: ObjectPool$Handle<Object>, arg1: FastThreadLocal<number[]>)
    // private handle: Recycler$EnhancedHandle<ByteBufUtil$ThreadLocalDirectByteBuf>;
    deallocate(): void;
}