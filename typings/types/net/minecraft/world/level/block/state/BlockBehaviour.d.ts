import type { MapCodec } from '../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Optional } from '../../../../../../java/util/Optional.d.ts'
import type { BiConsumer } from '../../../../../../java/util/function/BiConsumer.d.ts'
import type { Function } from '../../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ShapeUpdateHandlingBlockBehaviour } from '../../../../../../net/caffeinemc/mods/lithium/common/block/entity/ShapeUpdateHandlingBlockBehaviour.d.ts'
import type { BlockBehaviourAccessor } from '../../../../../../net/fabricmc/fabric/mixin/content/registry/BlockBehaviourAccessor.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Direction } from '../../../../../../net/minecraft/core/Direction.d.ts'
import type { ResourceKey } from '../../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { ServerLevel } from '../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { RandomSource } from '../../../../../../net/minecraft/util/RandomSource.d.ts'
import type { InteractionHand } from '../../../../../../net/minecraft/world/InteractionHand.d.ts'
import type { InteractionResult } from '../../../../../../net/minecraft/world/InteractionResult.d.ts'
import type { MenuProvider } from '../../../../../../net/minecraft/world/MenuProvider.d.ts'
import type { Entity } from '../../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { InsideBlockEffectApplier } from '../../../../../../net/minecraft/world/entity/InsideBlockEffectApplier.d.ts'
import type { Player } from '../../../../../../net/minecraft/world/entity/player/Player.d.ts'
import type { Projectile } from '../../../../../../net/minecraft/world/entity/projectile/Projectile.d.ts'
import type { FeatureElement } from '../../../../../../net/minecraft/world/flag/FeatureElement.d.ts'
import type { FeatureFlagSet } from '../../../../../../net/minecraft/world/flag/FeatureFlagSet.d.ts'
import type { Item } from '../../../../../../net/minecraft/world/item/Item.d.ts'
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
import type { BlockBehaviour$Properties } from '../../../../../../net/minecraft/world/level/block/state/BlockBehaviour$Properties.d.ts'
import type { BlockState } from '../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { Fluid } from '../../../../../../net/minecraft/world/level/material/Fluid.d.ts'
import type { FluidState } from '../../../../../../net/minecraft/world/level/material/FluidState.d.ts'
import type { MapColor } from '../../../../../../net/minecraft/world/level/material/MapColor.d.ts'
import type { PathComputationType } from '../../../../../../net/minecraft/world/level/pathfinder/PathComputationType.d.ts'
import type { Orientation } from '../../../../../../net/minecraft/world/level/redstone/Orientation.d.ts'
import type { LootParams$Builder } from '../../../../../../net/minecraft/world/level/storage/loot/LootParams$Builder.d.ts'
import type { LootTable } from '../../../../../../net/minecraft/world/level/storage/loot/LootTable.d.ts'
import type { BlockHitResult } from '../../../../../../net/minecraft/world/phys/BlockHitResult.d.ts'
import type { CollisionContext } from '../../../../../../net/minecraft/world/phys/shapes/CollisionContext.d.ts'
import type { VoxelShape } from '../../../../../../net/minecraft/world/phys/shapes/VoxelShape.d.ts'
export abstract class BlockBehaviour extends Object implements ShapeUpdateHandlingBlockBehaviour, BlockBehaviourAccessor, FeatureElement {
    static FILTERED_REGISTRIES: ResourceKey<FeatureElement[]>[];
    static simpleCodec(paramconstructor: (param0: BlockBehaviour$Properties) => Block | null): MapCodec<Block>;
    constructor(properties: BlockBehaviour$Properties)
    readonly descriptionId: string;
    // private drops: Optional<ResourceKey<LootTable>>;
    // private dynamicShape: boolean;
    // private explosionResistance: number;
    // private friction: number;
    // private hasCollision: boolean;
    // private isRandomlyTicking: boolean;
    // private jumpFactor: number;
    // private properties: BlockBehaviour$Properties;
    // private requiredFeatures: FeatureFlagSet;
    // private soundType: SoundType;
    speedFactor: number;
    affectNeighborsAfterRemoval(state: BlockState, level: ServerLevel, pos: BlockPos, movedByPiston: boolean): void;
    asBlock(): Block;
    asItem(): Item;
    attack(state: BlockState, level: Level, pos: BlockPos, player: Player): void;
    callIsRandomlyTicking(arg0: BlockState): boolean;
    canBeReplaced(state: BlockState, context: BlockPlaceContext): boolean;
    canBeReplaced(state: BlockState, fluid: Fluid): boolean;
    canSurvive(state: BlockState, level: LevelReader, pos: BlockPos): boolean;
    codec(): MapCodec<Block>;
    defaultDestroyTime(): number;
    defaultMapColor(): MapColor;
    entityInside(state: BlockState, level: Level, pos: BlockPos, entity: Entity, effectApplier: InsideBlockEffectApplier, isPrecise: boolean): void;
    getAnalogOutputSignal(state: BlockState, level: Level, pos: BlockPos, direction: Direction): number;
    getBlockSupportShape(state: BlockState, level: BlockGetter, pos: BlockPos): VoxelShape;
    getCloneItemStack(level: LevelReader, pos: BlockPos, state: BlockState, includeData: boolean): ItemStack;
    getCollisionShape(state: BlockState, level: BlockGetter, pos: BlockPos, context: CollisionContext): VoxelShape;
    getDescriptionId(): string;
    getDestroyProgress(state: BlockState, player: Player, level: BlockGetter, pos: BlockPos): number;
    getDirectSignal(state: BlockState, level: BlockGetter, pos: BlockPos, direction: Direction): number;
    getDrops(state: BlockState, params: LootParams$Builder): ItemStack[];
    getEntityInsideCollisionShape(state: BlockState, level: BlockGetter, pos: BlockPos, entity: Entity): VoxelShape;
    getFluidState(state: BlockState): FluidState;
    getInteractionShape(state: BlockState, level: BlockGetter, pos: BlockPos): VoxelShape;
    getLightDampening(state: BlockState): number;
    getLootTable(): Optional<ResourceKey<LootTable>>;
    getMaxHorizontalOffset(): number;
    getMaxVerticalOffset(): number;
    getMenuProvider(state: BlockState, level: Level, pos: BlockPos): MenuProvider;
    getOcclusionShape(state: BlockState): VoxelShape;
    getRenderShape(state: BlockState): RenderShape;
    getSeed(state: BlockState, pos: BlockPos): number;
    getShadeBrightness(state: BlockState, level: BlockGetter, pos: BlockPos): number;
    getShape(state: BlockState, level: BlockGetter, pos: BlockPos, context: CollisionContext): VoxelShape;
    getSignal(state: BlockState, level: BlockGetter, pos: BlockPos, direction: Direction): number;
    getSoundType(state: BlockState): SoundType;
    getVisualShape(state: BlockState, level: BlockGetter, pos: BlockPos, context: CollisionContext): VoxelShape;
    hasAnalogOutputSignal(state: BlockState): boolean;
    isCollisionShapeFullBlock(state: BlockState, level: BlockGetter, pos: BlockPos): boolean;
    isEnabled(enabledFeatures: FeatureFlagSet): boolean;
    isPathfindable(state: BlockState, type: PathComputationType): boolean;
    isRandomlyTicking(state: BlockState): boolean;
    isSignalSource(state: BlockState): boolean;
    lithium$handleShapeUpdate(arg0: LevelReader, arg1: BlockState, arg2: BlockPos, arg3: BlockPos, arg4: BlockState): void;
    mirror(state: BlockState, mirror: Mirror): BlockState;
    neighborChanged(state: BlockState, level: Level, pos: BlockPos, block: Block, orientation: Orientation, movedByPiston: boolean): void;
    onExplosionHit(state: BlockState, level: ServerLevel, pos: BlockPos, explosion: Explosion, onHit: (param0: ItemStack, param1: BlockPos) => void): void;
    onPlace(state: BlockState, level: Level, pos: BlockPos, oldState: BlockState, movedByPiston: boolean): void;
    onProjectileHit(level: Level, state: BlockState, blockHit: BlockHitResult, projectile: Projectile): void;
    propagatesSkylightDown(state: BlockState): boolean;
    properties(): BlockBehaviour$Properties;
    randomTick(state: BlockState, level: ServerLevel, pos: BlockPos, random: RandomSource): void;
    requiredFeatures(): FeatureFlagSet;
    rotate(state: BlockState, rotation: Rotation): BlockState;
    shouldChangedStateKeepBlockEntity(oldState: BlockState): boolean;
    skipRendering(state: BlockState, neighborState: BlockState, direction: Direction): boolean;
    spawnAfterBreak(state: BlockState, level: ServerLevel, pos: BlockPos, tool: ItemStack, dropExperience: boolean): void;
    tick(state: BlockState, level: ServerLevel, pos: BlockPos, random: RandomSource): void;
    triggerEvent(state: BlockState, level: Level, pos: BlockPos, b0: number, b1: number): boolean;
    updateIndirectNeighbourShapes(state: BlockState, level: LevelAccessor, pos: BlockPos, updateFlags: number, updateLimit: number): void;
    updateShape(state: BlockState, level: LevelReader, ticks: ScheduledTickAccess, pos: BlockPos, directionToNeighbour: Direction, neighbourPos: BlockPos, neighbourState: BlockState, random: RandomSource): BlockState;
    useItemOn(itemStack: ItemStack, state: BlockState, level: Level, pos: BlockPos, player: Player, hand: InteractionHand, hitResult: BlockHitResult): InteractionResult;
    useShapeForLightOcclusion(state: BlockState): boolean;
    useWithoutItem(state: BlockState, level: Level, pos: BlockPos, player: Player, hitResult: BlockHitResult): InteractionResult;
}