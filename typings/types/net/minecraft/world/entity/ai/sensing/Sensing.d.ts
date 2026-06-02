import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Entity } from '../../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { Mob } from '../../../../../../net/minecraft/world/entity/Mob.d.ts'
export class Sensing extends Object {
    constructor(mob: Mob)
    // private mob: Mob;
    // private seen: (Object | null)[];
    // private unseen: (Object | null)[];
    hasLineOfSight(target: Entity): boolean;
    tick(): void;
}