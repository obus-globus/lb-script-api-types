import type { PoseStack } from '../../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { EntityModel } from '../../../../../../net/minecraft/client/model/EntityModel.d.ts'
import type { SheepModel } from '../../../../../../net/minecraft/client/model/animal/sheep/SheepModel.d.ts'
import type { EntityModelSet } from '../../../../../../net/minecraft/client/model/geom/EntityModelSet.d.ts'
import type { SubmitNodeCollector } from '../../../../../../net/minecraft/client/renderer/SubmitNodeCollector.d.ts'
import type { RenderLayerParent } from '../../../../../../net/minecraft/client/renderer/entity/RenderLayerParent.d.ts'
import type { RenderLayer } from '../../../../../../net/minecraft/client/renderer/entity/layers/RenderLayer.d.ts'
import type { SheepRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/SheepRenderState.d.ts'
export class SheepWoolLayer extends RenderLayer<SheepRenderState, SheepModel> {
    constructor(renderer: RenderLayerParent<SheepRenderState, SheepModel>, modelSet: EntityModelSet)
    // private adultModel: EntityModel<SheepRenderState>;
    // private babyModel: EntityModel<SheepRenderState>;
    submit(poseStack: PoseStack, submitNodeCollector: SubmitNodeCollector, lightCoords: number, state: SheepRenderState, yRot: number, xRot: number): void;
}