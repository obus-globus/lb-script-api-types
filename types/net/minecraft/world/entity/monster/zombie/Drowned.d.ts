import type { Predicate } from '../../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { ServerLevel } from '../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { SoundEvent } from '../../../../../../net/minecraft/sounds/SoundEvent.d.ts'
import type { TagKey } from '../../../../../../net/minecraft/tags/TagKey.d.ts'
import type { RandomSource } from '../../../../../../net/minecraft/util/RandomSource.d.ts'
import type { DifficultyInstance } from '../../../../../../net/minecraft/world/DifficultyInstance.d.ts'
import type { DamageSource } from '../../../../../../net/minecraft/world/damagesource/DamageSource.d.ts'
import type { Entity } from '../../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { EntityDimensions } from '../../../../../../net/minecraft/world/entity/EntityDimensions.d.ts'
import type { EntitySpawnReason } from '../../../../../../net/minecraft/world/entity/EntitySpawnReason.d.ts'
import type { EntityType } from '../../../../../../net/minecraft/world/entity/EntityType.d.ts'
import type { EquipmentSlot } from '../../../../../../net/minecraft/world/entity/EquipmentSlot.d.ts'
import type { LivingEntity } from '../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { Pose } from '../../../../../../net/minecraft/world/entity/Pose.d.ts'
import type { SpawnGroupData } from '../../../../../../net/minecraft/world/entity/SpawnGroupData.d.ts'
import type { AttributeModifier } from '../../../../../../net/minecraft/world/entity/ai/attributes/AttributeModifier.d.ts'
import type { AttributeSupplier$Builder } from '../../../../../../net/minecraft/world/entity/ai/attributes/AttributeSupplier$Builder.d.ts'
import type { PathNavigation } from '../../../../../../net/minecraft/world/entity/ai/navigation/PathNavigation.d.ts'
import type { RangedAttackMob } from '../../../../../../net/minecraft/world/entity/monster/RangedAttackMob.d.ts'
import type { Zombie } from '../../../../../../net/minecraft/world/entity/monster/zombie/Zombie.d.ts'
import type { Item } from '../../../../../../net/minecraft/world/item/Item.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { Level } from '../../../../../../net/minecraft/world/level/Level.d.ts'
import type { LevelAccessor } from '../../../../../../net/minecraft/world/level/LevelAccessor.d.ts'
import type { LevelReader } from '../../../../../../net/minecraft/world/level/LevelReader.d.ts'
import type { ServerLevelAccessor } from '../../../../../../net/minecraft/world/level/ServerLevelAccessor.d.ts'
import type { AABB } from '../../../../../../net/minecraft/world/phys/AABB.d.ts'
import type { Vec3 } from '../../../../../../net/minecraft/world/phys/Vec3.d.ts'
import type { VoxelShape } from '../../../../../../net/minecraft/world/phys/shapes/VoxelShape.d.ts'
import type { ScoreHolder } from '../../../../../../net/minecraft/world/scores/ScoreHolder.d.ts'
export class Drowned extends Zombie implements RangedAttackMob {
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
    static NAUTILUS_SHELL_CHANCE: number;
    static NBT_ATTACHMENT_KEY: string;
    static PLAYER_HURT_EXPERIENCE_TIME: number;
    static PLAYER_NOT_WEARING_DISGUISE_ITEM: (param0: LivingEntity) => kotlin.Boolean;
    static REALLY_FAR_DISTANCE: number;
    static REINFORCEMENT_ATTEMPTS: number;
    static REINFORCEMENT_RANGE_MAX: number;
    static REINFORCEMENT_RANGE_MIN: number;
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
    static XP_REWARD_BOSS: number;
    static XP_REWARD_HUGE: number;
    static XP_REWARD_LARGE: number;
    static XP_REWARD_MEDIUM: number;
    static XP_REWARD_NONE: number;
    static XP_REWARD_SMALL: number;
    static ZOMBIE_LEADER_CHANCE: number;
    static areAllEffectsAmbient(parameffects: E[]): boolean;
    static canGlideUsing(paramitemStack: ItemStack, paramslot: EquipmentSlot): boolean;
    static checkAnyLightMonsterSpawnRules(paramtype: EntityType<Object>, paramlevel: LevelAccessor, paramspawnReason: EntitySpawnReason, parampos: BlockPos, paramrandom: RandomSource): boolean;
    static checkDrownedSpawnRules(paramtype: EntityType<Drowned>, paramlevel: ServerLevelAccessor, paramspawnReason: EntitySpawnReason, parampos: BlockPos, paramrandom: RandomSource): boolean;
    static checkMobSpawnRules(paramtype: EntityType<Object>, paramlevel: LevelAccessor, paramspawnReason: EntitySpawnReason, parampos: BlockPos, paramrandom: RandomSource): boolean;
    static checkMonsterSpawnRules(paramtype: EntityType<Object>, paramlevel: ServerLevelAccessor, paramspawnReason: EntitySpawnReason, parampos: BlockPos, paramrandom: RandomSource): boolean;
    static checkSurfaceMonstersSpawnRules(paramtype: EntityType<Object>, paramlevel: ServerLevelAccessor, paramspawnReason: EntitySpawnReason, parampos: BlockPos, paramrandom: RandomSource): boolean;
    static collectAllColliders(paramsource: Entity, paramlevel: Level, paramboundingBox: AABB): VoxelShape[];
    static collideBoundingBox(paramarg0: Entity, paramarg1: Vec3, paramarg2: AABB, paramarg3: Level, paramarg4: (Object | null)[]): Vec3;
    static createAttributes(): AttributeSupplier$Builder;
    static createLivingAttributes(): AttributeSupplier$Builder;
    static createMobAttributes(): AttributeSupplier$Builder;
    static createMonsterAttributes(): AttributeSupplier$Builder;
    static getEquipmentForSlot(paramslot: EquipmentSlot, paramtype: number): Item;
    static getInputVector(paraminput: Vec3, paramspeed: number, paramyRot: number): Vec3;
    static getSpawnAsBabyOdds(paramrandom: RandomSource): boolean;
    static getViewScale(): number;
    static isDarkEnoughToSpawn(paramlevel: ServerLevelAccessor, parampos: BlockPos, paramrandom: RandomSource): boolean;
    static resetForwardDirectionOfRelativePortalPosition(paramoffsets: Vec3): Vec3;
    static setViewScale(paramviewScale: number): void;
    constructor(type: EntityType<Drowned>, level: Level)
    readonly searchingForLand: boolean;
    addBehaviourGoals(): void;
    canReplaceCurrentItem(newItemStack: ItemStack, currentItemStack: ItemStack, slot: EquipmentSlot): boolean;
    canSpawnInLiquids(): boolean;
    checkSpawnObstruction(level: LevelReader): boolean;
    closeToNextPos(): boolean;
    convertsInWater(): boolean;
    createNavigation(level: Level): PathNavigation;
    finalizeSpawn(level: ServerLevelAccessor, difficulty: DifficultyInstance, spawnReason: EntitySpawnReason, groupData: SpawnGroupData): SpawnGroupData;
    getAmbientSound(): SoundEvent;
    getDeathSound(): SoundEvent;
    getDefaultDimensions(pose: Pose): EntityDimensions;
    getHurtSound(source: DamageSource): SoundEvent;
    getPreferredWeaponType(): TagKey<Item>;
    getStepSound(): SoundEvent;
    getSwimSound(): SoundEvent;
    isPushedByFluid(): boolean;
    isVisuallySwimming(): boolean;
    okTarget(target: LivingEntity): boolean;
    performRangedAttack(target: LivingEntity, power: number): void;
    populateDefaultEquipmentSlots(random: RandomSource, difficulty: DifficultyInstance): void;
    rideTick(): void;
    setSearchingForLand(searchingForLand: boolean): void;
    travelInWater(input: Vec3, baseGravity: number, isFalling: boolean, oldY: number): void;
    updateSwimming(): void;
    wantsToPickUp(level: ServerLevel, itemStack: ItemStack): boolean;
    // private wantsToSwim(): boolean;
}