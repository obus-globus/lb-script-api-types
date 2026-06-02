import type { QuadrupedModel } from '../../../../../../net/minecraft/client/model/QuadrupedModel.d.ts'
import type { ModelPart } from '../../../../../../net/minecraft/client/model/geom/ModelPart.d.ts'
import type { CubeDeformation } from '../../../../../../net/minecraft/client/model/geom/builders/CubeDeformation.d.ts'
import type { LayerDefinition } from '../../../../../../net/minecraft/client/model/geom/builders/LayerDefinition.d.ts'
import type { MeshDefinition } from '../../../../../../net/minecraft/client/model/geom/builders/MeshDefinition.d.ts'
import type { PolarBearRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/PolarBearRenderState.d.ts'
export class PolarBearModel extends QuadrupedModel<PolarBearRenderState> {
    static MODEL_Y_OFFSET: number;
    static createBodyLayer(): LayerDefinition;
    static createBodyMesh(paramlegSize: number, parammirrorLeftLeg: boolean, parammirrorRightLeg: boolean, paramg: CubeDeformation): MeshDefinition;
    constructor(root: ModelPart)
    setupAnim(state: PolarBearRenderState): void;
}