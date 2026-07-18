import type { ToggleableValueGroup } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
import type { Vec2 } from '../../../../../../../../net/minecraft/world/phys/Vec2.d.ts'
/**
 * @see UseEffects
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1f8feafa08d369aac1d83c7e0e334da0690fd875/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/noslow/NoSlowUseActionHandler.kt#L29 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/noslow/NoSlowUseActionHandler.kt:29}
 */
export abstract class NoSlowUseActionHandler extends ToggleableValueGroup {
    constructor(name: string)
    // private forwardMultiplier: number;
    // private /*not mapped: */ getForwardMultiplier(): number;
    // private sidewaysMultiplier: number;
    // private /*not mapped: */ getSidewaysMultiplier(): number;
    getMultiplier(forward: number, sideways: number): Vec2;
}