import type { EntityDataType } from '../../../../../../../com/viaversion/viaversion/api/minecraft/entitydata/EntityDataType.d.ts'
import type { Type } from '../../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class EntityDataTypes1_4_2 extends Enum<EntityDataTypes1_4_2> implements EntityDataType {
    static BLOCK_POSITION: EntityDataTypes1_4_2;
    static BYTE: EntityDataTypes1_4_2;
    static FLOAT: EntityDataTypes1_4_2;
    static INT: EntityDataTypes1_4_2;
    static ITEM: EntityDataTypes1_4_2;
    static SHORT: EntityDataTypes1_4_2;
    static STRING: EntityDataTypes1_4_2;
    static byId(paramarg0: number): EntityDataTypes1_4_2;
    static create(paramarg0: number, paramarg1: Type<Object>): EntityDataType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): EntityDataTypes1_4_2;
    static values(): EntityDataTypes1_4_2[];
    private constructor(arg2: number, arg3: Type<Object>)
    // private type: Type<Object>;
    // private typeID: number;
    type(): Type<Object>;
    typeId(): number;
    name(): "BYTE" | "SHORT" | "INT" | "FLOAT" | "STRING" | "ITEM" | "BLOCK_POSITION";
}