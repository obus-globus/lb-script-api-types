import type { EntityModel } from '../../../../../../net/minecraft/client/model/EntityModel.d.ts'
import type { ModelPart } from '../../../../../../net/minecraft/client/model/geom/ModelPart.d.ts'
import type { LayerDefinition } from '../../../../../../net/minecraft/client/model/geom/builders/LayerDefinition.d.ts'
import type { MeshDefinition } from '../../../../../../net/minecraft/client/model/geom/builders/MeshDefinition.d.ts'
import type { MeshTransformer } from '../../../../../../net/minecraft/client/model/geom/builders/MeshTransformer.d.ts'
import type { SalmonRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/SalmonRenderState.d.ts'
export class SalmonModel extends EntityModel<SalmonRenderState> {
    static LARGE_TRANSFORMER: (param0: MeshDefinition) => net.minecraft.client.model.geom.builders.MeshDefinition;
    static MODEL_Y_OFFSET: number;
    static SMALL_TRANSFORMER: (param0: MeshDefinition) => net.minecraft.client.model.geom.builders.MeshDefinition;
    static createBodyLayer(): LayerDefinition;
    constructor(root: ModelPart)
    // private bodyBack: ModelPart;
    setupAnim(state: SalmonRenderState): void;
}