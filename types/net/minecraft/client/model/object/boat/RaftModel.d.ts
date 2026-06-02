import type { ModelPart } from '../../../../../../net/minecraft/client/model/geom/ModelPart.d.ts'
import type { LayerDefinition } from '../../../../../../net/minecraft/client/model/geom/builders/LayerDefinition.d.ts'
import type { AbstractBoatModel } from '../../../../../../net/minecraft/client/model/object/boat/AbstractBoatModel.d.ts'
export class RaftModel extends AbstractBoatModel {
    static MODEL_Y_OFFSET: number;
    static createChestRaftModel(): LayerDefinition;
    static createRaftModel(): LayerDefinition;
    constructor(root: ModelPart)
}