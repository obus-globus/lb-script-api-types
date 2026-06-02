import type { BabyFelineModel } from '../../../../../../net/minecraft/client/model/animal/feline/BabyFelineModel.d.ts'
import type { ModelPart } from '../../../../../../net/minecraft/client/model/geom/ModelPart.d.ts'
import type { LayerDefinition } from '../../../../../../net/minecraft/client/model/geom/builders/LayerDefinition.d.ts'
import type { FelineRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/FelineRenderState.d.ts'
export class BabyOcelotModel extends BabyFelineModel<FelineRenderState> {
    static MODEL_Y_OFFSET: number;
    static createBabyLayer(): LayerDefinition;
    constructor(root: ModelPart)
}