import type { PoseStack } from '../../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { CowModel } from '../../../../../../net/minecraft/client/model/animal/cow/CowModel.d.ts'
import type { SubmitNodeCollector } from '../../../../../../net/minecraft/client/renderer/SubmitNodeCollector.d.ts'
import type { BlockModelRenderState } from '../../../../../../net/minecraft/client/renderer/block/BlockModelRenderState.d.ts'
import type { RenderLayerParent } from '../../../../../../net/minecraft/client/renderer/entity/RenderLayerParent.d.ts'
import type { RenderLayer } from '../../../../../../net/minecraft/client/renderer/entity/layers/RenderLayer.d.ts'
import type { MushroomCowRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/MushroomCowRenderState.d.ts'
export class MushroomCowMushroomLayer extends RenderLayer<MushroomCowRenderState, CowModel> {
    constructor(renderer: RenderLayerParent<MushroomCowRenderState, CowModel>)
    submit(poseStack: PoseStack, submitNodeCollector: SubmitNodeCollector, lightCoords: number, state: MushroomCowRenderState, yRot: number, xRot: number): void;
    // private submitMushroomBlock(poseStack: PoseStack, submitNodeCollector: SubmitNodeCollector, lightCoords: number, appearsGlowingWithInvisibility: boolean, outlineColor: number, mushroomModel: BlockModelRenderState, overlayCoords: number): void;
}