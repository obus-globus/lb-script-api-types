import type { KeyframeAnimation } from '../../../../../../net/minecraft/client/animation/KeyframeAnimation.d.ts'
import type { SnifferModel } from '../../../../../../net/minecraft/client/model/animal/sniffer/SnifferModel.d.ts'
import type { ModelPart } from '../../../../../../net/minecraft/client/model/geom/ModelPart.d.ts'
import type { LayerDefinition } from '../../../../../../net/minecraft/client/model/geom/builders/LayerDefinition.d.ts'
import type { SnifferRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/SnifferRenderState.d.ts'
export class SniffletModel extends SnifferModel {
    static MODEL_Y_OFFSET: number;
    static createBodyLayer(): LayerDefinition;
    constructor(root: ModelPart)
    // private babyTransform: KeyframeAnimation;
    setupAnim(state: SnifferRenderState): void;
}