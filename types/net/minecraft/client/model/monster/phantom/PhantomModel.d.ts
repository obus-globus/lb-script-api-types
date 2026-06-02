import type { EntityModel } from '../../../../../../net/minecraft/client/model/EntityModel.d.ts'
import type { ModelPart } from '../../../../../../net/minecraft/client/model/geom/ModelPart.d.ts'
import type { LayerDefinition } from '../../../../../../net/minecraft/client/model/geom/builders/LayerDefinition.d.ts'
import type { PhantomRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/PhantomRenderState.d.ts'
export class PhantomModel extends EntityModel<PhantomRenderState> {
    static MODEL_Y_OFFSET: number;
    static createBodyLayer(): LayerDefinition;
    constructor(root: ModelPart)
    // private leftWingBase: ModelPart;
    // private leftWingTip: ModelPart;
    // private rightWingBase: ModelPart;
    // private rightWingTip: ModelPart;
    // private tailBase: ModelPart;
    // private tailTip: ModelPart;
    setupAnim(state: PhantomRenderState): void;
}