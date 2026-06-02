import type { PoseStack } from '../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { SubmitNodeCollector } from '../../../../../net/minecraft/client/renderer/SubmitNodeCollector.d.ts'
import type { BannerRenderer } from '../../../../../net/minecraft/client/renderer/blockentity/BannerRenderer.d.ts'
import type { SpecialModelRenderer } from '../../../../../net/minecraft/client/renderer/special/SpecialModelRenderer.d.ts'
import type { DyeColor } from '../../../../../net/minecraft/world/item/DyeColor.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { BannerBlock$AttachmentType } from '../../../../../net/minecraft/world/level/block/BannerBlock$AttachmentType.d.ts'
import type { BannerPatternLayers } from '../../../../../net/minecraft/world/level/block/entity/BannerPatternLayers.d.ts'
import type { Vector3fc } from '../../../../../org/joml/Vector3fc.d.ts'
export class BannerSpecialRenderer extends Object implements SpecialModelRenderer<BannerPatternLayers> {
    constructor(baseColor: DyeColor, bannerRenderer: BannerRenderer, attachment: BannerBlock$AttachmentType)
    // private attachment: BannerBlock$AttachmentType;
    // private bannerRenderer: BannerRenderer;
    // private baseColor: DyeColor;
    extractArgument(stack: ItemStack): BannerPatternLayers;
    getExtents(output: (param0: Vector3fc) => void): void;
    submit(patterns: BannerPatternLayers, poseStack: PoseStack, submitNodeCollector: SubmitNodeCollector, lightCoords: number, overlayCoords: number, hasFoil: boolean, outlineColor: number): void;
}