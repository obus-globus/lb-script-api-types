import type { UUID } from '../../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Entity } from '../../../../../net/minecraft/world/entity/Entity.d.ts'
export class DebugEntityNameGenerator extends Object {
    static getEntityName(paramuuid: UUID): string;
    static getEntityName(paramentity: Entity): string;
    constructor()
}