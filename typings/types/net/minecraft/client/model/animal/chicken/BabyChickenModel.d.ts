import type { ChickenModel } from '../../../../../../net/minecraft/client/model/animal/chicken/ChickenModel.d.ts'
import type { ModelPart } from '../../../../../../net/minecraft/client/model/geom/ModelPart.d.ts'
import type { LayerDefinition } from '../../../../../../net/minecraft/client/model/geom/builders/LayerDefinition.d.ts'
export class BabyChickenModel extends ChickenModel {
    static MODEL_Y_OFFSET: number;
    static Y_OFFSET: number;
    static createBodyLayer(): LayerDefinition;
    constructor(root: ModelPart)
}