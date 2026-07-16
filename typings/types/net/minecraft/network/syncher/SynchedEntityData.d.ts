import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { EntityDataAccessor } from '../../../../net/minecraft/network/syncher/EntityDataAccessor.d.ts'
import type { EntityDataSerializer } from '../../../../net/minecraft/network/syncher/EntityDataSerializer.d.ts'
import type { SyncedDataHolder } from '../../../../net/minecraft/network/syncher/SyncedDataHolder.d.ts'
import type { SynchedEntityData$DataItem } from '../../../../net/minecraft/network/syncher/SynchedEntityData$DataItem.d.ts'
import type { SynchedEntityData$DataValue } from '../../../../net/minecraft/network/syncher/SynchedEntityData$DataValue.d.ts'
export class SynchedEntityData extends Object {
    static defineId<T extends unknown>(paramclazz: Class<SyncedDataHolder>, paramtype: EntityDataSerializer<T>): EntityDataAccessor<T>;
    private constructor(entity: SyncedDataHolder, itemsById: SynchedEntityData$DataItem<Object>[])
    // private entity: SyncedDataHolder;
    // private isDirty: boolean;
    // private itemsById: SynchedEntityData$DataItem<Object>[];
    // private assignValue<T extends unknown>(dataItem: SynchedEntityData$DataItem<T>, item: SynchedEntityData$DataValue<Object>): void;
    assignValues(items: SynchedEntityData$DataValue<Object>[]): void;
    get<T extends unknown>(accessor: EntityDataAccessor<T>): T;
    // private getItem<T extends unknown>(accessor: EntityDataAccessor<T>): SynchedEntityData$DataItem<T>;
    getNonDefaultValues(): SynchedEntityData$DataValue<Object>[];
    isDirty(): boolean;
    packDirty(): SynchedEntityData$DataValue<Object>[];
    set<T extends unknown>(accessor: EntityDataAccessor<T>, value: T): void;
    set<T extends unknown>(accessor: EntityDataAccessor<T>, value: T, forceDirty: boolean): void;
}