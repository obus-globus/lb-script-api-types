import type { EntityData } from '../../../../../../../com/viaversion/viaversion/api/minecraft/entitydata/EntityData.d.ts'
import type { EntityDataTypes1_13 } from '../../../../../../../com/viaversion/viaversion/api/minecraft/entitydata/types/EntityDataTypes1_13.d.ts'
import type { Type } from '../../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { ParticleType } from '../../../../../../../com/viaversion/viaversion/api/type/types/misc/ParticleType.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class Types1_13 extends Object {
    static ENTITY_DATA: Type<EntityData>;
    static ENTITY_DATA_LIST: Type<EntityData[]>;
    static ENTITY_DATA_TYPES: EntityDataTypes1_13;
    static PARTICLE: ParticleType;
    constructor()
}