import type { EntityData } from '../../../../../../../com/viaversion/viaversion/api/minecraft/entitydata/EntityData.d.ts'
import type { EntityDataTypes1_19_3 } from '../../../../../../../com/viaversion/viaversion/api/minecraft/entitydata/types/EntityDataTypes1_19_3.d.ts'
import type { Type } from '../../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { ParticleType } from '../../../../../../../com/viaversion/viaversion/api/type/types/misc/ParticleType.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class Types1_19_3 extends Object {
    static ENTITY_DATA: Type<EntityData>;
    static ENTITY_DATA_LIST: Type<Object>;
    static ENTITY_DATA_TYPES: EntityDataTypes1_19_3;
    static PARTICLE: ParticleType;
    constructor()
}