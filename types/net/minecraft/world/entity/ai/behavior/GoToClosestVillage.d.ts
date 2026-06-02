import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BehaviorControl } from '../../../../../../net/minecraft/world/entity/ai/behavior/BehaviorControl.d.ts'
import type { Villager } from '../../../../../../net/minecraft/world/entity/npc/villager/Villager.d.ts'
export class GoToClosestVillage extends Object {
    static create(paramspeedModifier: number, paramcloseEnoughDistance: number): BehaviorControl<Villager>;
    constructor()
}