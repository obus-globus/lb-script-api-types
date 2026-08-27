import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { UUID } from '../../../../java/util/UUID.d.ts'
import type { BiConsumer } from '../../../../java/util/function/BiConsumer.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Predicate } from '../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { FeetBlockCachingEntity } from '../../../../net/caffeinemc/mods/lithium/common/entity/pushable/FeetBlockCachingEntity.d.ts'
import type { MaybeInLevelObject } from '../../../../net/caffeinemc/mods/lithium/common/world/in_world_tracking/MaybeInLevelObject.d.ts'
import type { PlayerJumpEvent } from '../../../../net/ccbluex/liquidbounce/event/events/PlayerJumpEvent.d.ts'
import type { LivingEntityAccessor } from '../../../../net/fabricmc/fabric/mixin/content/registry/fluid/LivingEntityAccessor.d.ts'
import type { EntityAnchorArgument$Anchor } from '../../../../net/minecraft/commands/arguments/EntityAnchorArgument$Anchor.d.ts'
import type { BlockPos } from '../../../../net/minecraft/core/BlockPos.d.ts'
import type { Direction } from '../../../../net/minecraft/core/Direction.d.ts'
import type { Direction$Axis } from '../../../../net/minecraft/core/Direction$Axis.d.ts'
import type { Holder } from '../../../../net/minecraft/core/Holder.d.ts'
import type { ClientboundAddEntityPacket } from '../../../../net/minecraft/network/protocol/game/ClientboundAddEntityPacket.d.ts'
import type { EntityDataAccessor } from '../../../../net/minecraft/network/syncher/EntityDataAccessor.d.ts'
import type { SynchedEntityData$Builder } from '../../../../net/minecraft/network/syncher/SynchedEntityData$Builder.d.ts'
import type { SynchedEntityData$DataValue } from '../../../../net/minecraft/network/syncher/SynchedEntityData$DataValue.d.ts'
import type { ResourceKey } from '../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { ServerLevel } from '../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { ServerPlayer } from '../../../../net/minecraft/server/level/ServerPlayer.d.ts'
import type { SoundEvent } from '../../../../net/minecraft/sounds/SoundEvent.d.ts'
import type { TagKey } from '../../../../net/minecraft/tags/TagKey.d.ts'
import type { BlockUtil$FoundRectangle } from '../../../../net/minecraft/util/BlockUtil$FoundRectangle.d.ts'
import type { InteractionHand } from '../../../../net/minecraft/world/InteractionHand.d.ts'
import type { CombatTracker } from '../../../../net/minecraft/world/damagesource/CombatTracker.d.ts'
import type { DamageSource } from '../../../../net/minecraft/world/damagesource/DamageSource.d.ts'
import type { MobEffect } from '../../../../net/minecraft/world/effect/MobEffect.d.ts'
import type { MobEffectInstance } from '../../../../net/minecraft/world/effect/MobEffectInstance.d.ts'
import type { Attackable } from '../../../../net/minecraft/world/entity/Attackable.d.ts'
import type { ElytraAnimationState } from '../../../../net/minecraft/world/entity/ElytraAnimationState.d.ts'
import type { Entity } from '../../../../net/minecraft/world/entity/Entity.d.ts'
import type { Entity$RemovalReason } from '../../../../net/minecraft/world/entity/Entity$RemovalReason.d.ts'
import type { EntityDimensions } from '../../../../net/minecraft/world/entity/EntityDimensions.d.ts'
import type { EntityEquipment } from '../../../../net/minecraft/world/entity/EntityEquipment.d.ts'
import type { EntityReference } from '../../../../net/minecraft/world/entity/EntityReference.d.ts'
import type { EntityType } from '../../../../net/minecraft/world/entity/EntityType.d.ts'
import type { EquipmentSlot } from '../../../../net/minecraft/world/entity/EquipmentSlot.d.ts'
import type { HumanoidArm } from '../../../../net/minecraft/world/entity/HumanoidArm.d.ts'
import type { InterpolationHandler } from '../../../../net/minecraft/world/entity/InterpolationHandler.d.ts'
import type { LivingEntity$Fallsounds } from '../../../../net/minecraft/world/entity/LivingEntity$Fallsounds.d.ts'
import type { Pose } from '../../../../net/minecraft/world/entity/Pose.d.ts'
import type { SlotAccess } from '../../../../net/minecraft/world/entity/SlotAccess.d.ts'
import type { WalkAnimationState } from '../../../../net/minecraft/world/entity/WalkAnimationState.d.ts'
import type { Brain } from '../../../../net/minecraft/world/entity/ai/Brain.d.ts'
import type { Brain$Packed } from '../../../../net/minecraft/world/entity/ai/Brain$Packed.d.ts'
import type { Attribute } from '../../../../net/minecraft/world/entity/ai/attributes/Attribute.d.ts'
import type { AttributeInstance } from '../../../../net/minecraft/world/entity/ai/attributes/AttributeInstance.d.ts'
import type { AttributeMap } from '../../../../net/minecraft/world/entity/ai/attributes/AttributeMap.d.ts'
import type { AttributeModifier } from '../../../../net/minecraft/world/entity/ai/attributes/AttributeModifier.d.ts'
import type { AttributeSupplier$Builder } from '../../../../net/minecraft/world/entity/ai/attributes/AttributeSupplier$Builder.d.ts'
import type { ItemEntity } from '../../../../net/minecraft/world/entity/item/ItemEntity.d.ts'
import type { Player } from '../../../../net/minecraft/world/entity/player/Player.d.ts'
import type { Item } from '../../../../net/minecraft/world/item/Item.d.ts'
import type { ItemInstance } from '../../../../net/minecraft/world/item/ItemInstance.d.ts'
import type { ItemStack } from '../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { AttackRange } from '../../../../net/minecraft/world/item/component/AttackRange.d.ts'
import type { Enchantment } from '../../../../net/minecraft/world/item/enchantment/Enchantment.d.ts'
import type { EnchantmentLocationBasedEffect } from '../../../../net/minecraft/world/item/enchantment/effects/EnchantmentLocationBasedEffect.d.ts'
import type { Equippable } from '../../../../net/minecraft/world/item/equipment/Equippable.d.ts'
import type { ClipContext$Block } from '../../../../net/minecraft/world/level/ClipContext$Block.d.ts'
import type { ClipContext$Fluid } from '../../../../net/minecraft/world/level/ClipContext$Fluid.d.ts'
import type { Level } from '../../../../net/minecraft/world/level/Level.d.ts'
import type { BlockState } from '../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { Fluid } from '../../../../net/minecraft/world/level/material/Fluid.d.ts'
import type { FluidState } from '../../../../net/minecraft/world/level/material/FluidState.d.ts'
import type { ValueInput } from '../../../../net/minecraft/world/level/storage/ValueInput.d.ts'
import type { ValueOutput } from '../../../../net/minecraft/world/level/storage/ValueOutput.d.ts'
import type { LootParams } from '../../../../net/minecraft/world/level/storage/loot/LootParams.d.ts'
import type { LootParams$Builder } from '../../../../net/minecraft/world/level/storage/loot/LootParams$Builder.d.ts'
import type { LootTable } from '../../../../net/minecraft/world/level/storage/loot/LootTable.d.ts'
import type { AABB } from '../../../../net/minecraft/world/phys/AABB.d.ts'
import type { Vec3 } from '../../../../net/minecraft/world/phys/Vec3.d.ts'
import type { CollisionContext } from '../../../../net/minecraft/world/phys/shapes/CollisionContext.d.ts'
import type { VoxelShape } from '../../../../net/minecraft/world/phys/shapes/VoxelShape.d.ts'
import type { ScoreHolder } from '../../../../net/minecraft/world/scores/ScoreHolder.d.ts'
import type { Waypoint$Icon } from '../../../../net/minecraft/world/waypoints/Waypoint$Icon.d.ts'
import type { WaypointTransmitter } from '../../../../net/minecraft/world/waypoints/WaypointTransmitter.d.ts'
import type { WaypointTransmitter$Connection } from '../../../../net/minecraft/world/waypoints/WaypointTransmitter$Connection.d.ts'
export abstract class LivingEntity extends Entity implements FeetBlockCachingEntity, MaybeInLevelObject, LivingEntityAccessor, Attackable, WaypointTransmitter {
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
    static DEATH_DURATION: number;
    static DEFAULT_BABY_SCALE: number;
    static DEFAULT_BASE_GRAVITY: number;
    static DEFAULT_BB_HEIGHT: number;
    static DEFAULT_BB_WIDTH: number;
    static DEFAULT_BELOW_NAME_DISTANCE: number;
    static DEFAULT_NAME_TAG_DISTANCE: number;
    static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
    static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
    static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
    static DOLPHINS_GRACE_WATER_DRAG: number;
    static ELYTRA_HORIZONTAL_AIR_DRAG: number;
    static ELYTRA_VERTICAL_AIR_DRAG: number;
    static EQUIPMENT_SLOT_OFFSET: number;
    static EXTRA_RENDER_CULLING_SIZE_WITH_BIG_HAT: number;
    static FLYING_AIR_DRAG: number;
    static FLYING_LAVA_DRAG: number;
    static FLYING_VERTICAL_AIR_DRAG: number;
    static FLYING_WATER_DRAG: number;
    static FREEZE_HURT_FREQUENCY: number;
    static INVALID_ENTITY_ID: number;
    static LAVA_DRAG: number;
    static LAVA_SHALLOW_VERTICAL_DRAG: number;
    static MAX_ENTITY_TAG_COUNT: number;
    static MAX_MOVEMENTS_HANDELED_PER_TICK: number;
    static MAX_NAME_TAG_DISTANCE: number;
    static MIN_MOVEMENT_DISTANCE: number;
    static NBT_ATTACHMENT_KEY: string;
    static PLAYER_HURT_EXPERIENCE_TIME: number;
    static PLAYER_NOT_WEARING_DISGUISE_ITEM: (param0: LivingEntity) => boolean;
    static REALLY_FAR_DISTANCE: number;
    static SADDLE_OFFSET: number;
    static SPRINTING_WATER_DRAG: number;
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
    static WATER_DRAG: number;
    static WAYPOINT_TRANSMIT_RANGE_HIDE_MODIFIER: AttributeModifier;
    static WILDCARD: ScoreHolder;
    static WILDCARD_NAME: string;
    static areAllEffectsAmbient(parameffects: MobEffectInstance[]): boolean;
    static canGlideUsing(paramitemStack: ItemStack, paramslot: EquipmentSlot): boolean;
    static collectAllColliders(paramsource: Entity, paramlevel: Level, paramboundingBox: AABB): VoxelShape[];
    static collideBoundingBox(paramarg0: Entity, paramarg1: Vec3, paramarg2: AABB, paramarg3: Level, paramarg4: (Object | null)[]): Vec3;
    static collideBoundingBox(paramsource: CollisionContext, parammovement: Vec3, paramboundingBox: AABB, paramlevel: Level, paramentityColliders: VoxelShape[]): Vec3;
    static createLivingAttributes(): AttributeSupplier$Builder;
    static getInputVector(paraminput: Vec3, paramspeed: number, paramyRot: number): Vec3;
    static getViewScale(): number;
    static resetForwardDirectionOfRelativePortalPosition(paramoffsets: Vec3): Vec3;
    static setViewScale(paramviewScale: number): void;
    constructor(type: EntityType<LivingEntity>, level: Level)
    readonly absorptionAmount: number;
    readonly activeEffects: JavaMap<Holder<MobEffect>, MobEffectInstance>;
    // private activeLocationDependentEnchantments: JavaMap<EquipmentSlot, JavaMap<Enchantment, EnchantmentLocationBasedEffect[]>>;
    attackAnim: number;
    attackStrengthTicker: number;
    readonly attributes: AttributeMap;
    autoSpinAttackDmg: number;
    // private autoSpinAttackItemStack: ItemStack;
    // private autoSpinAttackTicks: number;
    brain: Brain<any>;
    readonly combatTracker: CombatTracker;
    // private currentImpulseContextResetGraceTime: number;
    currentImpulseImpactPos: Vec3;
    // private dead: boolean;
    deathTime: number;
    readonly discardFriction: boolean;
    // private effectsDirty: boolean;
    elytraAnimationState: ElytraAnimationState;
    // private equipment: EntityEquipment;
    // private fallFlyTicks: number;
    hurtDuration: number;
    hurtTime: number;
    readonly interpolation: InterpolationHandler;
    // private itemSwapTicker: number;
    // private jumpEvent: PlayerJumpEvent;
    jumping: boolean;
    readonly lastClimbablePos: Optional<BlockPos>;
    readonly lastDamageSource: DamageSource;
    // private lastDamageStamp: number;
    // private lastEquipmentItems: JavaMap<EquipmentSlot, ItemStack>;
    // private lastHurt: number;
    readonly lastHurtByMob: EntityReference<LivingEntity>;
    readonly lastHurtByMobTimestamp: number;
    lastHurtByPlayer: EntityReference<Player>;
    lastHurtByPlayerMemoryTime: number;
    readonly lastHurtMob: LivingEntity;
    readonly lastHurtMobTimestamp: number;
    // private lastKineticHitFeedbackTime: number;
    // private lastPos: BlockPos;
    // private lerpHeadSteps: number;
    // private lerpYHeadRot: number;
    // private locatorBarIcon: Waypoint$Icon;
    noActionTime: number;
    noJumpDelay: number;
    oAttackAnim: number;
    // private previousElytra: boolean;
    // private previousIsGliding: boolean;
    // private recentKineticEnemies: JavaMap<any, any>;
    removeArrowTime: number;
    removeStingerTime: number;
    // private skipDropExperience: boolean;
    readonly speed: number;
    // private swimAmount: number;
    // private swimAmountO: number;
    swingTime: number;
    swinging: boolean;
    swingingArm: InteractionHand;
    // private updateClimbingMobCachingSectionOnChange: boolean;
    useItem: ItemStack;
    // private useItemRemaining: number;
    walkAnimation: WalkAnimationState;
    xxa: number;
    yBodyRot: number;
    yBodyRotO: number;
    yHeadRot: number;
    yHeadRotO: number;
    yya: number;
    zza: number;
    activeLocationDependentEnchantments(slot: EquipmentSlot): JavaMap<Enchantment, EnchantmentLocationBasedEffect[]>;
    actuallyHurt(level: ServerLevel, source: DamageSource, dmg: number): void;
    addAdditionalSaveData(output: ValueOutput): void;
    addEffect(newEffect: MobEffectInstance): boolean;
    addEffect(newEffect: MobEffectInstance, source: Entity): boolean;
    aiStep(): void;
    animateHurt(yaw: number): void;
    applyInput(): void;
    applyItemBlocking(level: ServerLevel, source: DamageSource, damage: number): number;
    applyPostImpulseGraceTime(ticks: number): void;
    asLivingEntity(): LivingEntity;
    attackable(): boolean;
    baseTick(): void;
    blockUsingItem(level: ServerLevel, attacker: LivingEntity, source: DamageSource, damage: number): void;
    blockedByItem(defender: LivingEntity, source: DamageSource, damage: number): void;
    // private breakItem(itemStack: ItemStack): void;
    calculateEntityAnimation(useY: boolean): void;
    calculateFallDamage(fallDistance: number, damageModifier: number): number;
    // private calculateFallPower(fallDistance: number): number;
    callGetWaterSlowDown(): number;
    callJumpOutOfFluid(arg0: number): void;
    canAttack(target: LivingEntity): boolean;
    canBeAffected(newEffect: MobEffectInstance): boolean;
    // private canBeAffected$mixinextras$wrapped$512(arg0: MobEffectInstance): boolean;
    canBeSeenAsEnemy(): boolean;
    canBeSeenByAnyone(): boolean;
    canBreatheUnderwater(): boolean;
    canDispenserEquipIntoSlot(slot: EquipmentSlot): boolean;
    canEquipWithDispenser(itemStack: ItemStack): boolean;
    canFreeze(): boolean;
    canGlide(): boolean;
    canPickUpLoot(): boolean;
    canStandOnFluid(fluid: FluidState): boolean;
    canUsePortal(ignorePassenger: boolean): boolean;
    canUseSlot(slot: EquipmentSlot): boolean;
    causeExtraKnockback(target: Entity, knockback: number, oldMovement: Vec3, damageSource: DamageSource, damage: number, comesFromEffect: boolean): void;
    causeFallDamage(fallDistance: number, damageModifier: number, damageSource: DamageSource): boolean;
    checkAutoSpinAttack(old: AABB, current: AABB): void;
    // private checkBedExists(): boolean;
    checkFallDamage(ya: number, onGround: boolean, onState: BlockState, pos: BlockPos): void;
    // private checkTotemDeathProtection(killingDamage: DamageSource): boolean;
    clearSleepingPos(): void;
    collectEquipmentChanges(lastEquipmentItems: JavaMap<EquipmentSlot, ItemStack>): JavaMap<EquipmentSlot, ItemStack>;
    completeUsingItem(): void;
    createDamageSource(): DamageSource;
    createEquipment(): EntityEquipment;
    // private createItemStackToDrop(itemStack: ItemStack, randomly: boolean, thrownFromHand: boolean): ItemEntity;
    createWitherRose(killer: LivingEntity): void;
    dealDefaultKnockback(source: DamageSource, damage: number, blocked: boolean): void;
    decreaseAirSupply(currentSupply: number): number;
    defineSynchedData(entityData: SynchedEntityData$Builder): void;
    // private detectEquipmentUpdates(): void;
    die(source: DamageSource): void;
    // private dismountVehicle(vehicle: Entity): void;
    doAutoAttackOnTouch(entity: LivingEntity): void;
    doHurtEquipment(damageSource: DamageSource, damage: number, ...slots: EquipmentSlot[]): void;
    doHurtTarget(level: ServerLevel, target: Entity): boolean;
    doPush(entity: Entity): void;
    doesEmitEquipEvent(slot: EquipmentSlot): boolean;
    drop(itemStack: ItemStack, randomly: boolean, thrownFromHand: boolean): ItemEntity;
    dropAllDeathLoot(level: ServerLevel, source: DamageSource): void;
    dropCustomDeathLoot(level: ServerLevel, source: DamageSource, killedByPlayer: boolean): void;
    dropEquipment(level: ServerLevel): void;
    dropExperience(level: ServerLevel, killer: Entity): void;
    dropFromEntityInteractLootTable(level: ServerLevel, key: ResourceKey<LootTable>, interactingEntity: Entity, tool: ItemInstance, consumer: (param0: ServerLevel, param1: ItemStack) => void): boolean;
    dropFromGiftLootTable(level: ServerLevel, key: ResourceKey<LootTable>, consumer: (param0: ServerLevel, param1: ItemStack) => void): boolean;
    dropFromLootTable(level: ServerLevel, key: ResourceKey<LootTable>, paramsBuilder: (param0: LootParams$Builder) => LootParams, consumer: (param0: ServerLevel, param1: ItemStack) => void): boolean;
    dropFromLootTable(level: ServerLevel, source: DamageSource, playerKilled: boolean): void;
    dropFromLootTable(level: ServerLevel, source: DamageSource, playerKilled: boolean, lootTable: ResourceKey<LootTable>): void;
    dropFromLootTable(level: ServerLevel, source: DamageSource, playerKilled: boolean, lootTable: ResourceKey<LootTable>, itemStackConsumer: (param0: ItemStack) => void): void;
    dropFromShearingLootTable(level: ServerLevel, key: ResourceKey<LootTable>, tool: ItemInstance, consumer: (param0: ServerLevel, param1: ItemStack) => void): void;
    equipmentHasChanged(previous: ItemStack, current: ItemStack): boolean;
    // private floatInWaterWhileRidden(): void;
    forceAddEffect(newEffect: MobEffectInstance, source: Entity): void;
    getAbsorptionAmount(): number;
    getActiveEffects(): MobEffectInstance[];
    getActiveEffectsMap(): JavaMap<Holder<MobEffect>, MobEffectInstance>;
    getActiveItem(): ItemStack;
    getAgeScale(): number;
    getAirDrag(): number;
    getArmorCoverPercentage(): number;
    getArmorValue(): number;
    getArrowCount(): number;
    getAttackAnim(a: number): number;
    getAttackRangeWith(weaponItem: ItemStack): AttackRange;
    getAttribute(attribute: Holder<Attribute>): AttributeInstance;
    getAttributeBaseValue(attribute: Holder<Attribute>): number;
    getAttributeValue(attribute: Holder<Attribute>): number;
    getAttributes(): AttributeMap;
    getBaseExperienceReward(level: ServerLevel): number;
    getBedOrientation(): Direction;
    getBlockSpeedFactor(): number;
    getBrain(): Brain<LivingEntity>;
    getCombatTracker(): CombatTracker;
    getComfortableFallDistance(allowedDamage: number): number;
    // private getCurrentSwingDuration(): number;
    getDamageAfterArmorAbsorb(damageSource: DamageSource, damage: number): number;
    getDamageAfterMagicAbsorb(damageSource: DamageSource, damage: number): number;
    getDeathSound(): SoundEvent;
    getDefaultDimensions(pose: Pose): EntityDimensions;
    getDefaultGravity(): number;
    getDimensions(pose: Pose): EntityDimensions;
    getDismountPoses(): Pose[];
    getEffect(effect: Holder<MobEffect>): MobEffectInstance;
    getEffectBlendFactor(effect: Holder<MobEffect>, partialTicks: number): number;
    getEffectiveGravity(): number;
    getEntityBounciness(): number;
    getEquipSound(slot: EquipmentSlot, stack: ItemStack, equippable: Equippable): Holder<SoundEvent>;
    getEquipmentSlotForItem(itemStack: ItemStack): EquipmentSlot;
    getExperienceReward(level: ServerLevel, killer: Entity): number;
    // private getFallDamageSound(dmg: number): SoundEvent;
    getFallFlyingTicks(): number;
    getFallSounds(): LivingEntity$Fallsounds;
    getFluidFallingAdjustedMovement(baseGravity: number, isFalling: boolean, movement: Vec3): Vec3;
    getFlyingSpeed(): number;
    // private getFrictionInfluencedSpeed(blockFriction: number): number;
    getHealth(): number;
    getHitbox(): AABB;
    getHurtDir(): number;
    getHurtSound(source: DamageSource): SoundEvent;
    getInterpolation(): InterpolationHandler;
    getItemBlockingWith(): ItemStack;
    getItemBySlot(slot: EquipmentSlot): ItemStack;
    getItemHeldByArm(arm: HumanoidArm): ItemStack;
    getItemInHand(hand: InteractionHand): ItemStack;
    getJumpBoostPower(): number;
    getJumpPower(): number;
    getJumpPower(multiplier: number): number;
    getKillCredit(): LivingEntity;
    getKnockback(target: Entity, damageSource: DamageSource): number;
    getLastAttacker(): LivingEntity;
    getLastClimbablePos(): Optional<BlockPos>;
    getLastDamageSource(): DamageSource;
    getLastHurtByMob(): LivingEntity;
    getLastHurtByMobTimestamp(): number;
    getLastHurtByPlayer(): Player;
    getLastHurtByPlayerMemoryTime(): number;
    getLastHurtMob(): LivingEntity;
    getLastHurtMobTimestamp(): number;
    getLiquidCollisionShape(): VoxelShape;
    getLocalBoundsForPose(pose: Pose): AABB;
    getLootTableSeed(): number;
    getLuck(): number;
    getMainArm(): HumanoidArm;
    getMainHandItem(): ItemStack;
    getMaxAbsorption(): number;
    getMaxFallDistance(): number;
    getMaxHeadRotationRelativeToBody(): number;
    getMaxHealth(): number;
    getNoActionTime(): number;
    getOffhandItem(): ItemStack;
    getPassengerRidingPosition(passenger: Entity): Vec3;
    getPreciseBodyRotation(partial: number): number;
    getProjectile(heldWeapon: ItemStack): ItemStack;
    getRelativePortalPosition(axis: Direction$Axis, portalArea: BlockUtil$FoundRectangle): Vec3;
    getRiddenInput(controller: Player, selfInput: Vec3): Vec3;
    getRiddenSpeed(controller: Player): number;
    getScale(): number;
    getSecondsToDisableBlocking(): number;
    getSleepingPos(): Optional<BlockPos>;
    getSlot(slot: number): SlotAccess;
    getSoundVolume(): number;
    getSpeed(): number;
    getStingerCount(): number;
    getSwimAmount(a: number): number;
    getTicksSinceLastKineticHitFeedback(partial: number): number;
    getTicksUsingItem(): number;
    getTicksUsingItem(partialTicks: number): number;
    getUseItem(): ItemStack;
    getUseItemRemainingTicks(): number;
    getUsedItemHand(): InteractionHand;
    getViewYRot(a: number): number;
    getVisibilityPercent(targetingEntity: Entity): number;
    getVisualRotationYInDegrees(): number;
    getVoicePitch(): number;
    getWaterSlowDown(): number;
    getWeaponItem(): ItemStack;
    getYHeadRot(): number;
    goDownInWater(): void;
    handleDamageEvent(source: DamageSource): void;
    handleEntityEvent(id: number): void;
    // private handleEquipmentChanges(changedItems: JavaMap<EquipmentSlot, ItemStack>): void;
    handleExtraItemsCreatedOnUse(extraCreatedRemainder: ItemStack): void;
    // private handleFallFlyingCollisions(moveHorLength: number, newMoveHorLength: number): void;
    // private handleHandSwap(changedItems: JavaMap<EquipmentSlot, ItemStack>): void;
    handleKillingBlow(): void;
    // private handleOnClimbable(delta: Vec3): Vec3;
    // private handleRelativeFrictionAndCalculateMovement(input: Vec3, friction: number): Vec3;
    hasEffect(effect: Holder<MobEffect>): boolean;
    hasInfiniteMaterials(): boolean;
    hasItemInSlot(slot: EquipmentSlot): boolean;
    hasLandedInLiquid(): boolean;
    hasLineOfSight(target: Entity): boolean;
    hasLineOfSight(target: Entity, blockCollidingContext: ClipContext$Block, fluidCollidingContext: ClipContext$Fluid, eyeHeight: number): boolean;
    heal(heal: number): void;
    hurtArmor(damageSource: DamageSource, damage: number): void;
    hurtHelmet(damageSource: DamageSource, damage: number): void;
    hurtServer(level: ServerLevel, source: DamageSource, damage: number): boolean;
    igniteForTicks(numberOfTicks: number): void;
    increaseAirSupply(currentSupply: number): number;
    indicateDamage(xd: number, zd: number): void;
    internalSetAbsorptionAmount(absorptionAmount: number): void;
    isAffectedByFluids(): boolean;
    isAffectedByPotions(): boolean;
    isAlive(): boolean;
    isAlwaysExperienceDropper(): boolean;
    isAutoSpinAttack(): boolean;
    isBaby(): boolean;
    isBlocking(): boolean;
    // private isClient(): boolean;
    isCurrentlyGlowing(): boolean;
    isDeadOrDying(): boolean;
    isEquippableInSlot(itemStack: ItemStack, slot: EquipmentSlot): boolean;
    isFallFlying(): boolean;
    isHolding(itemPredicate: (param0: ItemStack) => boolean): boolean;
    isHolding(item: Item): boolean;
    isIgnoringFallDamageFromCurrentImpulse(): boolean;
    isImmobile(): boolean;
    isInPostImpulseGraceTime(): boolean;
    isInShallowFluid(fluidTag: TagKey<Fluid>): boolean;
    isInWall(): boolean;
    isInvertedHealAndHarm(): boolean;
    isInvulnerableTo(level: ServerLevel, source: DamageSource): boolean;
    isJumping(): boolean;
    isLookingAtMe(target: LivingEntity, coneSize: number, adjustForDistance: boolean, seeThroughTransparentBlocks: boolean, ...gazeHeights: number[]): boolean;
    isPickable(): boolean;
    isPushable(): boolean;
    isSensitiveToWater(): boolean;
    isSleeping(): boolean;
    isSuppressingSlidingDownLadder(): boolean;
    isTransmittingWaypoint(): boolean;
    isUsingItem(): boolean;
    isVisuallySwimming(): boolean;
    jumpFromGround(): void;
    jumpInLiquid(type: TagKey<Fluid>): void;
    // private jumpOutOfFluid(oldY: number): void;
    kill(level: ServerLevel): void;
    knockback(power: number, xd: number, zd: number, source: DamageSource, damage: number): void;
    knockback(power: number, xd: number, zd: number, source: DamageSource, damage: number, comesFromEffect: boolean): void;
    lerpHeadRotationStep(lerpHeadSteps: number, targetYHeadRot: number): void;
    lerpHeadTo(yRot: number, steps: number): void;
    lithium$OnFeetBlockCacheDeleted(): void;
    lithium$OnFeetBlockCacheSet(arg0: BlockState): void;
    lithium$SetClimbingMobCachingSectionUpdateBehavior(arg0: boolean): void;
    lithium$handleAddedToLevel(arg0: Level): void;
    lithium$handleRemovedFromLevel(arg0: Level): void;
    lookAt(anchor: EntityAnchorArgument$Anchor, pos: Vec3): void;
    makeBrain(packedBrain: Brain$Packed): Brain<LivingEntity>;
    // private makeDrownParticles(): void;
    makePoofParticles(): void;
    makeSound(sound: SoundEvent): void;
    makeWaypointConnectionWith(player: ServerPlayer): Optional<WaypointTransmitter$Connection>;
    maxUpStep(): number;
    onAttack(): void;
    onAttributeUpdated(attribute: Holder<Attribute>): void;
    onBelowWorld(): void;
    onChangedBlock(level: ServerLevel, pos: BlockPos): void;
    onClimbable(): boolean;
    onEffectAdded(effect: MobEffectInstance, source: Entity): void;
    onEffectUpdated(effect: MobEffectInstance, doRefreshAttributes: boolean, source: Entity): void;
    onEffectsRemoved(effects: MobEffectInstance[]): void;
    onEnterCombat(): void;
    onEquipItem(slot: EquipmentSlot, oldStack: ItemStack, stack: ItemStack): void;
    onEquippedItemBroken(brokenItem: Item, inSlot: EquipmentSlot): void;
    onItemPickup(entity: ItemEntity): void;
    // private onKineticHit(): void;
    onLeaveCombat(): void;
    onRemoval(reason: Entity$RemovalReason): void;
    onSyncedDataUpdated(updatedItems: SynchedEntityData$DataValue<Object>[]): void;
    onSyncedDataUpdated(accessor: EntityDataAccessor<Object>): void;
    playAttackSound(): void;
    playBlockFallSound(): void;
    playHurtSound(source: DamageSource): void;
    // private playSecondaryHurtSound(source: DamageSource): void;
    postPiercingAttack(): void;
    push(xa: number, ya: number, za: number): void;
    push(entity: Entity): void;
    push(impulse: Vec3): void;
    pushEntities(): void;
    randomTeleport(xx: number, yy: number, zz: number, showParticles: boolean): boolean;
    readAdditionalSaveData(input: ValueInput): void;
    recreateFromPacket(packet: ClientboundAddEntityPacket): void;
    // private refreshDirtyAttributes(): void;
    releaseUsingItem(): void;
    rememberStabbedEntity(target: Entity): void;
    remove(reason: Entity$RemovalReason): void;
    removeAllEffects(): boolean;
    removeEffect(effect: Holder<MobEffect>): boolean;
    // private removeEffect$mixinextras$wrapped$514(arg0: Holder<Object>): boolean;
    removeEffectNoUpdate(effect: Holder<MobEffect>): MobEffectInstance;
    removeEffectParticles(): void;
    removeFrost(): void;
    resetCurrentImpulseContext(): void;
    resolveMobResponsibleForDamage(source: DamageSource): void;
    resolvePlayerResponsibleForDamage(source: DamageSource): Player;
    rideTick(): void;
    sanitizeScale(scale: number): number;
    // private self(): LivingEntity;
    sendEffectToPassengers(effect: MobEffectInstance): void;
    serverAiStep(): void;
    setAbsorptionAmount(absorptionAmount: number): void;
    setArrowCount(count: number): void;
    setDiscardFriction(discardFriction: boolean): void;
    setHealth(health: number): void;
    setIgnoreFallDamageFromCurrentImpulse(ignoreFallDamage: boolean, newImpulseImpactPos: Vec3): void;
    setItemInHand(hand: InteractionHand, itemStack: ItemStack): void;
    setItemSlot(slot: EquipmentSlot, itemStack: ItemStack): void;
    setJumping(jump: boolean): void;
    setLastHurtByMob(hurtBy: LivingEntity): void;
    setLastHurtByPlayer(player: UUID, timeToRemember: number): void;
    // private setLastHurtByPlayer(player: EntityReference<Player>, timeToRemember: number): void;
    setLastHurtByPlayer(player: Player, timeToRemember: number): void;
    setLastHurtMob(target: Entity): void;
    setLivingEntityFlag(flag: number, value: boolean): void;
    setNoActionTime(noActionTime: number): void;
    // private setPosToBed(bedPosition: BlockPos): void;
    setRecordPlayingNearby(jukebox: BlockPos, isPlaying: boolean): void;
    setSleepingPos(bedPosition: BlockPos): void;
    setSpeed(speed: number): void;
    setSprinting(isSprinting: boolean): void;
    setStingerCount(count: number): void;
    setYBodyRot(yBodyRot: number): void;
    setYHeadRot(yHeadRot: number): void;
    shouldDiscardFriction(): boolean;
    shouldDropExperience(): boolean;
    shouldDropLoot(level: ServerLevel): boolean;
    shouldShowName(): boolean;
    shouldTakeDrowningDamage(): boolean;
    shouldTravelInFluid(fluidState: FluidState): boolean;
    skipDropExperience(): void;
    spawnItemParticles(itemStack: ItemStack, count: number): void;
    stabAttack(weaponSlot: EquipmentSlot, target: Entity, baseDamage: number, dealsDamage: boolean, dealsKnockback: boolean, dismounts: boolean): boolean;
    stabbedEntities(filter: (param0: Entity) => boolean): number;
    startSleeping(bedPosition: BlockPos): void;
    startUsingItem(hand: InteractionHand): void;
    stopFallFlying(): void;
    // private stopLocationBasedEffects(previous: ItemStack, inSlot: EquipmentSlot, attributes: AttributeMap): void;
    stopRiding(): void;
    stopSleeping(): void;
    stopUsingItem(): void;
    // private swapHandItems(): void;
    swing(hand: InteractionHand): void;
    swing(hand: InteractionHand, sendToSwingingEntity: boolean): void;
    take(entity: Entity, orgCount: number): void;
    tick(): void;
    tickDeath(): void;
    tickEffects(): void;
    tickHeadTurn(yBodyRotT: number): void;
    tickRidden(controller: Player, riddenInput: Vec3): void;
    // private trapdoorUsableAsLadder(pos: BlockPos, state: BlockState): boolean;
    travel(input: Vec3): void;
    // private travelFallFlying(input: Vec3): void;
    travelFlying(input: Vec3, speed: number): void;
    travelFlying(input: Vec3, waterSpeed: number, lavaSpeed: number, airSpeed: number): void;
    // private travelInAir(input: Vec3): void;
    travelInFluid(input: Vec3): void;
    // private travelInLava(input: Vec3, baseGravity: number, isFalling: boolean, oldY: number): void;
    travelInWater(input: Vec3, baseGravity: number, isFalling: boolean, oldY: number): void;
    // private travelRidden(controller: Player, selfInput: Vec3): void;
    triggerOnDeathMobEffects(level: ServerLevel, reason: Entity$RemovalReason): void;
    tryAddFrost(): void;
    tryResetCurrentImpulseContext(): void;
    // private updateClimbingMobCachingSection(arg0: BlockState): void;
    updateDataBeforeSync(): void;
    // private updateDirtyEffects(): void;
    updateEffectVisibility(): void;
    updateFallFlying(): void;
    // private updateFallFlyingMovement(movement: Vec3): Vec3;
    // private updateGlowingStatus(): void;
    updateInvisibilityStatus(): void;
    // private updateSwimAmount(): void;
    updateSwingTime(): void;
    // private updateSynchronizedMobEffectParticles(): void;
    updateUsingItem(useItem: ItemStack): void;
    updateWalkAnimation(distance: number): void;
    updatingUsingItem(): void;
    wasExperienceConsumed(): boolean;
    wasRecentlyStabbed(target: Entity, allowedTime: number): boolean;
    waypointIcon(): Waypoint$Icon;
    wouldNotSuffocateAtTargetPose(pose: Pose): boolean;
}