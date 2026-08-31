import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { EnchantLevel } from '../../../../../../net/ccbluex/liquidbounce/features/command/arguments/EnchantLevel.d.ts'
/**
 * An explicit positive level, used as-is (may exceed the enchantment's max).
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e67fdf9b70131f478c5894cf9de1f2d4aa7a95ce/src/main/kotlin/net/ccbluex/liquidbounce/features/command/arguments/EnchantLevelArgumentType.kt#L37 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/arguments/EnchantLevelArgumentType.kt:37}
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