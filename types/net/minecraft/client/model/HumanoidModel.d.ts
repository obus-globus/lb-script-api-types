import type { PoseStack } from '../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { ArmedModel } from '../../../../net/minecraft/client/model/ArmedModel.d.ts'
import type { EntityModel } from '../../../../net/minecraft/client/model/EntityModel.d.ts'
import type { HeadedModel } from '../../../../net/minecraft/client/model/HeadedModel.d.ts'
import type { ModelPart } from '../../../../net/minecraft/client/model/geom/ModelPart.d.ts'
import type { PartPose } from '../../../../net/minecraft/client/model/geom/PartPose.d.ts'
import type { CubeDeformation } from '../../../../net/minecraft/client/model/geom/builders/CubeDeformation.d.ts'
import type { MeshDefinition } from '../../../../net/minecraft/client/model/geom/builders/MeshDefinition.d.ts'
import type { MeshTransformer } from '../../../../net/minecraft/client/model/geom/builders/MeshTransformer.d.ts'
import type { ArmorModelSet } from '../../../../net/minecraft/client/renderer/entity/ArmorModelSet.d.ts'
import type { HumanoidRenderState } from '../../../../net/minecraft/client/renderer/entity/state/HumanoidRenderState.d.ts'
import type { RenderType } from '../../../../net/minecraft/client/renderer/rendertype/RenderType.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
import type { HumanoidArm } from '../../../../net/minecraft/world/entity/HumanoidArm.d.ts'
export class HumanoidModel<T extends HumanoidRenderState> extends EntityModel<T> implements ArmedModel<T>, HeadedModel {
    static BABY_TRANSFORMER: (param0: MeshDefinition) => net.minecraft.client.model.geom.builders.MeshDefinition;
    static HAT_OVERLAY_SCALE: number;
    static LEGGINGS_OVERLAY_SCALE: number;
    static MODEL_Y_OFFSET: number;
    static OVERLAY_SCALE: number;
    static TOOT_HORN_XROT_BASE: number;
    static TOOT_HORN_YROT_BASE: number;
    static createArmorMeshSet(paraminnerDeformation: CubeDeformation, paramouterDeformation: CubeDeformation): ArmorModelSet<MeshDefinition>;
    static createBabyArmorMeshSet(paraminnerDeformation: CubeDeformation, paramouterDeformation: CubeDeformation, paramarmOffset: PartPose): ArmorModelSet<MeshDefinition>;
    static createMesh(paramg: CubeDeformation, paramyOffset: number): MeshDefinition;
    constructor(root: ModelPart)
    constructor(root: ModelPart, renderType: (param0: Identifier) => RenderType)
    body: ModelPart;
    hat: ModelPart;
    readonly head: ModelPart;
    leftArm: ModelPart;
    leftLeg: ModelPart;
    rightArm: ModelPart;
    rightLeg: ModelPart;
    getArm(arm: HumanoidArm): ModelPart;
    getHead(): ModelPart;
    // private poseBlockingArm(arm: ModelPart, right: boolean): void;
    // private poseLeftArm(state: T): void;
    // private poseRightArm(state: T): void;
    // private quadraticArmUpdate(x: number): number;
    setupAnim(state: T): void;
    setupAttackAnimation(state: T): void;
    translateToHand(state: HumanoidRenderState, arm: HumanoidArm, poseStack: PoseStack): void;
    translateToHead(poseStack: PoseStack): void;
}