import type { PoseStack } from '../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ItemInHandInterface } from '../../../../net/irisshaders/iris/mixinterface/ItemInHandInterface.d.ts'
import type { HandRenderer } from '../../../../net/irisshaders/iris/pathways/HandRenderer.d.ts'
import type { Minecraft } from '../../../../net/minecraft/client/Minecraft.d.ts'
import type { AbstractClientPlayer } from '../../../../net/minecraft/client/player/AbstractClientPlayer.d.ts'
import type { LocalPlayer } from '../../../../net/minecraft/client/player/LocalPlayer.d.ts'
import type { SubmitNodeCollector } from '../../../../net/minecraft/client/renderer/SubmitNodeCollector.d.ts'
import type { SubmitNodeStorage } from '../../../../net/minecraft/client/renderer/SubmitNodeStorage.d.ts'
import type { EntityRenderDispatcher } from '../../../../net/minecraft/client/renderer/entity/EntityRenderDispatcher.d.ts'
import type { ItemModelResolver } from '../../../../net/minecraft/client/renderer/item/ItemModelResolver.d.ts'
import type { MapRenderState } from '../../../../net/minecraft/client/renderer/state/MapRenderState.d.ts'
import type { InteractionHand } from '../../../../net/minecraft/world/InteractionHand.d.ts'
import type { HumanoidArm } from '../../../../net/minecraft/world/entity/HumanoidArm.d.ts'
import type { LivingEntity } from '../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { Player } from '../../../../net/minecraft/world/entity/player/Player.d.ts'
import type { ItemDisplayContext } from '../../../../net/minecraft/world/item/ItemDisplayContext.d.ts'
import type { ItemStack } from '../../../../net/minecraft/world/item/ItemStack.d.ts'
export class ItemInHandRenderer extends Object implements ItemInHandInterface {
    constructor(minecraft: Minecraft, entityRenderDispatcher: EntityRenderDispatcher, itemModelResolver: ItemModelResolver)
    // private customRenderer: HandRenderer;
    // private entityRenderDispatcher: EntityRenderDispatcher;
    // private itemModelResolver: ItemModelResolver;
    // private mainHandHeight: number;
    // private mainHandItem: ItemStack;
    // private mapRenderState: MapRenderState;
    // private minecraft: Minecraft;
    // private oMainHandHeight: number;
    // private oOffHandHeight: number;
    // private offHandHeight: number;
    // private offHandItem: ItemStack;
    // private applyBrushTransform(poseStack: PoseStack, frameInterp: number, arm: HumanoidArm, player: Player): void;
    // private applyEatTransform(poseStack: PoseStack, frameInterp: number, arm: HumanoidArm, itemStack: ItemStack, player: Player): void;
    // private applyItemArmAttackTransform(poseStack: PoseStack, arm: HumanoidArm, attackValue: number): void;
    // private applyItemArmTransform(poseStack: PoseStack, arm: HumanoidArm, inverseArmHeight: number): void;
    // private calculateMapTilt(xRot: number): number;
    iris$isAnyHandSolid(): boolean;
    iris$isAnyHandSolid(): boolean;
    iris$isAnyHandTranslucent(): boolean;
    iris$isAnyHandTranslucent(): boolean;
    iris$renderHandsWithCustomRenderer(arg0: HandRenderer, arg1: number, arg2: PoseStack, arg3: SubmitNodeStorage, arg4: LocalPlayer, arg5: number): void;
    iris$renderHandsWithCustomRenderer(arg0: HandRenderer, arg1: number, arg2: PoseStack, arg3: SubmitNodeStorage, arg4: LocalPlayer, arg5: number): void;
    itemUsed(hand: InteractionHand): void;
    // private renderArmWithItem(player: AbstractClientPlayer, frameInterp: number, xRot: number, hand: InteractionHand, attack: number, itemStack: ItemStack, inverseArmHeight: number, poseStack: PoseStack, submitNodeCollector: SubmitNodeCollector, lightCoords: number): void;
    renderHandsWithItems(frameInterp: number, poseStack: PoseStack, submitNodeCollector: SubmitNodeCollector, player: LocalPlayer, lightCoords: number): void;
    renderItem(mob: LivingEntity, itemStack: ItemStack, type: ItemDisplayContext, poseStack: PoseStack, submitNodeCollector: SubmitNodeCollector, lightCoords: number): void;
    // private renderMap(poseStack: PoseStack, submitNodeCollector: SubmitNodeCollector, lightCoords: number, itemStack: ItemStack): void;
    // private renderMapHand(poseStack: PoseStack, submitNodeCollector: SubmitNodeCollector, lightCoords: number, arm: HumanoidArm): void;
    // private renderOneHandedMap(poseStack: PoseStack, submitNodeCollector: SubmitNodeCollector, lightCoords: number, inverseArmHeight: number, arm: HumanoidArm, attackValue: number, map: ItemStack): void;
    // private renderPlayerArm(poseStack: PoseStack, submitNodeCollector: SubmitNodeCollector, lightCoords: number, inverseArmHeight: number, attackValue: number, arm: HumanoidArm): void;
    // private renderTwoHandedMap(poseStack: PoseStack, submitNodeCollector: SubmitNodeCollector, lightCoords: number, xRot: number, inverseArmHeight: number, attackValue: number): void;
    // private shouldInstantlyReplaceVisibleItem(currentlyVisibleItem: ItemStack, expectedItem: ItemStack): boolean;
    // private swingArm(attack: number, poseStack: PoseStack, invert: number, arm: HumanoidArm): void;
    tick(): void;
    // private viaFabricPlusVisuals$applySwingOffset(arg0: AbstractClientPlayer, arg1: InteractionHand, arg2: number, arg3: PoseStack): void;
}