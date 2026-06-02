import type { ModelPart } from '../../../../../net/minecraft/client/model/geom/ModelPart.d.ts'
import type { PartPose } from '../../../../../net/minecraft/client/model/geom/PartPose.d.ts'
import type { CubeDeformation } from '../../../../../net/minecraft/client/model/geom/builders/CubeDeformation.d.ts'
import type { LayerDefinition } from '../../../../../net/minecraft/client/model/geom/builders/LayerDefinition.d.ts'
import type { MeshDefinition } from '../../../../../net/minecraft/client/model/geom/builders/MeshDefinition.d.ts'
import type { MeshTransformer } from '../../../../../net/minecraft/client/model/geom/builders/MeshTransformer.d.ts'
import type { PlayerModel } from '../../../../../net/minecraft/client/model/player/PlayerModel.d.ts'
import type { ArmorModelSet } from '../../../../../net/minecraft/client/renderer/entity/ArmorModelSet.d.ts'
export class PlayerEarsModel extends PlayerModel {
    static BABY_TRANSFORMER: (param0: MeshDefinition) => net.minecraft.client.model.geom.builders.MeshDefinition;
    static HAT_OVERLAY_SCALE: number;
    static LEGGINGS_OVERLAY_SCALE: number;
    static MODEL_Y_OFFSET: number;
    static OVERLAY_SCALE: number;
    static TOOT_HORN_XROT_BASE: number;
    static TOOT_HORN_YROT_BASE: number;
    static createArmorMeshSet(paraminnerDeformation: CubeDeformation, paramouterDeformation: CubeDeformation): ArmorModelSet<MeshDefinition>;
    static createBabyArmorMeshSet(paraminnerDeformation: CubeDeformation, paramouterDeformation: CubeDeformation, paramarmOffset: PartPose): ArmorModelSet<MeshDefinition>;
    static createEarsLayer(): LayerDefinition;
    static createMesh(paramg: CubeDeformation, paramyOffset: number): MeshDefinition;
    static createMesh(paramscale: CubeDeformation, paramslim: boolean): MeshDefinition;
    constructor(root: ModelPart)
}