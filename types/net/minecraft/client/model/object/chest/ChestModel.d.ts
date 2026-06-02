import type { Model } from '../../../../../../net/minecraft/client/model/Model.d.ts'
import type { ModelPart } from '../../../../../../net/minecraft/client/model/geom/ModelPart.d.ts'
import type { LayerDefinition } from '../../../../../../net/minecraft/client/model/geom/builders/LayerDefinition.d.ts'
export class ChestModel extends Model<number> {
    static createDoubleBodyLeftLayer(): LayerDefinition;
    static createDoubleBodyRightLayer(): LayerDefinition;
    static createSingleBodyLayer(): LayerDefinition;
    constructor(root: ModelPart)
    // private lid: ModelPart;
    // private lock: ModelPart;
    setupAnim(open: number): void;
}