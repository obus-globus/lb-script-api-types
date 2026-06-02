import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../../net/minecraft/core/Holder.d.ts'
import type { VillagerProfession } from '../../../../../../net/minecraft/world/entity/npc/villager/VillagerProfession.d.ts'
export class VillagerGoalPackages extends Object {
    static INTERACT_DIST_SQR: number;
    static INTERACT_SPEED_MODIFIER: number;
    static INTERACT_WALKUP_DIST: number;
    static getCorePackage(paramprofession: Holder<VillagerProfession>, paramspeedModifier: number): (Object | null)[];
    static getHidePackage(paramspeedModifier: number): (Object | null)[];
    static getIdlePackage(paramspeedModifier: number): (Object | null)[];
    static getMeetPackage(paramspeedModifier: number): (Object | null)[];
    static getPanicPackage(paramspeedModifier: number): (Object | null)[];
    static getPlayPackage(paramspeedModifier: number): (Object | null)[];
    static getPreRaidPackage(paramspeedModifier: number): (Object | null)[];
    static getRaidPackage(paramspeedModifier: number): (Object | null)[];
    static getRestPackage(paramspeedModifier: number): (Object | null)[];
    static getWorkPackage(paramprofession: Holder<VillagerProfession>, paramspeedModifier: number): (Object | null)[];
    constructor()
}