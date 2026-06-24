import type { ByteBufUtil$1 } from '../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { UnpooledUnsafeDirectByteBuf } from '../../../io/netty/buffer/UnpooledUnsafeDirectByteBuf.d.ts'
import type { Recycler$EnhancedHandle } from '../../../io/netty/util/Recycler$EnhancedHandle.d.ts'
import type { ObjectPool$Handle } from '../../../io/netty/util/internal/ObjectPool$Handle.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class ByteBufUtil$ThreadLocalUnsafeDirectByteBuf extends UnpooledUnsafeDirectByteBuf {
    constructor(arg0: ObjectPool$Handle<Object>, arg1: ByteBufUtil$1)
    private constructor(arg0: ObjectPool$Handle<ByteBufUtil$ThreadLocalUnsafeDirectByteBuf>)
    // private handle: Recycler$EnhancedHandle<ByteBufUtil$ThreadLocalUnsafeDirectByteBuf>;
    deallocate(): void;
}