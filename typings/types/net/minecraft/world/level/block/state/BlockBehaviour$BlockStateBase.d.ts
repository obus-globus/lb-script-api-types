import type { BiConsumer } from '../../../../../../java/util/function/BiConsumer.d.ts'
import type { Predicate } from '../../../../../../java/util/function/Predicate.d.ts'
import type { Stream } from '../../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../../java/lang/Comparable.d.ts'
import type { BlockStateFlagHolder } from '../../../../../../net/caffeinemc/mods/lithium/common/block/BlockStateFlagHolder.d.ts'
import type { OxidizableBlocksRegistryImpl$RandomTickCacheRefresher } from '../../../../../../net/fabricmc/fabric/impl/content/registry/OxidizableBlocksRegistryImpl$RandomTickCacheRefresher.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Direction } from '../../../../../../net/minecraft/core/Direction.d.ts'
import type { Holder } from '../../../../../../net/minecraft/core/Holder.d.ts'
import type { TypedInstance } from '../../../../../../net/minecraft/core/TypedInstance.d.ts'
import type { ResourceKey } from '../../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { ServerLevel } from '../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { TagKey } from '../../../../../../net/minecraft/tags/TagKey.d.ts'
import type { RandomSource } from '../../../../../../net/minecraft/util/RandomSource.d.ts'
import type { InteractionHand } from '../../../../../../net/minecraft/world/InteractionHand.d.ts'
import type { InteractionResult } from '../../../../../../net/minecraft/world/InteractionResult.d.ts'
import type { MenuProvider } from '../../../../../../net/minecraft/world/MenuProvider.d.ts'
import type { Entity } from '../../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { EntityType } from '../../../../../../net/minecraft/world/entity/EntityType.d.ts'
import type { InsideBlockEffectApplier } from '../../../../../../net/minecraft/world/entity/InsideBlockEffectApplier.d.ts'
import type { Player } from '../../../../../../net/minecraft/world/entity/player/Player.d.ts'
import type { Projectile } from '../../../../../../net/minecraft/world/entity/projectile/Projectile.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { BlockPlaceContext } from '../../../../../../net/minecraft/world/item/context/BlockPlaceContext.d.ts'
import type { BlockGetter } from '../../../../../../net/minecraft/world/level/BlockGetter.d.ts'
import type { Explosion } from '../../../../../../net/minecraft/world/level/Explosion.d.ts'
import type { Level } from '../../../../../../net/minecraft/world/level/Level.d.ts'
import type { LevelAccessor } from '../../../../../../net/minecraft/world/level/LevelAccessor.d.ts'
import type { LevelReader } from '../../../../../../net/minecraft/world/level/LevelReader.d.ts'
import type { ScheduledTickAccess } from '../../../../../../net/minecraft/world/level/ScheduledTickAccess.d.ts'
import type { Block } from '../../../../../../net/minecraft/world/level/block/Block.d.ts'
import type { Mirror } from '../../../../../../net/minecraft/world/level/block/Mirror.d.ts'
import type { RenderShape } from '../../../../../../net/minecraft/world/level/block/RenderShape.d.ts'
import type { Rotation } from '../../../../../../net/minecraft/world/level/block/Rotation.d.ts'
import type { SoundType } from '../../../../../../net/minecraft/world/level/block/SoundType.d.ts'
import type { SupportType } from '../../../../../../net/minecraft/world/level/block/SupportType.d.ts'
import type { BlockEntity } from '../../../../../../net/minecraft/world/level/block/entity/BlockEntity.d.ts'
import type { BlockEntityTicker } from '../../../../../../net/minecraft/world/level/block/entity/BlockEntityTicker.d.ts'
import type { BlockEntityType } from '../../../../../../net/minecraft/world/level/block/entity/BlockEntityType.d.ts'
import type { BlockBehaviour$BlockStateBase$Cache } from '../../../../../../net/minecraft/world/level/block/state/BlockBehaviour$BlockStateBase$Cache.d.ts'
import type { BlockBehaviour$OffsetFunction } from '../../../../../../net/minecraft/world/level/block/state/BlockBehaviour$OffsetFunction.d.ts'
import type { BlockBehaviour$PostProcess } from '../../../../../../net/minecraft/world/level/block/state/BlockBehaviour$PostProcess.d.ts'
import type { BlockBehaviour$StatePredicate } from '../../../../../../net/minecraft/world/level/block/state/BlockBehaviour$StatePredicate.d.ts'
import type { BlockState } from '../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { StateHolder } from '../../../../../../net/minecraft/world/level/block/state/StateHolder.d.ts'
import type { NoteBlockInstrument } from '../../../../../../net/minecraft/world/level/block/state/properties/NoteBlockInstrument.d.ts'
import type { Property } from '../../../../../../net/minecraft/world/level/block/state/properties/Property.d.ts'
import type { Fluid } from '../../../../../../net/minecraft/world/level/material/Fluid.d.ts'
import type { FluidState } from '../../../../../../net/minecraft/world/level/material/FluidState.d.ts'
import type { MapColor } from '../../../../../../net/minecraft/world/level/material/MapColor.d.ts'
import type { PushReaction } from '../../../../../../net/minecraft/world/level/material/PushReaction.d.ts'
import type { PathComputationType } from '../../../../../../net/minecraft/world/level/pathfinder/PathComputationType.d.ts'
import type { Orientation } from '../../../../../../net/minecraft/world/level/redstone/Orientation.d.ts'
import type { LootParams$Builder } from '../../../../../../net/minecraft/world/level/storage/loot/LootParams$Builder.d.ts'
import type { BlockHitResult } from '../../../../../../net/minecraft/world/phys/BlockHitResult.d.ts'
import type { Vec3 } from '../../../../../../net/minecraft/world/phys/Vec3.d.ts'
import type { CollisionContext } from '../../../../../../net/minecraft/world/phys/shapes/CollisionContext.d.ts'
import type { VoxelShape } from '../../../../../../net/minecraft/world/phys/shapes/VoxelShape.d.ts'
export abstract class BlockBehaviour$BlockStateBase extends StateHolder<Block, BlockState> implements BlockStateFlagHolder, OxidizableBlocksRegistryImpl$RandomTickCacheRefresher, TypedInstance<Block> {
    static NAME_TAG: string;
    static PROPERTIES_TAG: string;
    constructor(owner: Block, propertyKeys: Property<any>[], propertyValues: Comparable<Object>[])
    // private cache: BlockBehaviour$BlockStateBase$Cache;
    // private canOcclude: boolean;
    // private destroySpeed: number;
    // private emissiveRendering: (param0: BlockState, param1: BlockGetter, param2: BlockPos) => boolean;
    // private flags: number;
    readonly fluidState: FluidState;
    // private ignitedByLava: boolean;
    // private instrument: NoteBlockInstrument;
    // private isAir: boolean;
    // private isRandomlyTicking: boolean;
    // private isRedstoneConductor: (param0: BlockState, param1: BlockGetter, param2: BlockPos) => boolean;
    // private isSuffocating: (param0: BlockState, param1: BlockGetter, param2: BlockPos) => boolean;
    // private isViewBlocking: (param0: BlockState, param1: BlockGetter, param2: BlockPos) => boolean;
    // private legacySolid: boolean;
    readonly lightDampening: number;
    readonly lightEmission: number;
    // private liquid: boolean;
    // private mapColor: MapColor;
    readonly occlusionShape: VoxelShape;
    // private occlusionShapesByFace: VoxelShape[];
    // private offsetFunction: (param0: BlockState, param1: BlockPos) => Vec3;
    // private postProcess: (param0: BlockState, param1: BlockGetter, param2: BlockPos) => BlockPos;
    // private propagatesSkylightDown: boolean;
    // private pushReaction: PushReaction;
    // private replaceable: boolean;
    // private requiresCorrectToolForDrops: boolean;
    readonly solidRender: boolean;
    // private spawnTerrainParticles: boolean;
    // private useShapeForLightOcclusion: boolean;
    affectNeighborsAfterRemoval(level: ServerLevel, pos: BlockPos, movedByPiston: boolean): void;
    asState(): BlockState;
    attack(level: Level, pos: BlockPos, player: Player): void;
    blocksMotion(): boolean;
    // private calculateSolid(): boolean;
    canBeReplaced(): boolean;
    canBeReplaced(context: BlockPlaceContext): boolean;
    canBeReplaced(fluid: Fluid): boolean;
    canOcclude(): boolean;
    canSurvive(level: LevelReader, pos: BlockPos): boolean;
    emissiveRendering(level: BlockGetter, pos: BlockPos): boolean;
    entityCanStandOn(level: BlockGetter, pos: BlockPos, entity: Entity): boolean;
    entityCanStandOnFace(level: BlockGetter, pos: BlockPos, entity: Entity, faceDirection: Direction): boolean;
    entityInside(level: Level, pos: BlockPos, entity: Entity, effectApplier: InsideBlockEffectApplier, isPrecise: boolean): void;
    fabric_api$refreshRandomTickCache(): void;
    getAnalogOutputSignal(level: Level, pos: BlockPos, direction: Direction): number;
    getBlock(): Block;
    getBlockSupportShape(level: BlockGetter, pos: BlockPos): VoxelShape;
    getCloneItemStack(level: LevelReader, pos: BlockPos, includeData: boolean): ItemStack;
    getCollisionShape(level: BlockGetter, pos: BlockPos): VoxelShape;
    getCollisionShape(level: BlockGetter, pos: BlockPos, context: CollisionContext): VoxelShape;
    getDestroyProgress(player: Player, level: BlockGetter, pos: BlockPos): number;
    getDestroySpeed(level: BlockGetter, pos: BlockPos): number;
    getDirectSignal(level: BlockGetter, pos: BlockPos, direction: Direction): number;
    getDrops(params: LootParams$Builder): ItemStack[];
    getEntityInsideCollisionShape(level: BlockGetter, pos: BlockPos, entity: Entity): VoxelShape;
    getFaceOcclusionShape(direction: Direction): VoxelShape;
    getFluidState(): FluidState;
    getInteractionShape(level: BlockGetter, pos: BlockPos): VoxelShape;
    getLightDampening(): number;
    getLightEmission(): number;
    getMapColor(level: BlockGetter, pos: BlockPos): MapColor;
    getMenuProvider(level: Level, pos: BlockPos): MenuProvider;
    getOcclusionShape(): VoxelShape;
    getOffset(pos: BlockPos): Vec3;
    getPistonPushReaction(): PushReaction;
    getPostProcessPos(level: BlockGetter, pos: BlockPos): BlockPos;
    getRenderShape(): RenderShape;
    getSeed(pos: BlockPos): number;
    getShadeBrightness(level: BlockGetter, pos: BlockPos): number;
    getShape(level: BlockGetter, pos: BlockPos): VoxelShape;
    getShape(level: BlockGetter, pos: BlockPos, context: CollisionContext): VoxelShape;
    getSignal(level: BlockGetter, pos: BlockPos, direction: Direction): number;
    getSoundType(): SoundType;
    getTicker<T extends BlockEntity>(level: Level, type: BlockEntityType<T>): (param0: Level, param1: BlockPos, param2: BlockState, param3: T) => void;
    getVisualShape(level: BlockGetter, pos: BlockPos, context: CollisionContext): VoxelShape;
    handleNeighborChanged(level: Level, pos: BlockPos, block: Block, orientation: Orientation, movedByPiston: boolean): void;
    // private handleUninitializedBlockStateFlags(): number;
    hasAnalogOutputSignal(): boolean;
    hasBlockEntity(): boolean;
    hasLargeCollisionShape(): boolean;
    hasOffsetFunction(): boolean;
    ignitedByLava(): boolean;
    initCache(): void;
    instrument(): NoteBlockInstrument;
    is(rawType: Block): boolean;
    is(type: Holder<Block>): boolean;
    is(set: Holder<Block>[]): boolean;
    is(type: ResourceKey<Block>): boolean;
    is(tag: TagKey<Block>): boolean;
    is(tag: TagKey<Block>, predicate: (param0: BlockBehaviour$BlockStateBase) => boolean): boolean;
    isAir(): boolean;
    isCollisionShapeFullBlock(level: BlockGetter, pos: BlockPos): boolean;
    isFaceSturdy(level: BlockGetter, pos: BlockPos, direction: Direction): boolean;
    isFaceSturdy(level: BlockGetter, pos: BlockPos, direction: Direction, supportType: SupportType): boolean;
    isPathfindable(type: PathComputationType): boolean;
    isRandomlyTicking(): boolean;
    isRedstoneConductor(level: BlockGetter, pos: BlockPos): boolean;
    isSignalSource(): boolean;
    isSolid(): boolean;
    isSolidRender(): boolean;
    isSuffocating(level: BlockGetter, pos: BlockPos): boolean;
    isValidSpawn(level: BlockGetter, pos: BlockPos, type: EntityType<any>): boolean;
    isViewBlocking(level: BlockGetter, pos: BlockPos): boolean;
    liquid(): boolean;
    lithium$getAllFlags(): number;
    lithium$initializeFlags(): void;
    mirror(mirror: Mirror): BlockState;
    onExplosionHit(level: ServerLevel, pos: BlockPos, explosion: Explosion, onHit: (param0: ItemStack, param1: BlockPos) => void): void;
    onPlace(level: Level, pos: BlockPos, oldState: BlockState, movedByPiston: boolean): void;
    onProjectileHit(level: Level, state: BlockState, blockHit: BlockHitResult, entity: Projectile): void;
    propagatesSkylightDown(): boolean;
    randomTick(level: ServerLevel, pos: BlockPos, random: RandomSource): void;
    requiresCorrectToolForDrops(): boolean;
    rotate(rotation: Rotation): BlockState;
    shouldChangedStateKeepBlockEntity(oldState: BlockState): boolean;
    shouldSpawnTerrainParticles(): boolean;
    skipRendering(neighborState: BlockState, direction: Direction): boolean;
    spawnAfterBreak(level: ServerLevel, pos: BlockPos, tool: ItemStack, dropExperience: boolean): void;
    tags(): Stream<TagKey<Block>>;
    tick(level: ServerLevel, pos: BlockPos, random: RandomSource): void;
    triggerEvent(level: Level, pos: BlockPos, b0: number, b1: number): boolean;
    typeHolder(): Holder<Block>;
    updateIndirectNeighbourShapes(level: LevelAccessor, pos: BlockPos, updateFlags: number): void;
    updateIndirectNeighbourShapes(level: LevelAccessor, pos: BlockPos, updateFlags: number, updateLimit: number): void;
    updateNeighbourShapes(level: LevelAccessor, pos: BlockPos, updateFlags: number): void;
    updateNeighbourShapes(level: LevelAccessor, pos: BlockPos, updateFlags: number, updateLimit: number): void;
    updateShape(level: LevelReader, ticks: ScheduledTickAccess, pos: BlockPos, directionToNeighbour: Direction, neighbourPos: BlockPos, neighbourState: BlockState, random: RandomSource): BlockState;
    useItemOn(itemStack: ItemStack, level: Level, player: Player, hand: InteractionHand, hitResult: BlockHitResult): InteractionResult;
    useShapeForLightOcclusion(): boolean;
    useWithoutItem(level: Level, player: Player, hitResult: BlockHitResult): InteractionResult;
}