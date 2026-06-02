import type { UnpooledDirectByteBuf } from '../../../io/netty/buffer/UnpooledDirectByteBuf.d.ts'
import type { Recycler$EnhancedHandle } from '../../../io/netty/util/Recycler$EnhancedHandle.d.ts'
import type { ObjectPool$Handle } from '../../../io/netty/util/internal/ObjectPool$Handle.d.ts'
export class ByteBufUtil$ThreadLocalDirectByteBuf extends UnpooledDirectByteBuf {
    private constructor(arg0: ObjectPool$Handle<ByteBufUtil$ThreadLocalDirectByteBuf>)
    // private handle: Recycler$EnhancedHandle<ByteBufUtil$ThreadLocalDirectByteBuf>;
    deallocate(): void;
}