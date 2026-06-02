import type { PoseStack } from '../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { SkullModelBase } from '../../../../../net/minecraft/client/model/object/skull/SkullModelBase.d.ts'
import type { PlayerSkinRenderCache } from '../../../../../net/minecraft/client/renderer/PlayerSkinRenderCache.d.ts'
import type { PlayerSkinRenderCache$RenderInfo } from '../../../../../net/minecraft/client/renderer/PlayerSkinRenderCache$RenderInfo.d.ts'
import type { SubmitNodeCollector } from '../../../../../net/minecraft/client/renderer/SubmitNodeCollector.d.ts'
import type { SpecialModelRenderer } from '../../../../../net/minecraft/client/renderer/special/SpecialModelRenderer.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { Vector3fc } from '../../../../../org/joml/Vector3fc.d.ts'
export class PlayerHeadSpecialRenderer extends Object implements SpecialModelRenderer<PlayerSkinRenderCache$RenderInfo> {
    private constructor(playerSkinRenderCache: PlayerSkinRenderCache, modelBase: SkullModelBase)
    // private modelBase: SkullModelBase;
    // private playerSkinRenderCache: PlayerSkinRenderCache;
    extractArgument(stack: ItemStack): PlayerSkinRenderCache$RenderInfo;
    getExtents(output: (param0: Vector3fc) => void): void;
    submit(argument: PlayerSkinRenderCache$RenderInfo, poseStack: PoseStack, submitNodeCollector: SubmitNodeCollector, lightCoords: number, overlayCoords: number, hasFoil: boolean, outlineColor: number): void;
}