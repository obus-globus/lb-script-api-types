import type { WolfModel } from '../../../../../../net/minecraft/client/model/animal/wolf/WolfModel.d.ts'
import type { ModelPart } from '../../../../../../net/minecraft/client/model/geom/ModelPart.d.ts'
import type { LayerDefinition } from '../../../../../../net/minecraft/client/model/geom/builders/LayerDefinition.d.ts'
import type { WolfRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/WolfRenderState.d.ts'
export class BabyWolfModel extends WolfModel {
    static MODEL_Y_OFFSET: number;
    static createBodyLayer(): LayerDefinition;
    constructor(root: ModelPart)
    setSittingPose(state: WolfRenderState): void;
    shakeOffWater(state: WolfRenderState): void;
}