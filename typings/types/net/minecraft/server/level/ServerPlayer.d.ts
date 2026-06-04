import type { GameProfile } from '../../../../com/mojang/authlib/GameProfile.d.ts'
import type { Either } from '../../../../com/mojang/datafixers/util/Either.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { OptionalInt } from '../../../../java/util/OptionalInt.d.ts'
import type { Predicate } from '../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { PacketContext } from '../../../../net/fabricmc/fabric/api/networking/v1/context/PacketContext.d.ts'
import type { PacketContextProvider } from '../../../../net/fabricmc/fabric/api/networking/v1/context/PacketContextProvider.d.ts'
import type { CommandSource } from '../../../../net/minecraft/commands/CommandSource.d.ts'
import type { CommandSourceStack } from '../../../../net/minecraft/commands/CommandSourceStack.d.ts'
import type { EntityAnchorArgument$Anchor } from '../../../../net/minecraft/commands/arguments/EntityAnchorArgument$Anchor.d.ts'
import type { BlockPos } from '../../../../net/minecraft/core/BlockPos.d.ts'
import type { Direction } from '../../../../net/minecraft/core/Direction.d.ts'
import type { Holder } from '../../../../net/minecraft/core/Holder.d.ts'
import type { SectionPos } from '../../../../net/minecraft/core/SectionPos.d.ts'
import type { CompoundTag } from '../../../../net/minecraft/nbt/CompoundTag.d.ts'
import type { ChatType$Bound } from '../../../../net/minecraft/network/chat/ChatType$Bound.d.ts'
import type { Component } from '../../../../net/minecraft/network/chat/Component.d.ts'
import type { OutgoingChatMessage } from '../../../../net/minecraft/network/chat/OutgoingChatMessage.d.ts'
import type { RemoteChatSession } from '../../../../net/minecraft/network/chat/RemoteChatSession.d.ts'
import type { CommonPlayerSpawnInfo } from '../../../../net/minecraft/network/protocol/game/CommonPlayerSpawnInfo.d.ts'
import type { ServerStatus } from '../../../../net/minecraft/network/protocol/status/ServerStatus.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
import type { ResourceKey } from '../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { MinecraftServer } from '../../../../net/minecraft/server/MinecraftServer.d.ts'
import type { PlayerAdvancements } from '../../../../net/minecraft/server/PlayerAdvancements.d.ts'
import type { Dialog } from '../../../../net/minecraft/server/dialog/Dialog.d.ts'
import type { ChunkTrackingView } from '../../../../net/minecraft/server/level/ChunkTrackingView.d.ts'
import type { ClientInformation } from '../../../../net/minecraft/server/level/ClientInformation.d.ts'
import type { ParticleStatus } from '../../../../net/minecraft/server/level/ParticleStatus.d.ts'
import type { ServerLevel } from '../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { ServerPlayer$RespawnConfig } from '../../../../net/minecraft/server/level/ServerPlayer$RespawnConfig.d.ts'
import type { ServerPlayerGameMode } from '../../../../net/minecraft/server/level/ServerPlayerGameMode.d.ts'
import type { ServerGamePacketListenerImpl } from '../../../../net/minecraft/server/network/ServerGamePacketListenerImpl.d.ts'
import type { TextFilter } from '../../../../net/minecraft/server/network/TextFilter.d.ts'
import type { PermissionSet } from '../../../../net/minecraft/server/permissions/PermissionSet.d.ts'
import type { ServerRecipeBook } from '../../../../net/minecraft/stats/ServerRecipeBook.d.ts'
import type { ServerStatsCounter } from '../../../../net/minecraft/stats/ServerStatsCounter.d.ts'
import type { Stat } from '../../../../net/minecraft/stats/Stat.d.ts'
import type { Unit } from '../../../../net/minecraft/util/Unit.d.ts'
import type { DebugSubscription } from '../../../../net/minecraft/util/debug/DebugSubscription.d.ts'
import type { InteractionHand } from '../../../../net/minecraft/world/InteractionHand.d.ts'
import type { MenuProvider } from '../../../../net/minecraft/world/MenuProvider.d.ts'
import type { DamageSource } from '../../../../net/minecraft/world/damagesource/DamageSource.d.ts'
import type { MobEffectInstance } from '../../../../net/minecraft/world/effect/MobEffectInstance.d.ts'
import type { Entity } from '../../../../net/minecraft/world/entity/Entity.d.ts'
import type { EquipmentSlot } from '../../../../net/minecraft/world/entity/EquipmentSlot.d.ts'
import type { HumanoidArm } from '../../../../net/minecraft/world/entity/HumanoidArm.d.ts'
import type { LivingEntity } from '../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { Relative } from '../../../../net/minecraft/world/entity/Relative.d.ts'
import type { Attribute } from '../../../../net/minecraft/world/entity/ai/attributes/Attribute.d.ts'
import type { AttributeModifier } from '../../../../net/minecraft/world/entity/ai/attributes/AttributeModifier.d.ts'
import type { AttributeSupplier$Builder } from '../../../../net/minecraft/world/entity/ai/attributes/AttributeSupplier$Builder.d.ts'
import type { AbstractHorse } from '../../../../net/minecraft/world/entity/animal/equine/AbstractHorse.d.ts'
import type { AbstractNautilus } from '../../../../net/minecraft/world/entity/animal/nautilus/AbstractNautilus.d.ts'
import type { ItemEntity } from '../../../../net/minecraft/world/entity/item/ItemEntity.d.ts'
import type { WardenSpawnTracker } from '../../../../net/minecraft/world/entity/monster/warden/WardenSpawnTracker.d.ts'
import type { ChatVisiblity } from '../../../../net/minecraft/world/entity/player/ChatVisiblity.d.ts'
import type { Input } from '../../../../net/minecraft/world/entity/player/Input.d.ts'
import type { Player } from '../../../../net/minecraft/world/entity/player/Player.d.ts'
import type { Player$BedSleepingProblem } from '../../../../net/minecraft/world/entity/player/Player$BedSleepingProblem.d.ts'
import type { ThrownEnderpearl } from '../../../../net/minecraft/world/entity/projectile/throwableitemprojectile/ThrownEnderpearl.d.ts'
import type { AbstractContainerMenu } from '../../../../net/minecraft/world/inventory/AbstractContainerMenu.d.ts'
import type { ContainerListener } from '../../../../net/minecraft/world/inventory/ContainerListener.d.ts'
import type { ContainerSynchronizer } from '../../../../net/minecraft/world/inventory/ContainerSynchronizer.d.ts'
import type { Item } from '../../../../net/minecraft/world/item/Item.d.ts'
import type { ItemCooldowns } from '../../../../net/minecraft/world/item/ItemCooldowns.d.ts'
import type { ItemStack } from '../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { Recipe } from '../../../../net/minecraft/world/item/crafting/Recipe.d.ts'
import type { RecipeHolder } from '../../../../net/minecraft/world/item/crafting/RecipeHolder.d.ts'
import type { ChunkPos } from '../../../../net/minecraft/world/level/ChunkPos.d.ts'
import type { GameType } from '../../../../net/minecraft/world/level/GameType.d.ts'
import type { Level } from '../../../../net/minecraft/world/level/Level.d.ts'
import type { CommandBlockEntity } from '../../../../net/minecraft/world/level/block/entity/CommandBlockEntity.d.ts'
import type { SignBlockEntity } from '../../../../net/minecraft/world/level/block/entity/SignBlockEntity.d.ts'
import type { BlockState } from '../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { TeleportTransition } from '../../../../net/minecraft/world/level/portal/TeleportTransition.d.ts'
import type { TeleportTransition$PostTeleportTransition } from '../../../../net/minecraft/world/level/portal/TeleportTransition$PostTeleportTransition.d.ts'
import type { ValueInput } from '../../../../net/minecraft/world/level/storage/ValueInput.d.ts'
import type { ValueOutput } from '../../../../net/minecraft/world/level/storage/ValueOutput.d.ts'
import type { AABB } from '../../../../net/minecraft/world/phys/AABB.d.ts'
import type { Vec3 } from '../../../../net/minecraft/world/phys/Vec3.d.ts'
import type { VoxelShape } from '../../../../net/minecraft/world/phys/shapes/VoxelShape.d.ts'
import type { ScoreHolder } from '../../../../net/minecraft/world/scores/ScoreHolder.d.ts'
import type { ObjectiveCriteria } from '../../../../net/minecraft/world/scores/criteria/ObjectiveCriteria.d.ts'
export class ServerPlayer extends Player implements PacketContextProvider {
    static ARMOR_SLOT_OFFSET: number;
    static BASE_JUMP_POWER: number;
    static BASE_SAFE_FALL_DISTANCE: number;
    static BASE_TICKS_REQUIRED_TO_FREEZE: number;
    static BLOCK_INTERACTION_DISTANCE_VERIFICATION_BUFFER: number;
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
    static DEFAULT_BLOCK_INTERACTION_RANGE: number;
    static DEFAULT_ENTITY_INTERACTION_RANGE: number;
    static DEFAULT_EYE_HEIGHT: number;
    static DEFAULT_MAIN_HAND: HumanoidArm;
    static DEFAULT_MODEL_CUSTOMIZATION: number;
    static DEFAULT_VEHICLE_ATTACHMENT: Vec3;
    static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
    static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
    static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
    static ENDER_PEARLS_TAG: string;
    static ENDER_PEARL_DIMENSION_TAG: string;
    static ENDER_PEARL_TICKET_RADIUS: number;
    static ENDER_SLOT_OFFSET: number;
    static ENTITY_INTERACTION_DISTANCE_VERIFICATION_BUFFER: number;
    static EQUIPMENT_SLOT_OFFSET: number;
    static EXTRA_RENDER_CULLING_SIZE_WITH_BIG_HAT: number;
    static FREEZE_HURT_FREQUENCY: number;
    static HELD_ITEM_SLOT: number;
    static MAX_ENTITY_TAG_COUNT: number;
    static MAX_HEALTH: number;
    static MAX_MOVEMENTS_HANDELED_PER_TICK: number;
    static MAX_RANGE: number;
    static MIN_MOVEMENT_DISTANCE: number;
    static NBT_ATTACHMENT_KEY: string;
    static PLAYER_HURT_EXPERIENCE_TIME: number;
    static PLAYER_NOT_WEARING_DISGUISE_ITEM: (param0: LivingEntity) => kotlin.Boolean;
    static REALLY_FAR_DISTANCE: number;
    static SADDLE_OFFSET: number;
    static SLEEP_DURATION: number;
    static SWIMMING_BB_HEIGHT: number;
    static TAG_AIR: string;
    static TAG_ATTRIBUTES: string;
    static TAG_BRAIN: string;
    static TAG_CUSTOM_NAME: string;
    static TAG_DATA: string;
    static TAG_DEATH_TIME: string;
    static TAG_DIMENSION: string;
    static TAG_EQUIPMENT: string;
    static TAG_FALL_DISTANCE: string;
    static TAG_FALL_FLYING: string;
    static TAG_FIRE: string;
    static TAG_GLOWING: string;
    static TAG_HEALTH: string;
    static TAG_HURT_BY_TIMESTAMP: string;
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
    static WAYPOINT_TRANSMIT_RANGE_HIDE_MODIFIER: AttributeModifier;
    static WILDCARD: ScoreHolder;
    static WILDCARD_NAME: string;
    static areAllEffectsAmbient(parameffects: E[]): boolean;
    static canGlideUsing(paramitemStack: ItemStack, paramslot: EquipmentSlot): boolean;
    static collectAllColliders(paramsource: Entity, paramlevel: Level, paramboundingBox: AABB): VoxelShape[];
    static collideBoundingBox(paramarg0: Entity, paramarg1: Vec3, paramarg2: AABB, paramarg3: Level, paramarg4: (Object | null)[]): Vec3;
    static createAttributes(): AttributeSupplier$Builder;
    static createLivingAttributes(): AttributeSupplier$Builder;
    static getInputVector(paraminput: Vec3, paramspeed: number, paramyRot: number): Vec3;
    static getViewScale(): number;
    static placeEnderPearlTicket(paramlevel: ServerLevel, paramchunk: ChunkPos): number;
    static resetForwardDirectionOfRelativePortalPosition(paramoffsets: Vec3): Vec3;
    static setViewScale(paramviewScale: number): void;
    constructor(server: MinecraftServer, level: ServerLevel, gameProfile: GameProfile, clientInformation: ClientInformation)
    readonly advancements: PlayerAdvancements;
    // private allowsListing: boolean;
    readonly camera: Entity;
    // private canChatColor: boolean;
    readonly chatSession: RemoteChatSession;
    readonly chatVisibility: ChatVisiblity;
    readonly chunkTrackingView: ChunkTrackingView;
    // private commandSource: CommandSource;
    connection: ServerGamePacketListenerImpl;
    // private containerCounter: number;
    // private containerListener: ContainerListener;
    // private containerSynchronizer: ContainerSynchronizer;
    // private disconnected: boolean;
    readonly enderPearls: ThrownEnderpearl[];
    // private enteredLavaOnVehiclePosition: Vec3;
    // private enteredNetherPosition: Vec3;
    gameMode: ServerPlayerGameMode;
    // private isChangingDimension: boolean;
    // private language: string;
    readonly lastActionTime: number;
    readonly lastClientInput: Input;
    // private lastFoodSaturationZero: boolean;
    // private lastKnownClientMovement: Vec3;
    // private lastRecordedAirLevel: number;
    // private lastRecordedArmor: number;
    // private lastRecordedExperience: number;
    // private lastRecordedFoodLevel: number;
    // private lastRecordedHealthAndAbsorption: number;
    // private lastRecordedLevel: number;
    readonly lastSectionPos: SectionPos;
    // private lastSentExp: number;
    // private lastSentFood: number;
    // private lastSentHealth: number;
    // private levitationStartPos: Vec3;
    // private levitationStartTime: number;
    object: Object;
    // private particleStatus: ParticleStatus;
    readonly raidOmenPosition: BlockPos;
    readonly recipeBook: ServerRecipeBook;
    // private requestedDebugSubscriptions: DebugSubscription<Object>[];
    // private requestedViewDistance: number;
    readonly respawnConfig: ServerPlayer$RespawnConfig;
    seenCredits: boolean;
    // private server: MinecraftServer;
    readonly shoulderEntityLeft: CompoundTag;
    readonly shoulderEntityRight: CompoundTag;
    readonly spawnExtraParticlesOnFall: boolean;
    // private startingToFallPosition: Vec3;
    readonly stats: ServerStatsCounter;
    readonly textFilter: TextFilter;
    readonly textFilteringEnabled: boolean;
    // private timeEntitySatOnShoulder: number;
    readonly wardenSpawnTracker: WardenSpawnTracker;
    wonGame: boolean;
    // private acceptsChatMessages(): boolean;
    // private acceptsSystemMessages(overlay: boolean): boolean;
    addAdditionalSaveData(output: ValueOutput): void;
    adjustSpawnLocation(level: ServerLevel, spawnSuggestion: BlockPos): BlockPos;
    allowsListing(): boolean;
    awardKillScore(victim: Entity, killingBlow: DamageSource): void;
    awardRecipes(recipes: E[]): number;
    awardRecipesByKey(recipeIds: ResourceKey<Recipe<Object>>[]): void;
    awardStat(location: Identifier): void;
    awardStat(location: Identifier, count: number): void;
    awardStat(stat: Stat<Object>): void;
    awardStat(stat: Stat<Object>, count: number): void;
    // private bedBlocked(pos: BlockPos, direction: Direction): boolean;
    // private bedInRange(pos: BlockPos, direction: Direction): boolean;
    broadcastToPlayer(player: ServerPlayer): boolean;
    // private calculateGameModeForNewPlayer(loadedGameType: GameType): GameType;
    canChatInColor(): boolean;
    canHarmPlayer(target: Player): boolean;
    checkFallDamage(ya: number, onGround: boolean, onState: BlockState, pos: BlockPos): void;
    checkMovementStatistics(dx: number, dy: number, dz: number): void;
    // private checkRidingStatistics(dx: number, dy: number, dz: number): void;
    clearRaidOmenPosition(): void;
    clientInformation(): ClientInformation;
    closeContainer(): void;
    commandSource(): CommandSource;
    completeUsingItem(): void;
    copyRespawnPosition(player: ServerPlayer): void;
    createCommandSourceStack(): CommandSourceStack;
    createCommonSpawnInfo(level: ServerLevel): CommonPlayerSpawnInfo;
    createItemCooldowns(): ItemCooldowns;
    crit(entity: Entity): void;
    debugSubscriptions(): DebugSubscription<Object>[];
    deregisterEnderPearl(enderPearl: ThrownEnderpearl): void;
    die(source: DamageSource): void;
    disconnect(): void;
    doCloseContainer(): void;
    doTick(): void;
    drop(all: boolean): void;
    drop(itemStack: ItemStack, thrownFromHand: boolean): ItemEntity;
    drop(itemStack: ItemStack, randomly: boolean, thrownFromHand: boolean): ItemEntity;
    findRespawnPositionAndUseSpawnBlock(consumeSpawnBlock: boolean, postTeleportTransition: (param0: Entity) => void): TeleportTransition;
    forceSetRotation(yRot: number, relativeY: boolean, xRot: number, relativeX: boolean): void;
    gameMode(): GameType;
    getAdvancements(): PlayerAdvancements;
    getCamera(): Entity;
    getChatSession(): RemoteChatSession;
    getChatVisibility(): ChatVisiblity;
    getChunkTrackingView(): ChunkTrackingView;
    getEnchantedDamage(entity: Entity, dmg: number, damageSource: DamageSource): number;
    getEnderPearls(): ThrownEnderpearl[];
    getIpAddress(): string;
    getKnownMovement(): Vec3;
    getKnownSpeed(): Vec3;
    getLastActionTime(): number;
    getLastClientInput(): Input;
    getLastClientMoveIntent(): Vec3;
    getLastSectionPos(): SectionPos;
    getPacketContext(): PacketContext;
    getRaidOmenPosition(): BlockPos;
    getRecipeBook(): ServerRecipeBook;
    getRespawnConfig(): ServerPlayer$RespawnConfig;
    getShoulderEntityLeft(): CompoundTag;
    getShoulderEntityRight(): CompoundTag;
    getStats(): ServerStatsCounter;
    getTabListDisplayName(): Component;
    getTabListOrder(): number;
    getTextFilter(): TextFilter;
    getWardenSpawnTracker(): Optional<WardenSpawnTracker>;
    giveExperienceLevels(amount: number): void;
    giveExperiencePoints(i: number): void;
    handleExtraItemsCreatedOnUse(extraItems: ItemStack): void;
    handleShoulderEntities(): void;
    // private handleTeamKill(source: ScoreHolder, target: ScoreHolder, criteriaByTeam: ObjectiveCriteria[]): void;
    hasChangedDimension(): void;
    hasDisconnected(): boolean;
    hurtServer(level: ServerLevel, source: DamageSource, damage: number): boolean;
    indicateDamage(xd: number, zd: number): void;
    initInventoryMenu(): void;
    // private initMenu(container: AbstractContainerMenu): void;
    isChangingDimension(): boolean;
    isInvulnerableTo(level: ServerLevel, source: DamageSource): boolean;
    // private isPvpAllowed(): boolean;
    // private isReachableBedBlock(bedBlockPos: BlockPos): boolean;
    isReceivingWaypoints(): boolean;
    isTextFilteringEnabled(): boolean;
    jumpFromGround(): void;
    level(): ServerLevel;
    // private loadAndSpawnEnderPearl(pearlInput: ValueInput): void;
    loadAndSpawnEnderPearls(playerInput: ValueInput): void;
    loadAndSpawnParentVehicle(playerInput: ValueInput): void;
    lookAt(fromAnchor: EntityAnchorArgument$Anchor, entity: Entity, toAnchor: EntityAnchorArgument$Anchor): void;
    lookAt(anchor: EntityAnchorArgument$Anchor, pos: Vec3): void;
    magicCrit(entity: Entity): void;
    mayInteract(level: ServerLevel, pos: BlockPos): boolean;
    // private nextContainerCounter(): void;
    onAttributeUpdated(attribute: Holder<Attribute>): void;
    onChangedBlock(level: ServerLevel, pos: BlockPos): void;
    onEffectAdded(effect: MobEffectInstance, source: Entity): void;
    onEffectUpdated(effect: MobEffectInstance, doRefreshAttributes: boolean, source: Entity): void;
    onEffectsRemoved(effects: E[]): void;
    onEnchantmentPerformed(itemStack: ItemStack, enchantmentCost: number): void;
    onEnterCombat(): void;
    onEquippedItemBroken(brokenItem: Item, inSlot: EquipmentSlot): void;
    onExplosionHit(explosionCausedBy: Entity): void;
    onInsideBlock(state: BlockState): void;
    onItemPickup(entity: ItemEntity): void;
    onLeaveCombat(): void;
    onUpdateAbilities(): void;
    openCommandBlock(commandBlock: CommandBlockEntity): void;
    openDialog(dialog: Holder<Dialog>): void;
    openHorseInventory(horse: AbstractHorse, container: ItemStack[]): void;
    openItemGui(itemStack: ItemStack, hand: InteractionHand): void;
    openMenu(provider: MenuProvider): OptionalInt;
    openNautilusInventory(nautilus: AbstractNautilus, container: ItemStack[]): void;
    openTextEdit(sign: SignBlockEntity, isFrontText: boolean): void;
    permissions(): PermissionSet;
    // private playShoulderEntityAmbientSound(shoulderEntityTag: CompoundTag): void;
    processPortalCooldown(): void;
    pushEntities(): void;
    readAdditionalSaveData(input: ValueInput): void;
    registerAndUpdateEnderPearlTicket(enderpearl: ThrownEnderpearl): number;
    registerEnderPearl(enderPearl: ThrownEnderpearl): void;
    removeEntitiesOnShoulder(): void;
    removeVehicle(): void;
    requestDebugSubscriptions(subscriptions: DebugSubscription<Object>[]): void;
    requestedViewDistance(): number;
    resetFallDistance(): void;
    resetLastActionTime(): void;
    resetRecipes(recipe: E[]): number;
    resetSentInfo(): void;
    resetStat(stat: Stat<Object>): void;
    // private respawnEntityOnShoulder(tag: CompoundTag): void;
    restoreFrom(oldPlayer: ServerPlayer, restoreAll: boolean): void;
    restoreFrom(oldEntity: Entity): void;
    rideTick(): void;
    // private saveEnderPearls(playerOutput: ValueOutput): void;
    // private saveParentVehicle(playerOutput: ValueOutput): void;
    sendBuildLimitMessage(isTooHigh: boolean, limit: number): void;
    sendChatMessage(message: OutgoingChatMessage, filtered: boolean, chatType: ChatType$Bound): void;
    sendMerchantOffers(containerId: number, offers: (Object | null)[], merchantLevel: number, merchantXp: number, showProgressBar: boolean, canRestock: boolean): void;
    sendOverlayMessage(message: Component): void;
    sendServerStatus(status: ServerStatus): void;
    sendSpawnProtectionMessage(pos: BlockPos): void;
    sendSystemMessage(message: Component): void;
    sendSystemMessage(message: Component, overlay: boolean): void;
    setCamera(newCamera: Entity): void;
    setChatSession(chatSession: RemoteChatSession): void;
    setChunkTrackingView(chunkTrackingView: ChunkTrackingView): void;
    setEntityOnShoulder(entityTag: CompoundTag): boolean;
    setExperienceLevels(amount: number): void;
    setExperiencePoints(amount: number): void;
    setGameMode(mode: GameType): boolean;
    setKnownMovement(lastKnownClientMovement: Vec3): void;
    setLastClientInput(lastClientInput: Input): void;
    setLastSectionPos(lastSectionPos: SectionPos): void;
    setRaidOmenPosition(raidOmenPosition: BlockPos): void;
    setRespawnPosition(respawnConfig: ServerPlayer$RespawnConfig, showMessage: boolean): void;
    setServerLevel(level: ServerLevel): void;
    setShoulderEntityLeft(tag: CompoundTag): void;
    setShoulderEntityRight(tag: CompoundTag): void;
    setSpawnExtraParticlesOnFall(toggle: boolean): void;
    shouldFilterMessageTo(serverPlayer: ServerPlayer): boolean;
    showEndCredits(): void;
    snapTo(x: number, y: number, z: number): void;
    snapTo(x: number, y: number, z: number, yRot: number, xRot: number): void;
    snapTo(spawnPos: BlockPos, yRot: number, xRot: number): void;
    snapTo(pos: Vec3): void;
    snapTo(spawnPos: Vec3, yRot: number, xRot: number): void;
    startRiding(entity: Entity): boolean;
    startRiding(entityToRide: Entity, force: boolean, sendEventAndTriggers: boolean): boolean;
    startSleepInBed(pos: BlockPos): Either<Player$BedSleepingProblem, Unit>;
    startSleeping(bedPosition: BlockPos): void;
    stopSleepInBed(forcefulWakeUp: boolean, updateLevelList: boolean): void;
    // private storeGameTypes(playerOutput: ValueOutput): void;
    swing(hand: InteractionHand): void;
    swing(hand: InteractionHand, sendToSwingingEntity: boolean): void;
    // private synchronizeSpecialItemUpdates(itemStack: ItemStack): void;
    take(entity: Entity, orgCount: number): void;
    teleport(transition: TeleportTransition): ServerPlayer;
    teleportRelative(dx: number, dy: number, dz: number): void;
    teleportTo(x: number, y: number, z: number): void;
    teleportTo(level: ServerLevel, x: number, y: number, z: number, relatives: Relative[], newYRot: number, newXRot: number, resetCamera: boolean): boolean;
    // private tellNeutralMobsThatIDied(): void;
    tick(): void;
    tickRegeneration(): void;
    trackEnteredOrExitedLavaOnVehicle(): void;
    trackStartFallingPosition(): void;
    // private transferInventoryXpAndScore(oldPlayer: Player): void;
    // private triggerDimensionChangeTriggers(oldLevel: ServerLevel): void;
    triggerRecipeCrafted(recipe: RecipeHolder<Object>, itemStacks: ItemStack[]): void;
    updateInvisibilityStatus(): void;
    updateOptions(information: ClientInformation): void;
    // private updatePlayerAttributes(): void;
    // private updateScoreForCriteria(criteria: ObjectiveCriteria, value: number): void;
    updateUsingItem(useItem: ItemStack): void;
}