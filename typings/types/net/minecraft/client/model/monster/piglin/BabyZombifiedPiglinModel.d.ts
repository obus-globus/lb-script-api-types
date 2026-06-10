import type { ModelPart } from '../../../../../../net/minecraft/client/model/geom/ModelPart.d.ts'
import type { PartPose } from '../../../../../../net/minecraft/client/model/geom/PartPose.d.ts'
import type { CubeDeformation } from '../../../../../../net/minecraft/client/model/geom/builders/CubeDeformation.d.ts'
import type { LayerDefinition } from '../../../../../../net/minecraft/client/model/geom/builders/LayerDefinition.d.ts'
import type { MeshDefinition } from '../../../../../../net/minecraft/client/model/geom/builders/MeshDefinition.d.ts'
import type { MeshTransformer } from '../../../../../../net/minecraft/client/model/geom/builders/MeshTransformer.d.ts'
import type { PartDefinition } from '../../../../../../net/minecraft/client/model/geom/builders/PartDefinition.d.ts'
import type { ZombifiedPiglinModel } from '../../../../../../net/minecraft/client/model/monster/piglin/ZombifiedPiglinModel.d.ts'
import type { ArmorModelSet } from '../../../../../../net/minecraft/client/renderer/entity/ArmorModelSet.d.ts'
export class BabyZombifiedPiglinModel extends ZombifiedPiglinModel {
    static BABY_TRANSFORMER: (param0: MeshDefinition) => MeshDefinition;
    static HAT_OVERLAY_SCALE: number;
    static LEGGINGS_OVERLAY_SCALE: number;
    static MODEL_Y_OFFSET: number;
    static OVERLAY_SCALE: number;
    static TOOT_HORN_XROT_BASE: number;
    static TOOT_HORN_YROT_BASE: number;
    static addHead(paramg: CubeDeformation, parammesh: MeshDefinition): PartDefinition;
    static createArmorMeshSet(paraminnerDeformation: CubeDeformation, paramouterDeformation: CubeDeformation): ArmorModelSet<MeshDefinition>;
    static createBabyArmorMeshSet(paraminnerDeformation: CubeDeformation, paramouterDeformation: CubeDeformation, paramarmOffset: PartPose): ArmorModelSet<MeshDefinition>;
    static createBodyLayer(): LayerDefinition;
    static createMesh(paramg: CubeDeformation, paramyOffset: number): MeshDefinition;
    constructor(root: ModelPart)
    getDefaultEarAngleInDegrees(): number;
}