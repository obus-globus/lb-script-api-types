import type { ClosedFloatingPointRange } from '../../../../../kotlin/ranges/ClosedFloatingPointRange.d.ts'
import type { ValueGroup } from '../../../../../net/ccbluex/liquidbounce/config/types/group/ValueGroup.d.ts'
export class ItemCooldown extends ValueGroup {
    constructor()
    // private minimumCooldown: ClosedFloatingPointRange<number>;
    // private /*not mapped: */ getMinimumCooldown(): ClosedFloatingPointRange<number>;
    // private nextCooldown: number;
    /**
     * Calculates the current cooldown progress.
     *
     * This can be out of percentage range [0, 1] to allow for higher minimum cooldowns.
     *
     * @see Player.getAttackStrengthScale
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a459e42039d5ec52f278233774c8880408bcf2a6/src/main/kotlin/net/ccbluex/liquidbounce/utils/clicking/ItemCooldown.kt#L44 | src/main/kotlin/net/ccbluex/liquidbounce/utils/clicking/ItemCooldown.kt:44}
     */
    cooldownProgress(baseTime: number): number;
    isCooldownPassed(ticks: number): boolean;
    /**
     * Generates a new cooldown based on the range that was set by the user.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a459e42039d5ec52f278233774c8880408bcf2a6/src/main/kotlin/net/ccbluex/liquidbounce/utils/clicking/ItemCooldown.kt#L50 | src/main/kotlin/net/ccbluex/liquidbounce/utils/clicking/ItemCooldown.kt:50}
     */
    newCooldown(): void;
}