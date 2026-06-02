import type { Model } from '../../../../../../net/minecraft/client/model/Model.d.ts'
import type { ModelPart } from '../../../../../../net/minecraft/client/model/geom/ModelPart.d.ts'
import type { SkullModelBase$State } from '../../../../../../net/minecraft/client/model/object/skull/SkullModelBase$State.d.ts'
export abstract class SkullModelBase extends Model<SkullModelBase$State> {
    constructor(root: ModelPart)
}