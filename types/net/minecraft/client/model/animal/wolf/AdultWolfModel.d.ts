import type { WolfModel } from '../../../../../../net/minecraft/client/model/animal/wolf/WolfModel.d.ts'
import type { ModelPart } from '../../../../../../net/minecraft/client/model/geom/ModelPart.d.ts'
import type { CubeDeformation } from '../../../../../../net/minecraft/client/model/geom/builders/CubeDeformation.d.ts'
import type { MeshDefinition } from '../../../../../../net/minecraft/client/model/geom/builders/MeshDefinition.d.ts'
import type { WolfRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/WolfRenderState.d.ts'
export class AdultWolfModel extends WolfModel {
    static MODEL_Y_OFFSET: number;
    static createBodyLayer(paramg: CubeDeformation): MeshDefinition;
    constructor(root: ModelPart)
    // private realHead: ModelPart;
    // private realTail: ModelPart;
    // private upperBody: ModelPart;
    setSittingPose(state: WolfRenderState): void;
    shakeOffWater(state: WolfRenderState): void;
}