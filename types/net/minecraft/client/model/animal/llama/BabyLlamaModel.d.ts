import type { LlamaModel } from '../../../../../../net/minecraft/client/model/animal/llama/LlamaModel.d.ts'
import type { ModelPart } from '../../../../../../net/minecraft/client/model/geom/ModelPart.d.ts'
import type { CubeDeformation } from '../../../../../../net/minecraft/client/model/geom/builders/CubeDeformation.d.ts'
import type { LayerDefinition } from '../../../../../../net/minecraft/client/model/geom/builders/LayerDefinition.d.ts'
export class BabyLlamaModel extends LlamaModel {
    static MODEL_Y_OFFSET: number;
    static createBodyLayer(paramg: CubeDeformation): LayerDefinition;
    constructor(root: ModelPart)
}