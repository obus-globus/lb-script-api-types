import type { CowModel } from '../../../../../../net/minecraft/client/model/animal/cow/CowModel.d.ts'
import type { ModelPart } from '../../../../../../net/minecraft/client/model/geom/ModelPart.d.ts'
import type { CubeDeformation } from '../../../../../../net/minecraft/client/model/geom/builders/CubeDeformation.d.ts'
import type { LayerDefinition } from '../../../../../../net/minecraft/client/model/geom/builders/LayerDefinition.d.ts'
import type { MeshDefinition } from '../../../../../../net/minecraft/client/model/geom/builders/MeshDefinition.d.ts'
import type { MeshTransformer } from '../../../../../../net/minecraft/client/model/geom/builders/MeshTransformer.d.ts'
export class BabyCowModel extends CowModel {
    static BABY_TRANSFORMER: (param0: MeshDefinition) => net.minecraft.client.model.geom.builders.MeshDefinition;
    static MODEL_Y_OFFSET: number;
    static createBodyLayer(): LayerDefinition;
    static createBodyMesh(paramlegSize: number, parammirrorLeftLeg: boolean, parammirrorRightLeg: boolean, paramg: CubeDeformation): MeshDefinition;
    constructor(root: ModelPart)
}