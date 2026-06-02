import type { EntityModel } from '../../../../../../net/minecraft/client/model/EntityModel.d.ts'
import type { ModelPart } from '../../../../../../net/minecraft/client/model/geom/ModelPart.d.ts'
import type { LayerDefinition } from '../../../../../../net/minecraft/client/model/geom/builders/LayerDefinition.d.ts'
import type { SlimeRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/SlimeRenderState.d.ts'
export class MagmaCubeModel extends EntityModel<SlimeRenderState> {
    static MODEL_Y_OFFSET: number;
    static createBodyLayer(): LayerDefinition;
    constructor(root: ModelPart)
    // private bodyCubes: ModelPart[];
    setupAnim(state: SlimeRenderState): void;
}