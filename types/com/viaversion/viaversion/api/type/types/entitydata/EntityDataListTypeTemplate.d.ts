import type { EntityData } from '../../../../../../../com/viaversion/viaversion/api/minecraft/entitydata/EntityData.d.ts'
import type { Type } from '../../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export abstract class EntityDataListTypeTemplate extends Type<EntityData[]> {
    constructor()
    getBaseClass(): Class<Type<Object>>;
}