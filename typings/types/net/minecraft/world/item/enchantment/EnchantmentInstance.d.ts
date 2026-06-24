import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../net/minecraft/core/Holder.d.ts'
import type { Enchantment } from '../../../../../net/minecraft/world/item/enchantment/Enchantment.d.ts'
export class EnchantmentInstance extends Record {
    constructor(enchantment: Holder<Enchantment>, level: number)
    // private enchantment: Holder<Enchantment>;
    // private level: number;
    enchantment(): Holder<Enchantment>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    level(): number;
    toString(): string;
    weight(): number;
}