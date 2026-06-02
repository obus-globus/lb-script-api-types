import type { EntityModel } from '../../../../../../net/minecraft/client/model/EntityModel.d.ts'
import type { ModelPart } from '../../../../../../net/minecraft/client/model/geom/ModelPart.d.ts'
import type { FelineRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/FelineRenderState.d.ts'
export abstract class AbstractFelineModel<S extends FelineRenderState> extends EntityModel<S> {
    static MODEL_Y_OFFSET: number;
    constructor(root: ModelPart)
    // private body: ModelPart;
    // private head: ModelPart;
    // private leftFrontLeg: ModelPart;
    // private leftHindLeg: ModelPart;
    // private rightFrontLeg: ModelPart;
    // private rightHindLeg: ModelPart;
    // private tail1: ModelPart;
    // private tail2: ModelPart;
}