import type { PandaModel } from '../../../../../../net/minecraft/client/model/animal/panda/PandaModel.d.ts'
import type { ModelPart } from '../../../../../../net/minecraft/client/model/geom/ModelPart.d.ts'
import type { CubeDeformation } from '../../../../../../net/minecraft/client/model/geom/builders/CubeDeformation.d.ts'
import type { LayerDefinition } from '../../../../../../net/minecraft/client/model/geom/builders/LayerDefinition.d.ts'
import type { MeshDefinition } from '../../../../../../net/minecraft/client/model/geom/builders/MeshDefinition.d.ts'
import type { PartDefinition } from '../../../../../../net/minecraft/client/model/geom/builders/PartDefinition.d.ts'
import type { PandaRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/PandaRenderState.d.ts'
export class BabyPandaModel extends PandaModel {
    static MODEL_Y_OFFSET: number;
    static createBodyLayer(): LayerDefinition;
    static createBodyMesh(paramlegSize: number, parammirrorLeftLeg: boolean, parammirrorRightLeg: boolean, paramg: CubeDeformation): MeshDefinition;
    static createLegs(paramroot: PartDefinition, parammirrorLeftLeg: boolean, parammirrorRightLeg: boolean, paramlegSize: number, paramg: CubeDeformation): void;
    constructor(root: ModelPart)
    animateSitting(state: PandaRenderState): void;
}