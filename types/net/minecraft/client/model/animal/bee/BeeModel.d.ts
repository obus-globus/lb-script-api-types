import type { EntityModel } from '../../../../../../net/minecraft/client/model/EntityModel.d.ts'
import type { ModelPart } from '../../../../../../net/minecraft/client/model/geom/ModelPart.d.ts'
import type { BeeRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/BeeRenderState.d.ts'
export abstract class BeeModel extends EntityModel<BeeRenderState> {
    static MODEL_Y_OFFSET: number;
    constructor(root: ModelPart)
    // private backLeg: ModelPart;
    // private bone: ModelPart;
    // private frontLeg: ModelPart;
    // private leftWing: ModelPart;
    // private midLeg: ModelPart;
    // private rightWing: ModelPart;
    // private stinger: ModelPart;
    bobUpAndDown(speed: number, ageInTicks: number): void;
    setupAnim(state: BeeRenderState): void;
}