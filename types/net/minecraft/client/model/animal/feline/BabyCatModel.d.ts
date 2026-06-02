import type { BabyFelineModel } from '../../../../../../net/minecraft/client/model/animal/feline/BabyFelineModel.d.ts'
import type { ModelPart } from '../../../../../../net/minecraft/client/model/geom/ModelPart.d.ts'
import type { LayerDefinition } from '../../../../../../net/minecraft/client/model/geom/builders/LayerDefinition.d.ts'
import type { MeshDefinition } from '../../../../../../net/minecraft/client/model/geom/builders/MeshDefinition.d.ts'
import type { MeshTransformer } from '../../../../../../net/minecraft/client/model/geom/builders/MeshTransformer.d.ts'
import type { CatRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/CatRenderState.d.ts'
export class BabyCatModel extends BabyFelineModel<CatRenderState> {
    static COLLAR_TRANSFORMER: (param0: MeshDefinition) => net.minecraft.client.model.geom.builders.MeshDefinition;
    static MODEL_Y_OFFSET: number;
    static createBabyLayer(): LayerDefinition;
    constructor(root: ModelPart)
}