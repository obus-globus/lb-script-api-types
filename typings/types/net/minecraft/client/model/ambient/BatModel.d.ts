import type { KeyframeAnimation } from '../../../../../net/minecraft/client/animation/KeyframeAnimation.d.ts'
import type { EntityModel } from '../../../../../net/minecraft/client/model/EntityModel.d.ts'
import type { ModelPart } from '../../../../../net/minecraft/client/model/geom/ModelPart.d.ts'
import type { LayerDefinition } from '../../../../../net/minecraft/client/model/geom/builders/LayerDefinition.d.ts'
import type { BatRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/BatRenderState.d.ts'
export class BatModel extends EntityModel<BatRenderState> {
    static MODEL_Y_OFFSET: number;
    static createBodyLayer(): LayerDefinition;
    constructor(root: ModelPart)
    // private body: ModelPart;
    // private feet: ModelPart;
    // private flyingAnimation: KeyframeAnimation;
    // private head: ModelPart;
    // private leftWing: ModelPart;
    // private leftWingTip: ModelPart;
    // private restingAnimation: KeyframeAnimation;
    // private rightWing: ModelPart;
    // private rightWingTip: ModelPart;
    // private applyHeadRotation(yRot: number): void;
    setupAnim(state: BatRenderState): void;
}