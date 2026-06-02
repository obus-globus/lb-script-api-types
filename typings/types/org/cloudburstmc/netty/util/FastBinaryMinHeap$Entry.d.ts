import type { AbstractReferenceCounted } from '../../../../io/netty/util/AbstractReferenceCounted.d.ts'
import type { ObjectPool$Handle } from '../../../../io/netty/util/internal/ObjectPool$Handle.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class FastBinaryMinHeap$Entry extends AbstractReferenceCounted {
    private constructor(arg0: ObjectPool$Handle<FastBinaryMinHeap$Entry>)
    private constructor(arg0: number)
    // private element: Object;
    // private handle: ObjectPool$Handle<FastBinaryMinHeap$Entry>;
    // private weight: number;
    deallocate(): void;
    touch(arg0: Object): FastBinaryMinHeap$Entry;
}