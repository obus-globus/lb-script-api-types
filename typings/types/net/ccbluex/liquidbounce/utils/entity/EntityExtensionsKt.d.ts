import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Rotation } from '../../../../../net/ccbluex/liquidbounce/utils/aiming/data/Rotation.d.ts'
import type { DirectionalInput } from '../../../../../net/ccbluex/liquidbounce/utils/movement/DirectionalInput.d.ts'
import type { ClientInput } from '../../../../../net/minecraft/client/player/ClientInput.d.ts'
import type { LocalPlayer } from '../../../../../net/minecraft/client/player/LocalPlayer.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Position } from '../../../../../net/minecraft/core/Position.d.ts'
import type { Vec3i } from '../../../../../net/minecraft/core/Vec3i.d.ts'
import type { InteractionHand } from '../../../../../net/minecraft/world/InteractionHand.d.ts'
import type { DamageSource } from '../../../../../net/minecraft/world/damagesource/DamageSource.d.ts'
import type { Entity } from '../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { LivingEntity } from '../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { Input } from '../../../../../net/minecraft/world/entity/player/Input.d.ts'
import type { Player } from '../../../../../net/minecraft/world/entity/player/Player.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { GameType } from '../../../../../net/minecraft/world/level/GameType.d.ts'
import type { AABB } from '../../../../../net/minecraft/world/phys/AABB.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class EntityExtensionsKt extends Object {
    /**
     * Mirrors the blocking-angle and bypass checks from
     * `net.minecraft.world.entity.LivingEntity#applyItemBlocking`.
     *
     * @see net.minecraft.world.entity.LivingEntity#applyItemBlocking
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/utils/entity/EntityExtensions.kt#L126 | src/main/kotlin/net/ccbluex/liquidbounce/utils/entity/EntityExtensions.kt:126}
     */
    static blockedByShield(paramarg0: LivingEntity, paramarg1: DamageSource): boolean;
    static blockedByShield(livingEntity: LivingEntity, source: DamageSource, damageAmount: number): boolean;
    /**
     * Allows to calculate the distance between the current entity and {@link entity} from the nearest corner of the bounding box
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/utils/entity/EntityExtensions.kt#L394 | src/main/kotlin/net/ccbluex/liquidbounce/utils/entity/EntityExtensions.kt:394}
     */
    static boxedDistanceTo(paramarg0: Entity, paramarg1: Entity): number;
    static cameraDistance(position: Position): number;
    static cameraDistanceSq(paramarg0: Position): number;
    static cameraDistanceSq(paramarg0: Vec3i): number;
    /**
     * Check if the player can step up by {@link height} blocks.
     *
     * TODO: Use Minecraft Step logic instead of this basic collision check.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/utils/entity/EntityExtensions.kt#L303 | src/main/kotlin/net/ccbluex/liquidbounce/utils/entity/EntityExtensions.kt:303}
     */
    static canStep(localPlayer: LocalPlayer, height: number): boolean;
    /**
     * Check if the entity box collides with any block in the world at the given {@link pos}.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/utils/entity/EntityExtensions.kt#L767 | src/main/kotlin/net/ccbluex/liquidbounce/utils/entity/EntityExtensions.kt:767}
     */
    static doesCollideAt(entity: Entity, pos: Vec3): boolean;
    /**
     * Check if the entity collides with anything below his bounding box.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/utils/entity/EntityExtensions.kt#L755 | src/main/kotlin/net/ccbluex/liquidbounce/utils/entity/EntityExtensions.kt:755}
     */
    static doesNotCollideBelow(entity: Entity, until: number): boolean;
    /**
     * Sometimes the server does not publish the actual entity health with its metadata.
     * This function incorporates other sources to get the actual value.
     *
     * Currently, uses the following sources:
     * 1. Scoreboard
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/utils/entity/EntityExtensions.kt#L712 | src/main/kotlin/net/ccbluex/liquidbounce/utils/entity/EntityExtensions.kt:712}
     */
    static getActualHealth(livingEntity: LivingEntity, fromScoreboard: boolean): number;
    static getAirTicks(paramarg0: LocalPlayer): number;
    static getArmorItems(paramarg0: LivingEntity): (Object | null)[];
    static getBoundingBoxAt(entity: Entity, pos: Vec3): AABB;
    static getBox(paramarg0: Entity): AABB;
    static getCameraDistance(paramarg0: Entity): number;
    /**
     * Mirrors the vanilla entity damage formula for explosions.
     *
     * Pass {@link damageSource} when the original explosion type is known so shield checks and
     * source-sensitive tags stay aligned with vanilla.
     *
     * @see net.minecraft.world.level.ExplosionDamageCalculator#getEntityDamageAmount
     * @see net.minecraft.world.level.ServerExplosion#getSeenPercent
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/utils/entity/EntityExtensions.kt#L571 | src/main/kotlin/net/ccbluex/liquidbounce/utils/entity/EntityExtensions.kt:571}
     */
    static getDamageFromExplosion(livingEntity: LivingEntity, pos: Vec3, power: number, explosionRange: number, damageDistance: number, exclude: BlockPos[], include: BlockPos, maxBlastResistance: number, entityBoundingBox: AABB, damageSource: DamageSource): number;
    static getDirection(paramarg0: LocalPlayer): number;
    /**
     * Mirrors the vanilla damage-reduction pipeline after the base amount is known.
     *
     * By default, this returns the remaining damage before absorption so callers can compare it
     * against `health + absorptionAmount`. Pass {@link includeAbsorption} to mirror the final health
     * loss applied by vanilla.
     *
     * @see net.minecraft.world.entity.player.Player#hurtServer
     * @see net.minecraft.world.entity.LivingEntity#hurtServer
     * @see net.minecraft.world.entity.LivingEntity#getDamageAfterArmorAbsorb
     * @see net.minecraft.world.entity.LivingEntity#getDamageAfterMagicAbsorb
     * @see net.minecraft.world.entity.LivingEntity#actuallyHurt
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/utils/entity/EntityExtensions.kt#L438 | src/main/kotlin/net/ccbluex/liquidbounce/utils/entity/EntityExtensions.kt:438}
     */
    static getEffectiveDamage(paramarg0: LivingEntity, paramarg1: DamageSource, paramarg2: number): number;
    static getEffectiveDamage(paramarg0: LivingEntity, paramarg1: DamageSource, paramarg2: number, paramarg3: boolean): number;
    static getEffectiveDamage(livingEntity: LivingEntity, source: DamageSource, damage: number, ignoreShield: boolean, includeAbsorption: boolean): number;
    /**
     * Mirrors the vanilla blast-power setup of explosive entities.
     *
     * TNT minecarts use the current speed to reproduce vanilla's upper-bound radius because
     * `net.minecraft.world.entity.vehicle.minecart.MinecartTNT#explode` multiplies the speed
     * term by server-side randomness.
     *
     * @see net.minecraft.world.entity.boss.enderdragon.EndCrystal.hurtServer
     * @see net.minecraft.world.entity.item.PrimedTnt
     * @see net.minecraft.world.entity.vehicle.minecart.MinecartTNT.explode
     * @see net.minecraft.world.entity.monster.Creeper
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/utils/entity/EntityExtensions.kt#L522 | src/main/kotlin/net/ccbluex/liquidbounce/utils/entity/EntityExtensions.kt:522}
     */
    static getExplosionDamageFromEntity(livingEntity: LivingEntity, entity: Entity): number;
    /**
     * Basically {@link ServerExplosion.getSeenPercent} but this method allows us to exclude blocks using {@link exclude}.
     *
     * @see net.minecraft.world.level.ServerExplosion.getSeenPercent
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/utils/entity/EntityExtensions.kt#L626 | src/main/kotlin/net/ccbluex/liquidbounce/utils/entity/EntityExtensions.kt:626}
     */
    static getExposureToExplosion(livingEntity: LivingEntity, source: Vec3, exclude: BlockPos[], include: BlockPos, maxBlastResistance: number, entityBoundingBox: AABB): number;
    static getFeetBlockPos(localPlayer: LocalPlayer): BlockPos;
    static getHandItems(paramarg0: LivingEntity): (Object | null)[];
    /**
     * Check if the attack speed is below 1 tick. If so, we have a cooldown.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/utils/entity/EntityExtensions.kt#L208 | src/main/kotlin/net/ccbluex/liquidbounce/utils/entity/EntityExtensions.kt:208}
     */
    static getHasCooldown(paramarg0: LocalPlayer): boolean;
    static getHorizontalSpeed(paramarg0: Entity): number;
    /**
     * @see <a href="https://minecraft.fandom.com/wiki/Magma_Block#Damage">Magma Block — Damage</a>
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/utils/entity/EntityExtensions.kt#L833 | src/main/kotlin/net/ccbluex/liquidbounce/utils/entity/EntityExtensions.kt:833}
     */
    static getImmuneToMagmaBlocks(paramarg0: LocalPlayer): boolean;
    static getInitial(paramarg0: ClientInput): Input;
    static getLastPos(paramarg0: Entity): Vec3;
    static getLastRotation(paramarg0: LocalPlayer): Rotation;
    static getMovementDirectionOfInput(paramarg0: number, paramarg1: DirectionalInput): number;
    static getMovementDirectionOfInput(paramarg0: LocalPlayer): number;
    static getMovementDirectionOfInput(paramarg0: LocalPlayer, paramarg1: DirectionalInput): number;
    static getMovementForward(paramarg0: ClientInput): number;
    static getMovementSideways(paramarg0: ClientInput): number;
    static getMoving(paramarg0: LocalPlayer): boolean;
    static getNetherPosition(paramarg0: Entity): Vec3;
    static getOnGroundTicks(paramarg0: LocalPlayer): number;
    static getOpposite(paramarg0: InteractionHand): InteractionHand;
    static getPing(paramarg0: Player): number;
    static getRotation(paramarg0: Entity): Rotation;
    static getUntransformed(paramarg0: ClientInput): Input;
    static getUsingItemOrNull(paramarg0: LivingEntity): ItemStack;
    static getWouldBlockHit(paramarg0: LivingEntity): boolean;
    static hasHealthScoreboard(livingEntity: LivingEntity): boolean;
    static interpolateCurrentPosition(entity: Entity, tickDelta: number): Vec3;
    static interpolateCurrentRotation(entity: Entity, tickDelta: number): Rotation;
    static isBlockAction(paramarg0: LivingEntity): boolean;
    static isBlockingServerside(paramarg0: LivingEntity): boolean;
    static isBurrowed(localPlayer: LocalPlayer): boolean;
    static isCloseToEdge(localPlayer: LocalPlayer, directionalInput: DirectionalInput, distance: number, pos: Vec3): boolean;
    static isInHand(livingEntity: LivingEntity, itemStack: ItemStack, hand: InteractionHand): boolean;
    static isInHole(localPlayer: LocalPlayer, feetBlockPos: BlockPos): boolean;
    static isInsideWaterOrBubbleColumn(paramarg0: Entity): boolean;
    /**
     * @receiver the specific bounding box of a player, mob or even another block.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/utils/entity/EntityExtensions.kt#L843 | src/main/kotlin/net/ccbluex/liquidbounce/utils/entity/EntityExtensions.kt:843}
     */
    static isOnMagmaBlock(aABB: AABB): boolean;
    /**
     * @see LocalPlayer.isSlowDueToUsingItem
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/utils/entity/EntityExtensions.kt#L247 | src/main/kotlin/net/ccbluex/liquidbounce/utils/entity/EntityExtensions.kt:247}
     */
    static isSlowDueToUsingItem(paramarg0: Player): boolean;
    static lastRenderPos(entity: Entity): Vec3;
    static setMovementForward(paramarg0: ClientInput, paramarg1: number): void;
    static setMovementSideways(paramarg0: ClientInput, paramarg1: number): void;
    static shortName(gameType: GameType): string;
    static squareBoxedDistanceTo(paramarg0: Entity, paramarg1: Entity, paramarg2: Vec3): number;
    static squaredBoxedDistanceTo(paramarg0: Entity, paramarg1: Entity): number;
    static squaredBoxedDistanceTo(paramarg0: Entity, paramarg1: Vec3): number;
    static warp(localPlayer: LocalPlayer, pos: Vec3, onGround: boolean): void;
    static withStrafe(vec3: Vec3, speed: number, strength: number, input: DirectionalInput, yaw: number): Vec3;
    static wouldBeCloseToFallOff(player: Player, position: Vec3): boolean;
    /**
     * Check if the entity is likely falling to the void based on the given position and bounding box.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/utils/entity/EntityExtensions.kt#L774 | src/main/kotlin/net/ccbluex/liquidbounce/utils/entity/EntityExtensions.kt:774}
     */
    static wouldFallIntoVoid(entity: Entity, pos: Vec3, voidLevel: number, safetyExpand: number): boolean;
}