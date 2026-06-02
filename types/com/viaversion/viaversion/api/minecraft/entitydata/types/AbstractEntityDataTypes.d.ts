import type { EntityDataType } from '../../../../../../../com/viaversion/viaversion/api/minecraft/entitydata/EntityDataType.d.ts'
import type { EntityDataTypes } from '../../../../../../../com/viaversion/viaversion/api/minecraft/entitydata/types/EntityDataTypes.d.ts'
import type { Type } from '../../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export abstract class AbstractEntityDataTypes extends Object implements EntityDataTypes {
    constructor(arg0: number)
    // private values: EntityDataType[];
    add(arg0: number, arg1: Type<Object>): EntityDataType;
    byId(arg0: number): EntityDataType;
    getDataTypeClass(): Class<EntityDataType>;
    values(): EntityDataType[];
}