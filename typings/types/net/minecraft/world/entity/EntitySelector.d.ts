import type { Predicate } from '../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Entity } from '../../../../net/minecraft/world/entity/Entity.d.ts'
export class EntitySelector extends Object {
    static CAN_BE_COLLIDED_WITH: (param0: Entity) => kotlin.Boolean;
    static CAN_BE_PICKED: (param0: Entity) => kotlin.Boolean;
    static CONTAINER_ENTITY_SELECTOR: (param0: Entity) => kotlin.Boolean;
    static ENTITY_NOT_BEING_RIDDEN: (param0: Entity) => kotlin.Boolean;
    static ENTITY_STILL_ALIVE: (param0: Entity) => kotlin.Boolean;
    static LIVING_ENTITY_STILL_ALIVE: (param0: Entity) => kotlin.Boolean;
    static NO_CREATIVE_OR_SPECTATOR: (param0: Entity) => kotlin.Boolean;
    static NO_SPECTATORS: (param0: Entity) => kotlin.Boolean;
    static notRiding(paramentity: Entity): (param0: Entity) => kotlin.Boolean;
    static pushableBy(paramentity: Entity): (param0: Entity) => kotlin.Boolean;
    static withinDistance(paramcenterX: number, paramcenterY: number, paramcenterZ: number, paramdistance: number): (param0: Entity) => kotlin.Boolean;
    private constructor()
}