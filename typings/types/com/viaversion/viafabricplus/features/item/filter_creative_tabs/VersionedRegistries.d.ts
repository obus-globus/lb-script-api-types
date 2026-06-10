import type { ProtocolVersion } from '../../../../../../com/viaversion/viaversion/api/protocol/version/ProtocolVersion.d.ts'
import type { ProtocolVersionRange } from '../../../../../../com/viaversion/viaversion/api/protocol/version/ProtocolVersionRange.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../../net/minecraft/core/Holder.d.ts'
import type { ResourceKey } from '../../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { MobEffect } from '../../../../../../net/minecraft/world/effect/MobEffect.d.ts'
import type { Item } from '../../../../../../net/minecraft/world/item/Item.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { Enchantment } from '../../../../../../net/minecraft/world/item/enchantment/Enchantment.d.ts'
import type { BannerPattern } from '../../../../../../net/minecraft/world/level/block/entity/BannerPattern.d.ts'
export class VersionedRegistries extends Object {
    static EFFECT_DIFF: Map<Holder<MobEffect>, ProtocolVersionRange>;
    static ENCHANTMENT_DIFF: Map<ResourceKey<Enchantment>, ProtocolVersionRange>;
    static ITEM_DIFF: Map<Item, ProtocolVersionRange>;
    static PATTERN_DIFF: Map<ResourceKey<BannerPattern>, ProtocolVersionRange>;
    static containsBannerPattern(paramarg0: ResourceKey<BannerPattern>, paramarg1: ProtocolVersion): boolean;
    static containsEffect(paramarg0: Holder<MobEffect>, paramarg1: ProtocolVersion): boolean;
    static containsEnchantment(paramarg0: ResourceKey<Enchantment>, paramarg1: ProtocolVersion): boolean;
    static containsItem(paramarg0: Item, paramarg1: ProtocolVersion): boolean;
    static init(): void;
    static keepItem(paramarg0: Item): boolean;
    static keepItem(paramarg0: ItemStack): boolean;
    constructor()
}