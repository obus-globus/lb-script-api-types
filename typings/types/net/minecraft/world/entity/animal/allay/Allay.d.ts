import type { BiConsumer } from '../../../../../../java/util/function/BiConsumer.d.ts'
import type { Predicate } from '../../../../../../java/util/function/Predicate.d.ts'
import type { ToIntFunction } from '../../../../../../java/util/function/ToIntFunction.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Holder } from '../../../../../../net/minecraft/core/Holder.d.ts'
import type { Vec3i } from '../../../../../../net/minecraft/core/Vec3i.d.ts'
import type { SynchedEntityData$Builder } from '../../../../../../net/minecraft/network/syncher/SynchedEntityData$Builder.d.ts'
import type { ResourceKey } from '../../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { ServerLevel } from '../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { SoundEvent } from '../../../../../../net/minecraft/sounds/SoundEvent.d.ts'
import type { RandomSource } from '../../../../../../net/minecraft/util/RandomSource.d.ts'
import type { InteractionHand } from '../../../../../../net/minecraft/world/InteractionHand.d.ts'
import type { InteractionResult } from '../../../../../../net/minecraft/world/InteractionResult.d.ts'
import type { DamageSource } from '../../../../../../net/minecraft/world/damagesource/DamageSource.d.ts'
import type { MobEffectInstance } from '../../../../../../net/minecraft/world/effect/MobEffectInstance.d.ts'
import type { Entity } from '../../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { EntitySpawnReason } from '../../../../../../net/minecraft/world/entity/EntitySpawnReason.d.ts'
import type { EntityType } from '../../../../../../net/minecraft/world/entity/EntityType.d.ts'
import type { EquipmentSlot } from '../../../../../../net/minecraft/world/entity/EquipmentSlot.d.ts'
import type { LivingEntity } from '../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { Mob } from '../../../../../../net/minecraft/world/entity/Mob.d.ts'
import type { PathfinderMob } from '../../../../../../net/minecraft/world/entity/PathfinderMob.d.ts'
import type { Brain } from '../../../../../../net/minecraft/world/entity/ai/Brain.d.ts'
import type { Brain$Packed } from '../../../../../../net/minecraft/world/entity/ai/Brain$Packed.d.ts'
import type { AttributeModifier } from '../../../../../../net/minecraft/world/entity/ai/attributes/AttributeModifier.d.ts'
import type { AttributeSupplier$Builder } from '../../../../../../net/minecraft/world/entity/ai/attributes/AttributeSupplier$Builder.d.ts'
import type { PathNavigation } from '../../../../../../net/minecraft/world/entity/ai/navigation/PathNavigation.d.ts'
import type { Allay$JukeboxListener } from '../../../../../../net/minecraft/world/entity/animal/allay/Allay$JukeboxListener.d.ts'
import type { ItemEntity } from '../../../../../../net/minecraft/world/entity/item/ItemEntity.d.ts'
import type { InventoryCarrier } from '../../../../../../net/minecraft/world/entity/npc/InventoryCarrier.d.ts'
import type { Player } from '../../../../../../net/minecraft/world/entity/player/Player.d.ts'
import type { Item } from '../../../../../../net/minecraft/world/item/Item.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { Level } from '../../../../../../net/minecraft/world/level/Level.d.ts'
import type { LevelAccessor } from '../../../../../../net/minecraft/world/level/LevelAccessor.d.ts'
import type { BlockState } from '../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { DynamicGameEventListener } from '../../../../../../net/minecraft/world/level/gameevent/DynamicGameEventListener.d.ts'
import type { GameEvent } from '../../../../../../net/minecraft/world/level/gameevent/GameEvent.d.ts'
import type { VibrationSystem } from '../../../../../../net/minecraft/world/level/gameevent/vibrations/VibrationSystem.d.ts'
import type { VibrationSystem$Data } from '../../../../../../net/minecraft/world/level/gameevent/vibrations/VibrationSystem$Data.d.ts'
import type { VibrationSystem$Listener } from '../../../../../../net/minecraft/world/level/gameevent/vibrations/VibrationSystem$Listener.d.ts'
import type { VibrationSystem$User } from '../../../../../../net/minecraft/world/level/gameevent/vibrations/VibrationSystem$User.d.ts'
import type { ValueInput } from '../../../../../../net/minecraft/world/level/storage/ValueInput.d.ts'
import type { ValueOutput } from '../../../../../../net/minecraft/world/level/storage/ValueOutput.d.ts'
import type { AABB } from '../../../../../../net/minecraft/world/phys/AABB.d.ts'
import type { Vec3 } from '../../../../../../net/minecraft/world/phys/Vec3.d.ts'
import type { CollisionContext } from '../../../../../../net/minecraft/world/phys/shapes/CollisionContext.d.ts'
import type { VoxelShape } from '../../../../../../net/minecraft/world/phys/shapes/VoxelShape.d.ts'
import type { ScoreHolder } from '../../../../../../net/minecraft/world/scores/ScoreHolder.d.ts'
export class Allay extends PathfinderMob implements InventoryCarrier, VibrationSystem {
    static ARMOR_SLOT_OFFSET: number;
    static AXIS_SPECIFIC_ELASTICITY: Vec3;
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
    static MAX_NOTEBLOCK_DISTANCE: number;
    static MAX_PICKUP_LOOT_CHANCE: number;
    static MAX_WEARING_ARMOR_CHANCE: number;
    static MIN_MOVEMENT_DISTANCE: number;
    static NBT_ATTACHMENT_KEY: string;
    static NO_VIBRATION_FREQUENCY: number;
    static PLAYER_HURT_EXPERIENCE_TIME: number;
    static PLAYER_NOT_WEARING_DISGUISE_ITEM: (param0: LivingEntity) => boolean;
    static REALLY_FAR_DISTANCE: number;
    static RESONANCE_EVENTS: ResourceKey<GameEvent>[];
    static SADDLE_OFFSET: number;
    static SHARED_QUAD_ATTACHMENT_POINTS: Vec3[];
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
    static TAG_INVENTORY: string;
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
    static THROW_SOUND_PITCHES: number[];
    static TORSIONAL_ELASTICITY: number;
    static TOTAL_AIR_SUPPLY: number;
    static UPDATE_GOAL_SELECTOR_EVERY_N_TICKS: number;
    static VIBRATION_FREQUENCY_FOR_EVENT: (param0: ResourceKey<GameEvent>) => number;
    static WATER_DRAG: number;
    static WAYPOINT_TRANSMIT_RANGE_HIDE_MODIFIER: AttributeModifier;
    static WEARING_ARMOR_UPGRADE_MATERIAL_ATTEMPTS: number;
    static WEARING_ARMOR_UPGRADE_MATERIAL_CHANCE: number;
    static WILDCARD: ScoreHolder;
    static WILDCARD_NAME: string;
    static areAllEffectsAmbient(parameffects: MobEffectInstance[]): boolean;
    static canGlideUsing(paramitemStack: ItemStack, paramslot: EquipmentSlot): boolean;
    static checkMobSpawnRules(paramtype: EntityType<Mob>, paramlevel: LevelAccessor, paramspawnReason: EntitySpawnReason, parampos: BlockPos, paramrandom: RandomSource): boolean;
    static collectAllColliders(paramsource: Entity, paramlevel: Level, paramboundingBox: AABB): VoxelShape[];
    static collideBoundingBox(paramarg0: Entity, paramarg1: Vec3, paramarg2: AABB, paramarg3: Level, paramarg4: (Object | null)[]): Vec3;
    static collideBoundingBox(paramsource: CollisionContext, parammovement: Vec3, paramboundingBox: AABB, paramlevel: Level, paramentityColliders: VoxelShape[]): Vec3;
    static createAttributes(): AttributeSupplier$Builder;
    static createLivingAttributes(): AttributeSupplier$Builder;
    static createMobAttributes(): AttributeSupplier$Builder;
    static getEquipmentForSlot(paramslot: EquipmentSlot, paramtype: number): Item;
    static getGameEventFrequency(paramevent: Holder<GameEvent>): number;
    static getGameEventFrequency(paramevent: ResourceKey<GameEvent>): number;
    static getInputVector(paraminput: Vec3, paramspeed: number, paramyRot: number): Vec3;
    static getRedstoneStrengthForDistance(paramdistance: number, paramlistenerRadius: number): number;
    static getResonanceEventByFrequency(paramvibrationFrequency: number): ResourceKey<GameEvent>;
    static getViewScale(): number;
    static pickUpItem(paramlevel: ServerLevel, parammob: Mob, paraminventoryCarrier: InventoryCarrier, paramitemEntity: ItemEntity): void;
    static resetForwardDirectionOfRelativePortalPosition(paramoffsets: Vec3): Vec3;
    static setViewScale(paramviewScale: number): void;
    constructor(type: EntityType<Allay>, level: Level)
    // private dancingAnimationTicks: number;
    // private duplicationCooldown: number;
    // private dynamicJukeboxListener: DynamicGameEventListener<Allay$JukeboxListener>;
    // private dynamicVibrationListener: DynamicGameEventListener<VibrationSystem$Listener>;
    // private holdingItemAnimationTicks: number;
    // private holdingItemAnimationTicks0: number;
    readonly inventory: (Object | null)[];
    // private jukeboxPos: BlockPos;
    // private spinningAnimationTicks: number;
    // private spinningAnimationTicks0: number;
    readonly vibrationData: VibrationSystem$Data;
    readonly vibrationUser: VibrationSystem$User;
    addAdditionalSaveData(output: ValueOutput): void;
    aiStep(): void;
    // private allayConsidersItemEqual(item1: ItemStack, item2: ItemStack): boolean;
    canDispenserEquipIntoSlot(slot: EquipmentSlot): boolean;
    // private canDuplicate(): boolean;
    canPickUpLoot(): boolean;
    checkFallDamage(ya: number, onGround: boolean, onState: BlockState, pos: BlockPos): void;
    considersEntityAsAlly(other: Entity): boolean;
    createNavigation(level: Level): PathNavigation;
    customServerAiStep(level: ServerLevel): void;
    defineSynchedData(entityData: SynchedEntityData$Builder): void;
    dropEquipment(level: ServerLevel): void;
    // private duplicateAllay(): void;
    equipmentHasChanged(previous: ItemStack, current: ItemStack): boolean;
    getAmbientSound(): SoundEvent;
    getBrain(): Brain<Allay>;
    getDeathSound(): SoundEvent;
    getHoldingItemAnimationProgress(a: number): number;
    getHurtSound(source: DamageSource): SoundEvent;
    getInventory(): (Object | null)[];
    getLeashOffset(): Vec3;
    getLeashOffset(partialTicks: number): Vec3;
    getPickupReach(): Vec3i;
    getSoundVolume(): number;
    getSpinningProgress(a: number): number;
    getVibrationData(): VibrationSystem$Data;
    getVibrationUser(): VibrationSystem$User;
    handleEntityEvent(id: number): void;
    hasItemInHand(): boolean;
    // private hasNonMatchingPotion(itemInHand: ItemStack, pickupItem: ItemStack): boolean;
    hurtServer(level: ServerLevel, source: DamageSource, damage: number): boolean;
    isDancing(): boolean;
    isFlapping(): boolean;
    // private isLikedPlayer(other: Entity): boolean;
    // private isOnPickupCooldown(): boolean;
    isSpinning(): boolean;
    makeBrain(packedBrain: Brain$Packed): Brain<Allay>;
    mobInteract(player: Player, hand: InteractionHand): InteractionResult;
    pickUpItem(level: ServerLevel, entity: ItemEntity): void;
    playStepSound(pos: BlockPos, blockState: BlockState): void;
    readAdditionalSaveData(input: ValueInput): void;
    readInventoryFromTag(input: ValueInput): void;
    // private removeInteractionItem(player: Player, interactionItem: ItemStack): void;
    removeWhenFarAway(distSqr: number): boolean;
    // private resetDuplicationCooldown(): void;
    setDancing(isDancing: boolean): void;
    // private setDuplicationCooldown(duplicationCooldown: number): void;
    setJukeboxPlaying(jukebox: BlockPos, isPlaying: boolean): void;
    shouldStayCloseToLeashHolder(): boolean;
    // private shouldStopDancing(): boolean;
    // private spawnHeartParticle(): void;
    tick(): void;
    travel(input: Vec3): void;
    // private updateDuplicationCooldown(): void;
    updateDynamicGameEventListener(action: (param0: DynamicGameEventListener<any>, param1: ServerLevel) => void): void;
    wantsToPickUp(level: ServerLevel, itemStack: ItemStack): boolean;
    writeInventoryToTag(output: ValueOutput): void;
}