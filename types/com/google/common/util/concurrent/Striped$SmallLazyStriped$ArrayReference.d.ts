import type { ReferenceQueue } from '../../../../../java/lang/ref/ReferenceQueue.d.ts'
import type { WeakReference } from '../../../../../java/lang/ref/WeakReference.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Striped$SmallLazyStriped$ArrayReference<L extends Object | number | string | boolean> extends WeakReference<L> {
    static reachabilityFence(paramarg0: Object): void;
    constructor(referent: L, index: number, queue: ReferenceQueue<L>)
    // private index: number;
}