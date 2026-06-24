import type { AdaptivePoolingAllocator$AdaptiveByteBuf } from '../../../io/netty/buffer/AdaptivePoolingAllocator$AdaptiveByteBuf.d.ts'
import type { Recycler } from '../../../io/netty/util/Recycler.d.ts'
import type { Recycler$Handle } from '../../../io/netty/util/Recycler$Handle.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class AdaptivePoolingAllocator$Magazine$AdaptiveRecycler extends Recycler<AdaptivePoolingAllocator$AdaptiveByteBuf> {
    static sharedWith(paramarg0: number): AdaptivePoolingAllocator$Magazine$AdaptiveRecycler;
    static threadLocal(): AdaptivePoolingAllocator$Magazine$AdaptiveRecycler;
    static unpinOwner(paramarg0: Recycler<Object>): void;
    private constructor(arg0: boolean)
    private constructor(arg0: number, arg1: boolean)
    newObject(arg0: Recycler$Handle<AdaptivePoolingAllocator$AdaptiveByteBuf>): AdaptivePoolingAllocator$AdaptiveByteBuf;
}