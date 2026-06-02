import type { EntityModel } from '../../../../../../net/minecraft/client/model/EntityModel.d.ts'
import type { ModelPart } from '../../../../../../net/minecraft/client/model/geom/ModelPart.d.ts'
import type { LayerDefinition } from '../../../../../../net/minecraft/client/model/geom/builders/LayerDefinition.d.ts'
import type { ShulkerBulletRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/ShulkerBulletRenderState.d.ts'
export class ShulkerBulletModel extends EntityModel<ShulkerBulletRenderState> {
    static MODEL_Y_OFFSET: number;
    static createBodyLayer(): LayerDefinition;
    constructor(root: ModelPart)
    // private main: ModelPart;
    setupAnim(state: ShulkerBulletRenderState): void;
}