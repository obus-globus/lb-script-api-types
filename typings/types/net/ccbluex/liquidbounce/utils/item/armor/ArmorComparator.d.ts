import type { Comparator } from '../../../../../../java/util/Comparator.d.ts'
import type { Function } from '../../../../../../java/util/function/Function.d.ts'
import type { ToDoubleFunction } from '../../../../../../java/util/function/ToDoubleFunction.d.ts'
import type { ToIntFunction } from '../../../../../../java/util/function/ToIntFunction.d.ts'
import type { ToLongFunction } from '../../../../../../java/util/function/ToLongFunction.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../../java/lang/Comparable.d.ts'
import type { ArmorComparator$Companion } from '../../../../../../net/ccbluex/liquidbounce/utils/item/armor/ArmorComparator$Companion.d.ts'
import type { ArmorKitParameters } from '../../../../../../net/ccbluex/liquidbounce/utils/item/armor/ArmorKitParameters.d.ts'
import type { ArmorPiece } from '../../../../../../net/ccbluex/liquidbounce/utils/item/armor/ArmorPiece.d.ts'
import type { ComparatorChain } from '../../../../../../net/ccbluex/liquidbounce/utils/sorting/ComparatorChain.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
/**
 * Compares armor pieces by their damage reduction.
 *
 * @property expectedDamage armor might have different damage reduction behaviour based on damage. Thus, the expected
 * damage has to be provided.
 * @property armorKitParametersForSlot armor (i.e. iron with Protection II vs plain diamond) behaves differently based
 * on the other armor pieces. Thus, the expected defense points and toughness have to be provided. Since those are
 * dependent on the other armor pieces, the armor parameters have to be provided slot-wise.
 * @property durabilityThreshold the minimum durability an armor piece must have to be prioritized for use.
 * If an armor piece's remaining durability is lower than this threshold,
 * the piece is not prioritized anymore, and it can be replaced with another piece
 * so that this piece can be preserved.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a9cf2b145901ecd37d3f2a815c20cf0955e76853/src/main/kotlin/net/ccbluex/liquidbounce/utils/item/armor/ArmorComparator.kt#L100 | src/main/kotlin/net/ccbluex/liquidbounce/utils/item/armor/ArmorComparator.kt:100}
 */
export class ArmorComparator extends Object implements Comparator<ArmorPiece> {
    static Companion: ArmorComparator$Companion;
    protected constructor()
    // private armorKitParametersForSlot: ArmorKitParameters;
    // private comparator: ComparatorChain<ArmorPiece>;
    // private durabilityThreshold: number;
    // private expectedDamage: number;
    compare(o1: ArmorPiece, o2: ArmorPiece): number;
    /**
     * Calculates the base damage factor (totalDamage = damage x damageFactor).
     *
     * See https://minecraft.fandom.com/wiki/Armor#Mechanics.
     *
     * @param damage the expected damage (the damage reduction depends on the dealt damage)
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a9cf2b145901ecd37d3f2a815c20cf0955e76853/src/main/kotlin/net/ccbluex/liquidbounce/utils/item/armor/ArmorComparator.kt#L155 | src/main/kotlin/net/ccbluex/liquidbounce/utils/item/armor/ArmorComparator.kt:155}
     */
    getDamageFactor(damage: number, defensePoints: number, toughness: number): number;
    // private getEnchantmentThreshold(itemStack: ItemStack): number;
    // private getThresholdedDamageReduction(itemStack: ItemStack): number;
    getThresholdedEnchantmentDamageReduction(itemStack: ItemStack): number;
    reversed(): (param0: ArmorPiece, param1: ArmorPiece) => number;
    thenComparing(arg0: (param0: ArmorPiece, param1: ArmorPiece) => number): (param0: ArmorPiece, param1: ArmorPiece) => number;
    thenComparing<U extends Comparable<U>>(arg0: (param0: ArmorPiece) => U): (param0: ArmorPiece, param1: ArmorPiece) => number;
    thenComparing<U extends unknown>(arg0: (param0: ArmorPiece) => U, arg1: (param0: U, param1: U) => number): (param0: ArmorPiece, param1: ArmorPiece) => number;
    thenComparingDouble(arg0: (param0: ArmorPiece) => number): (param0: ArmorPiece, param1: ArmorPiece) => number;
    thenComparingInt(arg0: (param0: ArmorPiece) => number): (param0: ArmorPiece, param1: ArmorPiece) => number;
    thenComparingLong(arg0: (param0: ArmorPiece) => number): (param0: ArmorPiece, param1: ArmorPiece) => number;
}