import type { ValueGroup } from '../../../../../net/ccbluex/liquidbounce/config/types/group/ValueGroup.d.ts'
import type { MinecraftShortcuts } from '../../../../../net/ccbluex/liquidbounce/features/module/MinecraftShortcuts.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { AttackRange } from '../../../../../net/minecraft/world/item/component/AttackRange.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
/**
 * Allows adjusting your attack range and scan range.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/0f34808bf6954ff6126dde353ff9e896eb4a2ead/src/main/kotlin/net/ccbluex/liquidbounce/utils/range/RangeValueGroup.kt#L35 | src/main/kotlin/net/ccbluex/liquidbounce/utils/range/RangeValueGroup.kt:35}
 */
export class RangeValueGroup extends ValueGroup implements MinecraftShortcuts {
    constructor(name: string, maxRangeIncrease: number, throughWallsRange: number)
    /**
     * @see net.minecraft.world.entity.player.Player.entityInteractionRange
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/0f34808bf6954ff6126dde353ff9e896eb4a2ead/src/main/kotlin/net/ccbluex/liquidbounce/utils/range/RangeValueGroup.kt#L44 | src/main/kotlin/net/ccbluex/liquidbounce/utils/range/RangeValueGroup.kt:44}
     */
    readonly interactionRange: number;
    readonly interactionThroughWallsRange: number;
    // private maxRangeIncrease: number;
    // private /*not mapped: */ getMaxRangeIncrease(): number;
    // private throughWallsRange: number;
    // private /*not mapped: */ getThroughWallsRange(): number;
    adjustAttackRange(attackRange: AttackRange): AttackRange;
    getAttackRange(itemStack: ItemStack): AttackRange;
    isInRange(itemStack: ItemStack, pos: Vec3): boolean;
}