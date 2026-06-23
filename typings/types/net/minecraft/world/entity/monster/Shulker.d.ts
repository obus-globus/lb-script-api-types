import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Predicate } from '../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Direction } from '../../../../../net/minecraft/core/Direction.d.ts'
import type { DataComponentGetter } from '../../../../../net/minecraft/core/component/DataComponentGetter.d.ts'
import type { DataComponentType } from '../../../../../net/minecraft/core/component/DataComponentType.d.ts'
import type { ClientboundAddEntityPacket } from '../../../../../net/minecraft/network/protocol/game/ClientboundAddEntityPacket.d.ts'
import type { EntityDataAccessor } from '../../../../../net/minecraft/network/syncher/EntityDataAccessor.d.ts'
import type { SynchedEntityData$Builder } from '../../../../../net/minecraft/network/syncher/SynchedEntityData$Builder.d.ts'
import type { SynchedEntityData$DataValue } from '../../../../../net/minecraft/network/syncher/SynchedEntityData$DataValue.d.ts'
import type { ServerLevel } from '../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { SoundEvent } from '../../../../../net/minecraft/sounds/SoundEvent.d.ts'
import type { SoundSource } from '../../../../../net/minecraft/sounds/SoundSource.d.ts'
import type { RandomSource } from '../../../../../net/minecraft/util/RandomSource.d.ts'
import type { DifficultyInstance } from '../../../../../net/minecraft/world/DifficultyInstance.d.ts'
import type { DamageSource } from '../../../../../net/minecraft/world/damagesource/DamageSource.d.ts'
import type { MobEffectInstance } from '../../../../../net/minecraft/world/effect/MobEffectInstance.d.ts'
import type { Entity } from '../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { Entity$MovementEmission } from '../../../../../net/minecraft/world/entity/Entity$MovementEmission.d.ts'
import type { EntitySpawnReason } from '../../../../../net/minecraft/world/entity/EntitySpawnReason.d.ts'
import type { EntityType } from '../../../../../net/minecraft/world/entity/EntityType.d.ts'
import type { EquipmentSlot } from '../../../../../net/minecraft/world/entity/EquipmentSlot.d.ts'
import type { InterpolationHandler } from '../../../../../net/minecraft/world/entity/InterpolationHandler.d.ts'
import type { LivingEntity } from '../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { Mob } from '../../../../../net/minecraft/world/entity/Mob.d.ts'
import type { MoverType } from '../../../../../net/minecraft/world/entity/MoverType.d.ts'
import type { SpawnGroupData } from '../../../../../net/minecraft/world/entity/SpawnGroupData.d.ts'
import type { AttributeModifier } from '../../../../../net/minecraft/world/entity/ai/attributes/AttributeModifier.d.ts'
import type { AttributeSupplier$Builder } from '../../../../../net/minecraft/world/entity/ai/attributes/AttributeSupplier$Builder.d.ts'
import type { BodyRotationControl } from '../../../../../net/minecraft/world/entity/ai/control/BodyRotationControl.d.ts'
import type { AbstractGolem } from '../../../../../net/minecraft/world/entity/animal/golem/AbstractGolem.d.ts'
import type { Enemy } from '../../../../../net/minecraft/world/entity/monster/Enemy.d.ts'
import type { DyeColor } from '../../../../../net/minecraft/world/item/DyeColor.d.ts'
import type { Item } from '../../../../../net/minecraft/world/item/Item.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { Level } from '../../../../../net/minecraft/world/level/Level.d.ts'
import type { LevelAccessor } from '../../../../../net/minecraft/world/level/LevelAccessor.d.ts'
import type { ServerLevelAccessor } from '../../../../../net/minecraft/world/level/ServerLevelAccessor.d.ts'
import type { ValueInput } from '../../../../../net/minecraft/world/level/storage/ValueInput.d.ts'
import type { ValueOutput } from '../../../../../net/minecraft/world/level/storage/ValueOutput.d.ts'
import type { AABB } from '../../../../../net/minecraft/world/phys/AABB.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
import type { VoxelShape } from '../../../../../net/minecraft/world/phys/shapes/VoxelShape.d.ts'
import type { ScoreHolder } from '../../../../../net/minecraft/world/scores/ScoreHolder.d.ts'
export class Shulker extends AbstractGolem implements Enemy {
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
    static XP_REWARD_BOSS: number;
    static XP_REWARD_HUGE: number;
    static XP_REWARD_LARGE: number;
    static XP_REWARD_MEDIUM: number;
    static XP_REWARD_NONE: number;
    static XP_REWARD_SMALL: number;
    static areAllEffectsAmbient(parameffects: MobEffectInstance[]): boolean;
    static canGlideUsing(paramitemStack: ItemStack, paramslot: EquipmentSlot): boolean;
    static checkMobSpawnRules(paramtype: EntityType<Mob>, paramlevel: LevelAccessor, paramspawnReason: EntitySpawnReason, parampos: BlockPos, paramrandom: RandomSource): boolean;
    static collectAllColliders(paramsource: Entity, paramlevel: Level, paramboundingBox: AABB): VoxelShape[];
    static collideBoundingBox(paramarg0: Entity, paramarg1: Vec3, paramarg2: AABB, paramarg3: Level, paramarg4: (Object | null)[]): Vec3;
    static createAttributes(): AttributeSupplier$Builder;
    static createLivingAttributes(): AttributeSupplier$Builder;
    static createMobAttributes(): AttributeSupplier$Builder;
    static getEquipmentForSlot(paramslot: EquipmentSlot, paramtype: number): Item;
    static getInputVector(paraminput: Vec3, paramspeed: number, paramyRot: number): Vec3;
    static getProgressAabb(paramsize: number, paramdirection: Direction, paramprogressTo: number, paramposition: Vec3): AABB;
    static getProgressDeltaAabb(paramsize: number, paramdirection: Direction, paramprogressFrom: number, paramprogressTo: number, paramposition: Vec3): AABB;
    static getViewScale(): number;
    static resetForwardDirectionOfRelativePortalPosition(paramoffsets: Vec3): Vec3;
    static setViewScale(paramviewScale: number): void;
    constructor(type: EntityType<Shulker>, level: Level)
    // private clientOldAttachPosition: BlockPos;
    // private clientSideTeleportInterpolation: number;
    // private currentPeekAmount: number;
    // private currentPeekAmountO: number;
    addAdditionalSaveData(output: ValueOutput): void;
    applyImplicitComponent<T extends unknown>(type: DataComponentType<T>, value: T): boolean;
    applyImplicitComponents(components: DataComponentGetter): void;
    canBeCollidedWith(other: Entity): boolean;
    // private canStayAt(target: BlockPos, face: Direction): boolean;
    createBodyControl(): BodyRotationControl;
    defineSynchedData(entityData: SynchedEntityData$Builder): void;
    finalizeSpawn(level: ServerLevelAccessor, difficulty: DifficultyInstance, spawnReason: EntitySpawnReason, groupData: SpawnGroupData): SpawnGroupData;
    findAttachableSurface(target: BlockPos): Direction;
    // private findNewAttachment(): void;
    get<T extends unknown>(type: DataComponentType<T>): T;
    getAmbientSound(): SoundEvent;
    getAttachFace(): Direction;
    getClientPeekAmount(a: number): number;
    getColor(): DyeColor;
    getDeathSound(): SoundEvent;
    getDeltaMovement(): Vec3;
    getHurtSound(source: DamageSource): SoundEvent;
    getInterpolation(): InterpolationHandler;
    getMaxHeadXRot(): number;
    getMaxHeadYRot(): number;
    getMovementEmission(): Entity$MovementEmission;
    // private getRawPeekAmount(): number;
    getRenderPosition(a: number): Vec3;
    getSoundSource(): SoundSource;
    getVariant(): Optional<DyeColor>;
    // private hitByShulkerBullet(): void;
    hurtServer(level: ServerLevel, source: DamageSource, damage: number): boolean;
    // private isClosed(): boolean;
    // private isPositionBlocked(target: BlockPos): boolean;
    makeBoundingBox(): AABB;
    makeBoundingBox(position: Vec3): AABB;
    move(moverType: MoverType, delta: Vec3): void;
    // private onPeekAmountChange(): void;
    onSyncedDataUpdated(updatedItems: SynchedEntityData$DataValue<Object>[]): void;
    onSyncedDataUpdated(accessor: EntityDataAccessor<Object>): void;
    playAmbientSound(): void;
    push(xa: number, ya: number, za: number): void;
    push(entity: Entity): void;
    push(impulse: Vec3): void;
    readAdditionalSaveData(input: ValueInput): void;
    recreateFromPacket(packet: ClientboundAddEntityPacket): void;
    registerGoals(): void;
    sanitizeScale(scale: number): number;
    // private setAttachFace(attachmentDirection: Direction): void;
    setDeltaMovement(xd: number, yd: number, zd: number): void;
    setDeltaMovement(deltaMovement: Vec3): void;
    setPos(x: number, y: number, z: number): void;
    setPos(pos: Vec3): void;
    // private setRawPeekAmount(amount: number): void;
    // private setVariant(color: Optional<DyeColor>): void;
    startRiding(entity: Entity): boolean;
    startRiding(entity: Entity, force: boolean, sendEventAndTriggers: boolean): boolean;
    stopRiding(): void;
    teleportSomewhere(): boolean;
    tick(): void;
    // private updatePeekAmount(): boolean;
}