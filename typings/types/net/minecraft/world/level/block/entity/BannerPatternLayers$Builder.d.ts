import type { ImmutableList$Builder } from '../../../../../../com/google/common/collect/ImmutableList$Builder.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../../net/minecraft/core/Holder.d.ts'
import type { HolderGetter } from '../../../../../../net/minecraft/core/HolderGetter.d.ts'
import type { ResourceKey } from '../../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { DyeColor } from '../../../../../../net/minecraft/world/item/DyeColor.d.ts'
import type { BannerPattern } from '../../../../../../net/minecraft/world/level/block/entity/BannerPattern.d.ts'
import type { BannerPatternLayers } from '../../../../../../net/minecraft/world/level/block/entity/BannerPatternLayers.d.ts'
import type { BannerPatternLayers$Layer } from '../../../../../../net/minecraft/world/level/block/entity/BannerPatternLayers$Layer.d.ts'
export class BannerPatternLayers$Builder extends Object {
    constructor()
    // private layers: ImmutableList$Builder<BannerPatternLayers$Layer>;
    add(pattern: Holder<BannerPattern>, color: DyeColor): BannerPatternLayers$Builder;
    add(layer: BannerPatternLayers$Layer): BannerPatternLayers$Builder;
    addAll(layers: BannerPatternLayers): BannerPatternLayers$Builder;
    addIfRegistered(patternGetter: HolderGetter<BannerPattern>, patternKey: ResourceKey<BannerPattern>, color: DyeColor): BannerPatternLayers$Builder;
    build(): BannerPatternLayers;
}