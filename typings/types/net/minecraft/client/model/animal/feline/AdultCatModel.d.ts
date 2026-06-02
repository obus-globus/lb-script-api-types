import type { AdultFelineModel } from '../../../../../../net/minecraft/client/model/animal/feline/AdultFelineModel.d.ts'
import type { ModelPart } from '../../../../../../net/minecraft/client/model/geom/ModelPart.d.ts'
import type { CubeDeformation } from '../../../../../../net/minecraft/client/model/geom/builders/CubeDeformation.d.ts'
import type { MeshDefinition } from '../../../../../../net/minecraft/client/model/geom/builders/MeshDefinition.d.ts'
import type { MeshTransformer } from '../../../../../../net/minecraft/client/model/geom/builders/MeshTransformer.d.ts'
import type { CatRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/CatRenderState.d.ts'
export class AdultCatModel extends AdultFelineModel<CatRenderState> {
    static CAT_TRANSFORMER: (param0: MeshDefinition) => net.minecraft.client.model.geom.builders.MeshDefinition;
    static COLLAR_DEFORMATION: CubeDeformation;
    static MODEL_Y_OFFSET: number;
    static createBodyMesh(paramg: CubeDeformation): MeshDefinition;
    constructor(root: ModelPart)
}