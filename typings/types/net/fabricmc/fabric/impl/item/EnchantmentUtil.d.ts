import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { EnchantmentSource } from '../../../../../net/fabricmc/fabric/api/item/v1/EnchantmentSource.d.ts'
import type { RegistryOps$RegistryInfoLookup } from '../../../../../net/minecraft/resources/RegistryOps$RegistryInfoLookup.d.ts'
import type { ResourceKey } from '../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { Resource } from '../../../../../net/minecraft/server/packs/resources/Resource.d.ts'
import type { Enchantment } from '../../../../../net/minecraft/world/item/enchantment/Enchantment.d.ts'
export class EnchantmentUtil extends Object {
    static determineSource(paramarg0: Resource): EnchantmentSource;
    static modify(paramarg0: ResourceKey<Enchantment>, paramarg1: Enchantment, paramarg2: EnchantmentSource, paramarg3: RegistryOps$RegistryInfoLookup): Enchantment;
    private constructor()
}