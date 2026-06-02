import type { EntityModel } from '../../../../../../net/minecraft/client/model/EntityModel.d.ts'
import type { ModelPart } from '../../../../../../net/minecraft/client/model/geom/ModelPart.d.ts'
import type { LayerDefinition } from '../../../../../../net/minecraft/client/model/geom/builders/LayerDefinition.d.ts'
import type { HappyGhastRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/HappyGhastRenderState.d.ts'
export class HappyGhastHarnessModel extends EntityModel<HappyGhastRenderState> {
    static MODEL_Y_OFFSET: number;
    static createHarnessLayer(parambaby: boolean): LayerDefinition;
    constructor(root: ModelPart)
    // private goggles: ModelPart;
    setupAnim(state: HappyGhastRenderState): void;
}