import type { EntityDataType } from '../../../../../../../com/viaversion/viaversion/api/minecraft/entitydata/EntityDataType.d.ts'
import type { Type } from '../../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class EntityDataTypesb1_2 extends Enum<EntityDataTypesb1_2> implements EntityDataType {
    static BYTE: EntityDataTypesb1_2;
    static FLOAT: EntityDataTypesb1_2;
    static INT: EntityDataTypesb1_2;
    static ITEM: EntityDataTypesb1_2;
    static SHORT: EntityDataTypesb1_2;
    static STRING: EntityDataTypesb1_2;
    static byId(paramarg0: number): EntityDataTypesb1_2;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): EntityDataTypesb1_2;
    static values(): EntityDataTypesb1_2[];
    private constructor(arg2: number, arg3: Type<Object>)
    // private type: Type<Object>;
    // private typeID: number;
    type(): Type<Object>;
    typeId(): number;
    name(): "BYTE" | "SHORT" | "INT" | "FLOAT" | "STRING" | "ITEM";
}