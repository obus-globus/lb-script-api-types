import type { EntityDataType } from '../../../../../../../com/viaversion/viaversion/api/minecraft/entitydata/EntityDataType.d.ts'
import type { AbstractEntityDataTypes } from '../../../../../../../com/viaversion/viaversion/api/minecraft/entitydata/types/AbstractEntityDataTypes.d.ts'
import type { ParticleType } from '../../../../../../../com/viaversion/viaversion/api/type/types/misc/ParticleType.d.ts'
export class EntityDataTypes1_13 extends AbstractEntityDataTypes {
    constructor(arg0: ParticleType)
    blockPositionType: EntityDataType;
    booleanType: EntityDataType;
    byteType: EntityDataType;
    componentType: EntityDataType;
    compoundTagType: EntityDataType;
    directionType: EntityDataType;
    floatType: EntityDataType;
    itemType: EntityDataType;
    optionalBlockPositionType: EntityDataType;
    optionalBlockStateType: EntityDataType;
    optionalComponentType: EntityDataType;
    optionalUUIDType: EntityDataType;
    particleType: EntityDataType;
    rotationsType: EntityDataType;
    stringType: EntityDataType;
    varIntType: EntityDataType;
}