import type { MapCodec } from '../../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { ItemStack } from '../../../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { BannerPatternLayers } from '../../../../../../../net/minecraft/world/level/block/entity/BannerPatternLayers.d.ts'
import type { LootContext } from '../../../../../../../net/minecraft/world/level/storage/loot/LootContext.d.ts'
import type { LootItemConditionalFunction } from '../../../../../../../net/minecraft/world/level/storage/loot/functions/LootItemConditionalFunction.d.ts'
import type { SetBannerPatternFunction$Builder } from '../../../../../../../net/minecraft/world/level/storage/loot/functions/SetBannerPatternFunction$Builder.d.ts'
import type { LootItemCondition } from '../../../../../../../net/minecraft/world/level/storage/loot/predicates/LootItemCondition.d.ts'
export class SetBannerPatternFunction extends LootItemConditionalFunction {
    static MAP_CODEC: MapCodec<SetBannerPatternFunction>;
    static setBannerPattern(paramappend: boolean): SetBannerPatternFunction$Builder;
    private constructor(predicates: LootItemCondition[], patterns: BannerPatternLayers, append: boolean)
    // private append: boolean;
    // private patterns: BannerPatternLayers;
    codec(): MapCodec<SetBannerPatternFunction>;
    run(itemStack: ItemStack, context: LootContext): ItemStack;
}