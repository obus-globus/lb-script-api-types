import type { PoseStack } from '../../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { EntityModelSet } from '../../../../../../net/minecraft/client/model/geom/EntityModelSet.d.ts'
import type { DrownedModel } from '../../../../../../net/minecraft/client/model/monster/zombie/DrownedModel.d.ts'
import type { SubmitNodeCollector } from '../../../../../../net/minecraft/client/renderer/SubmitNodeCollector.d.ts'
import type { RenderLayerParent } from '../../../../../../net/minecraft/client/renderer/entity/RenderLayerParent.d.ts'
import type { RenderLayer } from '../../../../../../net/minecraft/client/renderer/entity/layers/RenderLayer.d.ts'
import type { ZombieRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/ZombieRenderState.d.ts'
export class DrownedOuterLayer extends RenderLayer<ZombieRenderState, DrownedModel> {
    constructor(renderer: RenderLayerParent<ZombieRenderState, DrownedModel>, modelSet: EntityModelSet)
    // private babyModel: DrownedModel;
    // private model: DrownedModel;
    submit(poseStack: PoseStack, submitNodeCollector: SubmitNodeCollector, lightCoords: number, state: ZombieRenderState, yRot: number, xRot: number): void;
}