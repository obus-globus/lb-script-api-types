import type { GameProfile } from '../../../../../../../../com/mojang/authlib/GameProfile.d.ts'
import type { Consumer } from '../../../../../../../../java/util/function/Consumer.d.ts'
import type { Predicate } from '../../../../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { PosPoseSnapshot } from '../../../../../../../../net/ccbluex/liquidbounce/features/command/commands/ingame/fakeplayer/PosPoseSnapshot.d.ts'
import type { MinecraftShortcuts } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/MinecraftShortcuts.d.ts'
import type { ClientLevel } from '../../../../../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { RemotePlayer } from '../../../../../../../../net/minecraft/client/player/RemotePlayer.d.ts'
import type { DamageSource } from '../../../../../../../../net/minecraft/world/damagesource/DamageSource.d.ts'
import type { MobEffectInstance } from '../../../../../../../../net/minecraft/world/effect/MobEffectInstance.d.ts'
import type { Entity } from '../../../../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { Entity$RemovalReason } from '../../../../../../../../net/minecraft/world/entity/Entity$RemovalReason.d.ts'
import type { EquipmentSlot } from '../../../../../../../../net/minecraft/world/entity/EquipmentSlot.d.ts'
import type { HumanoidArm } from '../../../../../../../../net/minecraft/world/entity/HumanoidArm.d.ts'
import type { LivingEntity } from '../../../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { AttributeModifier } from '../../../../../../../../net/minecraft/world/entity/ai/attributes/AttributeModifier.d.ts'
import type { AttributeSupplier$Builder } from '../../../../../../../../net/minecraft/world/entity/ai/attributes/AttributeSupplier$Builder.d.ts'
import type { ItemStack } from '../../../../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { Level } from '../../../../../../../../net/minecraft/world/level/Level.d.ts'
import type { AABB } from '../../../../../../../../net/minecraft/world/phys/AABB.d.ts'
import type { Vec3 } from '../../../../../../../../net/minecraft/world/phys/Vec3.d.ts'
import type { CollisionContext } from '../../../../../../../../net/minecraft/world/phys/shapes/CollisionContext.d.ts'
import type { VoxelShape } from '../../../../../../../../net/minecraft/world/phys/shapes/VoxelShape.d.ts'
import type { ScoreHolder } from '../../../../../../../../net/minecraft/world/scores/ScoreHolder.d.ts'
/**
 * This class represents a Fake Player implementing
 * attackability and assured totem pops instead of death
 * into {@link RemotePlayer}.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/553a3caf47807e98e69ea3ce0e17bcd9e52eeb71/src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/ingame/fakeplayer/FakePlayer.kt#L39 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/ingame/fakeplayer/FakePlayer.kt:39}
 */
