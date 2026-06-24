import type { ModelPart } from '../../../../../../net/minecraft/client/model/geom/ModelPart.d.ts'
import type { LayerDefinition } from '../../../../../../net/minecraft/client/model/geom/builders/LayerDefinition.d.ts'
import type { SulfurCubeModel } from '../../../../../../net/minecraft/client/model/monster/slime/SulfurCubeModel.d.ts'
export class SmallSulfurCubeModel extends SulfurCubeModel {
    static MODEL_Y_OFFSET: number;
    static createInnerBodyLayer(): LayerDefinition;
    static createOuterBodyLayer(): LayerDefinition;
    constructor(root: ModelPart)
}