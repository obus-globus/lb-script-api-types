import type { Model } from '../../../../../../net/minecraft/client/model/Model.d.ts'
import type { ModelPart } from '../../../../../../net/minecraft/client/model/geom/ModelPart.d.ts'
import type { LayerDefinition } from '../../../../../../net/minecraft/client/model/geom/builders/LayerDefinition.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { Unit } from '../../../../../../net/minecraft/util/Unit.d.ts'
export class TridentModel extends Model<Unit> {
    static TEXTURE: Identifier;
    static createLayer(): LayerDefinition;
    constructor(root: ModelPart)
}