import type { NautilusModel } from '../../../../../../net/minecraft/client/model/animal/nautilus/NautilusModel.d.ts'
import type { ModelPart } from '../../../../../../net/minecraft/client/model/geom/ModelPart.d.ts'
import type { LayerDefinition } from '../../../../../../net/minecraft/client/model/geom/builders/LayerDefinition.d.ts'
import type { MeshDefinition } from '../../../../../../net/minecraft/client/model/geom/builders/MeshDefinition.d.ts'
export class NautilusSaddleModel extends NautilusModel {
    static MODEL_Y_OFFSET: number;
    static createBabyBodyLayer(): LayerDefinition;
    static createBodyLayer(): LayerDefinition;
    static createBodyMesh(): MeshDefinition;
    static createSaddleLayer(): LayerDefinition;
    constructor(root: ModelPart)
    // private nautilus: ModelPart;
    // private shell: ModelPart;
}