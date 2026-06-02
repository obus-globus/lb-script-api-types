import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { IntFunction } from '../../../../../java/util/function/IntFunction.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FlammableBlockRegistry$Entry } from '../../../../../net/fabricmc/fabric/api/registry/FlammableBlockRegistry$Entry.d.ts'
import type { FireBlockHooks } from '../../../../../net/fabricmc/fabric/impl/content/registry/FireBlockHooks.d.ts'
import type { FlammableBlockRegistryImpl } from '../../../../../net/fabricmc/fabric/impl/content/registry/FlammableBlockRegistryImpl.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Direction } from '../../../../../net/minecraft/core/Direction.d.ts'
import type { ServerLevel } from '../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { RandomSource } from '../../../../../net/minecraft/util/RandomSource.d.ts'
import type { Entity } from '../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { Item } from '../../../../../net/minecraft/world/item/Item.d.ts'
import type { ItemInstance } from '../../../../../net/minecraft/world/item/ItemInstance.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { BlockPlaceContext } from '../../../../../net/minecraft/world/item/context/BlockPlaceContext.d.ts'
import type { BlockGetter } from '../../../../../net/minecraft/world/level/BlockGetter.d.ts'
import type { Level } from '../../../../../net/minecraft/world/level/Level.d.ts'
import type { LevelAccessor } from '../../../../../net/minecraft/world/level/LevelAccessor.d.ts'
import type { LevelReader } from '../../../../../net/minecraft/world/level/LevelReader.d.ts'
import type { ScheduledTickAccess } from '../../../../../net/minecraft/world/level/ScheduledTickAccess.d.ts'
import type { BaseFireBlock } from '../../../../../net/minecraft/world/level/block/BaseFireBlock.d.ts'
import type { Block } from '../../../../../net/minecraft/world/level/block/Block.d.ts'
import type { BlockEntity } from '../../../../../net/minecraft/world/level/block/entity/BlockEntity.d.ts'
import type { BlockBehaviour$Properties } from '../../../../../net/minecraft/world/level/block/state/BlockBehaviour$Properties.d.ts'
import type { BlockState } from '../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { StateDefinition$Builder } from '../../../../../net/minecraft/world/level/block/state/StateDefinition$Builder.d.ts'
import type { BooleanProperty } from '../../../../../net/minecraft/world/level/block/state/properties/BooleanProperty.d.ts'
import type { IntegerProperty } from '../../../../../net/minecraft/world/level/block/state/properties/IntegerProperty.d.ts'
import type { CollisionContext } from '../../../../../net/minecraft/world/phys/shapes/CollisionContext.d.ts'
import type { VoxelShape } from '../../../../../net/minecraft/world/phys/shapes/VoxelShape.d.ts'
export class FireBlock extends BaseFireBlock implements FireBlockHooks {
    static AGE: IntegerProperty;
    static BLOCK_STATE_REGISTRY: BlockState[];
    static CODEC: MapCodec<Block>;
    static CODEC: MapCodec<FireBlock>;
    static EAST: BooleanProperty;
    static FILTERED_REGISTRIES: (Object | null)[];
    static INDESTRUCTIBLE: number;
    static INSTANT: number;
    static MAX_AGE: number;
    static NORTH: BooleanProperty;
    static PROPERTY_BY_DIRECTION: { [key in Direction]: BooleanProperty };
    static SOUTH: BooleanProperty;
    static UP: BooleanProperty;
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
    static WEST: BooleanProperty;
    static bootStrap(): void;
    static box(paramminX: number, paramminY: number, paramminZ: number, parammaxX: number, parammaxY: number, parammaxZ: number): VoxelShape;
    static boxZ(paramsizeXY: number, paramminZ: number, parammaxZ: number): VoxelShape;
    static boxZ(paramsizeX: number, paramsizeY: number, paramminZ: number, parammaxZ: number): VoxelShape;
    static boxZ(paramsizeX: number, paramminY: number, parammaxY: number, paramminZ: number, parammaxZ: number): VoxelShape;
    static boxes(paramendInclusive: number, paramvoxelShapeFactory: (param0: VoxelShape) => unknown): (Object | null)[];
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
    static simpleCodec(paramconstructor: (param0: BlockBehaviour$Properties) => Object | null): MapCodec<Object>;
    static stateById(paramidWithData: number): BlockState;
    static updateFromNeighbourShapes(paramstate: BlockState, paramlevel: LevelAccessor, parampos: BlockPos): BlockState;
    static updateOrDestroy(paramblockState: BlockState, paramnewState: BlockState, paramlevel: LevelAccessor, paramblockPos: BlockPos, paramupdateFlags: number): void;
    static updateOrDestroy(paramblockState: BlockState, paramnewState: BlockState, paramlevel: LevelAccessor, paramblockPos: BlockPos, paramupdateFlags: number, paramupdateLimit: number): void;
    constructor(properties: BlockBehaviour$Properties)
    // private burnOdds: Object2IntMap<Block>;
    // private igniteOdds: Object2IntMap<Block>;
    // private registry: FlammableBlockRegistryImpl;
    // private shapes: (param0: BlockState) => VoxelShape;
    canBurn(state: BlockState): boolean;
    canSurvive(state: BlockState, level: LevelReader, pos: BlockPos): boolean;
    // private checkBurnOut(level: Level, pos: BlockPos, chance: number, random: RandomSource, age: number): void;
    codec(): MapCodec<FireBlock>;
    createBlockStateDefinition(builder: StateDefinition$Builder<Block, BlockState>): void;
    fabric_getVanillaEntry(arg0: BlockState): FlammableBlockRegistry$Entry;
    // private getBurnOdds(state: BlockState): number;
    // private getIgniteOdds(level: LevelReader, pos: BlockPos): number;
    // private getIgniteOdds(state: BlockState): number;
    getShape(state: BlockState, level: BlockGetter, pos: BlockPos, context: CollisionContext): VoxelShape;
    getStateForPlacement(context: BlockPlaceContext): BlockState;
    getStateForPlacement(level: BlockGetter, pos: BlockPos): BlockState;
    // private getStateWithAge(level: LevelReader, pos: BlockPos, age: number): BlockState;
    isNearRain(level: Level, testPos: BlockPos): boolean;
    // private isValidFireLocation(level: BlockGetter, pos: BlockPos): boolean;
    // private makeShapes(): (param0: BlockState) => VoxelShape;
    onPlace(state: BlockState, level: Level, pos: BlockPos, oldState: BlockState, movedByPiston: boolean): void;
    // private setFlammable(block: Block, igniteOdds: number, burnOdds: number): void;
    tick(state: BlockState, level: ServerLevel, pos: BlockPos, random: RandomSource): void;
    updateShape(state: BlockState, level: LevelReader, ticks: ScheduledTickAccess, pos: BlockPos, directionToNeighbour: Direction, neighbourPos: BlockPos, neighbourState: BlockState, random: RandomSource): BlockState;
}