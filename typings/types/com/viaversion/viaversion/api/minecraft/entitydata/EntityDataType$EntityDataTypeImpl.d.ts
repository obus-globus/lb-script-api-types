import type { EntityDataType } from '../../../../../../com/viaversion/viaversion/api/minecraft/entitydata/EntityDataType.d.ts'
import type { Type } from '../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class EntityDataType$EntityDataTypeImpl extends Object implements EntityDataType {
    constructor(arg0: number, arg1: Type<Object>)
    // private type: Type<Object>;
    // private typeId: number;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    toString(): string;
    type(): Type<Object>;
    typeId(): number;
}