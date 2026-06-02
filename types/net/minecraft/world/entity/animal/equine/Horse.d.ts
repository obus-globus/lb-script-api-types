import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { Predicate } from '../../../../../../java/util/function/Predicate.d.ts'
import type { Supplier } from '../../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { DataComponentGetter } from '../../../../../../net/minecraft/core/component/DataComponentGetter.d.ts'
import type { DataComponentType } from '../../../../../../net/minecraft/core/component/DataComponentType.d.ts'
import type { SynchedEntityData$Builder } from '../../../../../../net/minecraft/network/syncher/SynchedEntityData$Builder.d.ts'
import type { ServerLevel } from '../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { SoundEvent } from '../../../../../../net/minecraft/sounds/SoundEvent.d.ts'
import type { RandomSource } from '../../../../../../net/minecraft/util/RandomSource.d.ts'
import type { DifficultyInstance } from '../../../../../../net/minecraft/world/DifficultyInstance.d.ts'
import type { InteractionHand } from '../../../../../../net/minecraft/world/InteractionHand.d.ts'
import type { InteractionResult } from '../../../../../../net/minecraft/world/InteractionResult.d.ts'
import type { DamageSource } from '../../../../../../net/minecraft/world/damagesource/DamageSource.d.ts'
import type { AgeableMob } from '../../../../../../net/minecraft/world/entity/AgeableMob.d.ts'
import type { Entity } from '../../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { EntityDimensions } from '../../../../../../net/minecraft/world/entity/EntityDimensions.d.ts'
import type { EntitySpawnReason } from '../../../../../../net/minecraft/world/entity/EntitySpawnReason.d.ts'
import type { EntityType } from '../../../../../../net/minecraft/world/entity/EntityType.d.ts'
import type { EquipmentSlot } from '../../../../../../net/minecraft/world/entity/EquipmentSlot.d.ts'
import type { LivingEntity } from '../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { Mob } from '../../../../../../net/minecraft/world/entity/Mob.d.ts'
import type { Pose } from '../../../../../../net/minecraft/world/entity/Pose.d.ts'
import type { SpawnGroupData } from '../../../../../../net/minecraft/world/entity/SpawnGroupData.d.ts'
import type { AttributeModifier } from '../../../../../../net/minecraft/world/entity/ai/attributes/AttributeModifier.d.ts'
import type { AttributeSupplier$Builder } from '../../../../../../net/minecraft/world/entity/ai/attributes/AttributeSupplier$Builder.d.ts'
import type { Animal } from '../../../../../../net/minecraft/world/entity/animal/Animal.d.ts'
import type { AbstractHorse } from '../../../../../../net/minecraft/world/entity/animal/equine/AbstractHorse.d.ts'
import type { Markings } from '../../../../../../net/minecraft/world/entity/animal/equine/Markings.d.ts'
import type { Variant } from '../../../../../../net/minecraft/world/entity/animal/equine/Variant.d.ts'
import type { Player } from '../../../../../../net/minecraft/world/entity/player/Player.d.ts'
import type { Item } from '../../../../../../net/minecraft/world/item/Item.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { Level } from '../../../../../../net/minecraft/world/level/Level.d.ts'
import type { LevelAccessor } from '../../../../../../net/minecraft/world/level/LevelAccessor.d.ts'
import type { ServerLevelAccessor } from '../../../../../../net/minecraft/world/level/ServerLevelAccessor.d.ts'
import type { SoundType } from '../../../../../../net/minecraft/world/level/block/SoundType.d.ts'
import type { ValueInput } from '../../../../../../net/minecraft/world/level/storage/ValueInput.d.ts'
import type { ValueOutput } from '../../../../../../net/minecraft/world/level/storage/ValueOutput.d.ts'
import type { AABB } from '../../../../../../net/minecraft/world/phys/AABB.d.ts'
import type { Vec3 } from '../../../../../../net/minecraft/world/phys/Vec3.d.ts'
import type { VoxelShape } from '../../../../../../net/minecraft/world/phys/shapes/VoxelShape.d.ts'
import type { ScoreHolder } from '../../../../../../net/minecraft/world/scores/ScoreHolder.d.ts'
export class Horse extends AbstractHorse {
    static AGE_LOCK_COOLDOWN_TICKS: number;
    static AGE_LOCK_DOWNWARDS_MOVING_PARTICLE_Y_OFFSET: number;
    static ARMOR_SLOT_OFFSET: number;
    static AXIS_SPECIFIC_ELASTICITY: Vec3;
    static BABY_START_AGE: number;
    static BASE_JUMP_POWER: number;
    static BASE_SAFE_FALL_DISTANCE: number;
    static BASE_TICKS_REQUIRED_TO_FREEZE: number;
    static BOARDING_COOLDOWN: number;
    static BODY_ARMOR_OFFSET: number;
    static BREEDING_CROSS_FACTOR: number;
    static CHEST_SLOT_OFFSET: number;
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
    static INVENTORY_ROWS: number;
    static INVENTORY_SLOT_OFFSET: number;
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
    static PLAYER_NOT_WEARING_DISGUISE_ITEM: (param0: LivingEntity) => kotlin.Boolean;
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
    static areAllEffectsAmbient(parameffects: E[]): boolean;
    static canGlideUsing(paramitemStack: ItemStack, paramslot: EquipmentSlot): boolean;
    static canUseGoldenDandelion(paramitemInHand: ItemStack, paramisBaby: boolean, paramcooldown: number, parammob: Mob): boolean;
    static checkAnimalSpawnRules(paramtype: EntityType<Object>, paramlevel: LevelAccessor, paramspawnReason: EntitySpawnReason, parampos: BlockPos, paramrandom: RandomSource): boolean;
    static checkMobSpawnRules(paramtype: EntityType<Object>, paramlevel: LevelAccessor, paramspawnReason: EntitySpawnReason, parampos: BlockPos, paramrandom: RandomSource): boolean;
    static collectAllColliders(paramsource: Entity, paramlevel: Level, paramboundingBox: AABB): VoxelShape[];
    static collideBoundingBox(paramarg0: Entity, paramarg1: Vec3, paramarg2: AABB, paramarg3: Level, paramarg4: (Object | null)[]): Vec3;
    static createAnimalAttributes(): AttributeSupplier$Builder;
    static createBaseHorseAttributes(): AttributeSupplier$Builder;
    static createLivingAttributes(): AttributeSupplier$Builder;
    static createMobAttributes(): AttributeSupplier$Builder;
    static getEquipmentForSlot(paramslot: EquipmentSlot, paramtype: number): Item;
    static getInputVector(paraminput: Vec3, paramspeed: number, paramyRot: number): Vec3;
    static getSpeedUpSecondsWhenFeeding(paramticksUntilAdult: number): number;
    static getViewScale(): number;
    static makeAgeLockedParticle(paramlevel: Level, parammob: Mob, paramageLockParticleTimer: number, paramisAgeLocked: boolean): number;
    static resetForwardDirectionOfRelativePortalPosition(paramoffsets: Vec3): Vec3;
    static setAgeLocked(parammob: Mob, paramisAgedLocked: () => boolean, paramplayer: Player, paramitemInHand: ItemStack, paramsetAgeLockData: (param0: Mob) => void): void;
    static setViewScale(paramviewScale: number): void;
    constructor(type: EntityType<Horse>, level: Level)
    addAdditionalSaveData(output: ValueOutput): void;
    applyImplicitComponent<T extends Object | number | string | boolean>(type: DataComponentType<T>, value: T): boolean;
    applyImplicitComponents(components: DataComponentGetter): void;
    canMate(partner: Animal): boolean;
    canUseSlot(slot: EquipmentSlot): boolean;
    defineSynchedData(entityData: SynchedEntityData$Builder): void;
    finalizeSpawn(level: ServerLevelAccessor, difficulty: DifficultyInstance, spawnReason: EntitySpawnReason, groupData: SpawnGroupData): SpawnGroupData;
    get<T extends Object | number | string | boolean>(type: DataComponentType<T>): T;
    getAmbientSound(): SoundEvent;
    getAngrySound(): SoundEvent;
    getBreedOffspring(level: ServerLevel, partner: AgeableMob): AgeableMob;
    getDeathSound(): SoundEvent;
    getDefaultDimensions(pose: Pose): EntityDimensions;
    getEatingSound(): SoundEvent;
    getHurtSound(source: DamageSource): SoundEvent;
    getMarkings(): Markings;
    // private getTypeVariant(): number;
    getVariant(): Variant;
    hurtArmor(damageSource: DamageSource, damage: number): void;
    mobInteract(player: Player, hand: InteractionHand): InteractionResult;
    playGallopSound(soundType: SoundType): void;
    randomizeAttributes(random: RandomSource): void;
    readAdditionalSaveData(input: ValueInput): void;
    // private setTypeVariant(i: number): void;
    // private setVariant(variant: Variant): void;
    // private setVariantAndMarkings(variant: Variant, markings: Markings): void;
}