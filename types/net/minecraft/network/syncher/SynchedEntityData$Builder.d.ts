import type { Object } from '../../../../java/lang/Object.d.ts'
import type { EntityDataAccessor } from '../../../../net/minecraft/network/syncher/EntityDataAccessor.d.ts'
import type { SyncedDataHolder } from '../../../../net/minecraft/network/syncher/SyncedDataHolder.d.ts'
import type { SynchedEntityData } from '../../../../net/minecraft/network/syncher/SynchedEntityData.d.ts'
import type { SynchedEntityData$DataItem } from '../../../../net/minecraft/network/syncher/SynchedEntityData$DataItem.d.ts'
export class SynchedEntityData$Builder extends Object {
    constructor(entity: SyncedDataHolder)
    // private entity: SyncedDataHolder;
    // private itemsById: SynchedEntityData$DataItem<Object>[];
    build(): SynchedEntityData;
    define<T extends Object | number | string | boolean>(accessor: EntityDataAccessor<T>, value: T): SynchedEntityData$Builder;
}