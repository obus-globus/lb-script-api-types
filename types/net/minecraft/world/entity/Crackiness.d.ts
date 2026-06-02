import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Crackiness$Level } from '../../../../net/minecraft/world/entity/Crackiness$Level.d.ts'
import type { ItemStack } from '../../../../net/minecraft/world/item/ItemStack.d.ts'
export class Crackiness extends Object {
    static GOLEM: Crackiness;
    static WOLF_ARMOR: Crackiness;
    private constructor(fractionLow: number, fractionMedium: number, fractionHigh: number)
    // private fractionHigh: number;
    // private fractionLow: number;
    // private fractionMedium: number;
    byDamage(damage: number, maxDamage: number): Crackiness$Level;
    byDamage(item: ItemStack): Crackiness$Level;
    byFraction(fraction: number): Crackiness$Level;
}