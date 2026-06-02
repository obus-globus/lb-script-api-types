import type { PoseStack } from '../../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { EntityModelSet } from '../../../../../../net/minecraft/client/model/geom/EntityModelSet.d.ts'
import type { BreezeModel } from '../../../../../../net/minecraft/client/model/monster/breeze/BreezeModel.d.ts'
import type { SubmitNodeCollector } from '../../../../../../net/minecraft/client/renderer/SubmitNodeCollector.d.ts'
import type { RenderLayerParent } from '../../../../../../net/minecraft/client/renderer/entity/RenderLayerParent.d.ts'
import type { RenderLayer } from '../../../../../../net/minecraft/client/renderer/entity/layers/RenderLayer.d.ts'
import type { BreezeRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/BreezeRenderState.d.ts'
export class BreezeEyesLayer extends RenderLayer<BreezeRenderState, BreezeModel> {
    constructor(renderer: RenderLayerParent<BreezeRenderState, BreezeModel>, modelSet: EntityModelSet)
    // private model: BreezeModel;
    submit(poseStack: PoseStack, submitNodeCollector: SubmitNodeCollector, lightCoords: number, state: BreezeRenderState, yRot: number, xRot: number): void;
}