import type { EntityDataType } from '../../../../../../../com/viaversion/viaversion/api/minecraft/entitydata/EntityDataType.d.ts'
import type { Type } from '../../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class EntityDataTypes1_7_6 extends Enum<EntityDataTypes1_7_6> implements EntityDataType {
    static BLOCK_POSITION: EntityDataTypes1_7_6;
    static BYTE: EntityDataTypes1_7_6;
    static FLOAT: EntityDataTypes1_7_6;
    static INT: EntityDataTypes1_7_6;
    static ITEM: EntityDataTypes1_7_6;
    static SHORT: EntityDataTypes1_7_6;
    static STRING: EntityDataTypes1_7_6;
    static byId(paramarg0: number): EntityDataTypes1_7_6;
    static create(paramarg0: number, paramarg1: Type<Object>): EntityDataType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): EntityDataTypes1_7_6;
    static values(): (Object | null)[];
    private constructor(arg2: number, arg3: Type<Object>)
    // private type: Type<Object>;
    // private typeID: number;
    type(): Type<Object>;
    typeId(): number;
    name(): "BYTE" | "SHORT" | "INT" | "FLOAT" | "STRING" | "ITEM" | "BLOCK_POSITION";
}