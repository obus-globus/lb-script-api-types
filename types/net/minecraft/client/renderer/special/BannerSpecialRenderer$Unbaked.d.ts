import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BannerSpecialRenderer } from '../../../../../net/minecraft/client/renderer/special/BannerSpecialRenderer.d.ts'
import type { SpecialModelRenderer$BakingContext } from '../../../../../net/minecraft/client/renderer/special/SpecialModelRenderer$BakingContext.d.ts'
import type { SpecialModelRenderer$Unbaked } from '../../../../../net/minecraft/client/renderer/special/SpecialModelRenderer$Unbaked.d.ts'
import type { DyeColor } from '../../../../../net/minecraft/world/item/DyeColor.d.ts'
import type { BannerBlock$AttachmentType } from '../../../../../net/minecraft/world/level/block/BannerBlock$AttachmentType.d.ts'
import type { BannerPatternLayers } from '../../../../../net/minecraft/world/level/block/entity/BannerPatternLayers.d.ts'
export class BannerSpecialRenderer$Unbaked extends Record implements SpecialModelRenderer$Unbaked<BannerPatternLayers> {
    static MAP_CODEC: MapCodec<BannerSpecialRenderer$Unbaked>;
    constructor(baseColor: DyeColor, attachment: BannerBlock$AttachmentType)
    // private attachment: BannerBlock$AttachmentType;
    // private baseColor: DyeColor;
    attachment(): BannerBlock$AttachmentType;
    bake(context: SpecialModelRenderer$BakingContext): BannerSpecialRenderer;
    baseColor(): DyeColor;
    equals(o: Object | null): boolean;
    hashCode(): number;
    toString(): string;
    type(): MapCodec<BannerSpecialRenderer$Unbaked>;
}