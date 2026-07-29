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
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1f48456b711a70c664e76abb64e3e2ccc9cc2c34/src/main/kotlin/net/ccbluex/liquidbounce/utils/entity/EntityExtensions.kt#L133 | src/main/kotlin/net/ccbluex/liquidbounce/utils/entity/EntityExtensions.kt:133}
     */
    static blockedByShield(paramarg0: LivingEntity, paramarg1: DamageSource): boolean;
    static blockedByShield(self: LivingEntity, source: DamageSource, damageAmount: number): boolean;
    /**
     * Allows to calculate the distance between the current entity and {@link entity} from the nearest corner of the bounding box
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1f48456b711a70c664e76abb64e3e2ccc9cc2c34/src/main/kotlin/net/ccbluex/liquidbounce/utils/entity/EntityExtensions.kt#L398 | src/main/kotlin/net/ccbluex/liquidbounce/utils/entity/EntityExtensions.kt:398}
     */
    static boxedDistanceTo(self: Entity, entity: Entity): number;
    static cameraDistance(self: Position): number;
    static cameraDistanceSq(self: Position): number;
    static cameraDistanceSq(self: Vec3i): number;
    /**
     * Check if the player can step up by {@link height} blocks.
     *
     * TODO: Use Minecraft Step logic instead of this basic collision check.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1f48456b711a70c664e76abb64e3e2ccc9cc2c34/src/main/kotlin/net/ccbluex/liquidbounce/utils/entity/EntityExtensions.kt#L309 | src/main/kotlin/net/ccbluex/liquidbounce/utils/entity/EntityExtensions.kt:309}
     */
    static canStep(self: LocalPlayer, height: number): boolean;
    /**
     * Check if the entity box collides with any block in the world at the given {@link pos}.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1f48456b711a70c664e76abb64e3e2ccc9cc2c34/src/main/kotlin/net/ccbluex/liquidbounce/utils/entity/EntityExtensions.kt#L771 | src/main/kotlin/net/ccbluex/liquidbounce/utils/entity/EntityExtensions.kt:771}
     */
    static doesCollideAt(self: Entity, pos: Vec3): boolean;
    /**
     * Check if the entity collides with anything below his bounding box.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1f48456b711a70c664e76abb64e3e2ccc9cc2c34/src/main/kotlin/net/ccbluex/liquidbounce/utils/entity/EntityExtensions.kt#L759 | src/main/kotlin/net/ccbluex/liquidbounce/utils/entity/EntityExtensions.kt:759}
     */
    static doesNotCollideBelow(self: Entity, until: number): boolean;
    /**
     * Sometimes the server does not publish the actual entity health with its metadata.
     * This function incorporates other sources to get the actual value.
     *
     * Currently, uses the following sources:
     * 1. Scoreboard
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1f48456b711a70c664e76abb64e3e2ccc9cc2c34/src/main/kotlin/net/ccbluex/liquidbounce/utils/entity/EntityExtensions.kt#L720 | src/main/kotlin/net/ccbluex/liquidbounce/utils/entity/EntityExtensions.kt:720}
     */
    static getActualHealth(self: LivingEntity, fromScoreboard: boolean): number;
    static getAirTicks(paramarg0: LocalPlayer): number;
    static getArmorItems(paramarg0: LivingEntity): ItemStack[];
    static getBoundingBoxAt(self: Entity, pos: Vec3): AABB;
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
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1f48456b711a70c664e76abb64e3e2ccc9cc2c34/src/main/kotlin/net/ccbluex/liquidbounce/utils/entity/EntityExtensions.kt#L582 | src/main/kotlin/net/ccbluex/liquidbounce/utils/entity/EntityExtensions.kt:582}
     */
    static getDamageFromExplosion(self: LivingEntity, pos: Vec3, power: number, explosionRange: number, damageDistance: number, exclude: BlockPos[] | null, include: BlockPos | null, maxBlastResistance: number | null, entityBoundingBox: AABB | null, damageSource: DamageSource | null): number;
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
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1f48456b711a70c664e76abb64e3e2ccc9cc2c34/src/main/kotlin/net/ccbluex/liquidbounce/utils/entity/EntityExtensions.kt#L452 | src/main/kotlin/net/ccbluex/liquidbounce/utils/entity/EntityExtensions.kt:452}
     */
    static getEffectiveDamage(paramarg0: LivingEntity, paramarg1: DamageSource, paramarg2: number): number;
    static getEffectiveDamage(paramarg0: LivingEntity, paramarg1: DamageSource, paramarg2: number, paramarg3: boolean): number;
    static getEffectiveDamage(self: LivingEntity, source: DamageSource, damage: number, ignoreShield: boolean, includeAbsorption: boolean): number;
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
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1f48456b711a70c664e76abb64e3e2ccc9cc2c34/src/main/kotlin/net/ccbluex/liquidbounce/utils/entity/EntityExtensions.kt#L535 | src/main/kotlin/net/ccbluex/liquidbounce/utils/entity/EntityExtensions.kt:535}
     */
    static getExplosionDamageFromEntity(self: LivingEntity, entity: Entity): number;
    /**
     * Basically {@link ServerExplosion.getSeenPercent} but this method allows us to exclude blocks using {@link exclude}.
     *
     * @see net.minecraft.world.level.ServerExplosion.getSeenPercent
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1f48456b711a70c664e76abb64e3e2ccc9cc2c34/src/main/kotlin/net/ccbluex/liquidbounce/utils/entity/EntityExtensions.kt#L633 | src/main/kotlin/net/ccbluex/liquidbounce/utils/entity/EntityExtensions.kt:633}
     */
    static getExposureToExplosion(self: LivingEntity, source: Vec3, exclude: BlockPos[] | null, include: BlockPos | null, maxBlastResistance: number | null, entityBoundingBox: AABB | null): number;
    static getFeetBlockPos(self: LocalPlayer): BlockPos;
    static getHandItems(paramarg0: LivingEntity): ItemStack[];
    /**
     * Check if the attack speed is below 1 tick. If so, we have a cooldown.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1f48456b711a70c664e76abb64e3e2ccc9cc2c34/src/main/kotlin/net/ccbluex/liquidbounce/utils/entity/EntityExtensions.kt#L212 | src/main/kotlin/net/ccbluex/liquidbounce/utils/entity/EntityExtensions.kt:212}
     */
    static getHasCooldown(paramarg0: LocalPlayer): boolean;
    static getHorizontalSpeed(paramarg0: Entity): number;
    /**
     * @see <a href="https://minecraft.fandom.com/wiki/Magma_Block#Damage">Magma Block — Damage</a>
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1f48456b711a70c664e76abb64e3e2ccc9cc2c34/src/main/kotlin/net/ccbluex/liquidbounce/utils/entity/EntityExtensions.kt#L837 | src/main/kotlin/net/ccbluex/liquidbounce/utils/entity/EntityExtensions.kt:837}
     */
    static getImmuneToMagmaBlocks(paramarg0: LocalPlayer): boolean;
    static getInitial(paramarg0: ClientInput): Input;
    static getLastPos(paramarg0: Entity): Vec3;
    static getLastRotation(paramarg0: LocalPlayer): Rotation;
    static getMovementDirectionOfInput(facingYaw: number, input: DirectionalInput): number;
    static getMovementDirectionOfInput(paramarg0: LocalPlayer): number;
    static getMovementDirectionOfInput(self: LocalPlayer, input: DirectionalInput): number;
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
    static hasHealthScoreboard(self: LivingEntity): boolean;
    static interpolateCurrentPosition(self: Entity, tickDelta: number): Vec3;
    static interpolateCurrentRotation(self: Entity, tickDelta: number): Rotation;
    static isBlockAction(paramarg0: LivingEntity): boolean;
    static isBlockingServerside(paramarg0: LivingEntity): boolean;
    static isBurrowed(self: LocalPlayer): boolean;
    static isCloseToEdge(self: LocalPlayer, directionalInput: DirectionalInput, distance: number, pos: Vec3): boolean;
    static isInHand(self: LivingEntity, itemStack: ItemStack | null, hand: InteractionHand): boolean;
    static isInHole(self: LocalPlayer, feetBlockPos: BlockPos): boolean;
    static isInsideWaterOrBubbleColumn(paramarg0: Entity): boolean;
    /**
     * @receiver the specific bounding box of a player, mob or even another block.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1f48456b711a70c664e76abb64e3e2ccc9cc2c34/src/main/kotlin/net/ccbluex/liquidbounce/utils/entity/EntityExtensions.kt#L847 | src/main/kotlin/net/ccbluex/liquidbounce/utils/entity/EntityExtensions.kt:847}
     */
    static isOnMagmaBlock(self: AABB): boolean;
    /**
     * @see LocalPlayer.isSlowDueToUsingItem
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1f48456b711a70c664e76abb64e3e2ccc9cc2c34/src/main/kotlin/net/ccbluex/liquidbounce/utils/entity/EntityExtensions.kt#L251 | src/main/kotlin/net/ccbluex/liquidbounce/utils/entity/EntityExtensions.kt:251}
     */
    static isSlowDueToUsingItem(paramarg0: Player): boolean;
    static lastRenderPos(self: Entity): Vec3;
    static setMovementForward(paramarg0: ClientInput, paramarg1: number): void;
    static setMovementSideways(paramarg0: ClientInput, paramarg1: number): void;
    static shortName(self: GameType): string;
    static squareBoxedDistanceTo(self: Entity, entity: Entity, offsetPos: Vec3): number;
    static squaredBoxedDistanceTo(self: Entity, entity: Entity): number;
    static squaredBoxedDistanceTo(self: Entity, otherPos: Vec3): number;
    static warp(self: LocalPlayer, pos: Vec3 | null, onGround: boolean): void;
    static withStrafe(self: Vec3, speed: number, strength: number, input: DirectionalInput | null, yaw: number): Vec3;
    static wouldBeCloseToFallOff(self: Player, position: Vec3): boolean;
    /**
     * Check if the entity is likely falling to the void based on the given position and bounding box.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1f48456b711a70c664e76abb64e3e2ccc9cc2c34/src/main/kotlin/net/ccbluex/liquidbounce/utils/entity/EntityExtensions.kt#L778 | src/main/kotlin/net/ccbluex/liquidbounce/utils/entity/EntityExtensions.kt:778}
     */
    static wouldFallIntoVoid(self: Entity, pos: Vec3, voidLevel: number, safetyExpand: number): boolean;
}