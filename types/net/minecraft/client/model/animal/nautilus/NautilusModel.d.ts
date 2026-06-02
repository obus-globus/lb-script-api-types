import type { KeyframeAnimation } from '../../../../../../net/minecraft/client/animation/KeyframeAnimation.d.ts'
import type { EntityModel } from '../../../../../../net/minecraft/client/model/EntityModel.d.ts'
import type { ModelPart } from '../../../../../../net/minecraft/client/model/geom/ModelPart.d.ts'
import type { LayerDefinition } from '../../../../../../net/minecraft/client/model/geom/builders/LayerDefinition.d.ts'
import type { MeshDefinition } from '../../../../../../net/minecraft/client/model/geom/builders/MeshDefinition.d.ts'
import type { NautilusRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/NautilusRenderState.d.ts'
export class NautilusModel extends EntityModel<NautilusRenderState> {
    static MODEL_Y_OFFSET: number;
    static createBabyBodyLayer(): LayerDefinition;
    static createBodyLayer(): LayerDefinition;
    static createBodyMesh(): MeshDefinition;
    constructor(root: ModelPart)
    // private body: ModelPart;
    // private nautilus: ModelPart;
    // private swimAnimation: KeyframeAnimation;
    // private applyBodyRotation(yRot: number, xRot: number): void;
    setupAnim(state: NautilusRenderState): void;
}