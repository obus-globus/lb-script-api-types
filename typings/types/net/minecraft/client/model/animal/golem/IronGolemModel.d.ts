import type { EntityModel } from '../../../../../../net/minecraft/client/model/EntityModel.d.ts'
import type { ModelPart } from '../../../../../../net/minecraft/client/model/geom/ModelPart.d.ts'
import type { LayerDefinition } from '../../../../../../net/minecraft/client/model/geom/builders/LayerDefinition.d.ts'
import type { IronGolemRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/IronGolemRenderState.d.ts'
export class IronGolemModel extends EntityModel<IronGolemRenderState> {
    static MODEL_Y_OFFSET: number;
    static createBodyLayer(): LayerDefinition;
    constructor(root: ModelPart)
    // private head: ModelPart;
    // private leftArm: ModelPart;
    // private leftLeg: ModelPart;
    // private rightArm: ModelPart;
    // private rightLeg: ModelPart;
    getFlowerHoldingArm(): ModelPart;
    setupAnim(state: IronGolemRenderState): void;
}