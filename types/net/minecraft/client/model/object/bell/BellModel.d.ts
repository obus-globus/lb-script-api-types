import type { Model } from '../../../../../../net/minecraft/client/model/Model.d.ts'
import type { ModelPart } from '../../../../../../net/minecraft/client/model/geom/ModelPart.d.ts'
import type { LayerDefinition } from '../../../../../../net/minecraft/client/model/geom/builders/LayerDefinition.d.ts'
import type { BellModel$State } from '../../../../../../net/minecraft/client/model/object/bell/BellModel$State.d.ts'
export class BellModel extends Model<BellModel$State> {
    static createBodyLayer(): LayerDefinition;
    constructor(root: ModelPart)
    // private bellBody: ModelPart;
    setupAnim(state: BellModel$State): void;
}