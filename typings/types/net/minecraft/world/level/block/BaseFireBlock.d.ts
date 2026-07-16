import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { IntFunction } from '../../../../../java/util/function/IntFunction.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Direction } from '../../../../../net/minecraft/core/Direction.d.ts'
import type { ResourceKey } from '../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { ServerLevel } from '../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { RandomSource } from '../../../../../net/minecraft/util/RandomSource.d.ts'
import type { Entity } from '../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { InsideBlockEffectApplier } from '../../../../../net/minecraft/world/entity/InsideBlockEffectApplier.d.ts'
import type { Player } from '../../../../../net/minecraft/world/entity/player/Player.d.ts'
import type { FeatureElement } from '../../../../../net/minecraft/world/flag/FeatureElement.d.ts'
import type { Item } from '../../../../../net/minecraft/world/item/Item.d.ts'
import type { ItemInstance } from '../../../../../net/minecraft/world/item/ItemInstance.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { BlockPlaceContext } from '../../../../../net/minecraft/world/item/context/BlockPlaceContext.d.ts'
import type { BlockGetter } from '../../../../../net/minecraft/world/level/BlockGetter.d.ts'
import type { Level } from '../../../../../net/minecraft/world/level/Level.d.ts'
import type { LevelAccessor } from '../../../../../net/minecraft/world/level/LevelAccessor.d.ts'
import type { LevelReader } from '../../../../../net/minecraft/world/level/LevelReader.d.ts'
import type { Block } from '../../../../../net/minecraft/world/level/block/Block.d.ts'
import type { BlockEntity } from '../../../../../net/minecraft/world/level/block/entity/BlockEntity.d.ts'
import type { BlockBehaviour$Properties } from '../../../../../net/minecraft/world/level/block/state/BlockBehaviour$Properties.d.ts'
import type { BlockState } from '../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { CollisionContext } from '../../../../../net/minecraft/world/phys/shapes/CollisionContext.d.ts'
import type { VoxelShape } from '../../../../../net/minecraft/world/phys/shapes/VoxelShape.d.ts'
export abstract class BaseFireBlock extends Block {
    static BLOCK_STATE_REGISTRY: BlockState[];
    static CODEC: MapCodec<Block>;
    static FILTERED_REGISTRIES: ResourceKey<FeatureElement[]>[];
    static INDESTRUCTIBLE: number;
    static INSTANT: number;
    static UPDATE_ALL: number;
    static UPDATE_ALL_IMMEDIATE: number;
    static UPDATE_CLIENTS: number;
    static UPDATE_IMMEDIATE: number;
    static UPDATE_INVISIBLE: number;
    static UPDATE_KNOWN_SHAPE: number;
    static UPDATE_LIMIT: number;
    static UPDATE_MOVE_BY_PISTON: number;
    static UPDATE_NEIGHBORS: number;
    static UPDATE_NONE: number;
    static UPDATE_SKIP_ALL_SIDEEFFECTS: number;
    static UPDATE_SKIP_BLOCK_ENTITY_SIDEEFFECTS: number;
    static UPDATE_SKIP_ON_PLACE: number;
    static UPDATE_SKIP_SHAPE_UPDATE_ON_WIRE: number;
    static UPDATE_SUPPRESS_DROPS: number;
    static box(paramminX: number, paramminY: number, paramminZ: number, parammaxX: number, parammaxY: number, parammaxZ: number): VoxelShape;
    static boxZ(paramsizeXY: number, paramminZ: number, parammaxZ: number): VoxelShape;
    static boxZ(paramsizeX: number, paramsizeY: number, paramminZ: number, parammaxZ: number): VoxelShape;
    static boxZ(paramsizeX: number, paramminY: number, parammaxY: number, paramminZ: number, parammaxZ: number): VoxelShape;
    static boxes(paramendInclusive: number, paramvoxelShapeFactory: (param0: number) => VoxelShape): VoxelShape[];
    static byItem(paramitem: Item): Block;
    static canBePlacedAt(paramlevel: Level, parampos: BlockPos, paramforwardDirection: Direction): boolean;
    static canSupportCenter(paramlevel: LevelReader, parambelowPos: BlockPos, paramdirection: Direction): boolean;
    static canSupportRigidBlock(paramlevel: BlockGetter, parambelow: BlockPos): boolean;
    static column(paramsizeXZ: number, paramminY: number, parammaxY: number): VoxelShape;
    static column(paramsizeX: number, paramsizeZ: number, paramminY: number, parammaxY: number): VoxelShape;
    static cube(paramsize: number): VoxelShape;
    static cube(paramsizeX: number, paramsizeY: number, paramsizeZ: number): VoxelShape;
    static dropResources(paramstate: BlockState, paramlevel: Level, parampos: BlockPos): void;
    static dropResources(paramstate: BlockState, paramlevel: Level, parampos: BlockPos, paramblockEntity: BlockEntity, parambreaker: Entity, paramtool: ItemStack): void;
    static dropResources(paramstate: BlockState, paramlevel: LevelAccessor, parampos: BlockPos, paramblockEntity: BlockEntity): void;
    static fireIgnite(paramentity: Entity): void;
    static getDrops(paramstate: BlockState, paramlevel: ServerLevel, parampos: BlockPos, paramblockEntity: BlockEntity): ItemStack[];
    static getDrops(paramstate: BlockState, paramlevel: ServerLevel, parampos: BlockPos, paramblockEntity: BlockEntity, parambreaker: Entity, paramtool: ItemInstance): ItemStack[];
    static getId(paramblockState: BlockState): number;
    static getState(paramlevel: BlockGetter, parampos: BlockPos): BlockState;
    static isExceptionForConnection(paramstate: BlockState): boolean;
    static isFaceFull(paramshape: VoxelShape, paramdirection: Direction): boolean;
    static isShapeFullBlock(paramarg0: VoxelShape): boolean;
    static popResource(paramlevel: Level, parampos: BlockPos, paramitemStack: ItemStack): void;
    static popResourceFromFace(paramlevel: Level, parampos: BlockPos, paramface: Direction, paramitemStack: ItemStack): void;
    static pushEntitiesUp(paramstate: BlockState, paramnewState: BlockState, paramlevel: LevelAccessor, parampos: BlockPos): BlockState;
    static shouldRenderFace(paramstate: BlockState, paramneighborState: BlockState, paramdirection: Direction): boolean;
    static simpleCodec<B extends Block>(paramconstructor: (param0: BlockBehaviour$Properties) => B): MapCodec<B>;
    static stateById(paramidWithData: number): BlockState;
    static updateFromNeighbourShapes(paramstate: BlockState, paramlevel: LevelAccessor, parampos: BlockPos): BlockState;
    static updateOrDestroy(paramblockState: BlockState, paramnewState: BlockState, paramlevel: LevelAccessor, paramblockPos: BlockPos, paramupdateFlags: number): void;
    static updateOrDestroy(paramblockState: BlockState, paramnewState: BlockState, paramlevel: LevelAccessor, paramblockPos: BlockPos, paramupdateFlags: number, paramupdateLimit: number): void;
    constructor(properties: BlockBehaviour$Properties, fireDamage: number)
    // private fireDamage: number;
    animateTick(state: BlockState, level: Level, pos: BlockPos, random: RandomSource): void;
    canBurn(state: BlockState): boolean;
    codec(): MapCodec<BaseFireBlock>;
    entityInside(state: BlockState, level: Level, pos: BlockPos, entity: Entity, effectApplier: InsideBlockEffectApplier, isPrecise: boolean): void;
    getShape(state: BlockState, level: BlockGetter, pos: BlockPos, context: CollisionContext): VoxelShape;
    getStateForPlacement(context: BlockPlaceContext): BlockState;
    onPlace(state: BlockState, level: Level, pos: BlockPos, oldState: BlockState, movedByPiston: boolean): void;
    playerWillDestroy(level: Level, pos: BlockPos, state: BlockState, player: Player): BlockState;
    spawnDestroyParticles(level: Level, player: Player, pos: BlockPos, state: BlockState): void;
}