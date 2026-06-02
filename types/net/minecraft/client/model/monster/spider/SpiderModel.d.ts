import type { EntityModel } from '../../../../../../net/minecraft/client/model/EntityModel.d.ts'
import type { ModelPart } from '../../../../../../net/minecraft/client/model/geom/ModelPart.d.ts'
import type { LayerDefinition } from '../../../../../../net/minecraft/client/model/geom/builders/LayerDefinition.d.ts'
import type { LivingEntityRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/LivingEntityRenderState.d.ts'
export class SpiderModel extends EntityModel<LivingEntityRenderState> {
    static MODEL_Y_OFFSET: number;
    static createSpiderBodyLayer(): LayerDefinition;
    constructor(root: ModelPart)
    // private head: ModelPart;
    // private leftFrontLeg: ModelPart;
    // private leftHindLeg: ModelPart;
    // private leftMiddleFrontLeg: ModelPart;
    // private leftMiddleHindLeg: ModelPart;
    // private rightFrontLeg: ModelPart;
    // private rightHindLeg: ModelPart;
    // private rightMiddleFrontLeg: ModelPart;
    // private rightMiddleHindLeg: ModelPart;
    setupAnim(state: LivingEntityRenderState): void;
}