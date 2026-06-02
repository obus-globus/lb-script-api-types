import type { EntityModel } from '../../../../../net/minecraft/client/model/EntityModel.d.ts'
import type { ModelPart } from '../../../../../net/minecraft/client/model/geom/ModelPart.d.ts'
import type { LayerDefinition } from '../../../../../net/minecraft/client/model/geom/builders/LayerDefinition.d.ts'
import type { EvokerFangsRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/EvokerFangsRenderState.d.ts'
export class EvokerFangsModel extends EntityModel<EvokerFangsRenderState> {
    static MODEL_Y_OFFSET: number;
    static createBodyLayer(): LayerDefinition;
    constructor(root: ModelPart)
    // private base: ModelPart;
    // private lowerJaw: ModelPart;
    // private upperJaw: ModelPart;
    setupAnim(state: EvokerFangsRenderState): void;
}