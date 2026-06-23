import type { Object } from '../../../../java/lang/Object.d.ts'
import type { EntityDataAccessor } from '../../../../net/minecraft/network/syncher/EntityDataAccessor.d.ts'
import type { SynchedEntityData$DataValue } from '../../../../net/minecraft/network/syncher/SynchedEntityData$DataValue.d.ts'
export class SynchedEntityData$DataItem<T extends unknown> extends Object {
    constructor(accessor: EntityDataAccessor<T>, initialValue: T)
    readonly accessor: EntityDataAccessor<T>;
    readonly dirty: boolean;
    // private initialValue: T;
    getAccessor(): EntityDataAccessor<T>;
    getValue(): T;
    isDirty(): boolean;
    isSetToDefault(): boolean;
    setDirty(dirty: boolean): void;
    setValue(value: T): void;
    value(): SynchedEntityData$DataValue<T>;
}