import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { PathfinderMob } from '../../../../../../net/minecraft/world/entity/PathfinderMob.d.ts'
import type { OneShot } from '../../../../../../net/minecraft/world/entity/ai/behavior/OneShot.d.ts'
export class VillageBoundRandomStroll extends Object {
    static create(paramspeedModifier: number): OneShot<PathfinderMob>;
    static create(paramspeedModifier: number, parammaxXyDist: number, parammaxYDist: number): OneShot<PathfinderMob>;
    constructor()
}