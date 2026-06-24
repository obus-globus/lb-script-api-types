import type { QuadrupedModel } from '../../../../../../net/minecraft/client/model/QuadrupedModel.d.ts'
import type { ModelPart } from '../../../../../../net/minecraft/client/model/geom/ModelPart.d.ts'
import type { CubeDeformation } from '../../../../../../net/minecraft/client/model/geom/builders/CubeDeformation.d.ts'
import type { LayerDefinition } from '../../../../../../net/minecraft/client/model/geom/builders/LayerDefinition.d.ts'
import type { MeshDefinition } from '../../../../../../net/minecraft/client/model/geom/builders/MeshDefinition.d.ts'
import type { MeshTransformer } from '../../../../../../net/minecraft/client/model/geom/builders/MeshTransformer.d.ts'
import type { PartDefinition } from '../../../../../../net/minecraft/client/model/geom/builders/PartDefinition.d.ts'
import type { LivingEntityRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/LivingEntityRenderState.d.ts'
export class CowModel extends QuadrupedModel<LivingEntityRenderState> {
    static BABY_TRANSFORMER: (param0: MeshDefinition) => MeshDefinition;
    static MODEL_Y_OFFSET: number;
    static createBaseCowModel(): MeshDefinition;
    static createBodyLayer(): LayerDefinition;
    static createBodyMesh(paramlegSize: number, parammirrorLeftLeg: boolean, parammirrorRightLeg: boolean, paramg: CubeDeformation): MeshDefinition;
    static createLegs(paramroot: PartDefinition, parammirrorLeftLeg: boolean, parammirrorRightLeg: boolean, paramlegSize: number, paramg: CubeDeformation): void;
    constructor(root: ModelPart)
    getHead(): ModelPart;
}