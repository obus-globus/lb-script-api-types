import type { BeeModel } from '../../../../../../net/minecraft/client/model/animal/bee/BeeModel.d.ts'
import type { ModelPart } from '../../../../../../net/minecraft/client/model/geom/ModelPart.d.ts'
import type { LayerDefinition } from '../../../../../../net/minecraft/client/model/geom/builders/LayerDefinition.d.ts'
export class AdultBeeModel extends BeeModel {
    static MODEL_Y_OFFSET: number;
    static createBodyLayer(): LayerDefinition;
    constructor(root: ModelPart)
    // private leftAntenna: ModelPart;
    // private rightAntenna: ModelPart;
    bobUpAndDown(speed: number, ageInTicks: number): void;
}