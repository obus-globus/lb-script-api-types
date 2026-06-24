import type { FastBinaryMinHeap$1 } from '../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { AbstractReferenceCounted } from '../../../../io/netty/util/AbstractReferenceCounted.d.ts'
import type { ReferenceCounted } from '../../../../io/netty/util/ReferenceCounted.d.ts'
import type { ObjectPool$Handle } from '../../../../io/netty/util/internal/ObjectPool$Handle.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class FastBinaryMinHeap$Entry extends AbstractReferenceCounted {
    constructor(arg0: ObjectPool$Handle<Object>, arg1: FastBinaryMinHeap$1)
    private constructor(arg0: ObjectPool$Handle<FastBinaryMinHeap$Entry>)
    private constructor(arg0: number)
    constructor(arg0: number, arg1: FastBinaryMinHeap$1)
    // private element: Object;
    // private handle: ObjectPool$Handle<FastBinaryMinHeap$Entry>;
    // private weight: number;
    deallocate(): void;
    touch(): ReferenceCounted;
    touch(arg0: Object): FastBinaryMinHeap$Entry;
}