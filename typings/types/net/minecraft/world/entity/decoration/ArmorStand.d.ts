import type { Predicate } from '../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Rotations } from '../../../../../net/minecraft/core/Rotations.d.ts'
import type { EntityDataAccessor } from '../../../../../net/minecraft/network/syncher/EntityDataAccessor.d.ts'
import type { SynchedEntityData$Builder } from '../../../../../net/minecraft/network/syncher/SynchedEntityData$Builder.d.ts'
import type { SynchedEntityData$DataValue } from '../../../../../net/minecraft/network/syncher/SynchedEntityData$DataValue.d.ts'
import type { ServerLevel } from '../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { SoundEvent } from '../../../../../net/minecraft/sounds/SoundEvent.d.ts'
import type { InteractionHand } from '../../../../../net/minecraft/world/InteractionHand.d.ts'
import type { InteractionResult } from '../../../../../net/minecraft/world/InteractionResult.d.ts'
import type { DamageSource } from '../../../../../net/minecraft/world/damagesource/DamageSource.d.ts'
import type { MobEffectInstance } from '../../../../../net/minecraft/world/effect/MobEffectInstance.d.ts'
import type { Entity } from '../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { EntityDimensions } from '../../../../../net/minecraft/world/entity/EntityDimensions.d.ts'
import type { EntityType } from '../../../../../net/minecraft/world/entity/EntityType.d.ts'
import type { EquipmentSlot } from '../../../../../net/minecraft/world/entity/EquipmentSlot.d.ts'
import type { HumanoidArm } from '../../../../../net/minecraft/world/entity/HumanoidArm.d.ts'
import type { LightningBolt } from '../../../../../net/minecraft/world/entity/LightningBolt.d.ts'
import type { LivingEntity } from '../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { LivingEntity$Fallsounds } from '../../../../../net/minecraft/world/entity/LivingEntity$Fallsounds.d.ts'
import type { Pose } from '../../../../../net/minecraft/world/entity/Pose.d.ts'
import type { AttributeModifier } from '../../../../../net/minecraft/world/entity/ai/attributes/AttributeModifier.d.ts'
import type { AttributeSupplier$Builder } from '../../../../../net/minecraft/world/entity/ai/attributes/AttributeSupplier$Builder.d.ts'
import type { ArmorStand$ArmorStandPose } from '../../../../../net/minecraft/world/entity/decoration/ArmorStand$ArmorStandPose.d.ts'
import type { Player } from '../../../../../net/minecraft/world/entity/player/Player.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { Explosion } from '../../../../../net/minecraft/world/level/Explosion.d.ts'
import type { Level } from '../../../../../net/minecraft/world/level/Level.d.ts'
import type { PushReaction } from '../../../../../net/minecraft/world/level/material/PushReaction.d.ts'
import type { ValueInput } from '../../../../../net/minecraft/world/level/storage/ValueInput.d.ts'
import type { ValueOutput } from '../../../../../net/minecraft/world/level/storage/ValueOutput.d.ts'
import type { AABB } from '../../../../../net/minecraft/world/phys/AABB.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
import type { VoxelShape } from '../../../../../net/minecraft/world/phys/shapes/VoxelShape.d.ts'
import type { ScoreHolder } from '../../../../../net/minecraft/world/scores/ScoreHolder.d.ts'
export class ArmorStand extends LivingEntity {
    static ARMOR_SLOT_OFFSET: number;
    static BASE_JUMP_POWER: number;
    static BASE_SAFE_FALL_DISTANCE: number;
    static BASE_TICKS_REQUIRED_TO_FREEZE: number;
    static BOARDING_COOLDOWN: number;
    static BODY_ARMOR_OFFSET: number;
    static CLIENT_FLAG_MARKER: number;
    static CLIENT_FLAG_NO_BASEPLATE: number;
    static CLIENT_FLAG_SHOW_ARMS: number;
    static CLIENT_FLAG_SMALL: number;
    static CONTENTS_SLOT_INDEX: number;
    static DATA_BODY_POSE: EntityDataAccessor<Rotations>;
    static DATA_CLIENT_FLAGS: EntityDataAccessor<number>;
    static DATA_HEAD_POSE: EntityDataAccessor<Rotations>;
    static DATA_LEFT_ARM_POSE: EntityDataAccessor<Rotations>;
    static DATA_LEFT_LEG_POSE: EntityDataAccessor<Rotations>;
    static DATA_RIGHT_ARM_POSE: EntityDataAccessor<Rotations>;
    static DATA_RIGHT_LEG_POSE: EntityDataAccessor<Rotations>;
    static DEATH_DURATION: number;
    static DEFAULT_BABY_SCALE: number;
    static DEFAULT_BASE_GRAVITY: number;
    static DEFAULT_BB_HEIGHT: number;
    static DEFAULT_BB_WIDTH: number;
    static DEFAULT_BODY_POSE: Rotations;
    static DEFAULT_HEAD_POSE: Rotations;
    static DEFAULT_LEFT_ARM_POSE: Rotations;
    static DEFAULT_LEFT_LEG_POSE: Rotations;
    static DEFAULT_RIGHT_ARM_POSE: Rotations;
    static DEFAULT_RIGHT_LEG_POSE: Rotations;
    static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
    static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
    static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
    static DISABLE_PUTTING_OFFSET: number;
    static DISABLE_TAKING_OFFSET: number;
    static EQUIPMENT_SLOT_OFFSET: number;
    static EXTRA_RENDER_CULLING_SIZE_WITH_BIG_HAT: number;
    static FREEZE_HURT_FREQUENCY: number;
    static MAX_ENTITY_TAG_COUNT: number;
    static MAX_MOVEMENTS_HANDELED_PER_TICK: number;
    static MAX_RANGE: number;
    static MIN_MOVEMENT_DISTANCE: number;
    static NBT_ATTACHMENT_KEY: string;
    static PLAYER_HURT_EXPERIENCE_TIME: number;
    static PLAYER_NOT_WEARING_DISGUISE_ITEM: (param0: LivingEntity) => boolean;
    static REALLY_FAR_DISTANCE: number;
    static SADDLE_OFFSET: number;
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
    static WAYPOINT_TRANSMIT_RANGE_HIDE_MODIFIER: AttributeModifier;
    static WILDCARD: ScoreHolder;
    static WILDCARD_NAME: string;
    static WOBBLE_TIME: number;
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
    constructor(type: EntityType<ArmorStand>, level: Level)
    constructor(level: Level, x: number, y: number, z: number)
    // private disabledSlots: number;
    readonly invisible: boolean;
    lastHit: number;
    addAdditionalSaveData(output: ValueOutput): void;
    attackable(): boolean;
    // private brokenByAnything(level: ServerLevel, source: DamageSource): void;
    // private brokenByPlayer(level: ServerLevel, source: DamageSource): void;
    canBeSeenByAnyone(): boolean;
    canUseSlot(slot: EquipmentSlot): boolean;
    // private causeDamage(level: ServerLevel, source: DamageSource, dmg: number): void;
    defineSynchedData(entityData: SynchedEntityData$Builder): void;
    doPush(entity: Entity): void;
    getArmorStandPose(): ArmorStand$ArmorStandPose;
    getBodyPose(): Rotations;
    // private getClickedSlot(location: Vec3): EquipmentSlot;
    getDeathSound(): SoundEvent;
    getDefaultDimensions(pose: Pose): EntityDimensions;
    // private getDimensionsMarker(isMarker: boolean): EntityDimensions;
    getFallSounds(): LivingEntity$Fallsounds;
    getHeadPose(): Rotations;
    getHurtSound(source: DamageSource): SoundEvent;
    getLeftArmPose(): Rotations;
    getLeftLegPose(): Rotations;
    getLightProbePosition(partialTickTime: number): Vec3;
    getMainArm(): HumanoidArm;
    getPickResult(): ItemStack;
    getPistonPushReaction(): PushReaction;
    getRightArmPose(): Rotations;
    getRightLegPose(): Rotations;
    handleEntityEvent(id: number): void;
    // private hasPhysics(): boolean;
    hurtServer(level: ServerLevel, source: DamageSource, damage: number): boolean;
    ignoreExplosion(explosion: Explosion): boolean;
    interact(player: Player, hand: InteractionHand, location: Vec3): InteractionResult;
    isAffectedByPotions(): boolean;
    isBaby(): boolean;
    // private isDisabled(slot: EquipmentSlot): boolean;
    isEffectiveAi(): boolean;
    isIgnoringBlockTriggers(): boolean;
    isMarker(): boolean;
    isPickable(): boolean;
    isPushable(): boolean;
    isSmall(): boolean;
    kill(level: ServerLevel): void;
    onSyncedDataUpdated(updatedItems: SynchedEntityData$DataValue<Object>[]): void;
    onSyncedDataUpdated(accessor: EntityDataAccessor<Object>): void;
    // private playBrokenSound(): void;
    pushEntities(): void;
    readAdditionalSaveData(input: ValueInput): void;
    refreshDimensions(): void;
    setArmorStandPose(pose: ArmorStand$ArmorStandPose): void;
    // private setBit(data: number, bit: number, value: boolean): number;
    setBodyPose(bodyPose: Rotations): void;
    setHeadPose(headPose: Rotations): void;
    setInvisible(invisible: boolean): void;
    setLeftArmPose(leftArmPose: Rotations): void;
    setLeftLegPose(leftLegPose: Rotations): void;
    // private setMarker(value: boolean): void;
    setNoBasePlate(value: boolean): void;
    setRightArmPose(rightArmPose: Rotations): void;
    setRightLegPose(rightLegPose: Rotations): void;
    setShowArms(value: boolean): void;
    // private setSmall(value: boolean): void;
    setYBodyRot(yBodyRot: number): void;
    setYHeadRot(yHeadRot: number): void;
    shouldRenderAtSqrDistance(distance: number): boolean;
    showArms(): boolean;
    showBasePlate(): boolean;
    // private showBreakingParticles(): void;
    skipAttackInteraction(source: Entity): boolean;
    // private swapItem(player: Player, slot: EquipmentSlot, playerItemStack: ItemStack, hand: InteractionHand): boolean;
    thunderHit(level: ServerLevel, lightningBolt: LightningBolt): void;
    tickHeadTurn(yBodyRotT: number): void;
    travel(input: Vec3): void;
    updateInvisibilityStatus(): void;
}