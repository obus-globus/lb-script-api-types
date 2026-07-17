import type { UnpooledUnsafeDirectByteBuf } from '../../../io/netty/buffer/UnpooledUnsafeDirectByteBuf.d.ts'
import type { Recycler$EnhancedHandle } from '../../../io/netty/util/Recycler$EnhancedHandle.d.ts'
import type { ObjectPool$Handle } from '../../../io/netty/util/internal/ObjectPool$Handle.d.ts'
export class ByteBufUtil$ThreadLocalUnsafeDirectByteBuf extends UnpooledUnsafeDirectByteBuf {
    private constructor(arg0: ObjectPool$Handle<ByteBufUtil$ThreadLocalUnsafeDirectByteBuf>)
    // private handle: Recycler$EnhancedHandle<ByteBufUtil$ThreadLocalUnsafeDirectByteBuf>;
    deallocate(): void;
}