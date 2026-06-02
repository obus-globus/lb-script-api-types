import type { Model } from '../../../../../../net/minecraft/client/model/Model.d.ts'
import type { ModelPart } from '../../../../../../net/minecraft/client/model/geom/ModelPart.d.ts'
import type { LayerDefinition } from '../../../../../../net/minecraft/client/model/geom/builders/LayerDefinition.d.ts'
export class BannerFlagModel extends Model<number> {
    static createFlagLayer(paramstanding: boolean): LayerDefinition;
    constructor(root: ModelPart)
    // private flag: ModelPart;
    setupAnim(phase: number): void;
}