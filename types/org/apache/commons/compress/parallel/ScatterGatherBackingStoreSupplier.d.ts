import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ScatterGatherBackingStore } from '../../../../../org/apache/commons/compress/parallel/ScatterGatherBackingStore.d.ts'
export interface ScatterGatherBackingStoreSupplier extends Object{
    get(): ScatterGatherBackingStore;
}