export class FakePlayer extends RemotePlayer implements MinecraftShortcuts {
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
    static CRAFTING_SLOT_OFFSET: number;
    static CREATIVE_ENTITY_INTERACTION_RANGE_MODIFIER_VALUE: number;
    static DEATH_DURATION: number;
    static DEFAULT_BABY_SCALE: number;
    static DEFAULT_BASE_GRAVITY: number;
    static DEFAULT_BB_HEIGHT: number;
    static DEFAULT_BB_WIDTH: number;
    static DEFAULT_BELOW_NAME_DISTANCE: number;
    static DEFAULT_BLOCK_INTERACTION_RANGE: number;
    static DEFAULT_ENTITY_INTERACTION_RANGE: number;
    static DEFAULT_EYE_HEIGHT: number;
    static DEFAULT_MAIN_HAND: HumanoidArm;
    static DEFAULT_MODEL_CUSTOMIZATION: number;
    static DEFAULT_NAME_TAG_DISTANCE: number;
    static DEFAULT_VEHICLE_ATTACHMENT: Vec3;
    static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
    static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
    static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
    static DOLPHINS_GRACE_WATER_DRAG: number;
    static ELYTRA_HORIZONTAL_AIR_DRAG: number;
    static ELYTRA_VERTICAL_AIR_DRAG: number;
    static ENDER_SLOT_OFFSET: number;
    static EQUIPMENT_SLOT_OFFSET: number;
    static EXTRA_RENDER_CULLING_SIZE_WITH_BIG_HAT: number;
    static FLYING_AIR_DRAG: number;
    static FLYING_LAVA_DRAG: number;
    static FLYING_VERTICAL_AIR_DRAG: number;
    static FLYING_WATER_DRAG: number;
    static FREEZE_HURT_FREQUENCY: number;
    static HELD_ITEM_SLOT: number;
    static INVALID_ENTITY_ID: number;
    static LAVA_DRAG: number;
    static LAVA_SHALLOW_VERTICAL_DRAG: number;
    static MAX_ENTITY_TAG_COUNT: number;
    static MAX_HEALTH: number;
    static MAX_MOVEMENTS_HANDELED_PER_TICK: number;
    static MAX_NAME_TAG_DISTANCE: number;
    static MIN_MOVEMENT_DISTANCE: number;
    static NBT_ATTACHMENT_KEY: string;
    static PLAYER_HURT_EXPERIENCE_TIME: number;
    static PLAYER_NOT_WEARING_DISGUISE_ITEM: (param0: LivingEntity) => boolean;
    static REALLY_FAR_DISTANCE: number;
    static SADDLE_OFFSET: number;
    static SLEEP_DURATION: number;
    static SPRINTING_WATER_DRAG: number;
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
    static WATER_DRAG: number;
    static WAYPOINT_TRANSMIT_RANGE_HIDE_MODIFIER: AttributeModifier;
    static WILDCARD: ScoreHolder;
    static WILDCARD_NAME: string;
    static areAllEffectsAmbient(parameffects: MobEffectInstance[]): boolean;
    static canGlideUsing(paramitemStack: ItemStack, paramslot: EquipmentSlot): boolean;
    static collectAllColliders(paramsource: Entity, paramlevel: Level, paramboundingBox: AABB): VoxelShape[];
    static collideBoundingBox(paramarg0: Entity, paramarg1: Vec3, paramarg2: AABB, paramarg3: Level, paramarg4: (Object | null)[]): Vec3;
    static collideBoundingBox(paramsource: CollisionContext, parammovement: Vec3, paramboundingBox: AABB, paramlevel: Level, paramentityColliders: VoxelShape[]): Vec3;
    static createAttributes(): AttributeSupplier$Builder;
    static createLivingAttributes(): AttributeSupplier$Builder;
    static getInputVector(paraminput: Vec3, paramspeed: number, paramyRot: number): Vec3;
    static getViewScale(): number;
    static resetForwardDirectionOfRelativePortalPosition(paramoffsets: Vec3): Vec3;
    static setViewScale(paramviewScale: number): void;
    constructor(level: ClientLevel, gameProfile: GameProfile, onRemoval: ((param0: FakePlayer) => void) | null)
    onRemoval: ((param0: FakePlayer) => void) | null;
    /**
     * The fake player takes no knockback.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/553a3caf47807e98e69ea3ce0e17bcd9e52eeb71/src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/ingame/fakeplayer/FakePlayer.kt#L114 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/ingame/fakeplayer/FakePlayer.kt:114}
     */
    knockback(power: number, xd: number, zd: number, source: DamageSource, damage: number): void;
    knockback(power: number, xd: number, zd: number, source: DamageSource, damage: number, comesFromEffect: boolean): void;
    /**
     * Loads the attributes from the player into the fake player.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/553a3caf47807e98e69ea3ce0e17bcd9e52eeb71/src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/ingame/fakeplayer/FakePlayer.kt#L48 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/ingame/fakeplayer/FakePlayer.kt:48}
     */
    loadAttributes(snapshot: PosPoseSnapshot): void;
    remove(reason: Entity$RemovalReason): void;
    /**
     * @see net.minecraft.world.entity.LivingEntity.checkTotemDeathProtection
     * @see net.minecraft.world.item.component.DeathProtection.TOTEM_OF_UNDYING
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/553a3caf47807e98e69ea3ce0e17bcd9e52eeb71/src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/ingame/fakeplayer/FakePlayer.kt#L77 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/ingame/fakeplayer/FakePlayer.kt:77}
     */
    setHealth(health: number): void;
    /**
     * The fake player constantly checks for removal.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/553a3caf47807e98e69ea3ce0e17bcd9e52eeb71/src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/ingame/fakeplayer/FakePlayer.kt#L98 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/ingame/fakeplayer/FakePlayer.kt:98}
     */
    tick(): void;
}