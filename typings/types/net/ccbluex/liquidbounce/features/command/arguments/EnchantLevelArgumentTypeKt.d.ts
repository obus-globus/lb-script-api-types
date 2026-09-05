import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { EnchantLevel } from '../../../../../../net/ccbluex/liquidbounce/features/command/arguments/EnchantLevel.d.ts'
export class EnchantLevelArgumentTypeKt extends Object {
    /**
     * Renders this parsed level for the command result message: `max` stays the keyword,
     * an explicit level prints as its number.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/64f9c02ca90d2728f0d1fffd459b622eb8239747/src/main/kotlin/net/ccbluex/liquidbounce/features/command/arguments/EnchantLevelArgumentType.kt#L95 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/arguments/EnchantLevelArgumentType.kt:95}
     */
    static render(self: EnchantLevel): string;
    /**
     * Resolves this parsed level against an enchantment holder: {@link EnchantLevel.Max} becomes
     * the enchantment's own maximum, an explicit level passes through unchanged.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/64f9c02ca90d2728f0d1fffd459b622eb8239747/src/main/kotlin/net/ccbluex/liquidbounce/features/command/arguments/EnchantLevelArgumentType.kt#L86 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/arguments/EnchantLevelArgumentType.kt:86}
     */
    static resolve(self: EnchantLevel, maxLevelOf: () => number): number | null;
}