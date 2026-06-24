import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ChunkView } from '../../../../net/caffeinemc/mods/lithium/common/world/ChunkView.d.ts'
import type { BlockPos } from '../../../../net/minecraft/core/BlockPos.d.ts'
import type { Holder } from '../../../../net/minecraft/core/Holder.d.ts'
import type { Entity } from '../../../../net/minecraft/world/entity/Entity.d.ts'
import type { BlockGetter } from '../../../../net/minecraft/world/level/BlockGetter.d.ts'
import type { ClipContext } from '../../../../net/minecraft/world/level/ClipContext.d.ts'
import type { CollisionGetter } from '../../../../net/minecraft/world/level/CollisionGetter.d.ts'
import type { Level } from '../../../../net/minecraft/world/level/Level.d.ts'
import type { Biome } from '../../../../net/minecraft/world/level/biome/Biome.d.ts'
import type { BlockEntity } from '../../../../net/minecraft/world/level/block/entity/BlockEntity.d.ts'
import type { BlockEntityType } from '../../../../net/minecraft/world/level/block/entity/BlockEntityType.d.ts'
import type { BlockState } from '../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { WorldBorder } from '../../../../net/minecraft/world/level/border/WorldBorder.d.ts'
import type { ChunkAccess } from '../../../../net/minecraft/world/level/chunk/ChunkAccess.d.ts'
import type { FluidState } from '../../../../net/minecraft/world/level/material/FluidState.d.ts'
import type { AABB } from '../../../../net/minecraft/world/phys/AABB.d.ts'
import type { BlockHitResult } from '../../../../net/minecraft/world/phys/BlockHitResult.d.ts'
import type { Vec3 } from '../../../../net/minecraft/world/phys/Vec3.d.ts'
import type { CollisionContext } from '../../../../net/minecraft/world/phys/shapes/CollisionContext.d.ts'
import type { VoxelShape } from '../../../../net/minecraft/world/phys/shapes/VoxelShape.d.ts'
export class PathNavigationRegion extends Object implements ChunkView, CollisionGetter {
    constructor(level: Level, start: BlockPos, end: BlockPos)
    // private allEmpty: boolean;
    // private centerX: number;
    // private centerZ: number;
    // private chunks: ChunkAccess[][];
    // private level: Level;
    // private plains: () => Holder<Biome>;
    // private borderCollision(source: Entity, box: AABB): VoxelShape;
    clipIncludingBorder(c: ClipContext): BlockHitResult;
    collidesWithSuffocatingBlock(source: Entity, box: AABB): boolean;
    findFreePosition(source: Entity, allowedCenters: VoxelShape, preferredCenter: Vec3, sizeX: number, sizeY: number, sizeZ: number): Optional<Vec3>;
    findSupportingBlock(source: Entity, box: AABB): Optional<BlockPos>;
    getBlockAndLiquidCollisions(source: Entity, box: AABB): VoxelShape[];
    getBlockCollisions(source: Entity, box: AABB): VoxelShape[];
    getBlockCollisionsFromContext(source: CollisionContext, box: AABB): VoxelShape[];
    getBlockEntity(pos: BlockPos): BlockEntity;
    getBlockEntity<T extends BlockEntity>(pos: BlockPos, type: BlockEntityType<T>): Optional<T>;
    getBlockState(pos: BlockPos): BlockState;
    // private getChunk(chunkX: number, chunkZ: number): ChunkAccess;
    // private getChunk(pos: BlockPos): ChunkAccess;
    getChunkForCollisions(chunkX: number, chunkZ: number): BlockGetter;
    getCollisions(source: Entity, box: AABB): VoxelShape[];
    getEntityCollisions(source: Entity, testArea: AABB): VoxelShape[];
    getFluidState(pos: BlockPos): FluidState;
    getHeight(): number;
    getMinY(): number;
    getPreMoveCollisions(source: Entity, box: AABB, oldPos: Vec3): VoxelShape[];
    getWorldBorder(): WorldBorder;
    isUnobstructed(ignore: Entity): boolean;
    isUnobstructed(source: Entity, shape: VoxelShape): boolean;
    isUnobstructed(state: BlockState, pos: BlockPos, context: CollisionContext): boolean;
    lithium$getLoadedChunk(arg0: number, arg1: number): ChunkAccess;
    noBlockCollision(entity: Entity, aabb: AABB): boolean;
    noBlockCollision(entity: Entity, aabb: AABB, alwaysCollideWithFluids: boolean): boolean;
    noBorderCollision(entity: Entity, aabb: AABB): boolean;
    noCollision(source: Entity): boolean;
    noCollision(entity: Entity, aabb: AABB): boolean;
    noCollision(entity: Entity, aabb: AABB, alwaysCollideWithFluids: boolean): boolean;
    noCollision(aabb: AABB): boolean;
    noEntityCollision(entity: Entity, aabb: AABB): boolean;
}