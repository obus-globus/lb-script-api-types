import type { EntityDataType } from '../../../../../../../com/viaversion/viaversion/api/minecraft/entitydata/EntityDataType.d.ts'
import type { Type } from '../../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class EntityDataTypes1_12 extends Enum<EntityDataTypes1_12> implements EntityDataType {
    static BLOCK_POSITION: EntityDataTypes1_12;
    static BOOLEAN: EntityDataTypes1_12;
    static BYTE: EntityDataTypes1_12;
    static COMPONENT: EntityDataTypes1_12;
    static COMPOUND_TAG: EntityDataTypes1_12;
    static DIRECTION: EntityDataTypes1_12;
    static FLOAT: EntityDataTypes1_12;
    static ITEM: EntityDataTypes1_12;
    static OPTIONAL_BLOCK_POSITION: EntityDataTypes1_12;
    static OPTIONAL_BLOCK_STATE: EntityDataTypes1_12;
    static OPTIONAL_UUID: EntityDataTypes1_12;
    static ROTATIONS: EntityDataTypes1_12;
    static STRING: EntityDataTypes1_12;
    static VAR_INT: EntityDataTypes1_12;
    static byId(paramarg0: number): EntityDataTypes1_12;
    static create(paramarg0: number, paramarg1: Type<Object>): EntityDataType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): EntityDataTypes1_12;
    static values(): EntityDataTypes1_12[];
    private constructor(arg2: Type<Object>)
    // private type: Type<Object>;
    type(): Type<Object>;
    typeId(): number;
    name(): "BYTE" | "VAR_INT" | "FLOAT" | "STRING" | "COMPONENT" | "ITEM" | "BOOLEAN" | "ROTATIONS" | "BLOCK_POSITION" | "OPTIONAL_BLOCK_POSITION" | "DIRECTION" | "OPTIONAL_UUID" | "OPTIONAL_BLOCK_STATE" | "COMPOUND_TAG";
}