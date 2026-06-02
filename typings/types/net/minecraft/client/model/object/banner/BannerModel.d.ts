import type { Model } from '../../../../../../net/minecraft/client/model/Model.d.ts'
import type { ModelPart } from '../../../../../../net/minecraft/client/model/geom/ModelPart.d.ts'
import type { LayerDefinition } from '../../../../../../net/minecraft/client/model/geom/builders/LayerDefinition.d.ts'
import type { Unit } from '../../../../../../net/minecraft/util/Unit.d.ts'
export class BannerModel extends Model<Unit> {
    static BANNER_HEIGHT: number;
    static BANNER_WIDTH: number;
    static FLAG: string;
    static createBodyLayer(paramstanding: boolean): LayerDefinition;
    constructor(root: ModelPart)
}