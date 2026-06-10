import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ResourceKey } from '../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { Enchantment } from '../../../../../net/minecraft/world/item/enchantment/Enchantment.d.ts'
export class ItemStackComparatorsKt extends Object {
    static COMPARING_DESCRIPTION_ID: (param0: Object) => boolean;
    static asHolderComparator(comparator: (param0: Object) => boolean): (param0: Object) => boolean;
    static comparingEnchantmentLevel(key: ResourceKey<Enchantment>): (param0: Object) => boolean;
}