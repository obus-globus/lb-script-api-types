import type { KeyframeAnimation } from '../../../../../../net/minecraft/client/animation/KeyframeAnimation.d.ts'
import type { EntityModel } from '../../../../../../net/minecraft/client/model/EntityModel.d.ts'
import type { ModelPart } from '../../../../../../net/minecraft/client/model/geom/ModelPart.d.ts'
import type { LayerDefinition } from '../../../../../../net/minecraft/client/model/geom/builders/LayerDefinition.d.ts'
import type { AxolotlRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/AxolotlRenderState.d.ts'
export class BabyAxolotlModel extends EntityModel<AxolotlRenderState> {
    static MODEL_Y_OFFSET: number;
    static createBodyLayer(): LayerDefinition;
    constructor(root: ModelPart)
    // private idleOnGroundAnimation: KeyframeAnimation;
    // private idleOnGroundUnderWaterAnimation: KeyframeAnimation;
    // private idleUnderWaterAnimation: KeyframeAnimation;
    // private playDeadAnimation: KeyframeAnimation;
    // private swimAnimation: KeyframeAnimation;
    // private walkAnimation: KeyframeAnimation;
    // private walkUnderwaterAnimation: KeyframeAnimation;
    setupAnim(state: AxolotlRenderState): void;
}