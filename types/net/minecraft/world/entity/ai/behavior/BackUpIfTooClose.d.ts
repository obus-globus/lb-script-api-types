import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Mob } from '../../../../../../net/minecraft/world/entity/Mob.d.ts'
import type { OneShot } from '../../../../../../net/minecraft/world/entity/ai/behavior/OneShot.d.ts'
export class BackUpIfTooClose extends Object {
    static create(paramtooCloseDistance: number, paramstrafeSpeed: number): OneShot<Mob>;
    constructor()
}