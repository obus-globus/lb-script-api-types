import type { Object } from '../../../../java/lang/Object.d.ts'
import type { EntityDataAccessor } from '../../../../net/minecraft/network/syncher/EntityDataAccessor.d.ts'
import type { SynchedEntityData$DataValue } from '../../../../net/minecraft/network/syncher/SynchedEntityData$DataValue.d.ts'
export interface SyncedDataHolder extends Object{
    onSyncedDataUpdated(updatedItems: SynchedEntityData$DataValue<Object>[]): void;
    onSyncedDataUpdated(accessor: EntityDataAccessor<Object>): void;
}