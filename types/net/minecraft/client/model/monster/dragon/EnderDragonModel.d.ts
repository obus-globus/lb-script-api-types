import type { EntityModel } from '../../../../../../net/minecraft/client/model/EntityModel.d.ts'
import type { ModelPart } from '../../../../../../net/minecraft/client/model/geom/ModelPart.d.ts'
import type { LayerDefinition } from '../../../../../../net/minecraft/client/model/geom/builders/LayerDefinition.d.ts'
import type { EnderDragonRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/EnderDragonRenderState.d.ts'
export class EnderDragonModel extends EntityModel<EnderDragonRenderState> {
    static MODEL_Y_OFFSET: number;
    static createBodyLayer(): LayerDefinition;
    constructor(root: ModelPart)
    // private body: ModelPart;
    // private head: ModelPart;
    // private jaw: ModelPart;
    // private leftFrontFoot: ModelPart;
    // private leftFrontLeg: ModelPart;
    // private leftFrontLegTip: ModelPart;
    // private leftRearFoot: ModelPart;
    // private leftRearLeg: ModelPart;
    // private leftRearLegTip: ModelPart;
    // private leftWing: ModelPart;
    // private leftWingTip: ModelPart;
    // private neckParts: ModelPart[];
    // private rightFrontFoot: ModelPart;
    // private rightFrontLeg: ModelPart;
    // private rightFrontLegTip: ModelPart;
    // private rightRearFoot: ModelPart;
    // private rightRearLeg: ModelPart;
    // private rightRearLegTip: ModelPart;
    // private rightWing: ModelPart;
    // private rightWingTip: ModelPart;
    // private tailParts: ModelPart[];
    // private poseLimbs(bounce: number, frontLeg: ModelPart, frontLegTip: ModelPart, frontFoot: ModelPart, rearLeg: ModelPart, rearLegTip: ModelPart, rearFoot: ModelPart): void;
    setupAnim(state: EnderDragonRenderState): void;
}