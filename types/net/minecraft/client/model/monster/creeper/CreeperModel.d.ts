import type { EntityModel } from '../../../../../../net/minecraft/client/model/EntityModel.d.ts'
import type { ModelPart } from '../../../../../../net/minecraft/client/model/geom/ModelPart.d.ts'
import type { CubeDeformation } from '../../../../../../net/minecraft/client/model/geom/builders/CubeDeformation.d.ts'
import type { LayerDefinition } from '../../../../../../net/minecraft/client/model/geom/builders/LayerDefinition.d.ts'
import type { CreeperRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/CreeperRenderState.d.ts'
export class CreeperModel extends EntityModel<CreeperRenderState> {
    static MODEL_Y_OFFSET: number;
    static createBodyLayer(paramg: CubeDeformation): LayerDefinition;
    constructor(root: ModelPart)
    // private head: ModelPart;
    // private leftFrontLeg: ModelPart;
    // private leftHindLeg: ModelPart;
    // private rightFrontLeg: ModelPart;
    // private rightHindLeg: ModelPart;
    setupAnim(state: CreeperRenderState): void;
}