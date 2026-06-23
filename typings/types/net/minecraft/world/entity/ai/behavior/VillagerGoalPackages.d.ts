import type { Pair } from '../../../../../../com/mojang/datafixers/util/Pair.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../../net/minecraft/core/Holder.d.ts'
import type { BehaviorControl } from '../../../../../../net/minecraft/world/entity/ai/behavior/BehaviorControl.d.ts'
import type { VillagerProfession } from '../../../../../../net/minecraft/world/entity/npc/villager/VillagerProfession.d.ts'
export class VillagerGoalPackages extends Object {
    static INTERACT_DIST_SQR: number;
    static INTERACT_SPEED_MODIFIER: number;
    static INTERACT_WALKUP_DIST: number;
    static getCorePackage(paramprofession: Holder<VillagerProfession>, paramspeedModifier: number): Pair<number, BehaviorControl<any>>[];
    static getHidePackage(paramspeedModifier: number): Pair<number, BehaviorControl<any>>[];
    static getIdlePackage(paramspeedModifier: number): Pair<number, BehaviorControl<any>>[];
    static getMeetPackage(paramspeedModifier: number): Pair<number, BehaviorControl<any>>[];
    static getPanicPackage(paramspeedModifier: number): Pair<number, BehaviorControl<any>>[];
    static getPlayPackage(paramspeedModifier: number): Pair<number, BehaviorControl<any>>[];
    static getPreRaidPackage(paramspeedModifier: number): Pair<number, BehaviorControl<any>>[];
    static getRaidPackage(paramspeedModifier: number): Pair<number, BehaviorControl<any>>[];
    static getRestPackage(paramspeedModifier: number): Pair<number, BehaviorControl<any>>[];
    static getWorkPackage(paramprofession: Holder<VillagerProfession>, paramspeedModifier: number): Pair<number, BehaviorControl<any>>[];
    constructor()
}