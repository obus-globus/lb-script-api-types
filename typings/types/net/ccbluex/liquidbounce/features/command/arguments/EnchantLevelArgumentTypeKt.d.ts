import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { EnchantLevel } from '../../../../../../net/ccbluex/liquidbounce/features/command/arguments/EnchantLevel.d.ts'
export class EnchantLevelArgumentTypeKt extends Object {
    /**
     * Renders this parsed level for the command result message: `max` stays the keyword,
     * an explicit level prints as its number.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cc3ab309a7c1e7125c4a36b872e8efed54294ecc/src/main/kotlin/net/ccbluex/liquidbounce/features/command/arguments/EnchantLevelArgumentType.kt#L95 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/arguments/EnchantLevelArgumentType.kt:95}
     */
    static render(self: EnchantLevel): string;
    /**
     * Resolves this parsed level against an enchantment holder: {@link EnchantLevel.Max} becomes
     * the enchantment's own maximum, an explicit level passes through unchanged.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cc3ab309a7c1e7125c4a36b872e8efed54294ecc/src/main/kotlin/net/ccbluex/liquidbounce/features/command/arguments/EnchantLevelArgumentType.kt#L86 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/arguments/EnchantLevelArgumentType.kt:86}
     */
    static resolve(self: EnchantLevel, maxLevelOf: () => number): number | null;
}