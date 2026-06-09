import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Entity } from '../../../../../net/minecraft/world/entity/Entity.d.ts'
export interface TeleportTransition$PostTeleportTransition extends Object {
    onTransition(entity: Entity): void;
    then(postTeleportTransition: (param0: Entity) => void): (param0: Entity) => void;
}