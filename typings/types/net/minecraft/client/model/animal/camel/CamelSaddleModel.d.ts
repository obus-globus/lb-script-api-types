import type { AdultCamelModel } from '../../../../../../net/minecraft/client/model/animal/camel/AdultCamelModel.d.ts'
import type { ModelPart } from '../../../../../../net/minecraft/client/model/geom/ModelPart.d.ts'
import type { LayerDefinition } from '../../../../../../net/minecraft/client/model/geom/builders/LayerDefinition.d.ts'
import type { CamelRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/CamelRenderState.d.ts'
export class CamelSaddleModel extends AdultCamelModel {
    static MODEL_Y_OFFSET: number;
    static createBodyLayer(): LayerDefinition;
    static createSaddleLayer(): LayerDefinition;
    constructor(root: ModelPart)
    // private reins: ModelPart;
    setupAnim(state: CamelRenderState): void;
}