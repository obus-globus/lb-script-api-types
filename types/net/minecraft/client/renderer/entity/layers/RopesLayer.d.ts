import type { PoseStack } from '../../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { HappyGhastModel } from '../../../../../../net/minecraft/client/model/animal/ghast/HappyGhastModel.d.ts'
import type { EntityModelSet } from '../../../../../../net/minecraft/client/model/geom/EntityModelSet.d.ts'
import type { SubmitNodeCollector } from '../../../../../../net/minecraft/client/renderer/SubmitNodeCollector.d.ts'
import type { RenderLayerParent } from '../../../../../../net/minecraft/client/renderer/entity/RenderLayerParent.d.ts'
import type { RenderLayer } from '../../../../../../net/minecraft/client/renderer/entity/layers/RenderLayer.d.ts'
import type { HappyGhastRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/HappyGhastRenderState.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
export class RopesLayer<M extends HappyGhastModel> extends RenderLayer<HappyGhastRenderState, M> {
    constructor(renderer: RenderLayerParent<HappyGhastRenderState, M>, modelSet: EntityModelSet, ropesTexture: Identifier)
    // private adultModel: HappyGhastModel;
    // private babyModel: HappyGhastModel;
    // private ropesTexture: Identifier;
    submit(poseStack: PoseStack, submitNodeCollector: SubmitNodeCollector, lightCoords: number, state: HappyGhastRenderState, yRot: number, xRot: number): void;
}