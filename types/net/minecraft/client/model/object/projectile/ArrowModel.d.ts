import type { EntityModel } from '../../../../../../net/minecraft/client/model/EntityModel.d.ts'
import type { ModelPart } from '../../../../../../net/minecraft/client/model/geom/ModelPart.d.ts'
import type { LayerDefinition } from '../../../../../../net/minecraft/client/model/geom/builders/LayerDefinition.d.ts'
import type { ArrowRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/ArrowRenderState.d.ts'
export class ArrowModel extends EntityModel<ArrowRenderState> {
    static MODEL_Y_OFFSET: number;
    static createBodyLayer(): LayerDefinition;
    constructor(root: ModelPart)
    setupAnim(state: ArrowRenderState): void;
}