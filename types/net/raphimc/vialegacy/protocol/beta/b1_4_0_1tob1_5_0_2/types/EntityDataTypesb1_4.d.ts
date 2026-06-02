import type { EntityDataType } from '../../../../../../../com/viaversion/viaversion/api/minecraft/entitydata/EntityDataType.d.ts'
import type { Type } from '../../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class EntityDataTypesb1_4 extends Enum<EntityDataTypesb1_4> implements EntityDataType {
    static BLOCK_POSITION: EntityDataTypesb1_4;
    static BYTE: EntityDataTypesb1_4;
    static FLOAT: EntityDataTypesb1_4;
    static INT: EntityDataTypesb1_4;
    static ITEM: EntityDataTypesb1_4;
    static SHORT: EntityDataTypesb1_4;
    static STRING: EntityDataTypesb1_4;
    static byId(paramarg0: number): EntityDataTypesb1_4;
    static create(paramarg0: number, paramarg1: Type<Object>): EntityDataType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): EntityDataTypesb1_4;
    static values(): (Object | null)[];
    private constructor(arg2: number, arg3: Type<Object>)
    // private type: Type<Object>;
    // private typeID: number;
    type(): Type<Object>;
    typeId(): number;
    name(): "BYTE" | "SHORT" | "INT" | "FLOAT" | "STRING" | "ITEM" | "BLOCK_POSITION";
}