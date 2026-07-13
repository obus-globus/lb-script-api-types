import type { ToggleableValueGroup } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
import type { Vec2 } from '../../../../../../../../net/minecraft/world/phys/Vec2.d.ts'
/**
 * @see UseEffects
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/3bc82a3329f49d9150e48b299ce4a5e8571a038d/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/noslow/NoSlowUseActionHandler.kt#L29 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/noslow/NoSlowUseActionHandler.kt:29}
 */
export abstract class NoSlowUseActionHandler extends ToggleableValueGroup {
    constructor(name: string)
    // private forwardMultiplier: number;
    // private /*not mapped: */ getForwardMultiplier(): number;
    // private sidewaysMultiplier: number;
    // private /*not mapped: */ getSidewaysMultiplier(): number;
    getMultiplier(forward: number, sideways: number): Vec2;
}