import type { AdultFelineModel } from '../../../../../../net/minecraft/client/model/animal/feline/AdultFelineModel.d.ts'
import type { ModelPart } from '../../../../../../net/minecraft/client/model/geom/ModelPart.d.ts'
import type { CubeDeformation } from '../../../../../../net/minecraft/client/model/geom/builders/CubeDeformation.d.ts'
import type { MeshDefinition } from '../../../../../../net/minecraft/client/model/geom/builders/MeshDefinition.d.ts'
import type { FelineRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/FelineRenderState.d.ts'
export class AdultOcelotModel extends AdultFelineModel<FelineRenderState> {
    static MODEL_Y_OFFSET: number;
    static createBodyMesh(paramg: CubeDeformation): MeshDefinition;
    constructor(root: ModelPart)
}