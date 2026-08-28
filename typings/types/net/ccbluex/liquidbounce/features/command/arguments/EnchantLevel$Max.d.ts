import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { EnchantLevel } from '../../../../../../net/ccbluex/liquidbounce/features/command/arguments/EnchantLevel.d.ts'
/**
 * The enchantment's highest level; always resolves through the holder at use time.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cc3ab309a7c1e7125c4a36b872e8efed54294ecc/src/main/kotlin/net/ccbluex/liquidbounce/features/command/arguments/EnchantLevelArgumentType.kt#L34 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/arguments/EnchantLevelArgumentType.kt:34}
 */
export class EnchantLevel$Max extends Object implements EnchantLevel {
    static INSTANCE: EnchantLevel$Max;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}