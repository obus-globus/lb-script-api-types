import type { AtomicLong } from '../../../../../java/util/concurrent/atomic/AtomicLong.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../../java/util/Iterator.d.ts'
import type { StorageView } from '../../../../../net/fabricmc/fabric/api/transfer/v1/storage/StorageView.d.ts'
import type { DataComponentPatch } from '../../../../../net/minecraft/core/component/DataComponentPatch.d.ts'
import type { Logger } from '../../../../../org/slf4j/Logger.d.ts'
export class TransferApiImpl extends Object {
    static EMPTY_STORAGE: StorageView<T>[];
    static LOGGER: Logger;
    static version: AtomicLong;
    static makeListView(paramarg0: (Object | null)[]): (Object | null)[];
    static mergePatches(paramarg0: DataComponentPatch, paramarg1: DataComponentPatch): DataComponentPatch;
    static singletonIterator(paramarg0: Object | null): Iterator<Object>;
    constructor()
}