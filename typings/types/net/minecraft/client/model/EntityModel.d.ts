import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Model } from '../../../../net/minecraft/client/model/Model.d.ts'
import type { ModelPart } from '../../../../net/minecraft/client/model/geom/ModelPart.d.ts'
import type { EntityRenderState } from '../../../../net/minecraft/client/renderer/entity/state/EntityRenderState.d.ts'
import type { RenderType } from '../../../../net/minecraft/client/renderer/rendertype/RenderType.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
export abstract class EntityModel<T extends EntityRenderState> extends Model<T> {
    static MODEL_Y_OFFSET: number;
    constructor(root: ModelPart)
    constructor(root: ModelPart, renderType: (param0: Identifier) => RenderType)
}