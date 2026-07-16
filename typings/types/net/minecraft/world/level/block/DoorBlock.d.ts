import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { BiConsumer } from '../../../../../java/util/function/BiConsumer.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { IntFunction } from '../../../../../java/util/function/IntFunction.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Direction } from '../../../../../net/minecraft/core/Direction.d.ts'
import type { ResourceKey } from '../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { ServerLevel } from '../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { RandomSource } from '../../../../../net/minecraft/util/RandomSource.d.ts'
import type { InteractionResult } from '../../../../../net/minecraft/world/InteractionResult.d.ts'
import type { Entity } from '../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { LivingEntity } from '../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { Player } from '../../../../../net/minecraft/world/entity/player/Player.d.ts'
import type { FeatureElement } from '../../../../../net/minecraft/world/flag/FeatureElement.d.ts'
import type { Item } from '../../../../../net/minecraft/world/item/Item.d.ts'
import type { ItemInstance } from '../../../../../net/minecraft/world/item/ItemInstance.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { BlockPlaceContext } from '../../../../../net/minecraft/world/item/context/BlockPlaceContext.d.ts'
import type { BlockGetter } from '../../../../../net/minecraft/world/level/BlockGetter.d.ts'
import type { Explosion } from '../../../../../net/minecraft/world/level/Explosion.d.ts'
import type { Level } from '../../../../../net/minecraft/world/level/Level.d.ts'
import type { LevelAccessor } from '../../../../../net/minecraft/world/level/LevelAccessor.d.ts'
import type { LevelReader } from '../../../../../net/minecraft/world/level/LevelReader.d.ts'
import type { ScheduledTickAccess } from '../../../../../net/minecraft/world/level/ScheduledTickAccess.d.ts'
import type { Block } from '../../../../../net/minecraft/world/level/block/Block.d.ts'
import type { Mirror } from '../../../../../net/minecraft/world/level/block/Mirror.d.ts'
import type { Rotation } from '../../../../../net/minecraft/world/level/block/Rotation.d.ts'
import type { BlockEntity } from '../../../../../net/minecraft/world/level/block/entity/BlockEntity.d.ts'
import type { BlockBehaviour$Properties } from '../../../../../net/minecraft/world/level/block/state/BlockBehaviour$Properties.d.ts'
import type { BlockState } from '../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { StateDefinition$Builder } from '../../../../../net/minecraft/world/level/block/state/StateDefinition$Builder.d.ts'
import type { BlockSetType } from '../../../../../net/minecraft/world/level/block/state/properties/BlockSetType.d.ts'
import type { BooleanProperty } from '../../../../../net/minecraft/world/level/block/state/properties/BooleanProperty.d.ts'
import type { DoorHingeSide } from '../../../../../net/minecraft/world/level/block/state/properties/DoorHingeSide.d.ts'
import type { DoubleBlockHalf } from '../../../../../net/minecraft/world/level/block/state/properties/DoubleBlockHalf.d.ts'
import type { EnumProperty } from '../../../../../net/minecraft/world/level/block/state/properties/EnumProperty.d.ts'
import type { PathComputationType } from '../../../../../net/minecraft/world/level/pathfinder/PathComputationType.d.ts'
import type { Orientation } from '../../../../../net/minecraft/world/level/redstone/Orientation.d.ts'
import type { BlockHitResult } from '../../../../../net/minecraft/world/phys/BlockHitResult.d.ts'
import type { CollisionContext } from '../../../../../net/minecraft/world/phys/shapes/CollisionContext.d.ts'
import type { VoxelShape } from '../../../../../net/minecraft/world/phys/shapes/VoxelShape.d.ts'
export class DoorBlock extends Block {
    static BLOCK_STATE_REGISTRY: BlockState[];
    static CODEC: MapCodec<DoorBlock>;
    static FACING: EnumProperty<Direction>;
    static FILTERED_REGISTRIES: ResourceKey<FeatureElement[]>[];
    static HALF: EnumProperty<DoubleBlockHalf>;
    static HINGE: EnumProperty<DoorHingeSide>;
    static INDESTRUCTIBLE: number;
    static INSTANT: number;
    static OPEN: BooleanProperty;
    static POWERED: BooleanProperty;
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
    static canSupportCenter(paramlevel: LevelReader, parambelowPos: BlockPos, paramdirection: Direction): boolean;
    static canSupportRigidBlock(paramlevel: BlockGetter, parambelow: BlockPos): boolean;
    static column(paramsizeXZ: number, paramminY: number, parammaxY: number): VoxelShape;
    static column(paramsizeX: number, paramsizeZ: number, paramminY: number, parammaxY: number): VoxelShape;
    static cube(paramsize: number): VoxelShape;
    static cube(paramsizeX: number, paramsizeY: number, paramsizeZ: number): VoxelShape;
    static dropResources(paramstate: BlockState, paramlevel: Level, parampos: BlockPos): void;
    static dropResources(paramstate: BlockState, paramlevel: Level, parampos: BlockPos, paramblockEntity: BlockEntity, parambreaker: Entity, paramtool: ItemStack): void;
    static dropResources(paramstate: BlockState, paramlevel: LevelAccessor, parampos: BlockPos, paramblockEntity: BlockEntity): void;
    static getDrops(paramstate: BlockState, paramlevel: ServerLevel, parampos: BlockPos, paramblockEntity: BlockEntity): ItemStack[];
    static getDrops(paramstate: BlockState, paramlevel: ServerLevel, parampos: BlockPos, paramblockEntity: BlockEntity, parambreaker: Entity, paramtool: ItemInstance): ItemStack[];
    static getId(paramblockState: BlockState): number;
    static isExceptionForConnection(paramstate: BlockState): boolean;
    static isFaceFull(paramshape: VoxelShape, paramdirection: Direction): boolean;
    static isShapeFullBlock(paramarg0: VoxelShape): boolean;
    static isWoodenDoor(paramlevel: Level, parampos: BlockPos): boolean;
    static isWoodenDoor(paramstate: BlockState): boolean;
    static popResource(paramlevel: Level, parampos: BlockPos, paramitemStack: ItemStack): void;
    static popResourceFromFace(paramlevel: Level, parampos: BlockPos, paramface: Direction, paramitemStack: ItemStack): void;
    static pushEntitiesUp(paramstate: BlockState, paramnewState: BlockState, paramlevel: LevelAccessor, parampos: BlockPos): BlockState;
    static shouldRenderFace(paramstate: BlockState, paramneighborState: BlockState, paramdirection: Direction): boolean;
    static simpleCodec<B extends Block>(paramconstructor: (param0: BlockBehaviour$Properties) => B): MapCodec<B>;
    static stateById(paramidWithData: number): BlockState;
    static updateFromNeighbourShapes(paramstate: BlockState, paramlevel: LevelAccessor, parampos: BlockPos): BlockState;
    static updateOrDestroy(paramblockState: BlockState, paramnewState: BlockState, paramlevel: LevelAccessor, paramblockPos: BlockPos, paramupdateFlags: number): void;
    static updateOrDestroy(paramblockState: BlockState, paramnewState: BlockState, paramlevel: LevelAccessor, paramblockPos: BlockPos, paramupdateFlags: number, paramupdateLimit: number): void;
    constructor(type: BlockSetType, properties: BlockBehaviour$Properties)
    // private type: BlockSetType;
    canSurvive(state: BlockState, level: LevelReader, pos: BlockPos): boolean;
    codec(): MapCodec<DoorBlock>;
    createBlockStateDefinition(builder: StateDefinition$Builder<Block, BlockState>): void;
    // private getHinge(context: BlockPlaceContext): DoorHingeSide;
    getOcclusionShape(arg0: BlockState): VoxelShape;
    getSeed(state: BlockState, pos: BlockPos): number;
    getShape(state: BlockState, level: BlockGetter, pos: BlockPos, context: CollisionContext): VoxelShape;
    getStateForPlacement(context: BlockPlaceContext): BlockState;
    isOpen(state: BlockState): boolean;
    isPathfindable(state: BlockState, type: PathComputationType): boolean;
    mirror(state: BlockState, mirror: Mirror): BlockState;
    neighborChanged(state: BlockState, level: Level, pos: BlockPos, block: Block, orientation: Orientation, movedByPiston: boolean): void;
    onExplosionHit(state: BlockState, level: ServerLevel, pos: BlockPos, explosion: Explosion, onHit: (param0: ItemStack, param1: BlockPos) => void): void;
    // private playSound(entity: Entity, level: Level, pos: BlockPos, open: boolean): void;
    playerWillDestroy(level: Level, pos: BlockPos, state: BlockState, player: Player): BlockState;
    rotate(state: BlockState, rotation: Rotation): BlockState;
    setOpen(sourceEntity: Entity, level: Level, state: BlockState, pos: BlockPos, shouldOpen: boolean): void;
    setPlacedBy(level: Level, pos: BlockPos, state: BlockState, by: LivingEntity, itemStack: ItemStack): void;
    type(): BlockSetType;
    updateShape(state: BlockState, level: LevelReader, ticks: ScheduledTickAccess, pos: BlockPos, directionToNeighbour: Direction, neighbourPos: BlockPos, neighbourState: BlockState, random: RandomSource): BlockState;
    useWithoutItem(state: BlockState, level: Level, pos: BlockPos, player: Player, hitResult: BlockHitResult): InteractionResult;
}