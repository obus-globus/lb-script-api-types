import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { EnchantLevel } from '../../../../../../net/ccbluex/liquidbounce/features/command/arguments/EnchantLevel.d.ts'
/**
 * An explicit positive level, used as-is (may exceed the enchantment's max).
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cc3ab309a7c1e7125c4a36b872e8efed54294ecc/src/main/kotlin/net/ccbluex/liquidbounce/features/command/arguments/EnchantLevelArgumentType.kt#L37 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/arguments/EnchantLevelArgumentType.kt:37}
 */
export class EnchantLevel$Explicit extends Record implements EnchantLevel {
    constructor(level: number)
    // private level: number;
    /*not mapped: */ level(): number;
    component1(): number;
    copy(level: number): EnchantLevel$Explicit;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}