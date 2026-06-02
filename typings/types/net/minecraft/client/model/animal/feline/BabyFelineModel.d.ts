import type { AbstractFelineModel } from '../../../../../../net/minecraft/client/model/animal/feline/AbstractFelineModel.d.ts'
import type { ModelPart } from '../../../../../../net/minecraft/client/model/geom/ModelPart.d.ts'
import type { LayerDefinition } from '../../../../../../net/minecraft/client/model/geom/builders/LayerDefinition.d.ts'
import type { FelineRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/FelineRenderState.d.ts'
export class BabyFelineModel<S extends FelineRenderState> extends AbstractFelineModel<S> {
    static MODEL_Y_OFFSET: number;
    static createBabyLayer(): LayerDefinition;
    constructor(root: ModelPart)
    setupAnim(state: S): void;
}