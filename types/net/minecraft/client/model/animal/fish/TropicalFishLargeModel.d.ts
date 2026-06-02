import type { EntityModel } from '../../../../../../net/minecraft/client/model/EntityModel.d.ts'
import type { ModelPart } from '../../../../../../net/minecraft/client/model/geom/ModelPart.d.ts'
import type { CubeDeformation } from '../../../../../../net/minecraft/client/model/geom/builders/CubeDeformation.d.ts'
import type { LayerDefinition } from '../../../../../../net/minecraft/client/model/geom/builders/LayerDefinition.d.ts'
import type { TropicalFishRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/TropicalFishRenderState.d.ts'
export class TropicalFishLargeModel extends EntityModel<TropicalFishRenderState> {
    static MODEL_Y_OFFSET: number;
    static createBodyLayer(paramg: CubeDeformation): LayerDefinition;
    constructor(root: ModelPart)
    // private tail: ModelPart;
    setupAnim(state: TropicalFishRenderState): void;
}