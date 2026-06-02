import type { AtomicInteger } from '../../../../../../java/util/concurrent/atomic/AtomicInteger.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ScatterGatherBackingStore } from '../../../../../../org/apache/commons/compress/parallel/ScatterGatherBackingStore.d.ts'
import type { ScatterGatherBackingStoreSupplier } from '../../../../../../org/apache/commons/compress/parallel/ScatterGatherBackingStoreSupplier.d.ts'
export class DefaultBackingStoreSupplier extends Object implements ScatterGatherBackingStoreSupplier {
    constructor(arg0: Path[])
    // private dir: Path[];
    // private storeNum: AtomicInteger;
    get(): ScatterGatherBackingStore;
}