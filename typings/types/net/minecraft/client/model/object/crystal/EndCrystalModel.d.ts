import type { EntityModel } from '../../../../../../net/minecraft/client/model/EntityModel.d.ts'
import type { ModelPart } from '../../../../../../net/minecraft/client/model/geom/ModelPart.d.ts'
import type { LayerDefinition } from '../../../../../../net/minecraft/client/model/geom/builders/LayerDefinition.d.ts'
import type { EndCrystalRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/EndCrystalRenderState.d.ts'
export class EndCrystalModel extends EntityModel<EndCrystalRenderState> {
    static MODEL_Y_OFFSET: number;
    static createBodyLayer(): LayerDefinition;
    constructor(root: ModelPart)
    base: ModelPart;
    cube: ModelPart;
    innerGlass: ModelPart;
    outerGlass: ModelPart;
    setupAnim(state: EndCrystalRenderState): void;
}