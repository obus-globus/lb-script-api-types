import type { Optional } from '../../../../../../java/util/Optional.d.ts'
import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { Predicate } from '../../../../../../java/util/function/Predicate.d.ts'
import type { Supplier } from '../../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { DataComponentGetter } from '../../../../../../net/minecraft/core/component/DataComponentGetter.d.ts'
import type { DataComponentType } from '../../../../../../net/minecraft/core/component/DataComponentType.d.ts'
import type { ParticleOptions } from '../../../../../../net/minecraft/core/particles/ParticleOptions.d.ts'
import type { CompoundTag } from '../../../../../../net/minecraft/nbt/CompoundTag.d.ts'
import type { EntityDataAccessor } from '../../../../../../net/minecraft/network/syncher/EntityDataAccessor.d.ts'
import type { SynchedEntityData$Builder } from '../../../../../../net/minecraft/network/syncher/SynchedEntityData$Builder.d.ts'
import type { SynchedEntityData$DataValue } from '../../../../../../net/minecraft/network/syncher/SynchedEntityData$DataValue.d.ts'
import type { ServerLevel } from '../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { SoundEvent } from '../../../../../../net/minecraft/sounds/SoundEvent.d.ts'
import type { SoundSource } from '../../../../../../net/minecraft/sounds/SoundSource.d.ts'
import type { RandomSource } from '../../../../../../net/minecraft/util/RandomSource.d.ts'
import type { DifficultyInstance } from '../../../../../../net/minecraft/world/DifficultyInstance.d.ts'
import type { InteractionHand } from '../../../../../../net/minecraft/world/InteractionHand.d.ts'
import type { InteractionResult } from '../../../../../../net/minecraft/world/InteractionResult.d.ts'
import type { DamageSource } from '../../../../../../net/minecraft/world/damagesource/DamageSource.d.ts'
import type { MobEffectInstance } from '../../../../../../net/minecraft/world/effect/MobEffectInstance.d.ts'
import type { AgeableMob } from '../../../../../../net/minecraft/world/entity/AgeableMob.d.ts'
import type { Bucketable } from '../../../../../../net/minecraft/world/entity/Bucketable.d.ts'
import type { Entity } from '../../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { EntitySpawnReason } from '../../../../../../net/minecraft/world/entity/EntitySpawnReason.d.ts'
import type { EntityType } from '../../../../../../net/minecraft/world/entity/EntityType.d.ts'
import type { EquipmentSlot } from '../../../../../../net/minecraft/world/entity/EquipmentSlot.d.ts'
import type { LivingEntity } from '../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { Mob } from '../../../../../../net/minecraft/world/entity/Mob.d.ts'
import type { Shearable } from '../../../../../../net/minecraft/world/entity/Shearable.d.ts'
import type { SulfurCubeArchetype } from '../../../../../../net/minecraft/world/entity/SulfurCubeArchetype.d.ts'
import type { SulfurCubeArchetype$ContactDamage } from '../../../../../../net/minecraft/world/entity/SulfurCubeArchetype$ContactDamage.d.ts'
import type { SulfurCubeArchetype$ExplosionData } from '../../../../../../net/minecraft/world/entity/SulfurCubeArchetype$ExplosionData.d.ts'
import type { SulfurCubeArchetype$KnockbackModifiers } from '../../../../../../net/minecraft/world/entity/SulfurCubeArchetype$KnockbackModifiers.d.ts'
import type { SulfurCubeArchetype$SoundSettings } from '../../../../../../net/minecraft/world/entity/SulfurCubeArchetype$SoundSettings.d.ts'
import type { AttributeModifier } from '../../../../../../net/minecraft/world/entity/ai/attributes/AttributeModifier.d.ts'
import type { AttributeSupplier$Builder } from '../../../../../../net/minecraft/world/entity/ai/attributes/AttributeSupplier$Builder.d.ts'
import type { ItemEntity } from '../../../../../../net/minecraft/world/entity/item/ItemEntity.d.ts'
import type { AbstractCubeMob } from '../../../../../../net/minecraft/world/entity/monster/cubemob/AbstractCubeMob.d.ts'
import type { Player } from '../../../../../../net/minecraft/world/entity/player/Player.d.ts'
import type { Item } from '../../../../../../net/minecraft/world/item/Item.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { SulfurCubeContent } from '../../../../../../net/minecraft/world/item/component/SulfurCubeContent.d.ts'
import type { Level } from '../../../../../../net/minecraft/world/level/Level.d.ts'
import type { LevelAccessor } from '../../../../../../net/minecraft/world/level/LevelAccessor.d.ts'
import type { ServerLevelAccessor } from '../../../../../../net/minecraft/world/level/ServerLevelAccessor.d.ts'
import type { BlockState } from '../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { ValueInput } from '../../../../../../net/minecraft/world/level/storage/ValueInput.d.ts'
import type { ValueOutput } from '../../../../../../net/minecraft/world/level/storage/ValueOutput.d.ts'
import type { AABB } from '../../../../../../net/minecraft/world/phys/AABB.d.ts'
import type { Vec2 } from '../../../../../../net/minecraft/world/phys/Vec2.d.ts'
import type { Vec3 } from '../../../../../../net/minecraft/world/phys/Vec3.d.ts'
import type { CollisionContext } from '../../../../../../net/minecraft/world/phys/shapes/CollisionContext.d.ts'
import type { VoxelShape } from '../../../../../../net/minecraft/world/phys/shapes/VoxelShape.d.ts'
import type { ScoreHolder } from '../../../../../../net/minecraft/world/scores/ScoreHolder.d.ts'
export class SulfurCube extends AbstractCubeMob implements Bucketable, Shearable {
    static AGE_LOCK_COOLDOWN_TICKS: number;
    static AGE_LOCK_DOWNWARDS_MOVING_PARTICLE_Y_OFFSET: number;
    static ARMOR_SLOT_OFFSET: number;
    static AXIS_SPECIFIC_ELASTICITY: Vec3;
    static BABY_START_AGE: number;
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
    static ENTITY_ATTACHMENT_POINT: Vec3[];
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
    static LEASHER_ATTACHMENT_POINT: Vec3[];
    static LEASH_ELASTIC_DIST: number;
    static LEASH_TAG: string;
    static LEASH_TOO_FAR_DIST: number;
    static MAXIMUM_ALLOWED_LEASHED_DIST: number;
    static MAX_ENCHANTED_ARMOR_CHANCE: number;
    static MAX_ENCHANTED_WEAPON_CHANCE: number;
    static MAX_ENTITY_TAG_COUNT: number;
    static MAX_MOVEMENTS_HANDELED_PER_TICK: number;
    static MAX_NAME_TAG_DISTANCE: number;
    static MAX_NATURAL_SIZE: number;
    static MAX_PICKUP_LOOT_CHANCE: number;
    static MAX_SIZE: number;
    static MAX_SIZE: number;
    static MAX_WEARING_ARMOR_CHANCE: number;
    static MIN_MOVEMENT_DISTANCE: number;
    static MIN_SIZE: number;
    static MIN_SIZE: number;
    static NBT_ATTACHMENT_KEY: string;
    static PICKUP_TIMER_DURATION: number;
    static PLAYER_HURT_EXPERIENCE_TIME: number;
    static PLAYER_NOT_WEARING_DISGUISE_ITEM: (param0: LivingEntity) => boolean;
    static PUSH_DISTANCE_THRESHOLD: number;
    static REALLY_FAR_DISTANCE: number;
    static SADDLE_OFFSET: number;
    static SHARED_QUAD_ATTACHMENT_POINTS: Vec3[];
    static SPLIT_COUNT: number;
    static SPRING_DAMPENING: number;
    static SPRINTING_WATER_DRAG: number;
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
    static TAG_HURT_TIME: string;
    static TAG_ID: string;
    static TAG_INVULNERABLE: string;
    static TAG_LEFT_HANDED: string;
    static TAG_MOTION: string;
    static TAG_NO_AI: string;
    static TAG_NO_GRAVITY: string;
    static TAG_ON_GROUND: string;
    static TAG_PASSENGERS: string;
    static TAG_PERSISTENCE_REQUIRED: string;
    static TAG_PORTAL_COOLDOWN: string;
    static TAG_POS: string;
    static TAG_ROTATION: string;
    static TAG_SILENT: string;
    static TAG_SLEEPING_POS: string;
    static TAG_UUID: string;
    static TORSIONAL_ELASTICITY: number;
    static TOTAL_AIR_SUPPLY: number;
    static UPDATE_GOAL_SELECTOR_EVERY_N_TICKS: number;
    static WATER_DRAG: number;
    static WAYPOINT_TRANSMIT_RANGE_HIDE_MODIFIER: AttributeModifier;
    static WEARING_ARMOR_UPGRADE_MATERIAL_ATTEMPTS: number;
    static WEARING_ARMOR_UPGRADE_MATERIAL_CHANCE: number;
    static WILDCARD: ScoreHolder;
    static WILDCARD_NAME: string;
    static areAllEffectsAmbient(parameffects: MobEffectInstance[]): boolean;
    static bucketMobPickup(paramplayer: Player, paramhand: InteractionHand, parampickupEntity: LivingEntity | null): Optional<InteractionResult>;
    static canGlideUsing(paramitemStack: ItemStack, paramslot: EquipmentSlot): boolean;
    static canUseGoldenDandelion(paramitemInHand: ItemStack, paramisBaby: boolean, paramcooldown: number, parammob: Mob): boolean;
    static checkMobSpawnRules(paramtype: EntityType<Mob>, paramlevel: LevelAccessor, paramspawnReason: EntitySpawnReason, parampos: BlockPos, paramrandom: RandomSource): boolean;
    static checkSulfurCubeSpawnRules(paramtype: EntityType<SulfurCube>, paramlevel: LevelAccessor, paramspawnReason: EntitySpawnReason, parampos: BlockPos, paramrandom: RandomSource): boolean;
    static collectAllColliders(paramsource: Entity, paramlevel: Level, paramboundingBox: AABB): VoxelShape[];
    static collideBoundingBox(paramarg0: Entity, paramarg1: Vec3, paramarg2: AABB, paramarg3: Level, paramarg4: (Object | null)[]): Vec3;
    static collideBoundingBox(paramsource: CollisionContext, parammovement: Vec3, paramboundingBox: AABB, paramlevel: Level, paramentityColliders: VoxelShape[]): Vec3;
    static createLivingAttributes(): AttributeSupplier$Builder;
    static createMobAttributes(): AttributeSupplier$Builder;
    static createSulfurCubeAttributes(): AttributeSupplier$Builder;
    static getEquipmentForSlot(paramslot: EquipmentSlot, paramtype: number): Item;
    static getInputVector(paraminput: Vec3, paramspeed: number, paramyRot: number): Vec3;
    static getSpeedUpSecondsWhenFeeding(paramticksUntilAdult: number): number;
    static getViewScale(): number;
    static loadDefaultDataFromBucketTag(paramentity: Mob, paramtag: CompoundTag): void;
    static makeAgeLockedParticle(paramlevel: Level, parammob: Mob, paramageLockParticleTimer: number, paramisAgeLocked: boolean): number;
    static resetForwardDirectionOfRelativePortalPosition(paramoffsets: Vec3): Vec3;
    static saveDefaultDataToBucketTag(paramentity: Mob, parambucket: ItemStack): void;
    static setAgeLocked(parammob: Mob, paramisAgedLocked: () => boolean, paramplayer: Player, paramitemInHand: ItemStack, paramsetAgeLockData: (param0: Mob) => void): void;
    static setViewScale(paramviewScale: number): void;
    constructor(type: EntityType<SulfurCube>, level: Level)
    // private contactDamages: SulfurCubeArchetype$ContactDamage[];
    // private explosionData: Optional<SulfurCubeArchetype$ExplosionData>;
    // private floatsInLiquids: boolean;
    readonly fuse: number;
    // private knockbackModifier: SulfurCubeArchetype$KnockbackModifiers;
    // private pickupTimer: number;
    // private pushSoundCooldown: number;
    // private soundSettings: SulfurCubeArchetype$SoundSettings;
    addAdditionalSaveData(output: ValueOutput): void;
    addBehaviourGoals(): void;
    addTargetingGoals(): void;
    ageBoundaryReached(): void;
    // private applyContactDamage(entity: Entity): void;
    // private applyHorizontalHitAngleScale(horizontalAngleScale: number, originalAngle: Vec2, attackerPosition: Vec3, attackerAimDirection: Vec3, targetCenter: Vec3): Vec2;
    applyImplicitComponent<T extends unknown>(type: DataComponentType<T>, value: T): boolean;
    applyImplicitComponents(components: DataComponentGetter): void;
    // private applyVerticalHitAnglePowerTransfer(verticalHitAngleScale: number, horizontalPower: number, verticalPower: number, attackerPosition: Vec3, attackerAimDirection: Vec3, targetCenteredPosition: Vec3, targetHeight: number): Vec2;
    // private applyVerticalPositionAnglePowerRotation(verticalPositionAngleScale: number, horizontalPower: number, verticalPower: number, originalHorizontalPower: number, originalVerticalPower: number, attackerFeetPosition: Vec3, targetFeetPosition: Vec3): Vec2;
    canBeLeashed(): boolean;
    canBePickedFromInside(): boolean;
    canBePickedUpWithBucket(itemStack: ItemStack): boolean;
    canBreatheUnderwater(): boolean;
    canDispenserEquipIntoSlot(slot: EquipmentSlot): boolean;
    canExplode(): boolean;
    canFreeze(): boolean;
    canHoldItem(itemStack: ItemStack): boolean;
    canPickUpLoot(): boolean;
    canUseSlot(slot: EquipmentSlot): boolean;
    collectEquipmentChanges(lastEquipmentItems: Map<EquipmentSlot, ItemStack>): Map<EquipmentSlot, ItemStack>;
    customServerAiStep(level: ServerLevel): void;
    defineSynchedData(entityData: SynchedEntityData$Builder): void;
    doPush(entity: Entity): void;
    equipItem(heldItem: ItemStack): boolean;
    fromBucket(): boolean;
    get<T extends unknown>(type: DataComponentType<T>): T;
    // private getAbsorbSound(): SoundEvent;
    getBaseExperienceReward(level: ServerLevel): number;
    getBreedOffspring(level: ServerLevel, partner: AgeableMob): AbstractCubeMob;
    getBucketItemStack(): ItemStack;
    getDeathSound(): SoundEvent;
    // private getEjectSound(): SoundEvent;
    getEquipmentSlotForItem(itemStack: ItemStack): EquipmentSlot;
    getFluidJumpThreshold(): number;
    getFuse(): number;
    getHurtSound(source: DamageSource): SoundEvent;
    getJumpSound(): SoundEvent;
    getLeashOffset(): Vec3;
    getLeashOffset(partialTicks: number): Vec3;
    getLightLevelDependentMagicValue(): number;
    getParticleType(): ParticleOptions;
    getPickupSound(): SoundEvent;
    getSoundSource(): SoundSource;
    getSplitCount(): number;
    getSquishSound(): SoundEvent;
    hasBodyItem(): boolean;
    hurtServer(level: ServerLevel, source: DamageSource, damage: number): boolean;
    isDealsDamage(): boolean;
    isEquippableInSlot(itemStack: ItemStack, slot: EquipmentSlot): boolean;
    // private isFood(itemStack: ItemStack): boolean;
    isInvulnerableToPiercingWeapon(): boolean;
    isPrimed(): boolean;
    knockback(power: number, xd: number, zd: number, source: DamageSource, damage: number): void;
    knockback(power: number, xd: number, zd: number, source: DamageSource, damage: number, comesFromEffect: boolean): void;
    loadFromBucketTag(tag: CompoundTag): void;
    matchingArchetypes(stack: ItemStack): SulfurCubeArchetype[];
    maxUpStep(): number;
    mobInteract(player: Player, hand: InteractionHand): InteractionResult;
    omnidirectionalAirMover(): boolean;
    onSyncedDataUpdated(updatedItems: SynchedEntityData$DataValue<Object>[]): void;
    onSyncedDataUpdated(accessor: EntityDataAccessor<Object>): void;
    pickUpItem(level: ServerLevel, entity: ItemEntity): void;
    playEatingSound(): void;
    playStepSound(pos: BlockPos, blockState: BlockState): void;
    // private playerPush(player: Player): void;
    playerTouch(player: Player): void;
    primeTime(imminent: boolean): boolean;
    // private primeWhenOnPoweredPosition(): void;
    readAdditionalSaveData(input: ValueInput): void;
    readyForShearing(): boolean;
    requiresCustomPersistence(): boolean;
    saveToBucketTag(bucket: ItemStack): void;
    setFromBucket(fromBucket: boolean): void;
    // private setFuse(fuse: number): void;
    setSize(size: number, updateHealth: boolean): void;
    setSpawnSize(level: ServerLevelAccessor, difficulty: DifficultyInstance): void;
    // private setSulfurCubeContent(sulfurCubeContent: SulfurCubeContent): void;
    setUpSplitCube(cubeMob: AbstractCubeMob, halfSize: number, xd: number, zd: number): void;
    setcubeMobHealth(actualSize: number): void;
    shear(level: ServerLevel, soundSource: SoundSource, tool: ItemStack): void;
    tick(): void;
    // private tickFuse(): void;
    travelInFluid(input: Vec3): void;
}