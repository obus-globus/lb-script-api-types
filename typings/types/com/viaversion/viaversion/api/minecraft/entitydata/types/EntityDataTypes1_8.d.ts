import type { EntityDataType } from '../../../../../../../com/viaversion/viaversion/api/minecraft/entitydata/EntityDataType.d.ts'
import type { Type } from '../../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class EntityDataTypes1_8 extends Enum<EntityDataTypes1_8> implements EntityDataType {
    static BLOCK_POSITION: EntityDataTypes1_8;
    static BYTE: EntityDataTypes1_8;
    static FLOAT: EntityDataTypes1_8;
    static INT: EntityDataTypes1_8;
    static ITEM: EntityDataTypes1_8;
    static ROTATIONS: EntityDataTypes1_8;
    static SHORT: EntityDataTypes1_8;
    static STRING: EntityDataTypes1_8;
    static byId(paramarg0: number): EntityDataTypes1_8;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): EntityDataTypes1_8;
    static values(): EntityDataTypes1_8[];
    private constructor(arg2: Type<Object>)
    // private type: Type<Object>;
    type(): Type<Object>;
    typeId(): number;
    name(): "BYTE" | "SHORT" | "INT" | "FLOAT" | "STRING" | "ITEM" | "BLOCK_POSITION" | "ROTATIONS";
}