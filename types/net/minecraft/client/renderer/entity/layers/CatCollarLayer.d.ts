import type { PoseStack } from '../../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { AbstractFelineModel } from '../../../../../../net/minecraft/client/model/animal/feline/AbstractFelineModel.d.ts'
import type { AdultCatModel } from '../../../../../../net/minecraft/client/model/animal/feline/AdultCatModel.d.ts'
import type { BabyCatModel } from '../../../../../../net/minecraft/client/model/animal/feline/BabyCatModel.d.ts'
import type { EntityModelSet } from '../../../../../../net/minecraft/client/model/geom/EntityModelSet.d.ts'
import type { SubmitNodeCollector } from '../../../../../../net/minecraft/client/renderer/SubmitNodeCollector.d.ts'
import type { RenderLayerParent } from '../../../../../../net/minecraft/client/renderer/entity/RenderLayerParent.d.ts'
import type { RenderLayer } from '../../../../../../net/minecraft/client/renderer/entity/layers/RenderLayer.d.ts'
import type { CatRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/CatRenderState.d.ts'
export class CatCollarLayer extends RenderLayer<CatRenderState, AbstractFelineModel<CatRenderState>> {
    constructor(renderer: RenderLayerParent<CatRenderState, AbstractFelineModel<CatRenderState>>, modelSet: EntityModelSet)
    // private adultModel: AdultCatModel;
    // private babyModel: BabyCatModel;
    submit(poseStack: PoseStack, submitNodeCollector: SubmitNodeCollector, lightCoords: number, state: CatRenderState, yRot: number, xRot: number): void;
}