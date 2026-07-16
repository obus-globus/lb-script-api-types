import type { EntityDataType } from '../../../../../../com/viaversion/viaversion/api/minecraft/entitydata/EntityDataType.d.ts'
import type { Type } from '../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
import type { DataItemType } from '../../../../../../net/raphimc/viabedrock/protocol/data/enums/bedrock/generated/DataItemType.d.ts'
export class EntityDataTypesBedrock extends Enum<EntityDataTypesBedrock> implements EntityDataType {
    static BLOCK_POSITION: EntityDataTypesBedrock;
    static BYTE: EntityDataTypesBedrock;
    static FLOAT: EntityDataTypesBedrock;
    static INT: EntityDataTypesBedrock;
    static LONG: EntityDataTypesBedrock;
    static POSITION_3F: EntityDataTypesBedrock;
    static SHORT: EntityDataTypesBedrock;
    static STRING: EntityDataTypesBedrock;
    static TAG: EntityDataTypesBedrock;
    static byDataItemType(paramarg0: DataItemType): EntityDataTypesBedrock;
    static create(paramarg0: number, paramarg1: Type<Object>): EntityDataType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): EntityDataTypesBedrock;
    static values(): EntityDataTypesBedrock[];
    private constructor(arg2: DataItemType, arg3: Type<Object>)
    // private dataItemType: DataItemType;
    // private type: Type<Object>;
    dataItemType(): DataItemType;
    type(): Type<Object>;
    typeId(): number;
    name(): "BYTE" | "SHORT" | "INT" | "FLOAT" | "STRING" | "TAG" | "BLOCK_POSITION" | "LONG" | "POSITION_3F";
}