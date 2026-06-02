import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { PathfinderMob } from '../../../../../../net/minecraft/world/entity/PathfinderMob.d.ts'
import type { BehaviorControl } from '../../../../../../net/minecraft/world/entity/ai/behavior/BehaviorControl.d.ts'
import type { OneShot } from '../../../../../../net/minecraft/world/entity/ai/behavior/OneShot.d.ts'
export class RandomStroll extends Object {
    static fly(paramspeedModifier: number): BehaviorControl<PathfinderMob>;
    static stroll(paramspeedModifier: number, parammaxHorizontalDistance: number, parammaxVerticalDistance: number): BehaviorControl<PathfinderMob>;
    static stroll(paramspeedModifier: number): OneShot<PathfinderMob>;
    static stroll(paramspeedModifier: number, parammayStrollFromWater: boolean): OneShot<PathfinderMob>;
    static swim(paramspeedModifier: number): BehaviorControl<PathfinderMob>;
    constructor()
}