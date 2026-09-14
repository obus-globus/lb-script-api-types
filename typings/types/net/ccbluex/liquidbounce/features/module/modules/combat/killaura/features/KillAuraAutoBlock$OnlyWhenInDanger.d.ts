import type { ClosedFloatingPointRange } from '../../../../../../../../../kotlin/ranges/ClosedFloatingPointRange.d.ts'
import type { ToggleableValueGroup } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
/**
 * Check if we are in danger by going through all possible targets and checking if they are looking at us.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e1d0801ab2d0c9362f03f42cbfac7b36a2a05b6a/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/killaura/features/KillAuraAutoBlock.kt#L112 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/killaura/features/KillAuraAutoBlock.kt:112}
 */
export class KillAuraAutoBlock$OnlyWhenInDanger extends ToggleableValueGroup {
    static INSTANCE: KillAuraAutoBlock$OnlyWhenInDanger;
    // private forceActiveRange: ClosedFloatingPointRange<number>;
    // private /*not mapped: */ getForceActiveRange(): ClosedFloatingPointRange<number>;
    // private tolerance: number;
    // private /*not mapped: */ getTolerance(): number;
    isInDanger(): boolean;
}