import type { Holder } from '../../../../../../../net/minecraft/core/Holder.d.ts'
import type { DyeColor } from '../../../../../../../net/minecraft/world/item/DyeColor.d.ts'
import type { BannerPattern } from '../../../../../../../net/minecraft/world/level/block/entity/BannerPattern.d.ts'
import type { BannerPatternLayers$Builder } from '../../../../../../../net/minecraft/world/level/block/entity/BannerPatternLayers$Builder.d.ts'
import type { LootItemConditionalFunction$Builder } from '../../../../../../../net/minecraft/world/level/storage/loot/functions/LootItemConditionalFunction$Builder.d.ts'
import type { LootItemFunction } from '../../../../../../../net/minecraft/world/level/storage/loot/functions/LootItemFunction.d.ts'
export class SetBannerPatternFunction$Builder extends LootItemConditionalFunction$Builder<SetBannerPatternFunction$Builder> {
    private constructor(append: boolean)
    // private append: boolean;
    // private patterns: BannerPatternLayers$Builder;
    addPattern(pattern: Holder<BannerPattern>, color: DyeColor): SetBannerPatternFunction$Builder;
    build(): LootItemFunction;
    getThis(): SetBannerPatternFunction$Builder;
}