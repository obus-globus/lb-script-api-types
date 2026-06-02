import type { QuadrupedModel } from '../../../../../../net/minecraft/client/model/QuadrupedModel.d.ts'
import type { ModelPart } from '../../../../../../net/minecraft/client/model/geom/ModelPart.d.ts'
import type { CubeDeformation } from '../../../../../../net/minecraft/client/model/geom/builders/CubeDeformation.d.ts'
import type { LayerDefinition } from '../../../../../../net/minecraft/client/model/geom/builders/LayerDefinition.d.ts'
import type { MeshDefinition } from '../../../../../../net/minecraft/client/model/geom/builders/MeshDefinition.d.ts'
import type { SheepRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/SheepRenderState.d.ts'
export class SheepFurModel extends QuadrupedModel<SheepRenderState> {
    static MODEL_Y_OFFSET: number;
    static createBodyMesh(paramlegSize: number, parammirrorLeftLeg: boolean, parammirrorRightLeg: boolean, paramg: CubeDeformation): MeshDefinition;
    static createFurLayer(): LayerDefinition;
    constructor(root: ModelPart)
    setupAnim(state: SheepRenderState): void;
}