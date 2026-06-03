import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { CompletableFuture } from '../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Predicate } from '../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ClientAvatarEntity } from '../../../../net/minecraft/client/entity/ClientAvatarEntity.d.ts'
import type { ClientAvatarState } from '../../../../net/minecraft/client/entity/ClientAvatarState.d.ts'
import type { PlayerSkinRenderCache } from '../../../../net/minecraft/client/renderer/PlayerSkinRenderCache.d.ts'
import type { Component } from '../../../../net/minecraft/network/chat/Component.d.ts'
import type { EntityDataAccessor } from '../../../../net/minecraft/network/syncher/EntityDataAccessor.d.ts'
import type { SynchedEntityData$DataValue } from '../../../../net/minecraft/network/syncher/SynchedEntityData$DataValue.d.ts'
import type { Entity } from '../../../../net/minecraft/world/entity/Entity.d.ts'
import type { EntityType } from '../../../../net/minecraft/world/entity/EntityType.d.ts'
import type { EquipmentSlot } from '../../../../net/minecraft/world/entity/EquipmentSlot.d.ts'
import type { HumanoidArm } from '../../../../net/minecraft/world/entity/HumanoidArm.d.ts'
import type { LivingEntity } from '../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { Pose } from '../../../../net/minecraft/world/entity/Pose.d.ts'
import type { AttributeModifier } from '../../../../net/minecraft/world/entity/ai/attributes/AttributeModifier.d.ts'
import type { AttributeSupplier$Builder } from '../../../../net/minecraft/world/entity/ai/attributes/AttributeSupplier$Builder.d.ts'
import type { Parrot$Variant } from '../../../../net/minecraft/world/entity/animal/parrot/Parrot$Variant.d.ts'
import type { Mannequin } from '../../../../net/minecraft/world/entity/decoration/Mannequin.d.ts'
import type { PlayerSkin } from '../../../../net/minecraft/world/entity/player/PlayerSkin.d.ts'
import type { ItemStack } from '../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { ResolvableProfile } from '../../../../net/minecraft/world/item/component/ResolvableProfile.d.ts'
import type { Level } from '../../../../net/minecraft/world/level/Level.d.ts'
import type { AABB } from '../../../../net/minecraft/world/phys/AABB.d.ts'
import type { Vec3 } from '../../../../net/minecraft/world/phys/Vec3.d.ts'
import type { VoxelShape } from '../../../../net/minecraft/world/phys/shapes/VoxelShape.d.ts'
import type { ScoreHolder } from '../../../../net/minecraft/world/scores/ScoreHolder.d.ts'
export class ClientMannequin extends Mannequin implements ClientAvatarEntity {
    static ARMOR_SLOT_OFFSET: number;
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
    static DEFAULT_EYE_HEIGHT: number;
    static DEFAULT_MAIN_HAND: HumanoidArm;
    static DEFAULT_MODEL_CUSTOMIZATION: number;
    static DEFAULT_PROFILE: ResolvableProfile;
    static DEFAULT_SKIN: PlayerSkin;
    static DEFAULT_VEHICLE_ATTACHMENT: Vec3;
    static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
    static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
    static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
    static EQUIPMENT_SLOT_OFFSET: number;
    static EXTRA_RENDER_CULLING_SIZE_WITH_BIG_HAT: number;
    static FREEZE_HURT_FREQUENCY: number;
    static MAX_ENTITY_TAG_COUNT: number;
    static MAX_MOVEMENTS_HANDELED_PER_TICK: number;
    static MAX_RANGE: number;
    static MIN_MOVEMENT_DISTANCE: number;
    static NBT_ATTACHMENT_KEY: string;
    static PLAYER_HURT_EXPERIENCE_TIME: number;
    static PLAYER_NOT_WEARING_DISGUISE_ITEM: (param0: LivingEntity) => kotlin.Boolean;
    static POSE_CODEC: Codec<Pose>;
    static REALLY_FAR_DISTANCE: number;
    static SADDLE_OFFSET: number;
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
    static WAYPOINT_TRANSMIT_RANGE_HIDE_MODIFIER: AttributeModifier;
    static WILDCARD: ScoreHolder;
    static WILDCARD_NAME: string;
    static areAllEffectsAmbient(parameffects: E[]): boolean;
    static canGlideUsing(paramitemStack: ItemStack, paramslot: EquipmentSlot): boolean;
    static collectAllColliders(paramsource: Entity, paramlevel: Level, paramboundingBox: AABB): VoxelShape[];
    static collideBoundingBox(paramarg0: Entity, paramarg1: Vec3, paramarg2: AABB, paramarg3: Level, paramarg4: (Object | null)[]): Vec3;
    static create(paramtype: EntityType<Mannequin>, paramlevel: Level): Mannequin;
    static createLivingAttributes(): AttributeSupplier$Builder;
    static getInputVector(paraminput: Vec3, paramspeed: number, paramyRot: number): Vec3;
    static getViewScale(): number;
    static registerOverrides(paramcache: PlayerSkinRenderCache): void;
    static resetForwardDirectionOfRelativePortalPosition(paramoffsets: Vec3): Vec3;
    static setViewScale(paramviewScale: number): void;
    constructor(level: Level, skinRenderCache: PlayerSkinRenderCache)
    // private avatarState: ClientAvatarState;
    readonly skin: PlayerSkin;
    // private skinLookup: CompletableFuture<Optional<PlayerSkin>>;
    // private skinRenderCache: PlayerSkinRenderCache;
    avatarState(): ClientAvatarState;
    belowNameDisplay(): Component;
    getParrotVariantOnShoulder(left: boolean): Parrot$Variant;
    getSkin(): PlayerSkin;
    onSyncedDataUpdated(updatedItems: SynchedEntityData$DataValue<Object>[]): void;
    onSyncedDataUpdated(accessor: EntityDataAccessor<Object>): void;
    // private setSkin(skin: PlayerSkin): void;
    showExtraEars(): boolean;
    tick(): void;
    // private updateSkin(): void;
}