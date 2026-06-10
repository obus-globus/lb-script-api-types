import type { GameProfile } from '../../../../../com/mojang/authlib/GameProfile.d.ts'
import type { Either } from '../../../../../com/mojang/datafixers/util/Either.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { OptionalInt } from '../../../../../java/util/OptionalInt.d.ts'
import type { Predicate } from '../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Direction } from '../../../../../net/minecraft/core/Direction.d.ts'
import type { GlobalPos } from '../../../../../net/minecraft/core/GlobalPos.d.ts'
import type { Holder } from '../../../../../net/minecraft/core/Holder.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { MutableComponent } from '../../../../../net/minecraft/network/chat/MutableComponent.d.ts'
import type { SynchedEntityData$Builder } from '../../../../../net/minecraft/network/syncher/SynchedEntityData$Builder.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { ResourceKey } from '../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { Dialog } from '../../../../../net/minecraft/server/dialog/Dialog.d.ts'
import type { ServerLevel } from '../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { PermissionSet } from '../../../../../net/minecraft/server/permissions/PermissionSet.d.ts'
import type { NameAndId } from '../../../../../net/minecraft/server/players/NameAndId.d.ts'
import type { SoundEvent } from '../../../../../net/minecraft/sounds/SoundEvent.d.ts'
import type { SoundSource } from '../../../../../net/minecraft/sounds/SoundSource.d.ts'
import type { Stat } from '../../../../../net/minecraft/stats/Stat.d.ts'
import type { Unit } from '../../../../../net/minecraft/util/Unit.d.ts'
import type { InteractionHand } from '../../../../../net/minecraft/world/InteractionHand.d.ts'
import type { InteractionResult } from '../../../../../net/minecraft/world/InteractionResult.d.ts'
import type { MenuProvider } from '../../../../../net/minecraft/world/MenuProvider.d.ts'
import type { DamageSource } from '../../../../../net/minecraft/world/damagesource/DamageSource.d.ts'
import type { MobEffectInstance } from '../../../../../net/minecraft/world/effect/MobEffectInstance.d.ts'
import type { Avatar } from '../../../../../net/minecraft/world/entity/Avatar.d.ts'
import type { ContainerUser } from '../../../../../net/minecraft/world/entity/ContainerUser.d.ts'
import type { Entity } from '../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { Entity$MovementEmission } from '../../../../../net/minecraft/world/entity/Entity$MovementEmission.d.ts'
import type { Entity$RemovalReason } from '../../../../../net/minecraft/world/entity/Entity$RemovalReason.d.ts'
import type { EntityEquipment } from '../../../../../net/minecraft/world/entity/EntityEquipment.d.ts'
import type { EquipmentSlot } from '../../../../../net/minecraft/world/entity/EquipmentSlot.d.ts'
import type { HumanoidArm } from '../../../../../net/minecraft/world/entity/HumanoidArm.d.ts'
import type { LivingEntity } from '../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { LivingEntity$Fallsounds } from '../../../../../net/minecraft/world/entity/LivingEntity$Fallsounds.d.ts'
import type { MoverType } from '../../../../../net/minecraft/world/entity/MoverType.d.ts'
import type { Pose } from '../../../../../net/minecraft/world/entity/Pose.d.ts'
import type { SlotAccess } from '../../../../../net/minecraft/world/entity/SlotAccess.d.ts'
import type { AttributeModifier } from '../../../../../net/minecraft/world/entity/ai/attributes/AttributeModifier.d.ts'
import type { AttributeSupplier$Builder } from '../../../../../net/minecraft/world/entity/ai/attributes/AttributeSupplier$Builder.d.ts'
import type { AbstractHorse } from '../../../../../net/minecraft/world/entity/animal/equine/AbstractHorse.d.ts'
import type { AbstractNautilus } from '../../../../../net/minecraft/world/entity/animal/nautilus/AbstractNautilus.d.ts'
import type { Parrot$Variant } from '../../../../../net/minecraft/world/entity/animal/parrot/Parrot$Variant.d.ts'
import type { ItemEntity } from '../../../../../net/minecraft/world/entity/item/ItemEntity.d.ts'
import type { WardenSpawnTracker } from '../../../../../net/minecraft/world/entity/monster/warden/WardenSpawnTracker.d.ts'
import type { Abilities } from '../../../../../net/minecraft/world/entity/player/Abilities.d.ts'
import type { Player$BedSleepingProblem } from '../../../../../net/minecraft/world/entity/player/Player$BedSleepingProblem.d.ts'
import type { FishingHook } from '../../../../../net/minecraft/world/entity/projectile/FishingHook.d.ts'
import type { MinecartCommandBlock } from '../../../../../net/minecraft/world/entity/vehicle/minecart/MinecartCommandBlock.d.ts'
import type { FoodData } from '../../../../../net/minecraft/world/food/FoodData.d.ts'
import type { AbstractContainerMenu } from '../../../../../net/minecraft/world/inventory/AbstractContainerMenu.d.ts'
import type { ClickAction } from '../../../../../net/minecraft/world/inventory/ClickAction.d.ts'
import type { InventoryMenu } from '../../../../../net/minecraft/world/inventory/InventoryMenu.d.ts'
import type { Item } from '../../../../../net/minecraft/world/item/Item.d.ts'
import type { ItemCooldowns } from '../../../../../net/minecraft/world/item/ItemCooldowns.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { ResolvableProfile } from '../../../../../net/minecraft/world/item/component/ResolvableProfile.d.ts'
import type { Recipe } from '../../../../../net/minecraft/world/item/crafting/Recipe.d.ts'
import type { RecipeHolder } from '../../../../../net/minecraft/world/item/crafting/RecipeHolder.d.ts'
import type { GameType } from '../../../../../net/minecraft/world/level/GameType.d.ts'
import type { Level } from '../../../../../net/minecraft/world/level/Level.d.ts'
import type { CommandBlockEntity } from '../../../../../net/minecraft/world/level/block/entity/CommandBlockEntity.d.ts'
import type { ContainerOpenersCounter } from '../../../../../net/minecraft/world/level/block/entity/ContainerOpenersCounter.d.ts'
import type { JigsawBlockEntity } from '../../../../../net/minecraft/world/level/block/entity/JigsawBlockEntity.d.ts'
import type { SignBlockEntity } from '../../../../../net/minecraft/world/level/block/entity/SignBlockEntity.d.ts'
import type { StructureBlockEntity } from '../../../../../net/minecraft/world/level/block/entity/StructureBlockEntity.d.ts'
import type { TestBlockEntity } from '../../../../../net/minecraft/world/level/block/entity/TestBlockEntity.d.ts'
import type { TestInstanceBlockEntity } from '../../../../../net/minecraft/world/level/block/entity/TestInstanceBlockEntity.d.ts'
import type { BlockState } from '../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { ValueInput } from '../../../../../net/minecraft/world/level/storage/ValueInput.d.ts'
import type { ValueOutput } from '../../../../../net/minecraft/world/level/storage/ValueOutput.d.ts'
import type { AABB } from '../../../../../net/minecraft/world/phys/AABB.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
import type { VoxelShape } from '../../../../../net/minecraft/world/phys/shapes/VoxelShape.d.ts'
import type { ScoreHolder } from '../../../../../net/minecraft/world/scores/ScoreHolder.d.ts'
export abstract class Player extends Avatar implements ContainerUser {
    static ARMOR_SLOT_OFFSET: number;
    static BASE_JUMP_POWER: number;
    static BASE_SAFE_FALL_DISTANCE: number;
    static BASE_TICKS_REQUIRED_TO_FREEZE: number;
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
    static ENDER_SLOT_OFFSET: number;
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
    static PLAYER_NOT_WEARING_DISGUISE_ITEM: (param0: LivingEntity) => boolean;
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
    static areAllEffectsAmbient(parameffects: MobEffectInstance[]): boolean;
    static canGlideUsing(paramitemStack: ItemStack, paramslot: EquipmentSlot): boolean;
    static collectAllColliders(paramsource: Entity, paramlevel: Level, paramboundingBox: AABB): VoxelShape[];
    static collideBoundingBox(paramarg0: Entity, paramarg1: Vec3, paramarg2: AABB, paramarg3: Level, paramarg4: (Object | null)[]): Vec3;
    static createAttributes(): AttributeSupplier$Builder;
    static createLivingAttributes(): AttributeSupplier$Builder;
    static getInputVector(paraminput: Vec3, paramspeed: number, paramyRot: number): Vec3;
    static getViewScale(): number;
    static resetForwardDirectionOfRelativePortalPosition(paramoffsets: Vec3): Vec3;
    static setViewScale(paramviewScale: number): void;
    constructor(level: Level, gameProfile: GameProfile)
    readonly abilities: Abilities;
    containerMenu: AbstractContainerMenu;
    readonly cooldowns: ItemCooldowns;
    // private defaultFlySpeed: number;
    enchantmentSeed: number;
    enderChestInventory: (Object | null)[];
    experienceLevel: number;
    experienceProgress: number;
    fishing: FishingHook;
    foodData: FoodData;
    readonly gameProfile: GameProfile;
    hurtDir: number;
    readonly inventory: (Object | null)[];
    inventoryMenu: InventoryMenu;
    // private jumpTriggerTime: number;
    readonly lastDeathLocation: Optional<GlobalPos>;
    // private lastItemInMainHand: ItemStack;
    // private lastLevelUpTime: number;
    readonly reducedDebugInfo: boolean;
    // private sleepCounter: number;
    takeXpDelay: number;
    totalExperience: number;
    viaFabricPlus$isSprinting: boolean;
    // private viaFabricPlus$ticksSinceSwimming: number;
    // private wasUnderwater: boolean;
    actuallyHurt(level: ServerLevel, source: DamageSource, dmg: number): void;
    addAdditionalSaveData(output: ValueOutput): void;
    addItem(itemStack: ItemStack): boolean;
    aiStep(): void;
    animateHurt(yaw: number): void;
    attack(entity: Entity): void;
    // private attackVisualEffects(entity: Entity, criticalAttack: boolean, sweepAttack: boolean, fullStrengthAttack: boolean, stabAttack: boolean, magicBoost: number): void;
    awardRecipes(recipes: RecipeHolder<Object>[]): number;
    awardRecipesByKey(recipeIds: ResourceKey<Recipe<Object>>[]): void;
    awardStat(location: Identifier): void;
    awardStat(location: Identifier, count: number): void;
    awardStat(stat: Stat<Object>): void;
    awardStat(stat: Stat<Object>, count: number): void;
    // private baseDamageScaleFactor(): number;
    blockActionRestricted(level: Level, pos: BlockPos, gameType: GameType): boolean;
    blockInteractionRange(): number;
    blockUsingItem(level: ServerLevel, attacker: LivingEntity): void;
    canBeSeenAsEnemy(): boolean;
    // private canCriticalAttack(entity: Entity): boolean;
    canDropItems(): boolean;
    canEat(canAlwaysEat: boolean): boolean;
    // private canFallAtLeast(deltaX: number, deltaZ: number, minHeight: number): boolean;
    canGlide(): boolean;
    canHarmPlayer(target: Player): boolean;
    canPlayerFitWithinBlocksAndEntitiesWhen(newPose: Pose): boolean;
    canSimulateMovement(): boolean;
    canSprint(): boolean;
    canUseGameMasterBlocks(): boolean;
    // private cannotAttack(entity: Entity): boolean;
    cannotAttackWithItem(itemStack: ItemStack, tolerance: number): boolean;
    causeExtraKnockback(entity: Entity, knockbackAmount: number, oldMovement: Vec3): void;
    causeFallDamage(fallDistance: number, damageModifier: number, damageSource: DamageSource): boolean;
    causeFoodExhaustion(amount: number): void;
    closeContainer(): void;
    // private createAttackSource(attackingItemStack: ItemStack): DamageSource;
    createEquipment(): EntityEquipment;
    createItemCooldowns(): ItemCooldowns;
    crit(entity: Entity): void;
    // private damageStatsAndHearts(entity: Entity, oldLivingEntityHealth: number): void;
    debugInfo(): string;
    // private decorateDisplayNameComponent(nameComponent: MutableComponent): MutableComponent;
    defineSynchedData(entityData: SynchedEntityData$Builder): void;
    // private deflectProjectile(entity: Entity): boolean;
    destroyVanishingCursedItems(): void;
    die(source: DamageSource): void;
    doAutoAttackOnTouch(entity: LivingEntity): void;
    doCloseContainer(): void;
    // private doSweepAttack(entity: Entity, baseDamage: number, damageSource: DamageSource, attackStrengthScale: number): void;
    doWaterSplashEffect(): void;
    doesEmitEquipEvent(slot: EquipmentSlot): boolean;
    drop(itemStack: ItemStack, thrownFromHand: boolean): ItemEntity;
    drop(itemStack: ItemStack, randomly: boolean, thrownFromHand: boolean): ItemEntity;
    dropEquipment(level: ServerLevel): void;
    entityInteractionRange(): number;
    freeAt(pos: BlockPos): boolean;
    gameMode(): GameType;
    getAbilities(): Abilities;
    getAbsorptionAmount(): number;
    getAttackStrengthScale(a: number): number;
    getBaseExperienceReward(level: ServerLevel): number;
    getBlockSpeedFactor(): number;
    getContainerInteractionRange(): number;
    getCooldowns(): ItemCooldowns;
    getCurrentItemAttackStrengthDelay(): number;
    getDeathSound(): SoundEvent;
    // private getDesiredPose(): Pose;
    getDestroySpeed(state: BlockState): number;
    getDimensionChangingDelay(): number;
    getDismountPoses(): Pose[];
    getDisplayName(): Component;
    getEnchantedDamage(entity: Entity, dmg: number, damageSource: DamageSource): number;
    getEnchantmentSeed(): number;
    getEnderChestInventory(): (Object | null)[];
    getFallSounds(): LivingEntity$Fallsounds;
    getFireImmuneTicks(): number;
    getFlyingSpeed(): number;
    getFoodData(): FoodData;
    getGameProfile(): GameProfile;
    getHurtDir(): number;
    getHurtSound(source: DamageSource): SoundEvent;
    getInventory(): (Object | null)[];
    getItemSwapScale(a: number): number;
    getLastDeathLocation(): Optional<GlobalPos>;
    getLivingEntity(): LivingEntity;
    getLuck(): number;
    getMaxHeadRotationRelativeToBody(): number;
    getMovementEmission(): Entity$MovementEmission;
    getName(): Component;
    getPlainTextName(): string;
    getProfile(): ResolvableProfile;
    getProjectile(heldWeapon: ItemStack): ItemStack;
    getRopeHoldPosition(partialTickTime: number): Vec3;
    getScore(): number;
    getScoreboardName(): string;
    getShoulderParrotLeft(): Optional<Parrot$Variant>;
    getShoulderParrotRight(): Optional<Parrot$Variant>;
    getSleepTimer(): number;
    getSlot(slot: number): SlotAccess;
    getSoundSource(): SoundSource;
    getSpeed(): number;
    getSwimHighSpeedSplashSound(): SoundEvent;
    getSwimSound(): SoundEvent;
    getSwimSplashSound(): SoundEvent;
    getVoicePitch(): number;
    getWardenSpawnTracker(): Optional<WardenSpawnTracker>;
    getWeaponItem(): ItemStack;
    getXpNeededForNextLevel(): number;
    giveExperienceLevels(amount: number): void;
    giveExperiencePoints(i: number): void;
    handleCreativeModeItemDrop(stack: ItemStack): void;
    handleEntityEvent(id: number): void;
    handleShoulderEntities(): void;
    hasContainerOpen(): boolean;
    hasContainerOpen(container: ContainerOpenersCounter, blockPos: BlockPos): boolean;
    hasCorrectToolForDrops(state: BlockState): boolean;
    hasEnoughFoodToDoExhaustiveManoeuvres(): boolean;
    hasInfiniteMaterials(): boolean;
    hurtArmor(damageSource: DamageSource, damage: number): void;
    hurtHelmet(damageSource: DamageSource, damage: number): void;
    hurtServer(level: ServerLevel, source: DamageSource, damage: number): boolean;
    increaseScore(amount: number): void;
    interactOn(entity: Entity, hand: InteractionHand, location: Vec3): InteractionResult;
    internalSetAbsorptionAmount(absorptionAmount: number): void;
    // private isAboveGround(maxDownStep: number): boolean;
    isAffectedByFluids(): boolean;
    isAlwaysExperienceDropper(): boolean;
    isAlwaysTicking(): boolean;
    isClientAuthoritative(): boolean;
    isCreative(): boolean;
    isEffectiveAi(): boolean;
    // private isEquipped(item: Item): boolean;
    isHurt(): boolean;
    isImmobile(): boolean;
    isInvulnerableTo(level: ServerLevel, source: DamageSource): boolean;
    isLocalClientAuthoritative(): boolean;
    isLocalPlayer(): boolean;
    isMobilityRestricted(): boolean;
    isPickable(): boolean;
    isPushedByFluid(): boolean;
    isReducedDebugInfo(): boolean;
    isScoping(): boolean;
    isSecondaryUseActive(): boolean;
    isSleepingLongEnough(): boolean;
    isSpectator(): boolean;
    isStayingOnGroundSurface(): boolean;
    // private isSweepAttack(fullStrengthAttack: boolean, criticalAttack: boolean, knockbackAttack: boolean): boolean;
    isSwimming(): boolean;
    isTextFilteringEnabled(): boolean;
    isWithinAttackRange(weaponItem: ItemStack, aabb: AABB, buffer: number): boolean;
    isWithinBlockInteractionRange(pos: BlockPos, buffer: number): boolean;
    isWithinEntityInteractionRange(entity: Entity, buffer: number): boolean;
    isWithinEntityInteractionRange(aabb: AABB, buffer: number): boolean;
    // private itemAttackInteraction(entity: Entity, attackingItemStack: ItemStack, damageSource: DamageSource, applyToTarget: boolean): void;
    killedEntity(level: ServerLevel, entity: LivingEntity, source: DamageSource): boolean;
    // private liquid_bounce$playSoundIfFakePlayer(arg0: Entity, arg1: SoundEvent): void;
    magicCrit(entity: Entity): void;
    makeStuckInBlock(blockState: BlockState, speedMultiplier: Vec3): void;
    mayBuild(): boolean;
    mayUseItemAt(pos: BlockPos, direction: Direction, itemStack: ItemStack): boolean;
    maybeBackOffFromEdge(delta: Vec3, moverType: MoverType): Vec3;
    nameAndId(): NameAndId;
    onAboveBubbleColumn(dragDown: boolean, pos: BlockPos): void;
    onAttack(): void;
    onClimbable(): boolean;
    onEnchantmentPerformed(itemStack: ItemStack, enchantmentCost: number): void;
    onInsideBubbleColumn(dragDown: boolean): void;
    onUpdateAbilities(): void;
    openCommandBlock(commandBlock: CommandBlockEntity): void;
    openDialog(dialog: Holder<Dialog>): void;
    openHorseInventory(horse: AbstractHorse, container: ItemStack[]): void;
    openItemGui(itemStack: ItemStack, hand: InteractionHand): void;
    openJigsawBlock(jigsawBlock: JigsawBlockEntity): void;
    openMenu(provider: MenuProvider): OptionalInt;
    openMinecartCommandBlock(commandBlock: MinecartCommandBlock): void;
    openNautilusInventory(nautilus: AbstractNautilus, container: ItemStack[]): void;
    openStructureBlock(structureBlock: StructureBlockEntity): void;
    openTestBlock(testBlock: TestBlockEntity): void;
    openTestInstanceBlock(testInstanceBlock: TestInstanceBlockEntity): void;
    openTextEdit(sign: SignBlockEntity, isFrontText: boolean): void;
    permissions(): PermissionSet;
    // private playServerSideSound(sound: SoundEvent): void;
    playSound(sound: SoundEvent): void;
    playSound(sound: SoundEvent, volume: number, pitch: number): void;
    playStepSound(onPos: BlockPos, onState: BlockState): void;
    preventsBlockDrops(): boolean;
    readAdditionalSaveData(input: ValueInput): void;
    remove(reason: Entity$RemovalReason): void;
    removeEntitiesOnShoulder(): void;
    removeVehicle(): void;
    resetAttackStrengthTicker(): void;
    resetOnlyAttackStrengthTicker(): void;
    resetRecipes(recipe: RecipeHolder<Object>[]): number;
    resetStat(stat: Stat<Object>): void;
    rideTick(): void;
    sendMerchantOffers(containerId: number, offers: (Object | null)[], merchantLevel: number, merchantXp: number, showProgressBar: boolean, canRestock: boolean): void;
    sendOverlayMessage(message: Component): void;
    sendSystemMessage(message: Component): void;
    setLastDeathLocation(pos: Optional<GlobalPos>): void;
    setReducedDebugInfo(reducedDebugInfo: boolean): void;
    setRemainingFireTicks(remainingTicks: number): void;
    setScore(value: number): void;
    setShoulderParrotLeft(variant: Optional<Parrot$Variant>): void;
    setShoulderParrotRight(variant: Optional<Parrot$Variant>): void;
    shouldBeSaved(): boolean;
    shouldRotateWithMinecart(): boolean;
    shouldShowName(): boolean;
    stabAttack(slot: EquipmentSlot, target: Entity, baseDamage: number, dealsDamage: boolean, dealsKnockback: boolean, dismounts: boolean): boolean;
    startAutoSpinAttack(activationTicks: number, dmg: number, itemStackUsed: ItemStack): void;
    startFallFlying(): void;
    startSleepInBed(pos: BlockPos): Either<Player$BedSleepingProblem, Unit>;
    stopSleepInBed(forcefulWakeUp: boolean, updateLevelList: boolean): void;
    stopSleeping(): void;
    tick(): void;
    tickRegeneration(): void;
    // private touch(entity: Entity): void;
    travel(input: Vec3): void;
    triggerRecipeCrafted(recipe: RecipeHolder<Object>, itemStacks: ItemStack[]): void;
    tryToStartFallFlying(): boolean;
    // private turtleHelmetTick(): void;
    updateIsUnderwater(): boolean;
    updatePlayerPose(): void;
    updateSwimming(): void;
    updateTutorialInventoryAction(itemCarried: ItemStack, itemInSlot: ItemStack, clickAction: ClickAction): void;
    wantsToStopRiding(): boolean;
}