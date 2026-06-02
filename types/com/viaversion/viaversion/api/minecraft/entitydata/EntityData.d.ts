import type { EntityDataType } from '../../../../../../com/viaversion/viaversion/api/minecraft/entitydata/EntityDataType.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class EntityData extends Object {
    constructor(arg0: number, arg1: EntityDataType, arg2: Object)
    readonly dataType: EntityDataType;
    readonly id: number;
    readonly value: Object;
    // private checkValue(arg0: EntityDataType, arg1: Object): Object;
    dataType(): EntityDataType;
    equals(arg0: Object | null): boolean;
    getValue(): Object;
    hashCode(): number;
    id(): number;
    setDataType(arg0: EntityDataType): void;
    setDataTypeUnsafe(arg0: EntityDataType): void;
    setId(arg0: number): void;
    setTypeAndValue(arg0: EntityDataType, arg1: Object): void;
    setValue(arg0: Object): void;
    toString(): string;
    value<T extends Object | number | string | boolean>(): T;
}