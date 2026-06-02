import type { PoseStack } from '../../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { HumanoidModel } from '../../../../../../net/minecraft/client/model/HumanoidModel.d.ts'
import type { VillagerLikeModel } from '../../../../../../net/minecraft/client/model/VillagerLikeModel.d.ts'
import type { ModelPart } from '../../../../../../net/minecraft/client/model/geom/ModelPart.d.ts'
import type { PartPose } from '../../../../../../net/minecraft/client/model/geom/PartPose.d.ts'
import type { CubeDeformation } from '../../../../../../net/minecraft/client/model/geom/builders/CubeDeformation.d.ts'
import type { LayerDefinition } from '../../../../../../net/minecraft/client/model/geom/builders/LayerDefinition.d.ts'
import type { MeshDefinition } from '../../../../../../net/minecraft/client/model/geom/builders/MeshDefinition.d.ts'
import type { MeshTransformer } from '../../../../../../net/minecraft/client/model/geom/builders/MeshTransformer.d.ts'
import type { ArmorModelSet } from '../../../../../../net/minecraft/client/renderer/entity/ArmorModelSet.d.ts'
import type { ZombieVillagerRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/ZombieVillagerRenderState.d.ts'
export class ZombieVillagerModel<S extends ZombieVillagerRenderState> extends HumanoidModel<S> implements VillagerLikeModel<S> {
    static BABY_TRANSFORMER: (param0: MeshDefinition) => net.minecraft.client.model.geom.builders.MeshDefinition;
    static HAT_OVERLAY_SCALE: number;
    static LEGGINGS_OVERLAY_SCALE: number;
    static MODEL_Y_OFFSET: number;
    static OVERLAY_SCALE: number;
    static TOOT_HORN_XROT_BASE: number;
    static TOOT_HORN_YROT_BASE: number;
    static createArmorLayerSet(paraminnerDeformation: CubeDeformation, paramouterDeformation: CubeDeformation): ArmorModelSet<LayerDefinition>;
    static createArmorMeshSet(paraminnerDeformation: CubeDeformation, paramouterDeformation: CubeDeformation): ArmorModelSet<MeshDefinition>;
    static createBabyArmorMeshSet(paraminnerDeformation: CubeDeformation, paramouterDeformation: CubeDeformation, paramarmOffset: PartPose): ArmorModelSet<MeshDefinition>;
    static createBodyLayer(): LayerDefinition;
    static createMesh(paramg: CubeDeformation, paramyOffset: number): MeshDefinition;
    static createNoHatLayer(): LayerDefinition;
    constructor(root: ModelPart)
    setupAnim(state: S): void;
    translateToArms(state: ZombieVillagerRenderState, outputPoseStack: PoseStack): void;
}