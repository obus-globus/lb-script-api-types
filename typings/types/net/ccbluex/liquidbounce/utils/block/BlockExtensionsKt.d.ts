import type { BooleanObjectPair } from '../../../../../it/unimi/dsi/fastutil/booleans/BooleanObjectPair.d.ts'
import type { IntLongPair } from '../../../../../it/unimi/dsi/fastutil/ints/IntLongPair.d.ts'
import type { Predicate } from '../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Pair } from '../../../../../kotlin/Pair.d.ts'
import type { Sequence } from '../../../../../kotlin/sequences/Sequence.d.ts'
import type { Rotation } from '../../../../../net/ccbluex/liquidbounce/utils/aiming/data/Rotation.d.ts'
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
    static anotherBedPartDirection(self: BlockState | null): Direction | null;
    static anotherChestPartDirection(self: BlockState | null): Direction | null;
    static canBeReplacedWith(self: BlockState, pos: BlockPos, usedStack: ItemStack): boolean;
    static canStandOn(self: BlockPos): boolean;
    /**
     * Check if box intersects with bounding box of specified blocks
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a9cf2b145901ecd37d3f2a815c20cf0955e76853/src/main/kotlin/net/ccbluex/liquidbounce/utils/block/BlockExtensions.kt#L436 | src/main/kotlin/net/ccbluex/liquidbounce/utils/block/BlockExtensions.kt:436}
     */
    static collideBlockIntersects(self: AABB, checkCollisionShape: boolean, isCorrectBlock: (param0: Block) => boolean): boolean;
    /**
     * Breaks the block
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a9cf2b145901ecd37d3f2a815c20cf0955e76853/src/main/kotlin/net/ccbluex/liquidbounce/utils/block/BlockExtensions.kt#L593 | src/main/kotlin/net/ccbluex/liquidbounce/utils/block/BlockExtensions.kt:593}
     */
    static doBreak(rayTraceResult: BlockHitResult, immediate: boolean, swingMode: SwingMode): void;
    /**
     * Simulated {@link net.minecraft.world.phys.HitResult.Type.BLOCK} branch in vanilla
     *
     * This function does not perform the surrounding checks from {@link net.minecraft.client.Minecraft.startUseItem},
     * such as whether the game mode is destroying a block, the player's hands are busy, or the held item is enabled.
     * Callers should perform the applicable checks before calling this function.
     *
     * @param rotation rotation used to produce {@link hitResult}
     * @see net.minecraft.client.Minecraft.startUseItem
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a9cf2b145901ecd37d3f2a815c20cf0955e76853/src/main/kotlin/net/ccbluex/liquidbounce/utils/block/BlockExtensions.kt#L523 | src/main/kotlin/net/ccbluex/liquidbounce/utils/block/BlockExtensions.kt:523}
     */
    static doPlacement(hitResult: BlockHitResult, rotation: Rotation, hand: InteractionHand, onPlacementSuccess: () => boolean, onItemUseSuccess: () => boolean, swingMode: SwingMode): void;
    static fallDamageMultiplier(self: BlockPos | null, entity: Entity): number;
    static fallDamageMultiplier(self: Block | null, entity: Entity): number;
    static getBlock(self: BlockPos): Block | null;
    static getBlockingEntities(self: BlockPos, except: Entity | null, box: AABB, predicate: (param0: Entity) => boolean): Entity[];
    static getCenterDistanceSquared(self: BlockPos): number;
    static getCenterDistanceSquaredEyes(self: BlockPos): number;
    static getCollidingRegion(paramarg0: AABB): BoundingBox;
    static getCollisionShape(paramarg0: BlockPos): VoxelShape;
    /**
     * Converts this {@link BlockPos} to an immutable one if needed.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a9cf2b145901ecd37d3f2a815c20cf0955e76853/src/main/kotlin/net/ccbluex/liquidbounce/utils/block/BlockExtensions.kt#L161 | src/main/kotlin/net/ccbluex/liquidbounce/utils/block/BlockExtensions.kt:161}
     */
    static getImmutable(paramarg0: BlockPos): BlockPos;
    /**
     * Some blocks like slabs or stairs must be placed on upper side in order to be placed correctly.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a9cf2b145901ecd37d3f2a815c20cf0955e76853/src/main/kotlin/net/ccbluex/liquidbounce/utils/block/BlockExtensions.kt#L196 | src/main/kotlin/net/ccbluex/liquidbounce/utils/block/BlockExtensions.kt:196}
     */
    static getMustBePlacedOnUpperSide(paramarg0: Block): boolean;
    static getOutlineBox(paramarg0: BlockPos): AABB;
    static getOutlineShape(paramarg0: BlockPos): VoxelShape;
    /**
     * Returns the second bed block position that might not exist (normally beds are two blocks long tho).
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a9cf2b145901ecd37d3f2a815c20cf0955e76853/src/main/kotlin/net/ccbluex/liquidbounce/utils/block/BlockExtensions.kt#L662 | src/main/kotlin/net/ccbluex/liquidbounce/utils/block/BlockExtensions.kt:662}
     */
    static getPotentialSecondBedBlock(self: BedBlock, state: BlockState, pos: BlockPos): BlockPos;
    static getSortedSphere(self: BlockPos, radius: number): BlockPos[];
    static getState(paramarg0: BlockPos): BlockState;
