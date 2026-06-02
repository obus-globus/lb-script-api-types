import type { KeyframeAnimation } from '../../../../../../net/minecraft/client/animation/KeyframeAnimation.d.ts'
import type { EntityModel } from '../../../../../../net/minecraft/client/model/EntityModel.d.ts'
import type { ModelPart } from '../../../../../../net/minecraft/client/model/geom/ModelPart.d.ts'
import type { LayerDefinition } from '../../../../../../net/minecraft/client/model/geom/builders/LayerDefinition.d.ts'
import type { BreezeRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/BreezeRenderState.d.ts'
export class BreezeModel extends EntityModel<BreezeRenderState> {
    static MODEL_Y_OFFSET: number;
    static createBodyLayer(): LayerDefinition;
    static createEyesLayer(): LayerDefinition;
    static createWindLayer(): LayerDefinition;
    constructor(root: ModelPart)
    // private eyes: ModelPart;
    // private head: ModelPart;
    // private idleAnimation: KeyframeAnimation;
    // private inhaleAnimation: KeyframeAnimation;
    // private jumpAnimation: KeyframeAnimation;
    // private rods: ModelPart;
    // private shootAnimation: KeyframeAnimation;
    // private slideAnimation: KeyframeAnimation;
    // private slideBackAnimation: KeyframeAnimation;
    // private wind: ModelPart;
    // private windBottom: ModelPart;
    // private windMid: ModelPart;
    // private windTop: ModelPart;
    eyes(): ModelPart;
    head(): ModelPart;
    rods(): ModelPart;
    setupAnim(state: BreezeRenderState): void;
    wind(): ModelPart;
}