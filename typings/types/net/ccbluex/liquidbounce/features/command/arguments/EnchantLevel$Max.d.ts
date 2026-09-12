import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { EnchantLevel } from '../../../../../../net/ccbluex/liquidbounce/features/command/arguments/EnchantLevel.d.ts'
/**
 * The enchantment's highest level; always resolves through the holder at use time.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/f0d427e933b0c39374cea4bd371582db202074f3/src/main/kotlin/net/ccbluex/liquidbounce/features/command/arguments/EnchantLevelArgumentType.kt#L34 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/arguments/EnchantLevelArgumentType.kt:34}
 */
export class EnchantLevel$Max extends Object implements EnchantLevel {
    static INSTANCE: EnchantLevel$Max;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}