// (invalid TS: name contains '-')     static getState-deprecated(self: BlockPos): BlockState | null;
    static getStateOrEmpty(paramarg0: BlockPos): BlockState;
    static getTargetBlockPos(paramarg0: BlockHitResult): BlockPos;
    static hasAnySolidPlacementNeighbor(self: BlockPos): boolean;
    static isAnyChest(paramarg0: TypedInstance<Block>): boolean;
    static isBed(paramarg0: BlockState): boolean;
    static isBlastResistant(self: BlockPos): boolean;
    /**
     * Check if box is reaching of specified blocks
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a9cf2b145901ecd37d3f2a815c20cf0955e76853/src/main/kotlin/net/ccbluex/liquidbounce/utils/block/BlockExtensions.kt#L414 | src/main/kotlin/net/ccbluex/liquidbounce/utils/block/BlockExtensions.kt:414}
     */
    static isBlockAtPosition(self: AABB, isCorrectBlock: (param0: Block | null) => boolean): boolean;
    static isBlockedByEntities(self: BlockPos, except: Entity | null, box: AABB, predicate: (param0: Entity) => boolean): boolean;
    /**
     * Like {@link isBlockedByEntities} but it returns a blocking end crystal if present.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a9cf2b145901ecd37d3f2a815c20cf0955e76853/src/main/kotlin/net/ccbluex/liquidbounce/utils/block/BlockExtensions.kt#L733 | src/main/kotlin/net/ccbluex/liquidbounce/utils/block/BlockExtensions.kt:733}
     */
    static isBlockedByEntitiesReturnCrystal(self: BlockPos, except: Entity | null, box: AABB, excludeIds: number[] | null): BooleanObjectPair<EndCrystal>;
    static isBreakable(self: BlockState, pos: BlockPos): boolean;
    static isCharged(self: RespawnAnchorBlock, state: BlockState): boolean;
    /**
     * Checks if the block can be interacted with, null will be returned as not interactable.
     * The {@link blockState} is optional but can make the result more accurate, if not provided
     * it will just assume the block is interactable.
     *
     * Note: The player is required to NOT be `null`.
     *
     * This data has been collected by looking at the implementations of {@link BlockBehaviour.useWithoutItem}.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a9cf2b145901ecd37d3f2a815c20cf0955e76853/src/main/kotlin/net/ccbluex/liquidbounce/utils/block/BlockExtensions.kt#L676 | src/main/kotlin/net/ccbluex/liquidbounce/utils/block/BlockExtensions.kt:676}
     */
    static isInteractable(self: Block | null, blockState: BlockState | null): boolean;
    static isInteractable(blockState: BlockState): boolean;
    static isNotBreakable(self: BlockState, pos: BlockPos): boolean;
    /**
     * Returns the block box outline of the block at the position. If the block is air, it will return an empty box.
     * Outline Box should be used for rendering purposes only.
     *
     * Returns {@link FULL_BOX} when block is air or does not exist.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a9cf2b145901ecd37d3f2a815c20cf0955e76853/src/main/kotlin/net/ccbluex/liquidbounce/utils/block/BlockExtensions.kt#L169 | src/main/kotlin/net/ccbluex/liquidbounce/utils/block/BlockExtensions.kt:169}
     */
    static outlineBox(self: BlockState, blockPos: BlockPos): AABB;
    /**
     * Basically {@link BlockGetter.raycast} but this method allows us to exclude blocks using {@link exclude}.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a9cf2b145901ecd37d3f2a815c20cf0955e76853/src/main/kotlin/net/ccbluex/liquidbounce/utils/block/BlockExtensions.kt#L318 | src/main/kotlin/net/ccbluex/liquidbounce/utils/block/BlockExtensions.kt:318}
     */
    static raycast(self: BlockGetter, context: ClipContext, exclude: BlockPos[] | null, include: BlockPos | null, maxBlastResistance: number | null): BlockHitResult;
    /**
     * Scan blocks outwards from a bed
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a9cf2b145901ecd37d3f2a815c20cf0955e76853/src/main/kotlin/net/ccbluex/liquidbounce/utils/block/BlockExtensions.kt#L251 | src/main/kotlin/net/ccbluex/liquidbounce/utils/block/BlockExtensions.kt:251}
     */
    static searchBedLayer(self: BlockPos, state: BlockState, layers: number): Sequence<IntLongPair>;
    /**
     * Scan blocks around the position in a cuboid with filtering.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a9cf2b145901ecd37d3f2a815c20cf0955e76853/src/main/kotlin/net/ccbluex/liquidbounce/utils/block/BlockExtensions.kt#L214 | src/main/kotlin/net/ccbluex/liquidbounce/utils/block/BlockExtensions.kt:214}
     */
    static searchBlocksInCuboid(self: Vec3, radius: number): BlockPos[];
    static searchBlocksInCuboid(self: Vec3, radius: number, filter: (param0: BlockPos, param1: BlockState) => boolean): Sequence<Pair<BlockPos, BlockState>>;
    /**
     * Scan blocks around the position in a cuboid, filtered and sorted by shape distance from this {@link Vec3}.
     * Distance calculation is based on outline shape:
     * `shapeGetter.get(state, level, pos, collisionContext).move(pos).distanceToSqr(eyesPos)`.
     *
     * @returns pairs of {@link BlockPos} and its {@link BlockState}, sorted by distance to the center
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a9cf2b145901ecd37d3f2a815c20cf0955e76853/src/main/kotlin/net/ccbluex/liquidbounce/utils/block/BlockExtensions.kt#L235 | src/main/kotlin/net/ccbluex/liquidbounce/utils/block/BlockExtensions.kt:235}
     */
    static searchBlocksInRangeSorted(self: Vec3, range: number, shapeGetter: ClipContext$ShapeGetter, collisionContext: CollisionContext, filter: (param0: BlockPos, param1: BlockState) => boolean): Pair<BlockPos, BlockState>[];
    /**
     * Scan blocks outwards from center along given {@link directions}, up to {@link layers}
     *
     * @returns The layer to the BlockPos (long value)
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a9cf2b145901ecd37d3f2a815c20cf0955e76853/src/main/kotlin/net/ccbluex/liquidbounce/utils/block/BlockExtensions.kt#L277 | src/main/kotlin/net/ccbluex/liquidbounce/utils/block/BlockExtensions.kt:277}
     */
    static searchLayer(self: BlockPos, layers: number, ...directions: Direction[]): Sequence<IntLongPair>;
    static toBlockPos(self: Vec3i): BlockPos;
}