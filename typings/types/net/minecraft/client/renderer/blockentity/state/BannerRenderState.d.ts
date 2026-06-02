import type { Transformation } from '../../../../../../com/mojang/math/Transformation.d.ts'
import type { BlockEntityRenderState } from '../../../../../../net/minecraft/client/renderer/blockentity/state/BlockEntityRenderState.d.ts'
import type { ModelFeatureRenderer$CrumblingOverlay } from '../../../../../../net/minecraft/client/renderer/feature/ModelFeatureRenderer$CrumblingOverlay.d.ts'
import type { DyeColor } from '../../../../../../net/minecraft/world/item/DyeColor.d.ts'
import type { BannerBlock$AttachmentType } from '../../../../../../net/minecraft/world/level/block/BannerBlock$AttachmentType.d.ts'
import type { BannerPatternLayers } from '../../../../../../net/minecraft/world/level/block/entity/BannerPatternLayers.d.ts'
import type { BlockEntity } from '../../../../../../net/minecraft/world/level/block/entity/BlockEntity.d.ts'
export class BannerRenderState extends BlockEntityRenderState {
    static extractBase(paramblockEntity: BlockEntity, paramstate: BlockEntityRenderState, parambreakProgress: ModelFeatureRenderer$CrumblingOverlay): void;
    constructor()
    attachmentType: BannerBlock$AttachmentType;
    baseColor: DyeColor;
    patterns: BannerPatternLayers;
    phase: number;
    transformation: Transformation;
}