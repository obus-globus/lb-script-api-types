import type { EntityModel } from '../../../../../../net/minecraft/client/model/EntityModel.d.ts'
import type { ModelPart } from '../../../../../../net/minecraft/client/model/geom/ModelPart.d.ts'
import type { LayerDefinition } from '../../../../../../net/minecraft/client/model/geom/builders/LayerDefinition.d.ts'
import type { MeshDefinition } from '../../../../../../net/minecraft/client/model/geom/builders/MeshDefinition.d.ts'
import type { MeshTransformer } from '../../../../../../net/minecraft/client/model/geom/builders/MeshTransformer.d.ts'
import type { DolphinRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/DolphinRenderState.d.ts'
export class DolphinModel extends EntityModel<DolphinRenderState> {
    static BABY_TRANSFORMER: (param0: MeshDefinition) => net.minecraft.client.model.geom.builders.MeshDefinition;
    static MODEL_Y_OFFSET: number;
    static createBodyLayer(): LayerDefinition;
    constructor(root: ModelPart)
    // private body: ModelPart;
    // private tail: ModelPart;
    // private tailFin: ModelPart;
    setupAnim(state: DolphinRenderState): void;
}