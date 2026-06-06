import type { BooleanObjectPair } from '../../../../../it/unimi/dsi/fastutil/booleans/BooleanObjectPair.d.ts'
import type { IntLongPair } from '../../../../../it/unimi/dsi/fastutil/ints/IntLongPair.d.ts'
import type { Predicate } from '../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Sequence } from '../../../../../kotlin/sequences/Sequence.d.ts'
import type { SwingMode } from '../../../../../net/ccbluex/liquidbounce/utils/block/SwingMode.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Direction } from '../../../../../net/minecraft/core/Direction.d.ts'
import type { TypedInstance } from '../../../../../net/minecraft/core/TypedInstance.d.ts'
import type { Vec3i } from '../../../../../net/minecraft/core/Vec3i.d.ts'
import type { InteractionHand } from '../../../../../net/minecraft/world/InteractionHand.d.ts'
import type { Entity } from '../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { EndCrystal } from '../../../../../net/minecraft/world/entity/boss/enderdragon/EndCrystal.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { BlockGetter } from '../../../../../net/minecraft/world/level/BlockGetter.d.ts'
import type { ClipContext } from '../../../../../net/minecraft/world/level/ClipContext.d.ts'
import type { ClipContext$ShapeGetter } from '../../../../../net/minecraft/world/level/ClipContext$ShapeGetter.d.ts'
import type { BedBlock } from '../../../../../net/minecraft/world/level/block/BedBlock.d.ts'
import type { Block } from '../../../../../net/minecraft/world/level/block/Block.d.ts'
import type { RespawnAnchorBlock } from '../../../../../net/minecraft/world/level/block/RespawnAnchorBlock.d.ts'
import type { BlockState } from '../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { BoundingBox } from '../../../../../net/minecraft/world/level/levelgen/structure/BoundingBox.d.ts'
import type { AABB } from '../../../../../net/minecraft/world/phys/AABB.d.ts'
import type { BlockHitResult } from '../../../../../net/minecraft/world/phys/BlockHitResult.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
import type { CollisionContext } from '../../../../../net/minecraft/world/phys/shapes/CollisionContext.d.ts'
import type { VoxelShape } from '../../../../../net/minecraft/world/phys/shapes/VoxelShape.d.ts'
export class BlockExtensionsKt extends Object {
    static anotherBedPartDirection(paramarg0: BlockState): Direction;
    static anotherChestPartDirection(paramarg0: BlockState): Direction;
    static canBeReplacedWith(blockState: BlockState, pos: BlockPos, usedStack: ItemStack): boolean;
    static canStandOn(blockPos: BlockPos): boolean;
    /**
     * Check if box intersects with bounding box of specified blocks
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/utils/block/BlockExtensions.kt#L418 | src/main/kotlin/net/ccbluex/liquidbounce/utils/block/BlockExtensions.kt:418}
     */
    static collideBlockIntersects(aABB: AABB, checkCollisionShape: boolean, isCorrectBlock: (param0: Object | null) => boolean): boolean;
    /**
     * Breaks the block
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/utils/block/BlockExtensions.kt#L565 | src/main/kotlin/net/ccbluex/liquidbounce/utils/block/BlockExtensions.kt:565}
     */
    static doBreak(rayTraceResult: BlockHitResult, immediate: boolean, swingMode: SwingMode): void;
    /**
     * Simulated {@link net.minecraft.world.phys.HitResult.Type.BLOCK} branch in vanilla
     *
     * @see net.minecraft.client.Minecraft.startUseItem
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/utils/block/BlockExtensions.kt#L498 | src/main/kotlin/net/ccbluex/liquidbounce/utils/block/BlockExtensions.kt:498}
     */
    static doPlacement(hitResult: BlockHitResult, hand: InteractionHand, onPlacementSuccess: () => boolean, onItemUseSuccess: () => boolean, swingMode: SwingMode): void;
    static getBlock(blockPos: BlockPos): Block;
    static getBlockingEntities(paramarg0: BlockPos, paramarg1: Entity, paramarg2: AABB, paramarg3: (param0: Entity) => kotlin.Boolean): Entity[];
    static getCenterDistanceSquared(blockPos: BlockPos): number;
    static getCenterDistanceSquaredEyes(blockPos: BlockPos): number;
    static getCollidingRegion(paramarg0: AABB): BoundingBox;
    static getCollisionShape(paramarg0: BlockPos): VoxelShape;
    /**
     * Converts this {@link BlockPos} to an immutable one if needed.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/utils/block/BlockExtensions.kt#L143 | src/main/kotlin/net/ccbluex/liquidbounce/utils/block/BlockExtensions.kt:143}
     */
    static getImmutable(paramarg0: BlockPos): BlockPos;
    /**
     * Some blocks like slabs or stairs must be placed on upper side in order to be placed correctly.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/utils/block/BlockExtensions.kt#L178 | src/main/kotlin/net/ccbluex/liquidbounce/utils/block/BlockExtensions.kt:178}
     */
    static getMustBePlacedOnUpperSide(paramarg0: Block): boolean;
    static getOutlineBox(paramarg0: BlockPos): AABB;
    static getOutlineShape(paramarg0: BlockPos): VoxelShape;
    /**
     * Returns the second bed block position that might not exist (normally beds are two blocks long tho).
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/utils/block/BlockExtensions.kt#L633 | src/main/kotlin/net/ccbluex/liquidbounce/utils/block/BlockExtensions.kt:633}
     */
    static getPotentialSecondBedBlock(bedBlock: BedBlock, state: BlockState, pos: BlockPos): BlockPos;
    static getSortedSphere(blockPos: BlockPos, radius: number): (Object | null)[];
    static getState(paramarg0: BlockPos): BlockState;
// (invalid TS: name contains '-')     static getState-deprecated(paramarg0: BlockPos): BlockState;
    static getStateOrEmpty(paramarg0: BlockPos): BlockState;
    static getTargetBlockPos(paramarg0: BlockHitResult): BlockPos;
    static hasAnySolidPlacementNeighbor(paramarg0: BlockPos): boolean;
    static isAnyChest(paramarg0: TypedInstance<Block>): boolean;
    static isBed(paramarg0: BlockState): boolean;
    static isBlastResistant(blockPos: BlockPos): boolean;
    /**
     * Check if box is reaching of specified blocks
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/utils/block/BlockExtensions.kt#L396 | src/main/kotlin/net/ccbluex/liquidbounce/utils/block/BlockExtensions.kt:396}
     */
    static isBlockAtPosition(aABB: AABB, isCorrectBlock: (param0: Object | null) => boolean): boolean;
    static isBlockedByEntities(paramarg0: BlockPos, paramarg1: Entity, paramarg2: AABB, paramarg3: (param0: Entity) => kotlin.Boolean): boolean;
    /**
     * Like {@link isBlockedByEntities} but it returns a blocking end crystal if present.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/utils/block/BlockExtensions.kt#L694 | src/main/kotlin/net/ccbluex/liquidbounce/utils/block/BlockExtensions.kt:694}
     */
    static isBlockedByEntitiesReturnCrystal(paramarg0: BlockPos, paramarg1: Entity, paramarg2: AABB, paramarg3: number[]): BooleanObjectPair<EndCrystal>;
    static isBreakable(blockState: BlockState, pos: BlockPos): boolean;
    static isCharged(respawnAnchorBlock: RespawnAnchorBlock, state: BlockState): boolean;
    static isFallDamageBlocking(paramarg0: BlockPos): boolean;
    /**
     * Checks if the block can be interacted with, null will be returned as not interactable.
     * The {@link blockState} is optional but can make the result more accurate, if not provided
     * it will just assume the block is interactable.
     *
     * Note: The player is required to NOT be `null`.
     *
     * This data has been collected by looking at the implementations of {@link BlockBehaviour.useWithoutItem}.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/utils/block/BlockExtensions.kt#L642 | src/main/kotlin/net/ccbluex/liquidbounce/utils/block/BlockExtensions.kt:642}
     */
    static isInteractable(paramarg0: Block, paramarg1: BlockState): boolean;
    static isInteractable(blockState: BlockState): boolean;
    static isNotBreakable(blockState: BlockState, pos: BlockPos): boolean;
    /**
     * Returns the block box outline of the block at the position. If the block is air, it will return an empty box.
     * Outline Box should be used for rendering purposes only.
     *
     * Returns {@link FULL_BOX} when block is air or does not exist.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/utils/block/BlockExtensions.kt#L148 | src/main/kotlin/net/ccbluex/liquidbounce/utils/block/BlockExtensions.kt:148}
     */
    static outlineBox(blockState: BlockState, blockPos: BlockPos): AABB;
    /**
     * Basically {@link BlockGetter.raycast} but this method allows us to exclude blocks using {@link exclude}.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/utils/block/BlockExtensions.kt#L300 | src/main/kotlin/net/ccbluex/liquidbounce/utils/block/BlockExtensions.kt:300}
     */
    static raycast(blockGetter: BlockGetter, context: ClipContext, exclude: E[], include: BlockPos, maxBlastResistance: number): BlockHitResult;
    /**
     * Scan blocks outwards from a bed
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/utils/block/BlockExtensions.kt#L233 | src/main/kotlin/net/ccbluex/liquidbounce/utils/block/BlockExtensions.kt:233}
     */
    static searchBedLayer(blockPos: BlockPos, state: BlockState, layers: number): Sequence<IntLongPair>;
    /**
     * Scan blocks around the position in a cuboid with filtering.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/utils/block/BlockExtensions.kt#L196 | src/main/kotlin/net/ccbluex/liquidbounce/utils/block/BlockExtensions.kt:196}
     */
    static searchBlocksInCuboid(vec3: Vec3, radius: number): BlockPos[];
    static searchBlocksInCuboid(vec3: Vec3, radius: number, filter: (param0: Object | null, param1: Object | null) => boolean): Sequence<Object>;
    /**
     * Scan blocks around the position in a cuboid, filtered and sorted by shape distance from this {@link Vec3}.
     * Distance calculation is based on outline shape:
     * `shapeGetter.get(state, level, pos, collisionContext).move(pos).distanceToSqr(eyesPos)`.
     *
     * @returns pairs of {@link BlockPos} and its {@link BlockState}, sorted by distance to the center
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/utils/block/BlockExtensions.kt#L213 | src/main/kotlin/net/ccbluex/liquidbounce/utils/block/BlockExtensions.kt:213}
     */
    static searchBlocksInRangeSorted(vec3: Vec3, range: number, shapeGetter: ClipContext$ShapeGetter, collisionContext: CollisionContext, filter: (param0: Object | null, param1: Object | null) => boolean): (Object | null)[];
    /**
     * Scan blocks outwards from center along given {@link directions}, up to {@link layers}
     *
     * @returns The layer to the BlockPos (long value)
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/utils/block/BlockExtensions.kt#L256 | src/main/kotlin/net/ccbluex/liquidbounce/utils/block/BlockExtensions.kt:256}
     */
    static searchLayer(blockPos: BlockPos, layers: number, directions: (Object | null)[]): Sequence<IntLongPair>;
    static toBlockPos(vec3i: Vec3i): BlockPos;
}