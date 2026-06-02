import type { HorseModel } from '../../../../../../net/minecraft/client/model/animal/equine/HorseModel.d.ts'
import type { ModelPart } from '../../../../../../net/minecraft/client/model/geom/ModelPart.d.ts'
import type { CubeDeformation } from '../../../../../../net/minecraft/client/model/geom/builders/CubeDeformation.d.ts'
import type { MeshDefinition } from '../../../../../../net/minecraft/client/model/geom/builders/MeshDefinition.d.ts'
export class BabyHorseModel extends HorseModel {
    static MODEL_Y_OFFSET: number;
    static createBabyMesh(paramg: CubeDeformation): MeshDefinition;
    static createBodyMesh(paramg: CubeDeformation): MeshDefinition;
    constructor(root: ModelPart)
    animateHeadPartsPlacement(eating: number, standing: number): void;
    getLegStandingYOffset(): number;
    getLegStandingZOffset(): number;
    getTailXRotOffset(): number;
}