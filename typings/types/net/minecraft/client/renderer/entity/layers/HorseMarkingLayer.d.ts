import type { PoseStack } from '../../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { HorseModel } from '../../../../../../net/minecraft/client/model/animal/equine/HorseModel.d.ts'
import type { SubmitNodeCollector } from '../../../../../../net/minecraft/client/renderer/SubmitNodeCollector.d.ts'
import type { RenderLayerParent } from '../../../../../../net/minecraft/client/renderer/entity/RenderLayerParent.d.ts'
import type { RenderLayer } from '../../../../../../net/minecraft/client/renderer/entity/layers/RenderLayer.d.ts'
import type { HorseRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/HorseRenderState.d.ts'
export class HorseMarkingLayer extends RenderLayer<HorseRenderState, HorseModel> {
    constructor(renderer: RenderLayerParent<HorseRenderState, HorseModel>)
    submit(poseStack: PoseStack, submitNodeCollector: SubmitNodeCollector, lightCoords: number, state: HorseRenderState, yRot: number, xRot: number): void;
}