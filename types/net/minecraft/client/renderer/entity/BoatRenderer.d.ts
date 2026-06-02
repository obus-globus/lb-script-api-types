import type { PoseStack } from '../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { EntityModel } from '../../../../../net/minecraft/client/model/EntityModel.d.ts'
import type { Model$Simple } from '../../../../../net/minecraft/client/model/Model$Simple.d.ts'
import type { ModelLayerLocation } from '../../../../../net/minecraft/client/model/geom/ModelLayerLocation.d.ts'
import type { SubmitNodeCollector } from '../../../../../net/minecraft/client/renderer/SubmitNodeCollector.d.ts'
import type { AbstractBoatRenderer } from '../../../../../net/minecraft/client/renderer/entity/AbstractBoatRenderer.d.ts'
import type { EntityRendererProvider$Context } from '../../../../../net/minecraft/client/renderer/entity/EntityRendererProvider$Context.d.ts'
import type { BoatRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/BoatRenderState.d.ts'
export class BoatRenderer extends AbstractBoatRenderer {
    static NAMETAG_SCALE: number;
    constructor(context: EntityRendererProvider$Context, modelId: ModelLayerLocation)
    // private model: EntityModel<BoatRenderState>;
    // private waterPatchModel: Model$Simple;
    model(): EntityModel<BoatRenderState>;
    submitTypeAdditions(state: BoatRenderState, poseStack: PoseStack, submitNodeCollector: SubmitNodeCollector, lightCoords: number): void;
}