import type { PoseStack } from '../../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { EntityModelSet } from '../../../../../../net/minecraft/client/model/geom/EntityModelSet.d.ts'
import type { SlimeModel } from '../../../../../../net/minecraft/client/model/monster/slime/SlimeModel.d.ts'
import type { SubmitNodeCollector } from '../../../../../../net/minecraft/client/renderer/SubmitNodeCollector.d.ts'
import type { RenderLayerParent } from '../../../../../../net/minecraft/client/renderer/entity/RenderLayerParent.d.ts'
import type { RenderLayer } from '../../../../../../net/minecraft/client/renderer/entity/layers/RenderLayer.d.ts'
import type { SlimeRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/SlimeRenderState.d.ts'
export class SlimeOuterLayer extends RenderLayer<SlimeRenderState, SlimeModel> {
    constructor(renderer: RenderLayerParent<SlimeRenderState, SlimeModel>, modelSet: EntityModelSet)
    // private model: SlimeModel;
    submit(poseStack: PoseStack, submitNodeCollector: SubmitNodeCollector, lightCoords: number, state: SlimeRenderState, yRot: number, xRot: number): void;
}