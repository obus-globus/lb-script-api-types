import type { ModelPart } from '../../../../../../net/minecraft/client/model/geom/ModelPart.d.ts'
import type { LayerDefinition } from '../../../../../../net/minecraft/client/model/geom/builders/LayerDefinition.d.ts'
import type { AbstractBoatModel } from '../../../../../../net/minecraft/client/model/object/boat/AbstractBoatModel.d.ts'
export class BoatModel extends AbstractBoatModel {
    static MODEL_Y_OFFSET: number;
    static createBoatModel(): LayerDefinition;
    static createChestBoatModel(): LayerDefinition;
    static createWaterPatch(): LayerDefinition;
    constructor(root: ModelPart)
}