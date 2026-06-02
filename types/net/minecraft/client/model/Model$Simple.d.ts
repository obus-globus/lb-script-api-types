import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Model } from '../../../../net/minecraft/client/model/Model.d.ts'
import type { ModelPart } from '../../../../net/minecraft/client/model/geom/ModelPart.d.ts'
import type { RenderType } from '../../../../net/minecraft/client/renderer/rendertype/RenderType.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
import type { Unit } from '../../../../net/minecraft/util/Unit.d.ts'
export class Model$Simple extends Model<Unit> {
    constructor(root: ModelPart, renderType: (param0: Identifier) => RenderType)
    setupAnim(state: Unit): void;
}