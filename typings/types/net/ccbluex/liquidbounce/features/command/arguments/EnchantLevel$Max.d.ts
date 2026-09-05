import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { EnchantLevel } from '../../../../../../net/ccbluex/liquidbounce/features/command/arguments/EnchantLevel.d.ts'
/**
 * The enchantment's highest level; always resolves through the holder at use time.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/64f9c02ca90d2728f0d1fffd459b622eb8239747/src/main/kotlin/net/ccbluex/liquidbounce/features/command/arguments/EnchantLevelArgumentType.kt#L34 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/arguments/EnchantLevelArgumentType.kt:34}
 */
export class EnchantLevel$Max extends Object implements EnchantLevel {
    static INSTANCE: EnchantLevel$Max;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}