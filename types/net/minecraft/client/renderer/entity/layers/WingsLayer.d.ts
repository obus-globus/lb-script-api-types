import type { PoseStack } from '../../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { EntityModel } from '../../../../../../net/minecraft/client/model/EntityModel.d.ts'
import type { EntityModelSet } from '../../../../../../net/minecraft/client/model/geom/EntityModelSet.d.ts'
import type { ElytraModel } from '../../../../../../net/minecraft/client/model/object/equipment/ElytraModel.d.ts'
import type { SubmitNodeCollector } from '../../../../../../net/minecraft/client/renderer/SubmitNodeCollector.d.ts'
import type { RenderLayerParent } from '../../../../../../net/minecraft/client/renderer/entity/RenderLayerParent.d.ts'
import type { EquipmentLayerRenderer } from '../../../../../../net/minecraft/client/renderer/entity/layers/EquipmentLayerRenderer.d.ts'
import type { RenderLayer } from '../../../../../../net/minecraft/client/renderer/entity/layers/RenderLayer.d.ts'
import type { HumanoidRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/HumanoidRenderState.d.ts'
export class WingsLayer<S extends HumanoidRenderState, M extends EntityModel<S>> extends RenderLayer<S, M> {
    constructor(renderer: RenderLayerParent<S, M>, modelSet: EntityModelSet, equipmentRenderer: EquipmentLayerRenderer)
    // private elytraBabyModel: ElytraModel;
    // private elytraModel: ElytraModel;
    // private equipmentRenderer: EquipmentLayerRenderer;
    submit(poseStack: PoseStack, submitNodeCollector: SubmitNodeCollector, lightCoords: number, state: S, yRot: number, xRot: number): void;
}