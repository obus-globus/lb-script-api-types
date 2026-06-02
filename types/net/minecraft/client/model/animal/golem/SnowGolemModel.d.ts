import type { EntityModel } from '../../../../../../net/minecraft/client/model/EntityModel.d.ts'
import type { ModelPart } from '../../../../../../net/minecraft/client/model/geom/ModelPart.d.ts'
import type { LayerDefinition } from '../../../../../../net/minecraft/client/model/geom/builders/LayerDefinition.d.ts'
import type { LivingEntityRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/LivingEntityRenderState.d.ts'
export class SnowGolemModel extends EntityModel<LivingEntityRenderState> {
    static MODEL_Y_OFFSET: number;
    static createBodyLayer(): LayerDefinition;
    constructor(root: ModelPart)
    readonly head: ModelPart;
    // private leftArm: ModelPart;
    // private rightArm: ModelPart;
    // private upperBody: ModelPart;
    getHead(): ModelPart;
    setupAnim(state: LivingEntityRenderState): void;
}