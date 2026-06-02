import type { KeyframeAnimation } from '../../../../../../net/minecraft/client/animation/KeyframeAnimation.d.ts'
import type { EntityModel } from '../../../../../../net/minecraft/client/model/EntityModel.d.ts'
import type { ModelPart } from '../../../../../../net/minecraft/client/model/geom/ModelPart.d.ts'
import type { LayerDefinition } from '../../../../../../net/minecraft/client/model/geom/builders/LayerDefinition.d.ts'
import type { CreakingRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/CreakingRenderState.d.ts'
export class CreakingModel extends EntityModel<CreakingRenderState> {
    static MODEL_Y_OFFSET: number;
    static createBodyLayer(): LayerDefinition;
    static createEyesLayer(): LayerDefinition;
    constructor(roots: ModelPart)
    // private attackAnimation: KeyframeAnimation;
    // private deathAnimation: KeyframeAnimation;
    // private head: ModelPart;
    // private invulnerableAnimation: KeyframeAnimation;
    // private walkAnimation: KeyframeAnimation;
    setupAnim(state: CreakingRenderState): void;
}