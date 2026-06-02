import type { ModelPart } from '../../../../../../net/minecraft/client/model/geom/ModelPart.d.ts'
import type { LayerDefinition } from '../../../../../../net/minecraft/client/model/geom/builders/LayerDefinition.d.ts'
import type { HoglinModel } from '../../../../../../net/minecraft/client/model/monster/hoglin/HoglinModel.d.ts'
export class BabyHoglinModel extends HoglinModel {
    static MODEL_Y_OFFSET: number;
    static createBodyLayer(): LayerDefinition;
    constructor(root: ModelPart)
    animateHeadbutt(headbuttLerpFactor: number): void;
}