import type { ClientPlayerInteractionManager1_18_2 } from '../../../../com/viaversion/viafabricplus/features/interaction/r1_18_2_block_ack_emulation/ClientPlayerInteractionManager1_18_2.d.ts'
import type { IMultiPlayerGameMode } from '../../../../com/viaversion/viafabricplus/injection/access/interaction/r1_18_2_block_ack_emulation/IMultiPlayerGameMode.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ClientRecipeBook } from '../../../../net/minecraft/client/ClientRecipeBook.d.ts'
import type { Minecraft } from '../../../../net/minecraft/client/Minecraft.d.ts'
import type { ClientLevel } from '../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { ClientPacketListener } from '../../../../net/minecraft/client/multiplayer/ClientPacketListener.d.ts'
import type { PredictiveAction } from '../../../../net/minecraft/client/multiplayer/prediction/PredictiveAction.d.ts'
import type { LocalPlayer } from '../../../../net/minecraft/client/player/LocalPlayer.d.ts'
import type { BlockPos } from '../../../../net/minecraft/core/BlockPos.d.ts'
import type { Direction } from '../../../../net/minecraft/core/Direction.d.ts'
import type { PacketListener } from '../../../../net/minecraft/network/PacketListener.d.ts'
import type { Packet } from '../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { ServerboundContainerClickPacket } from '../../../../net/minecraft/network/protocol/game/ServerboundContainerClickPacket.d.ts'
import type { StatsCounter } from '../../../../net/minecraft/stats/StatsCounter.d.ts'
import type { InteractionHand } from '../../../../net/minecraft/world/InteractionHand.d.ts'
import type { InteractionResult } from '../../../../net/minecraft/world/InteractionResult.d.ts'
import type { Entity } from '../../../../net/minecraft/world/entity/Entity.d.ts'
import type { Input } from '../../../../net/minecraft/world/entity/player/Input.d.ts'
import type { Player } from '../../../../net/minecraft/world/entity/player/Player.d.ts'
import type { ContainerInput } from '../../../../net/minecraft/world/inventory/ContainerInput.d.ts'
import type { ItemStack } from '../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { PiercingWeapon } from '../../../../net/minecraft/world/item/component/PiercingWeapon.d.ts'
import type { RecipeDisplayId } from '../../../../net/minecraft/world/item/crafting/display/RecipeDisplayId.d.ts'
import type { GameType } from '../../../../net/minecraft/world/level/GameType.d.ts'
import type { BlockHitResult } from '../../../../net/minecraft/world/phys/BlockHitResult.d.ts'
import type { EntityHitResult } from '../../../../net/minecraft/world/phys/EntityHitResult.d.ts'
import type { MutableObject } from '../../../../org/apache/commons/lang3/mutable/MutableObject.d.ts'
import type { CallbackInfoReturnable } from '../../../../org/spongepowered/asm/mixin/injection/callback/CallbackInfoReturnable.d.ts'
export class MultiPlayerGameMode extends Object implements IMultiPlayerGameMode {
    constructor(minecraft: Minecraft, connection: ClientPacketListener)
    // private carriedIndex: number;
    // private connection: ClientPacketListener;
    // private destroyBlockPos: BlockPos;
    destroyDelay: number;
    destroyProgress: number;
    // private destroyTicks: number;
    // private destroyingItem: ItemStack;
    // private isDestroying: boolean;
    localPlayerMode: GameType;
    // private minecraft: Minecraft;
    // private previousLocalPlayerMode: GameType;
    // private viaFabricPlus$1_18_2InteractionManager: ClientPlayerInteractionManager1_18_2;
    // private viaFabricPlus$oldCursorStack: ItemStack;
    // private viaFabricPlus$oldItems: (Object | null)[];
    adjustPlayer(player: Player): void;
    attack(player: Player, entity: Entity): void;
    canHurtPlayer(): boolean;
    continueDestroyBlock(pos: BlockPos, direction: Direction): boolean;
    createPlayer(level: ClientLevel, stats: StatsCounter, recipeBook: ClientRecipeBook): LocalPlayer;
    createPlayer(level: ClientLevel, stats: StatsCounter, recipeBook: ClientRecipeBook, lastSentInput: Input, wasSprinting: boolean): LocalPlayer;
    destroyBlock(pos: BlockPos): boolean;
    ensureHasSentCarriedItem(): void;
    // private fabric_fireAttackBlockCallback(arg0: BlockPos, arg1: Direction, arg2: CallbackInfoReturnable<Object>): void;
    getDestroyStage(): number;
    getPlayerMode(): GameType;
    getPreviousPlayerMode(): GameType;
    handleContainerInput(containerId: number, slotNum: number, buttonNum: number, containerInput: ContainerInput, player: Player): void;
    handleCreativeModeItemAdd(clicked: ItemStack, slot: number): void;
    handleCreativeModeItemDrop(clicked: ItemStack): void;
    handleInventoryButtonClick(containerId: number, buttonId: number): void;
    handlePickItemFromBlock(pos: BlockPos, includeData: boolean): void;
    handlePickItemFromEntity(entity: Entity, includeData: boolean): void;
    handlePlaceRecipe(containerId: number, recipe: RecipeDisplayId, useMaxItems: boolean): void;
    handleSlotStateChanged(slotId: number, containerId: number, newState: boolean): void;
    hasExperience(): boolean;
    hasMissTime(): boolean;
    interact(player: Player, entity: Entity, hitResult: EntityHitResult, hand: InteractionHand): InteractionResult;
    isDestroying(): boolean;
    isServerControlledInventory(): boolean;
    isSpectator(): boolean;
    // private lambda$useItemOn$0(arg0: MutableObject<Object>, arg1: LocalPlayer, arg2: InteractionHand, arg3: BlockHitResult, arg4: number): Packet<PacketListener>;
    // private performUseItemOn(player: LocalPlayer, hand: InteractionHand, blockHit: BlockHitResult): InteractionResult;
    piercingAttack(weapon: PiercingWeapon): void;
    releaseUsingItem(player: Player): void;
    // private sameDestroyTarget(pos: BlockPos): boolean;
    setLocalMode(mode: GameType): void;
    setLocalMode(mode: GameType, previousMode: GameType): void;
    spectate(entity: Entity): void;
    startDestroyBlock(pos: BlockPos, direction: Direction): boolean;
    startPrediction(level: ClientLevel, predictiveAction: (param0: number) => net.minecraft.network.protocol.Packet<net.minecraft.network.protocol.game.ServerGamePacketListener>): void;
    stopDestroyBlock(): void;
    tick(): void;
    useItem(player: Player, hand: InteractionHand): InteractionResult;
    useItemOn(player: LocalPlayer, hand: InteractionHand, blockHit: BlockHitResult): InteractionResult;
    // private viaFabricPlus$clickSlot1_16_5(arg0: ServerboundContainerClickPacket): void;
    // private viaFabricPlus$clickSlot1_21_4(arg0: ServerboundContainerClickPacket): void;
    // private viaFabricPlus$extinguishFire(arg0: BlockPos, arg1: Direction): boolean;
    viaFabricPlus$get1_18_2InteractionManager(): ClientPlayerInteractionManager1_18_2;
    // private viaFabricPlus$shouldBeEmpty(arg0: ContainerInput, arg1: number): boolean;
}