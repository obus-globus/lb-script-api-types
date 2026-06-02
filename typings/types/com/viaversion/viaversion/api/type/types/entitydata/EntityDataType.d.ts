import type { EntityDataType } from '../../../../../../../com/viaversion/viaversion/api/minecraft/entitydata/EntityDataType.d.ts'
import type { EntityDataTypes } from '../../../../../../../com/viaversion/viaversion/api/minecraft/entitydata/types/EntityDataTypes.d.ts'
import type { ModernEntityDataType } from '../../../../../../../com/viaversion/viaversion/api/type/types/entitydata/ModernEntityDataType.d.ts'
export class EntityDataType extends ModernEntityDataType {
    constructor(arg0: EntityDataTypes)
    // private dataTypes: EntityDataTypes;
    getType(arg0: number): EntityDataType;
}