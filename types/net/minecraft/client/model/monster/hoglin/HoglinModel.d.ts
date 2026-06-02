import type { EntityModel } from '../../../../../../net/minecraft/client/model/EntityModel.d.ts'
import type { ModelPart } from '../../../../../../net/minecraft/client/model/geom/ModelPart.d.ts'
import type { LayerDefinition } from '../../../../../../net/minecraft/client/model/geom/builders/LayerDefinition.d.ts'
import type { HoglinRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/HoglinRenderState.d.ts'
export class HoglinModel extends EntityModel<HoglinRenderState> {
    static MODEL_Y_OFFSET: number;
    static createBodyLayer(): LayerDefinition;
    constructor(root: ModelPart)
    // private head: ModelPart;
    // private leftEar: ModelPart;
    // private leftFrontLeg: ModelPart;
    // private leftHindLeg: ModelPart;
    // private rightEar: ModelPart;
    // private rightFrontLeg: ModelPart;
    // private rightHindLeg: ModelPart;
    animateHeadbutt(headbuttLerpFactor: number): void;
    setupAnim(state: HoglinRenderState): void;
}