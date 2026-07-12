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
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cd6fab2c64d4683279fb8734248e80c1cfb2b0f2/src/main/kotlin/net/ccbluex/liquidbounce/utils/item/armor/ArmorComparator.kt#L101 | src/main/kotlin/net/ccbluex/liquidbounce/utils/item/armor/ArmorComparator.kt:101}
 */
export class ArmorComparator extends Object implements Comparator<ArmorPiece> {
    static Companion: ArmorComparator$Companion;
    static comparing(paramarg0: (param0: Object) => Object | null): (param0: Object) => boolean;
    static comparing(paramarg0: (param0: Object) => Object | null, paramarg1: (param0: Object) => boolean): (param0: Object) => boolean;
    static comparingDouble(paramarg0: (param0: Object) => number): (param0: Object) => boolean;
    static comparingInt(paramarg0: (param0: Object) => number): (param0: Object) => boolean;
    static comparingLong(paramarg0: (param0: Object) => number): (param0: Object) => boolean;
    static naturalOrder(): (param0: Object) => boolean;
    static nullsFirst(paramarg0: (param0: Object) => boolean): (param0: Object) => boolean;
    static nullsLast(paramarg0: (param0: Object) => boolean): (param0: Object) => boolean;
    static reverseOrder(): (param0: Object) => boolean;
    constructor(expectedDamage: number, armorKitParametersForSlot: ArmorKitParameters, durabilityThreshold: number)
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
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cd6fab2c64d4683279fb8734248e80c1cfb2b0f2/src/main/kotlin/net/ccbluex/liquidbounce/utils/item/armor/ArmorComparator.kt#L156 | src/main/kotlin/net/ccbluex/liquidbounce/utils/item/armor/ArmorComparator.kt:156}
     */
    getDamageFactor(damage: number, defensePoints: number, toughness: number): number;
    // private getEnchantmentThreshold(itemStack: ItemStack): number;
    // private getThresholdedDamageReduction(itemStack: ItemStack): number;
    getThresholdedEnchantmentDamageReduction(itemStack: ItemStack): number;
    reversed(): (param0: Object) => boolean;
    thenComparing(arg0: (param0: Object) => boolean): (param0: Object) => boolean;
    thenComparing<U extends Comparable<U>>(arg0: (param0: ArmorPiece) => U): (param0: Object) => boolean;
    thenComparing<U extends unknown>(arg0: (param0: ArmorPiece) => U, arg1: (param0: Object) => boolean): (param0: Object) => boolean;
    thenComparingDouble(arg0: (param0: ArmorPiece) => number): (param0: Object) => boolean;
    thenComparingInt(arg0: (param0: ArmorPiece) => number): (param0: Object) => boolean;
    thenComparingLong(arg0: (param0: ArmorPiece) => number): (param0: Object) => boolean;
}