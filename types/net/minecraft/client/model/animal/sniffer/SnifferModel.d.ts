import type { KeyframeAnimation } from '../../../../../../net/minecraft/client/animation/KeyframeAnimation.d.ts'
import type { EntityModel } from '../../../../../../net/minecraft/client/model/EntityModel.d.ts'
import type { ModelPart } from '../../../../../../net/minecraft/client/model/geom/ModelPart.d.ts'
import type { LayerDefinition } from '../../../../../../net/minecraft/client/model/geom/builders/LayerDefinition.d.ts'
import type { SnifferRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/SnifferRenderState.d.ts'
export class SnifferModel extends EntityModel<SnifferRenderState> {
    static MODEL_Y_OFFSET: number;
    static createBodyLayer(): LayerDefinition;
    constructor(root: ModelPart)
    // private digAnimation: KeyframeAnimation;
    // private happyAnimation: KeyframeAnimation;
    // private head: ModelPart;
    // private longSniffAnimation: KeyframeAnimation;
    // private sniffSearchAnimation: KeyframeAnimation;
    // private sniffSniffAnimation: KeyframeAnimation;
    // private standUpAnimation: KeyframeAnimation;
    // private walkAnimation: KeyframeAnimation;
    setupAnim(state: SnifferRenderState): void;
}