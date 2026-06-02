import type { ChickenModel } from '../../../../../../net/minecraft/client/model/animal/chicken/ChickenModel.d.ts'
import type { ModelPart } from '../../../../../../net/minecraft/client/model/geom/ModelPart.d.ts'
import type { LayerDefinition } from '../../../../../../net/minecraft/client/model/geom/builders/LayerDefinition.d.ts'
import type { ChickenRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/ChickenRenderState.d.ts'
export class AdultChickenModel extends ChickenModel {
    static MODEL_Y_OFFSET: number;
    static Y_OFFSET: number;
    static createBodyLayer(): LayerDefinition;
    constructor(root: ModelPart)
    // private head: ModelPart;
    setupAnim(state: ChickenRenderState): void;
}