import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { IntFunction } from '../../../../../java/util/function/IntFunction.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Direction } from '../../../../../net/minecraft/core/Direction.d.ts'
import type { ServerLevel } from '../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { RandomSource } from '../../../../../net/minecraft/util/RandomSource.d.ts'
import type { InteractionHand } from '../../../../../net/minecraft/world/InteractionHand.d.ts'
import type { InteractionResult } from '../../../../../net/minecraft/world/InteractionResult.d.ts'
import type { MenuProvider } from '../../../../../net/minecraft/world/MenuProvider.d.ts'
import type { Entity } from '../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { LivingEntity } from '../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { Player } from '../../../../../net/minecraft/world/entity/player/Player.d.ts'
import type { Item } from '../../../../../net/minecraft/world/item/Item.d.ts'
import type { ItemInstance } from '../../../../../net/minecraft/world/item/ItemInstance.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { BlockPlaceContext } from '../../../../../net/minecraft/world/item/context/BlockPlaceContext.d.ts'
import type { BlockGetter } from '../../../../../net/minecraft/world/level/BlockGetter.d.ts'
import type { Level } from '../../../../../net/minecraft/world/level/Level.d.ts'
import type { LevelAccessor } from '../../../../../net/minecraft/world/level/LevelAccessor.d.ts'
import type { LevelReader } from '../../../../../net/minecraft/world/level/LevelReader.d.ts'
import type { BaseEntityBlock } from '../../../../../net/minecraft/world/level/block/BaseEntityBlock.d.ts'
import type { Block } from '../../../../../net/minecraft/world/level/block/Block.d.ts'
import type { Mirror } from '../../../../../net/minecraft/world/level/block/Mirror.d.ts'
import type { Rotation } from '../../../../../net/minecraft/world/level/block/Rotation.d.ts'
import type { BlockEntity } from '../../../../../net/minecraft/world/level/block/entity/BlockEntity.d.ts'
import type { BlockBehaviour$Properties } from '../../../../../net/minecraft/world/level/block/state/BlockBehaviour$Properties.d.ts'
import type { BlockState } from '../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { StateDefinition$Builder } from '../../../../../net/minecraft/world/level/block/state/StateDefinition$Builder.d.ts'
import type { BooleanProperty } from '../../../../../net/minecraft/world/level/block/state/properties/BooleanProperty.d.ts'
import type { EnumProperty } from '../../../../../net/minecraft/world/level/block/state/properties/EnumProperty.d.ts'
import type { PathComputationType } from '../../../../../net/minecraft/world/level/pathfinder/PathComputationType.d.ts'
import type { BlockHitResult } from '../../../../../net/minecraft/world/phys/BlockHitResult.d.ts'
import type { CollisionContext } from '../../../../../net/minecraft/world/phys/shapes/CollisionContext.d.ts'
import type { VoxelShape } from '../../../../../net/minecraft/world/phys/shapes/VoxelShape.d.ts'
export class LecternBlock extends BaseEntityBlock {
    static BLOCK_STATE_REGISTRY: BlockState[];
    static CODEC: MapCodec<Block>;
    static CODEC: MapCodec<LecternBlock>;
    static FACING: EnumProperty<Direction>;
    static FILTERED_REGISTRIES: (Object | null)[];
    static HAS_BOOK: BooleanProperty;
    static INDESTRUCTIBLE: number;
    static INSTANT: number;
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
    static boxes(paramendInclusive: number, paramvoxelShapeFactory: (param0: VoxelShape) => unknown): (Object | null)[];
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
    static popResource(paramlevel: Level, parampos: BlockPos, paramitemStack: ItemStack): void;
    static popResourceFromFace(paramlevel: Level, parampos: BlockPos, paramface: Direction, paramitemStack: ItemStack): void;
    static pushEntitiesUp(paramstate: BlockState, paramnewState: BlockState, paramlevel: LevelAccessor, parampos: BlockPos): BlockState;
    static resetBookState(paramsourceEntity: Entity, paramlevel: Level, parampos: BlockPos, paramstate: BlockState, paramhasBook: boolean): void;
    static shouldRenderFace(paramstate: BlockState, paramneighborState: BlockState, paramdirection: Direction): boolean;
    static signalPageChange(paramlevel: Level, parampos: BlockPos, paramstate: BlockState): void;
    static simpleCodec(paramconstructor: (param0: BlockBehaviour$Properties) => Object | null): MapCodec<Object>;
    static stateById(paramidWithData: number): BlockState;
    static tryPlaceBook(paramsourceEntity: LivingEntity, paramlevel: Level, parampos: BlockPos, paramstate: BlockState, paramitem: ItemStack): boolean;
    static updateFromNeighbourShapes(paramstate: BlockState, paramlevel: LevelAccessor, parampos: BlockPos): BlockState;
    static updateOrDestroy(paramblockState: BlockState, paramnewState: BlockState, paramlevel: LevelAccessor, paramblockPos: BlockPos, paramupdateFlags: number): void;
    static updateOrDestroy(paramblockState: BlockState, paramnewState: BlockState, paramlevel: LevelAccessor, paramblockPos: BlockPos, paramupdateFlags: number, paramupdateLimit: number): void;
    constructor(properties: BlockBehaviour$Properties)
    affectNeighborsAfterRemoval(state: BlockState, level: ServerLevel, pos: BlockPos, movedByPiston: boolean): void;
    codec(): MapCodec<LecternBlock>;
    createBlockStateDefinition(builder: StateDefinition$Builder<Block, BlockState>): void;
    getAnalogOutputSignal(state: BlockState, level: Level, pos: BlockPos, direction: Direction): number;
    getCollisionShape(state: BlockState, level: BlockGetter, pos: BlockPos, context: CollisionContext): VoxelShape;
    getDirectSignal(state: BlockState, level: BlockGetter, pos: BlockPos, direction: Direction): number;
    getMenuProvider(state: BlockState, level: Level, pos: BlockPos): MenuProvider;
    getOcclusionShape(state: BlockState): VoxelShape;
    getShape(state: BlockState, level: BlockGetter, pos: BlockPos, context: CollisionContext): VoxelShape;
    getSignal(state: BlockState, level: BlockGetter, pos: BlockPos, direction: Direction): number;
    getStateForPlacement(context: BlockPlaceContext): BlockState;
    hasAnalogOutputSignal(state: BlockState): boolean;
    isPathfindable(state: BlockState, type: PathComputationType): boolean;
    isSignalSource(state: BlockState): boolean;
    mirror(state: BlockState, mirror: Mirror): BlockState;
    newBlockEntity(worldPosition: BlockPos, blockState: BlockState): BlockEntity;
    // private openScreen(level: Level, pos: BlockPos, player: Player): void;
    rotate(state: BlockState, rotation: Rotation): BlockState;
    tick(state: BlockState, level: ServerLevel, pos: BlockPos, random: RandomSource): void;
    useItemOn(itemStack: ItemStack, state: BlockState, level: Level, pos: BlockPos, player: Player, hand: InteractionHand, hitResult: BlockHitResult): InteractionResult;
    useShapeForLightOcclusion(state: BlockState): boolean;
    useWithoutItem(state: BlockState, level: Level, pos: BlockPos, player: Player, hitResult: BlockHitResult): InteractionResult;
}