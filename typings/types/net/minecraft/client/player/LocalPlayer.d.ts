import type { Predicate } from '../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { PlayerNetworkMovementTickEvent } from '../../../../net/ccbluex/liquidbounce/event/events/PlayerNetworkMovementTickEvent.d.ts'
import type { PlayerData } from '../../../../net/ccbluex/liquidbounce/integration/interop/protocol/rest/v1/game/PlayerData.d.ts'
import type { PlayerInventoryData } from '../../../../net/ccbluex/liquidbounce/integration/interop/protocol/rest/v1/game/PlayerInventoryData.d.ts'
import type { LocalPlayerAddition } from '../../../../net/ccbluex/liquidbounce/interfaces/LocalPlayerAddition.d.ts'
import type { PacketContext } from '../../../../net/fabricmc/fabric/api/networking/v1/context/PacketContext.d.ts'
import type { PacketContextProvider } from '../../../../net/fabricmc/fabric/api/networking/v1/context/PacketContextProvider.d.ts'
import type { LocalPlayerInterface } from '../../../../net/irisshaders/iris/mixinterface/LocalPlayerInterface.d.ts'
import type { ClientRecipeBook } from '../../../../net/minecraft/client/ClientRecipeBook.d.ts'
import type { Minecraft } from '../../../../net/minecraft/client/Minecraft.d.ts'
import type { ClientLevel } from '../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { ClientPacketListener } from '../../../../net/minecraft/client/multiplayer/ClientPacketListener.d.ts'
import type { ChatAbilities } from '../../../../net/minecraft/client/multiplayer/chat/ChatAbilities.d.ts'
import type { AbstractClientPlayer } from '../../../../net/minecraft/client/player/AbstractClientPlayer.d.ts'
import type { ClientInput } from '../../../../net/minecraft/client/player/ClientInput.d.ts'
import type { AmbientSoundHandler } from '../../../../net/minecraft/client/resources/sounds/AmbientSoundHandler.d.ts'
import type { BlockPos } from '../../../../net/minecraft/core/BlockPos.d.ts'
import type { Holder } from '../../../../net/minecraft/core/Holder.d.ts'
import type { Component } from '../../../../net/minecraft/network/chat/Component.d.ts'
import type { EntityDataAccessor } from '../../../../net/minecraft/network/syncher/EntityDataAccessor.d.ts'
import type { SynchedEntityData$DataValue } from '../../../../net/minecraft/network/syncher/SynchedEntityData$DataValue.d.ts'
import type { Dialog } from '../../../../net/minecraft/server/dialog/Dialog.d.ts'
import type { PermissionSet } from '../../../../net/minecraft/server/permissions/PermissionSet.d.ts'
import type { SoundEvent } from '../../../../net/minecraft/sounds/SoundEvent.d.ts'
import type { StatsCounter } from '../../../../net/minecraft/stats/StatsCounter.d.ts'
import type { TickThrottler } from '../../../../net/minecraft/util/TickThrottler.d.ts'
import type { InteractionHand } from '../../../../net/minecraft/world/InteractionHand.d.ts'
import type { MobEffectInstance } from '../../../../net/minecraft/world/effect/MobEffectInstance.d.ts'
import type { Entity } from '../../../../net/minecraft/world/entity/Entity.d.ts'
import type { EquipmentSlot } from '../../../../net/minecraft/world/entity/EquipmentSlot.d.ts'
import type { HumanoidArm } from '../../../../net/minecraft/world/entity/HumanoidArm.d.ts'
import type { LivingEntity } from '../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { MoverType } from '../../../../net/minecraft/world/entity/MoverType.d.ts'
import type { PlayerRideableJumping } from '../../../../net/minecraft/world/entity/PlayerRideableJumping.d.ts'
import type { AttributeModifier } from '../../../../net/minecraft/world/entity/ai/attributes/AttributeModifier.d.ts'
import type { AttributeSupplier$Builder } from '../../../../net/minecraft/world/entity/ai/attributes/AttributeSupplier$Builder.d.ts'
import type { ItemEntity } from '../../../../net/minecraft/world/entity/item/ItemEntity.d.ts'
import type { Input } from '../../../../net/minecraft/world/entity/player/Input.d.ts'
import type { MinecartCommandBlock } from '../../../../net/minecraft/world/entity/vehicle/minecart/MinecartCommandBlock.d.ts'
import type { ClickAction } from '../../../../net/minecraft/world/inventory/ClickAction.d.ts'
import type { ItemStack } from '../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { RecipeDisplayId } from '../../../../net/minecraft/world/item/crafting/display/RecipeDisplayId.d.ts'
import type { GameType } from '../../../../net/minecraft/world/level/GameType.d.ts'
import type { Level } from '../../../../net/minecraft/world/level/Level.d.ts'
import type { Portal$Transition } from '../../../../net/minecraft/world/level/block/Portal$Transition.d.ts'
import type { CommandBlockEntity } from '../../../../net/minecraft/world/level/block/entity/CommandBlockEntity.d.ts'
import type { JigsawBlockEntity } from '../../../../net/minecraft/world/level/block/entity/JigsawBlockEntity.d.ts'
import type { SignBlockEntity } from '../../../../net/minecraft/world/level/block/entity/SignBlockEntity.d.ts'
import type { StructureBlockEntity } from '../../../../net/minecraft/world/level/block/entity/StructureBlockEntity.d.ts'
import type { TestBlockEntity } from '../../../../net/minecraft/world/level/block/entity/TestBlockEntity.d.ts'
import type { TestInstanceBlockEntity } from '../../../../net/minecraft/world/level/block/entity/TestInstanceBlockEntity.d.ts'
import type { AABB } from '../../../../net/minecraft/world/phys/AABB.d.ts'
import type { HitResult } from '../../../../net/minecraft/world/phys/HitResult.d.ts'
import type { Vec2 } from '../../../../net/minecraft/world/phys/Vec2.d.ts'
import type { Vec3 } from '../../../../net/minecraft/world/phys/Vec3.d.ts'
import type { CollisionContext } from '../../../../net/minecraft/world/phys/shapes/CollisionContext.d.ts'
import type { VoxelShape } from '../../../../net/minecraft/world/phys/shapes/VoxelShape.d.ts'
import type { ScoreHolder } from '../../../../net/minecraft/world/scores/ScoreHolder.d.ts'
import type { Logger } from '../../../../org/slf4j/Logger.d.ts'
export class LocalPlayer extends AbstractClientPlayer implements LocalPlayerAddition, PacketContextProvider, LocalPlayerInterface {
    static ARMOR_SLOT_OFFSET: number;
    static BASE_HORIZONTAL_AIR_DRAG: number;
    static BASE_JUMP_POWER: number;
    static BASE_SAFE_FALL_DISTANCE: number;
    static BASE_SWIM_SPEED: number;
    static BASE_TICKS_REQUIRED_TO_FREEZE: number;
    static BASE_VERTICAL_AIR_DRAG: number;
    static BOARDING_COOLDOWN: number;
    static BODY_ARMOR_OFFSET: number;
    static CONTENTS_SLOT_INDEX: number;
    static CRAFTING_SLOT_OFFSET: number;
    static CREATIVE_ENTITY_INTERACTION_RANGE_MODIFIER_VALUE: number;
    static DEATH_DURATION: number;
    static DEFAULT_BABY_SCALE: number;
    static DEFAULT_BASE_GRAVITY: number;
    static DEFAULT_BB_HEIGHT: number;
    static DEFAULT_BB_WIDTH: number;
    static DEFAULT_BELOW_NAME_DISTANCE: number;
    static DEFAULT_BLOCK_INTERACTION_RANGE: number;
    static DEFAULT_ENTITY_INTERACTION_RANGE: number;
    static DEFAULT_EYE_HEIGHT: number;
    static DEFAULT_MAIN_HAND: HumanoidArm;
    static DEFAULT_MODEL_CUSTOMIZATION: number;
    static DEFAULT_NAME_TAG_DISTANCE: number;
    static DEFAULT_VEHICLE_ATTACHMENT: Vec3;
    static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
    static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
    static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
    static DOLPHINS_GRACE_WATER_DRAG: number;
    static ELYTRA_HORIZONTAL_AIR_DRAG: number;
    static ELYTRA_VERTICAL_AIR_DRAG: number;
    static ENDER_SLOT_OFFSET: number;
    static EQUIPMENT_SLOT_OFFSET: number;
    static EXTRA_RENDER_CULLING_SIZE_WITH_BIG_HAT: number;
    static FLYING_AIR_DRAG: number;
    static FLYING_LAVA_DRAG: number;
    static FLYING_VERTICAL_AIR_DRAG: number;
    static FLYING_WATER_DRAG: number;
    static FREEZE_HURT_FREQUENCY: number;
    static HELD_ITEM_SLOT: number;
    static INVALID_ENTITY_ID: number;
    static LAVA_DRAG: number;
    static LAVA_SHALLOW_VERTICAL_DRAG: number;
    static LOGGER: Logger;
    static MAX_ENTITY_TAG_COUNT: number;
    static MAX_HEALTH: number;
    static MAX_MOVEMENTS_HANDELED_PER_TICK: number;
    static MAX_NAME_TAG_DISTANCE: number;
    static MIN_MOVEMENT_DISTANCE: number;
    static NBT_ATTACHMENT_KEY: string;
    static PLAYER_HURT_EXPERIENCE_TIME: number;
    static PLAYER_NOT_WEARING_DISGUISE_ITEM: (param0: LivingEntity) => boolean;
    static REALLY_FAR_DISTANCE: number;
    static SADDLE_OFFSET: number;
    static SLEEP_DURATION: number;
    static SPRINTING_WATER_DRAG: number;
    static SWIMMING_BB_HEIGHT: number;
    static TAG_AIR: string;
    static TAG_ATTRIBUTES: string;
    static TAG_BRAIN: string;
    static TAG_CUSTOM_NAME: string;
    static TAG_DATA: string;
    static TAG_DEATH_TIME: string;
    static TAG_EQUIPMENT: string;
    static TAG_FALL_DISTANCE: string;
    static TAG_FALL_FLYING: string;
    static TAG_FIRE: string;
    static TAG_GLOWING: string;
    static TAG_HEALTH: string;
    static TAG_HURT_TIME: string;
    static TAG_ID: string;
    static TAG_INVULNERABLE: string;
    static TAG_MOTION: string;
    static TAG_NO_GRAVITY: string;
    static TAG_ON_GROUND: string;
    static TAG_PASSENGERS: string;
    static TAG_PORTAL_COOLDOWN: string;
    static TAG_POS: string;
    static TAG_ROTATION: string;
    static TAG_SILENT: string;
    static TAG_SLEEPING_POS: string;
    static TAG_UUID: string;
    static TOTAL_AIR_SUPPLY: number;
    static WAKE_UP_DURATION: number;
    static WATER_DRAG: number;
    static WAYPOINT_TRANSMIT_RANGE_HIDE_MODIFIER: AttributeModifier;
    static WILDCARD: ScoreHolder;
    static WILDCARD_NAME: string;
    static areAllEffectsAmbient(parameffects: MobEffectInstance[]): boolean;
    static canGlideUsing(paramitemStack: ItemStack, paramslot: EquipmentSlot): boolean;
    static collectAllColliders(paramsource: Entity, paramlevel: Level, paramboundingBox: AABB): VoxelShape[];
    static collideBoundingBox(paramarg0: Entity, paramarg1: Vec3, paramarg2: AABB, paramarg3: Level, paramarg4: (Object | null)[]): Vec3;
    static collideBoundingBox(paramsource: CollisionContext, parammovement: Vec3, paramboundingBox: AABB, paramlevel: Level, paramentityColliders: VoxelShape[]): Vec3;
    static createAttributes(): AttributeSupplier$Builder;
    static createLivingAttributes(): AttributeSupplier$Builder;
    static getInputVector(paraminput: Vec3, paramspeed: number, paramyRot: number): Vec3;
    static getViewScale(): number;
    static resetForwardDirectionOfRelativePortalPosition(paramoffsets: Vec3): Vec3;
    static setViewScale(paramviewScale: number): void;
    constructor(minecraft: Minecraft, level: ClientLevel, connection: ClientPacketListener, stats: StatsCounter, recipeBook: ClientRecipeBook, lastSentInput: Input, wasSprinting: boolean, chatAbilities: ChatAbilities)
    // private airTicks: number;
    // private ambientSoundHandlers: AmbientSoundHandler[];
    readonly autoJumpEnabled: boolean;
    // private autoJumpTime: number;
    // private chatAbilities: ChatAbilities;
    connection: ClientPacketListener;
    readonly crouching: boolean;
    readonly doLimitedCrafting: boolean;
    readonly dropSpamThrottler: TickThrottler;
    // private eventMotion: PlayerNetworkMovementTickEvent;
    experienceDisplayStartTick: number;
    // private flashOnSetHealth: boolean;
    readonly handsBusy: boolean;
    input: ClientInput;
    readonly jumpRidingScale: number;
    // private jumpRidingTicks: number;
    // private lastHorizontalCollision: boolean;
    // private lastKnownInventory: PlayerInventoryData;
    // private lastKnownStatistics: PlayerData;
    lastOnGround: boolean;
    readonly lastSentInput: Input;
    // private minecraft: Minecraft;
    oPortalEffectIntensity: number;
    // private onGroundTicks: number;
    portalEffectIntensity: number;
    // private positionReminder: number;
    readonly recipeBook: ClientRecipeBook;
    readonly showDeathScreen: boolean;
    // private sprintTriggerTime: number;
    // private startedUsingItem: boolean;
    readonly stats: StatsCounter;
    usingItemHand: InteractionHand;
    // private viaFabricPlus$lastSneaking: boolean;
    // private wasFallFlying: boolean;
    wasSprinting: boolean;
    // private waterVisionTime: number;
    xBob: number;
    xBobO: number;
    xLast: number;
    xRotLast: number;
    yBob: number;
    yBobO: number;
    yLast: number;
    yRotLast: number;
    zLast: number;
    aiStep(): void;
    applyInput(): void;
    // private canAutoJump(): boolean;
    canDropItems(): boolean;
    canSpawnSprintParticle(): boolean;
    // private canStartSprinting(): boolean;
    chatAbilities(): ChatAbilities;
    clientSideCloseContainer(): void;
    closeContainer(): void;
    crit(entity: Entity): void;
    drop(all: boolean): boolean;
    drop(itemStack: ItemStack, thrownFromHand: boolean): ItemEntity;
    drop(itemStack: ItemStack, randomly: boolean, thrownFromHand: boolean): ItemEntity;
    getActivePortalLocalTransition(): Portal$Transition;
    getCurrentConstantMood(): number;
    getCurrentMood(): number;
    getDoLimitedCrafting(): boolean;
    getDropSpamThrottler(): TickThrottler;
    getJumpRidingScale(): number;
    getLastSentInput(): Input;
    getPacketContext(): PacketContext;
    getRecipeBook(): ClientRecipeBook;
    getRopeHoldPosition(partialTickTime: number): Vec3;
    getStats(): StatsCounter;
    getUsedItemHand(): InteractionHand;
    getViewXRot(a: number): number;
    getViewYRot(a: number): number;
    getVisualRotationYInDegrees(): number;
    getWaterVision(): number;
    handleCreativeModeItemDrop(stack: ItemStack): void;
    handleEntityEvent(id: number): void;
    // private handlePortalTransitionEffect(active: boolean): void;
    heal(heal: number): void;
    hurtTo(newHealth: number): void;
    isAutoJumpEnabled(): boolean;
    isControlledCamera(): boolean;
    isCrouching(): boolean;
    isHandsBusy(): boolean;
    isHorizontalCollisionMinor(movement: Vec3): boolean;
    isLocalPlayer(): boolean;
    // private isMoving(): boolean;
    isMovingSlowly(): boolean;
    isShiftKeyDown(): boolean;
    // private isSlowDueToUsingItem(): boolean;
    // private isSprintingPossible(allowedInShallowWater: boolean): boolean;
    isSuppressingSlidingDownLadder(): boolean;
    isTextFilteringEnabled(): boolean;
    isUnderWater(): boolean;
    isUsingItem(): boolean;
    // private itemUseSpeedMultiplier(): number;
    jumpableVehicle(): PlayerRideableJumping;
    liquid_bounce$getAirTicks(): number;
    liquid_bounce$getOnGroundTicks(): number;
    // private liquid_bounce$shouldForceStopSprinting(): boolean;
    magicCrit(entity: Entity): void;
    // private modifyInput(input: Vec2): Vec2;
    move(moverType: MoverType, delta: Vec3): void;
    // private moveTowardsClosestSpace(x: number, z: number): void;
    moveTowardsClosestSpace(x: number, y: number, z: number): void;
    onGameModeChanged(gameType: GameType): void;
    onSyncedDataUpdated(updatedItems: SynchedEntityData$DataValue<Object>[]): void;
    onSyncedDataUpdated(accessor: EntityDataAccessor<Object>): void;
    onUpdateAbilities(): void;
    openCommandBlock(commandBlock: CommandBlockEntity): void;
    openDialog(dialog: Holder<Dialog>): void;
    openItemGui(itemStack: ItemStack, hand: InteractionHand): void;
    openJigsawBlock(jigsawBlock: JigsawBlockEntity): void;
    openMinecartCommandBlock(commandBlock: MinecartCommandBlock): void;
    openStructureBlock(structureBlock: StructureBlockEntity): void;
    openTestBlock(testBlock: TestBlockEntity): void;
    openTestInstanceBlock(testInstanceBlock: TestInstanceBlockEntity): void;
    openTextEdit(sign: SignBlockEntity, isFrontText: boolean): void;
    permissions(): PermissionSet;
    playSound(sound: SoundEvent): void;
    playSound(sound: SoundEvent, volume: number, pitch: number): void;
    raycastHitResult(a: number, cameraEntity: Entity): HitResult;
    refreshChatAbilities(): void;
    removeRecipeHighlight(recipe: RecipeDisplayId): void;
    removeVehicle(): void;
    resetPos(): void;
    respawn(): void;
    rideTick(): void;
    // private sendIsSprintingIfNeeded(): void;
    sendOpenInventory(): void;
    sendOverlayMessage(message: Component): void;
    sendPosition(): void;
    sendRidingJump(): void;
    sendSystemMessage(message: Component): void;
    setDoLimitedCrafting(value: boolean): void;
    // private setExperienceDisplayStartTickToTickCount(): void;
    setExperienceValues(experienceProgress: number, totalExp: number, experienceLevel: number): void;
    setPermissions(newPermissions: PermissionSet): void;
    setReducedDebugInfo(reducedDebugInfo: boolean): void;
    setShowDeathScreen(show: boolean): void;
    shouldRotateWithMinecart(): boolean;
    shouldShowDeathScreen(): boolean;
    // private shouldStopRunSprinting(): boolean;
    // private shouldStopSwimSprinting(): boolean;
    startRiding(entity: Entity): boolean;
    startRiding(entity: Entity, force: boolean, sendEventAndTriggers: boolean): boolean;
    startUsingItem(hand: InteractionHand): void;
    stopUsingItem(): void;
    // private suffocatesAt(pos: BlockPos): boolean;
    swing(hand: InteractionHand): void;
    swing(hand: InteractionHand, sendToSwingingEntity: boolean): void;
    tick(): void;
    tickDeath(): void;
    updateAutoJump(xa: number, za: number): void;
    updateIsUnderwater(): boolean;
    updateTutorialInventoryAction(itemCarried: ItemStack, itemInSlot: ItemStack, clickAction: ClickAction): void;
    // private vehicleCanSprint(vehicle: Entity): boolean;
    // private viaFabricPlus$canWaterSprint(): boolean;
    // private viaFabricPlus$hasEnoughFoodToSprint1_19_1(): boolean;
    // private viaFabricPlus$isWalking1_21_4(): boolean;
    // private viaFabricPlus$sendInputPacket(arg0: Input): void;
    // private viaFabricPlus$sendSneakingPacket(): void;
    // private viaFabricPlus$shouldCancelSprinting(): boolean;
}