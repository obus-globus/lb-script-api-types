import type { AnimationDefinition } from '../../../../../../net/minecraft/client/animation/AnimationDefinition.d.ts'
import type { KeyframeAnimation } from '../../../../../../net/minecraft/client/animation/KeyframeAnimation.d.ts'
import type { EntityModel } from '../../../../../../net/minecraft/client/model/EntityModel.d.ts'
import type { ModelPart } from '../../../../../../net/minecraft/client/model/geom/ModelPart.d.ts'
import type { RabbitRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/RabbitRenderState.d.ts'
export abstract class RabbitModel extends EntityModel<RabbitRenderState> {
    static MODEL_Y_OFFSET: number;
    constructor(root: ModelPart, hop: AnimationDefinition, idleHeadTilt: AnimationDefinition)
    // private head: ModelPart;
    // private hopAnimation: KeyframeAnimation;
    // private idleHeadTiltAnimation: KeyframeAnimation;
    setupAnim(state: RabbitRenderState): void;
}