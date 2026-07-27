import type { AutoFarmTrackedState } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/world/autofarm/AutoFarmTrackedState.d.ts'
import type { NavigationBaseValueGroup } from '../../../../../../../../net/ccbluex/liquidbounce/utils/navigation/NavigationBaseValueGroup.d.ts'
import type { Vec3 } from '../../../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class AutoFarmAutoWalk extends NavigationBaseValueGroup<Vec3> {
    static INSTANCE: AutoFarmAutoWalk;
    // private invHadSpace: boolean;
    // private minimumDistance: number;
    // private /*not mapped: */ getMinimumDistance(): number;
    // private toPlant: boolean;
    // private /*not mapped: */ getToPlant(): boolean;
    readonly walkTarget: Vec3 | null;
    protected calculateGoalPosition(context: Vec3 | null): Vec3 | null;
    // private collectAllowedStates(): AutoFarmTrackedState[];
    protected createNavigationContext(): Vec3 | null;
    // private findWalkTarget(invHasSpace: boolean): Vec3 | null;
    // private findWalkToBlock(): Vec3 | null;
    // private findWalkToItem(): Vec3 | null;
}