import type { EntityModel } from '../../../../../../net/minecraft/client/model/EntityModel.d.ts'
import type { ModelPart } from '../../../../../../net/minecraft/client/model/geom/ModelPart.d.ts'
import type { LayerDefinition } from '../../../../../../net/minecraft/client/model/geom/builders/LayerDefinition.d.ts'
import type { EntityRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/EntityRenderState.d.ts'
import type { GhastRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/GhastRenderState.d.ts'
export class GhastModel extends EntityModel<GhastRenderState> {
    static MODEL_Y_OFFSET: number;
    static animateTentacles(paramstate: EntityRenderState, paramtentacles: ModelPart[]): void;
    static createBodyLayer(): LayerDefinition;
    constructor(root: ModelPart)
    // private tentacles: ModelPart[];
    setupAnim(state: GhastRenderState): void;
}