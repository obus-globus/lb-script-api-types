import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { MinecraftShortcuts } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/MinecraftShortcuts.d.ts'
import type { DodgePlan } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/movement/autododge/DodgePlan.d.ts'
import type { DodgePlanner$Companion } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/movement/autododge/DodgePlanner$Companion.d.ts'
import type { DodgePlannerConfig } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/movement/autododge/DodgePlannerConfig.d.ts'
import type { ModuleAutoDodge$HitInfo } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/movement/autododge/ModuleAutoDodge$HitInfo.d.ts'
import type { Vec3 } from '../../../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class DodgePlanner extends Object implements MinecraftShortcuts {
    static Companion: DodgePlanner$Companion;
    static SAFE_DISTANCE: number;
    static SAFE_DISTANCE_WITH_PADDING: number;
    constructor(config: DodgePlannerConfig, hypotheticalHit: ModuleAutoDodge$HitInfo, distanceToArrowLine: number, optimalDodgePosRelativeToPlayer: Vec3)
    // private config: DodgePlannerConfig;
    // private distanceToArrowLine: number;
    // private hypotheticalHit: ModuleAutoDodge$HitInfo;
    // private optimalDodgePosRelativeToPlayer: Vec3;
    // private escalateIfNeeded(dodgePlanWithoutRotationChange: DodgePlan): DodgePlan | null;
    // private getEffectiveLossByInoptimalAngle(actualAngle: number): number;
    plan(): DodgePlan;
    // private planWithRotations(distanceToTravel: number, actualTimeToImpact: number, useTimer: boolean): DodgePlan;
    // private shouldUseTimer(distanceToTravel: number, actualTimeToImpact: number): boolean;
    // private similarity(a: Vec3, b: Vec3): number;
}