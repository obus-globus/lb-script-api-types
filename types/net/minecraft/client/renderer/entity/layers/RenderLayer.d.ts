import type { PoseStack } from '../../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { EntityModel } from '../../../../../../net/minecraft/client/model/EntityModel.d.ts'
import type { SubmitNodeCollector } from '../../../../../../net/minecraft/client/renderer/SubmitNodeCollector.d.ts'
import type { RenderLayerParent } from '../../../../../../net/minecraft/client/renderer/entity/RenderLayerParent.d.ts'
import type { EntityRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/EntityRenderState.d.ts'
export abstract class RenderLayer<S extends EntityRenderState, M extends EntityModel<S>> extends Object {
    constructor(renderer: RenderLayerParent<S, M>)
    // private renderer: RenderLayerParent<S, M>;
    getParentModel(): M;
    submit(poseStack: PoseStack, submitNodeCollector: SubmitNodeCollector, lightCoords: number, state: S, yRot: number, xRot: number): void;
}