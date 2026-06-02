import type { ValueGroup } from '../../../../../net/ccbluex/liquidbounce/config/types/group/ValueGroup.d.ts'
import type { MinecraftShortcuts } from '../../../../../net/ccbluex/liquidbounce/features/module/MinecraftShortcuts.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { AttackRange } from '../../../../../net/minecraft/world/item/component/AttackRange.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
/**
 * Allows adjusting your attack range and scan range.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/utils/range/RangeValueGroup.kt#L32 | src/main/kotlin/net/ccbluex/liquidbounce/utils/range/RangeValueGroup.kt:32}
 */
export class RangeValueGroup extends ValueGroup implements MinecraftShortcuts {
    constructor(name: string, maxRangeIncrease: number, throughWallsRange: number)
    /*not mapped: */ getInteractionRange$liquidbounce(): number;
    /*not mapped: */ getInteractionThroughWallsRange$liquidbounce(): number;
    // private maxRangeIncrease: number;
    // private /*not mapped: */ getMaxRangeIncrease(): number;
    // private throughWallsRange: number;
    // private /*not mapped: */ getThroughWallsRange(): number;
    adjustAttackRange(attackRange: AttackRange): AttackRange;
    getAttackRange(itemStack: ItemStack): AttackRange;
    isInRange(itemStack: ItemStack, pos: Vec3): boolean;
}