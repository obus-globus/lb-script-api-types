import type { TurtleModel } from '../../../../../../net/minecraft/client/model/animal/turtle/TurtleModel.d.ts'
import type { ModelPart } from '../../../../../../net/minecraft/client/model/geom/ModelPart.d.ts'
import type { CubeDeformation } from '../../../../../../net/minecraft/client/model/geom/builders/CubeDeformation.d.ts'
import type { LayerDefinition } from '../../../../../../net/minecraft/client/model/geom/builders/LayerDefinition.d.ts'
import type { MeshDefinition } from '../../../../../../net/minecraft/client/model/geom/builders/MeshDefinition.d.ts'
import type { TurtleRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/TurtleRenderState.d.ts'
export class AdultTurtleModel extends TurtleModel {
    static MODEL_Y_OFFSET: number;
    static createBodyLayer(): LayerDefinition;
    static createBodyMesh(paramlegSize: number, parammirrorLeftLeg: boolean, parammirrorRightLeg: boolean, paramg: CubeDeformation): MeshDefinition;
    constructor(root: ModelPart)
    // private eggBelly: ModelPart;
    setupAnim(state: TurtleRenderState): void;
}