import type { Model } from '../../../../../../net/minecraft/client/model/Model.d.ts'
import type { ModelPart } from '../../../../../../net/minecraft/client/model/geom/ModelPart.d.ts'
import type { LayerDefinition } from '../../../../../../net/minecraft/client/model/geom/builders/LayerDefinition.d.ts'
import type { Unit } from '../../../../../../net/minecraft/util/Unit.d.ts'
export class ShieldModel extends Model<Unit> {
    static createLayer(): LayerDefinition;
    constructor(root: ModelPart)
    // private handle: ModelPart;
    // private plate: ModelPart;
    handle(): ModelPart;
    plate(): ModelPart;
}