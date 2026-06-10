import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { BiConsumer } from '../../../../java/util/function/BiConsumer.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Predicate } from '../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { NavigatingEntity } from '../../../../net/caffeinemc/mods/lithium/common/entity/NavigatingEntity.d.ts'
import type { EntityAnchorArgument$Anchor } from '../../../../net/minecraft/commands/arguments/EntityAnchorArgument$Anchor.d.ts'
import type { BlockPos } from '../../../../net/minecraft/core/BlockPos.d.ts'
import type { Holder } from '../../../../net/minecraft/core/Holder.d.ts'
import type { Vec3i } from '../../../../net/minecraft/core/Vec3i.d.ts'
import type { SynchedEntityData$Builder } from '../../../../net/minecraft/network/syncher/SynchedEntityData$Builder.d.ts'
import type { ResourceKey } from '../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { ServerLevel } from '../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { SoundEvent } from '../../../../net/minecraft/sounds/SoundEvent.d.ts'
import type { TagKey } from '../../../../net/minecraft/tags/TagKey.d.ts'
import type { RandomSource } from '../../../../net/minecraft/util/RandomSource.d.ts'
import type { DebugValueSource$Registration } from '../../../../net/minecraft/util/debug/DebugValueSource$Registration.d.ts'
import type { DifficultyInstance } from '../../../../net/minecraft/world/DifficultyInstance.d.ts'
import type { InteractionHand } from '../../../../net/minecraft/world/InteractionHand.d.ts'
import type { InteractionResult } from '../../../../net/minecraft/world/InteractionResult.d.ts'
import type { DamageSource } from '../../../../net/minecraft/world/damagesource/DamageSource.d.ts'
import type { MobEffectInstance } from '../../../../net/minecraft/world/effect/MobEffectInstance.d.ts'
import type { ConversionParams } from '../../../../net/minecraft/world/entity/ConversionParams.d.ts'
import type { ConversionParams$AfterConversion } from '../../../../net/minecraft/world/entity/ConversionParams$AfterConversion.d.ts'
import type { DropChances } from '../../../../net/minecraft/world/entity/DropChances.d.ts'
import type { Entity } from '../../../../net/minecraft/world/entity/Entity.d.ts'
import type { EntitySpawnReason } from '../../../../net/minecraft/world/entity/EntitySpawnReason.d.ts'
import type { EntityType } from '../../../../net/minecraft/world/entity/EntityType.d.ts'
import type { EquipmentSlot } from '../../../../net/minecraft/world/entity/EquipmentSlot.d.ts'
import type { EquipmentTable } from '../../../../net/minecraft/world/entity/EquipmentTable.d.ts'
import type { EquipmentUser } from '../../../../net/minecraft/world/entity/EquipmentUser.d.ts'
import type { HumanoidArm } from '../../../../net/minecraft/world/entity/HumanoidArm.d.ts'
import type { Leashable } from '../../../../net/minecraft/world/entity/Leashable.d.ts'
import type { Leashable$LeashData } from '../../../../net/minecraft/world/entity/Leashable$LeashData.d.ts'
import type { LivingEntity } from '../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { SpawnGroupData } from '../../../../net/minecraft/world/entity/SpawnGroupData.d.ts'
import type { Targeting } from '../../../../net/minecraft/world/entity/Targeting.d.ts'
import type { Attribute } from '../../../../net/minecraft/world/entity/ai/attributes/Attribute.d.ts'
import type { AttributeModifier } from '../../../../net/minecraft/world/entity/ai/attributes/AttributeModifier.d.ts'
import type { AttributeSupplier$Builder } from '../../../../net/minecraft/world/entity/ai/attributes/AttributeSupplier$Builder.d.ts'
import type { BodyRotationControl } from '../../../../net/minecraft/world/entity/ai/control/BodyRotationControl.d.ts'
import type { JumpControl } from '../../../../net/minecraft/world/entity/ai/control/JumpControl.d.ts'
import type { LookControl } from '../../../../net/minecraft/world/entity/ai/control/LookControl.d.ts'
import type { MoveControl } from '../../../../net/minecraft/world/entity/ai/control/MoveControl.d.ts'
import type { Goal } from '../../../../net/minecraft/world/entity/ai/goal/Goal.d.ts'
import type { GoalSelector } from '../../../../net/minecraft/world/entity/ai/goal/GoalSelector.d.ts'
import type { PathNavigation } from '../../../../net/minecraft/world/entity/ai/navigation/PathNavigation.d.ts'
import type { Sensing } from '../../../../net/minecraft/world/entity/ai/sensing/Sensing.d.ts'
import type { ItemEntity } from '../../../../net/minecraft/world/entity/item/ItemEntity.d.ts'
import type { Player } from '../../../../net/minecraft/world/entity/player/Player.d.ts'
import type { Item } from '../../../../net/minecraft/world/item/Item.d.ts'
import type { ItemStack } from '../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { Level } from '../../../../net/minecraft/world/level/Level.d.ts'
import type { LevelAccessor } from '../../../../net/minecraft/world/level/LevelAccessor.d.ts'
import type { LevelReader } from '../../../../net/minecraft/world/level/LevelReader.d.ts'
import type { ServerLevelAccessor } from '../../../../net/minecraft/world/level/ServerLevelAccessor.d.ts'
import type { Fluid } from '../../../../net/minecraft/world/level/material/Fluid.d.ts'
import type { PathType } from '../../../../net/minecraft/world/level/pathfinder/PathType.d.ts'
import type { ValueInput } from '../../../../net/minecraft/world/level/storage/ValueInput.d.ts'
import type { ValueOutput } from '../../../../net/minecraft/world/level/storage/ValueOutput.d.ts'
import type { LootParams } from '../../../../net/minecraft/world/level/storage/loot/LootParams.d.ts'
import type { LootParams$Builder } from '../../../../net/minecraft/world/level/storage/loot/LootParams$Builder.d.ts'
import type { LootTable } from '../../../../net/minecraft/world/level/storage/loot/LootTable.d.ts'
import type { AABB } from '../../../../net/minecraft/world/phys/AABB.d.ts'
import type { Vec3 } from '../../../../net/minecraft/world/phys/Vec3.d.ts'
import type { VoxelShape } from '../../../../net/minecraft/world/phys/shapes/VoxelShape.d.ts'
import type { ScoreHolder } from '../../../../net/minecraft/world/scores/ScoreHolder.d.ts'
export abstract class Mob extends LivingEntity implements NavigatingEntity, EquipmentUser, Leashable, Targeting {
    static ARMOR_SLOT_OFFSET: number;
    static AXIS_SPECIFIC_ELASTICITY: Vec3;
    static BASE_JUMP_POWER: number;
    static BASE_SAFE_FALL_DISTANCE: number;
    static BASE_TICKS_REQUIRED_TO_FREEZE: number;
    static BOARDING_COOLDOWN: number;
    static BODY_ARMOR_OFFSET: number;
    static CONTENTS_SLOT_INDEX: number;
    static DEATH_DURATION: number;
    static DEFAULT_BABY_SCALE: number;
    static DEFAULT_BASE_GRAVITY: number;
    static DEFAULT_BB_HEIGHT: number;
    static DEFAULT_BB_WIDTH: number;
    static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
    static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
    static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
    static ENTITY_ATTACHMENT_POINT: Vec3[];
    static EQUIPMENT_SLOT_OFFSET: number;
    static EXTRA_RENDER_CULLING_SIZE_WITH_BIG_HAT: number;
    static FREEZE_HURT_FREQUENCY: number;
    static LEASHER_ATTACHMENT_POINT: Vec3[];
    static LEASH_ELASTIC_DIST: number;
    static LEASH_TAG: string;
    static LEASH_TOO_FAR_DIST: number;
    static MAXIMUM_ALLOWED_LEASHED_DIST: number;
    static MAX_ENCHANTED_ARMOR_CHANCE: number;
    static MAX_ENCHANTED_WEAPON_CHANCE: number;
    static MAX_ENTITY_TAG_COUNT: number;
    static MAX_MOVEMENTS_HANDELED_PER_TICK: number;
    static MAX_PICKUP_LOOT_CHANCE: number;
    static MAX_RANGE: number;
    static MAX_WEARING_ARMOR_CHANCE: number;
    static MIN_MOVEMENT_DISTANCE: number;
    static NBT_ATTACHMENT_KEY: string;
    static PLAYER_HURT_EXPERIENCE_TIME: number;
    static PLAYER_NOT_WEARING_DISGUISE_ITEM: (param0: LivingEntity) => boolean;
    static REALLY_FAR_DISTANCE: number;
    static SADDLE_OFFSET: number;
    static SHARED_QUAD_ATTACHMENT_POINTS: Vec3[];
    static SPRING_DAMPENING: number;
    static STIFFNESS: number;
    static TAG_AIR: string;
    static TAG_ATTRIBUTES: string;
    static TAG_BRAIN: string;
    static TAG_CAN_PICK_UP_LOOT: string;
    static TAG_CUSTOM_NAME: string;
    static TAG_DATA: string;
    static TAG_DEATH_TIME: string;
    static TAG_DROP_CHANCES: string;
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
    static TAG_LEFT_HANDED: string;
    static TAG_MOTION: string;
    static TAG_NO_AI: string;
    static TAG_NO_GRAVITY: string;
    static TAG_ON_GROUND: string;
    static TAG_PASSENGERS: string;
    static TAG_PORTAL_COOLDOWN: string;
    static TAG_POS: string;
    static TAG_ROTATION: string;
    static TAG_SILENT: string;
    static TAG_SLEEPING_POS: string;
    static TAG_UUID: string;
    static TORSIONAL_ELASTICITY: number;
    static TOTAL_AIR_SUPPLY: number;
    static UPDATE_GOAL_SELECTOR_EVERY_N_TICKS: number;
    static WAYPOINT_TRANSMIT_RANGE_HIDE_MODIFIER: AttributeModifier;
    static WEARING_ARMOR_UPGRADE_MATERIAL_ATTEMPTS: number;
    static WEARING_ARMOR_UPGRADE_MATERIAL_CHANCE: number;
    static WILDCARD: ScoreHolder;
    static WILDCARD_NAME: string;
    static angularFriction(paramentity: Entity | null): number;
    static areAllEffectsAmbient(parameffects: MobEffectInstance[]): boolean;
    static canGlideUsing(paramitemStack: ItemStack, paramslot: EquipmentSlot): boolean;
    static checkMobSpawnRules(paramtype: EntityType<Mob>, paramlevel: LevelAccessor, paramspawnReason: EntitySpawnReason, parampos: BlockPos, paramrandom: RandomSource): boolean;
    static collectAllColliders(paramsource: Entity, paramlevel: Level, paramboundingBox: AABB): VoxelShape[];
    static collideBoundingBox(paramarg0: Entity, paramarg1: Vec3, paramarg2: AABB, paramarg3: Level, paramarg4: (Object | null)[]): Vec3;
    static createLivingAttributes(): AttributeSupplier$Builder;
    static createMobAttributes(): AttributeSupplier$Builder;
    static createQuadLeashOffsets(paramentity: Entity, paramfrontOffset: number, paramfrontBack: number, paramleftRight: number, paramheight: number): (Object | null)[];
    static getEquipmentForSlot(paramslot: EquipmentSlot, paramtype: number): Item;
    static getInputVector(paraminput: Vec3, paramspeed: number, paramyRot: number): Vec3;
    static getViewScale(): number;
    static leashableInArea(paramentity: Entity, paramtest: (param0: Leashable) => boolean): Leashable[];
    static leashableInArea(paramlevel: Level, parampos: Vec3, paramtest: (param0: Leashable) => boolean): Leashable[];
    static leashableLeashedTo(paramentity: Entity): Leashable[];
    static resetForwardDirectionOfRelativePortalPosition(paramoffsets: Vec3): Vec3;
    static setViewScale(paramviewScale: number): void;
    static tickLeash(paramlevel: ServerLevel, paramentity: Entity | null): void;
    constructor(type: EntityType<Mob>, level: Level)
    ambientSoundTime: number;
    // private bodyRotationControl: BodyRotationControl;
    readonly dropChances: DropChances;
    // private goalSelector: GoalSelector;
    readonly homePosition: BlockPos;
    readonly homeRadius: number;
    jumpControl: JumpControl;
    readonly leashData: Leashable$LeashData;
    lookControl: LookControl;
    readonly lootTable: Optional<ResourceKey<LootTable>>;
    readonly lootTableSeed: number;
    moveControl: MoveControl;
    navigation: PathNavigation;
    // private pathfindingMalus: { [key in PathType]: number };
    readonly persistenceRequired: boolean;
    // private registeredNavigation: PathNavigation;
    readonly sensing: Sensing;
    readonly target: LivingEntity;
    // private targetSelector: GoalSelector;
    // private xpReward: number;
    addAdditionalSaveData(output: ValueOutput): void;
    aiStep(): void;
    asValidTarget(target: LivingEntity): LivingEntity;
    ate(): void;
    baseTick(): void;
    // private burnUndead(): void;
    canAttack(target: LivingEntity): boolean;
    canBeLeashed(): boolean;
    canDispenserEquipIntoSlot(slot: EquipmentSlot): boolean;
    canHaveALeashAttachedTo(entity: Entity): boolean;
    canHoldItem(itemStack: ItemStack): boolean;
    canPickUpLoot(): boolean;
    canReplaceCurrentItem(newItemStack: ItemStack, currentItemStack: ItemStack, slot: EquipmentSlot): boolean;
    canReplaceEqualItem(newItemStack: ItemStack, currentItemStack: ItemStack): boolean;
    canShearEquipment(player: Player): boolean;
    canUseNonMeleeWeapon(item: ItemStack): boolean;
    chargeSpeedModifier(): number;
    // private checkAndHandleImportantInteractions(player: Player, hand: InteractionHand): InteractionResult;
    checkDespawn(): void;
    checkElasticInteractions(leashHolder: Entity, leashData: Leashable$LeashData): boolean;
    checkSpawnObstruction(level: LevelReader): boolean;
    checkSpawnRules(level: LevelAccessor, spawnReason: EntitySpawnReason): boolean;
    clampHeadRotationToBody(): void;
    clearHome(): void;
    closeRangeLeashBehaviour(leashHolder: Entity): void;
    // private compareArmor(newItemStack: ItemStack, currentItemStack: ItemStack, slot: EquipmentSlot): boolean;
    // private compareWeapons(newItemStack: ItemStack, currentItemStack: ItemStack, slot: EquipmentSlot): boolean;
    convertTo<T extends Mob>(entityType: EntityType<T>, params: ConversionParams, afterConversion: (param0: T) => void): T;
    convertTo<T extends Mob>(entityType: EntityType<T>, params: ConversionParams, spawnReason: EntitySpawnReason, afterConversion: (param0: T) => void): T;
    createBodyControl(): BodyRotationControl;
    // private createEquipmentParams(serverLevel: ServerLevel): LootParams;
    createEquipmentSlotContainer(slot: EquipmentSlot): ItemStack[];
    createNavigation(level: Level): PathNavigation;
    customServerAiStep(level: ServerLevel): void;
    defineSynchedData(entityData: SynchedEntityData$Builder): void;
    doHurtTarget(level: ServerLevel, target: Entity): boolean;
    dropCustomDeathLoot(level: ServerLevel, source: DamageSource, killedByPlayer: boolean): void;
    dropFromLootTable(level: ServerLevel, key: ResourceKey<LootTable>, paramsBuilder: (param0: LootParams$Builder) => LootParams, consumer: (param0: ServerLevel, param1: ItemStack) => void): boolean;
    dropFromLootTable(level: ServerLevel, source: DamageSource, playerKilled: boolean): void;
    dropFromLootTable(level: ServerLevel, source: DamageSource, playerKilled: boolean, lootTable: ResourceKey<LootTable>): void;
    dropFromLootTable(level: ServerLevel, source: DamageSource, playerKilled: boolean, lootTable: ResourceKey<LootTable>, itemStackConsumer: (param0: ItemStack) => void): void;
    dropLeash(): void;
    dropPreservedEquipment(level: ServerLevel): void;
    dropPreservedEquipment(level: ServerLevel, shouldDrop: (param0: ItemStack) => boolean): EquipmentSlot[];
    enchantSpawnedArmor(level: ServerLevelAccessor, random: RandomSource, slot: EquipmentSlot, difficulty: DifficultyInstance): void;
    // private enchantSpawnedEquipment(level: ServerLevelAccessor, slot: EquipmentSlot, random: RandomSource, chance: number, difficulty: DifficultyInstance): void;
    enchantSpawnedWeapon(level: ServerLevelAccessor, random: RandomSource, difficulty: DifficultyInstance): void;
    equip(lootTable: ResourceKey<LootTable>, lootParams: LootParams, optionalLootTableSeed: number, dropChances: { [key in EquipmentSlot]: number }): void;
    equip(lootTable: ResourceKey<LootTable>, lootParams: LootParams, dropChances: { [key in EquipmentSlot]: number }): void;
    equip(equipment: EquipmentTable, lootParams: LootParams): void;
    equip(lootTable: ResourceKey<LootTable>, dropChances: { [key in EquipmentSlot]: number }): void;
    equip(equipment: EquipmentTable): void;
    equipItemIfPossible(level: ServerLevel, itemStack: ItemStack): ItemStack;
    finalizeSpawn(level: ServerLevelAccessor, difficulty: DifficultyInstance, spawnReason: EntitySpawnReason, groupData: SpawnGroupData): SpawnGroupData;
    getAmbientSound(): SoundEvent;
    getAmbientSoundInterval(): number;
    // private getApproximateAttributeWith(itemStack: ItemStack, attribute: Holder<Attribute>, slot: EquipmentSlot): number;
    getAttackBoundingBox(horizontalExpansion: number): AABB;
    getBaseExperienceReward(level: ServerLevel): number;
    getBodyArmorItem(): ItemStack;
    getControllingPassenger(): LivingEntity;
    getDropChances(): DropChances;
    getHeadRotSpeed(): number;
    getHomePosition(): BlockPos;
    getHomeRadius(): number;
    getJumpControl(): JumpControl;
    getLeashData(): Leashable$LeashData;
    getLeashHolder(): Entity;
    getLeashOffset(): Vec3;
    getLeashOffset(partialTicks: number): Vec3;
    getLookControl(): LookControl;
    getLootTable(): Optional<ResourceKey<LootTable>>;
    getLootTableSeed(): number;
    getMainArm(): HumanoidArm;
    getMaxFallDistance(): number;
    getMaxHeadXRot(): number;
    getMaxHeadYRot(): number;
    getMaxSpawnClusterSize(): number;
    getMoveControl(): MoveControl;
    getNavigation(): PathNavigation;
    getPathfindingMalus(pathType: PathType): number;
    getPickResult(): ItemStack;
    getPickupReach(): Vec3i;
    getPreferredWeaponType(): TagKey<Item>;
    getQuadLeashOffsets(): Vec3[];
    getSensing(): Sensing;
    getTarget(): LivingEntity;
    getTargetFromBrain(): LivingEntity;
    getTargetUnchecked(): LivingEntity;
    handleEntityEvent(id: number): void;
    hasHome(): boolean;
    // private hasValidEquippableItemForSlot(slot: EquipmentSlot): boolean;
    interact(player: Player, hand: InteractionHand, location: Vec3): InteractionResult;
    isAggressive(): boolean;
    isEffectiveAi(): boolean;
    isLeashed(): boolean;
    isLeftHanded(): boolean;
    isMaxGroupSizeReached(groupSize: number): boolean;
    isNoAi(): boolean;
    isPersistenceRequired(): boolean;
    isSaddled(): boolean;
    // private isSunBurnTick(): boolean;
    isWearingBodyArmor(): boolean;
    isWithinHome(): boolean;
    isWithinHome(pos: BlockPos): boolean;
    isWithinHome(pos: Vec3): boolean;
    isWithinMeleeAttackRange(target: LivingEntity): boolean;
    jumpInLiquid(type: TagKey<Fluid>): void;
    leashDistanceTo(entity: Entity): number;
    leashElasticDistance(): number;
    leashSnapDistance(): number;
    leashTooFarBehaviour(): void;
    lithium$getRegisteredNavigation(): PathNavigation;
    lithium$isRegisteredToWorld(): boolean;
    lithium$setRegisteredToWorld(arg0: PathNavigation): void;
    lithium$updateNavigationRegistration(): void;
    lookAt(anchor: EntityAnchorArgument$Anchor, pos: Vec3): void;
    lookAt(entity: Entity, yMax: number, xMax: number): void;
    mayBeLeashed(): boolean;
    mobInteract(player: Player, hand: InteractionHand): InteractionResult;
    onAttributeUpdated(attribute: Holder<Attribute>): void;
    onElasticLeashPull(): void;
    onLeashRemoved(): void;
    onOffspringSpawnedFromEgg(spawner: Player, offspring: Mob): void;
    onPathfindingDone(): void;
    onPathfindingStart(): void;
    pickUpItem(level: ServerLevel, entity: ItemEntity): void;
    playAmbientSound(): void;
    playHurtSound(source: DamageSource): void;
    populateDefaultEquipmentEnchantments(level: ServerLevelAccessor, random: RandomSource, localDifficulty: DifficultyInstance): void;
    populateDefaultEquipmentSlots(random: RandomSource, difficulty: DifficultyInstance): void;
    readAdditionalSaveData(input: ValueInput): void;
    readLeashData(input: ValueInput): void;
    registerDebugValues(level: ServerLevel, registration: DebugValueSource$Registration): void;
    registerGoals(): void;
    removeAfterChangingDimensions(): void;
    removeAllGoals(predicate: (param0: Goal) => boolean): void;
    removeFreeWill(): void;
    removeLeash(): void;
    removeWhenFarAway(distSqr: number): boolean;
    requiresCustomPersistence(): boolean;
    // private resetAmbientSoundTime(): void;
    // private resetAngularLeashMomentum(): void;
    resolveSlot(toEquip: ItemStack, alreadyInsertedIntoSlots: EquipmentSlot[]): EquipmentSlot;
    // private rotlerp(a: number, b: number, max: number): number;
    serverAiStep(): void;
    setAggressive(flag: boolean): void;
    setBaby(baby: boolean): void;
    setBodyArmorItem(item: ItemStack): void;
    setCanPickUpLoot(canPickUpLoot: boolean): void;
    setDelayedLeashHolderId(entityId: number): void;
    setDropChance(slot: EquipmentSlot, percent: number): void;
    setGuaranteedDrop(slot: EquipmentSlot): void;
    setHomeTo(newCenter: BlockPos, radius: number): void;
    setItemSlotAndDropWhenKilled(slot: EquipmentSlot, itemStack: ItemStack): void;
    setLeashData(leashData: Leashable$LeashData): void;
    setLeashedTo(holder: Entity, synch: boolean): void;
    setLeftHanded(flag: boolean): void;
    setNoAi(flag: boolean): void;
    setPathfindingMalus(pathType: PathType, cost: number): void;
    setPersistenceRequired(): void;
    setSpeed(speed: number): void;
    setTarget(target: LivingEntity): void;
    setXxa(xxa: number): void;
    setYya(yya: number): void;
    setZza(zza: number): void;
    shouldPassengersInheritMalus(): boolean;
    spawnAnim(): void;
    startRiding(entity: Entity): boolean;
    startRiding(entity: Entity, force: boolean, sendEventAndTriggers: boolean): boolean;
    stopInPlace(): void;
    sunProtectionSlot(): EquipmentSlot;
    supportQuadLeash(): boolean;
    tick(): void;
    tickHeadTurn(yBodyRotT: number): void;
    updateControlFlags(): void;
    usePlayerItem(player: Player, hand: InteractionHand, itemStack: ItemStack): void;
    wantsToPickUp(level: ServerLevel, itemStack: ItemStack): boolean;
    whenLeashedTo(leashHolder: Entity): void;
    writeLeashData(output: ValueOutput, leashData: Leashable$LeashData): void;
}