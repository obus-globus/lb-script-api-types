import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FluidVariant } from '../../../../../net/fabricmc/fabric/api/transfer/v1/fluid/FluidVariant.d.ts'
import type { FluidVariantCache } from '../../../../../net/fabricmc/fabric/impl/transfer/fluid/FluidVariantCache.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Direction } from '../../../../../net/minecraft/core/Direction.d.ts'
import type { Holder$Reference } from '../../../../../net/minecraft/core/Holder$Reference.d.ts'
import type { ParticleOptions } from '../../../../../net/minecraft/core/particles/ParticleOptions.d.ts'
import type { ServerLevel } from '../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { SoundEvent } from '../../../../../net/minecraft/sounds/SoundEvent.d.ts'
import type { TagKey } from '../../../../../net/minecraft/tags/TagKey.d.ts'
import type { RandomSource } from '../../../../../net/minecraft/util/RandomSource.d.ts'
import type { Entity } from '../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { InsideBlockEffectApplier } from '../../../../../net/minecraft/world/entity/InsideBlockEffectApplier.d.ts'
import type { Item } from '../../../../../net/minecraft/world/item/Item.d.ts'
import type { BlockGetter } from '../../../../../net/minecraft/world/level/BlockGetter.d.ts'
import type { Level } from '../../../../../net/minecraft/world/level/Level.d.ts'
import type { LevelReader } from '../../../../../net/minecraft/world/level/LevelReader.d.ts'
import type { BlockState } from '../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { StateDefinition } from '../../../../../net/minecraft/world/level/block/state/StateDefinition.d.ts'
import type { StateDefinition$Builder } from '../../../../../net/minecraft/world/level/block/state/StateDefinition$Builder.d.ts'
import type { FluidState } from '../../../../../net/minecraft/world/level/material/FluidState.d.ts'
import type { AABB } from '../../../../../net/minecraft/world/phys/AABB.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
import type { VoxelShape } from '../../../../../net/minecraft/world/phys/shapes/VoxelShape.d.ts'
export abstract class Fluid extends Object implements FluidVariantCache {
    static FLUID_STATE_REGISTRY: FluidState[];
    constructor()
    // private builtInRegistryHolder: Holder$Reference<Fluid>;
    // private cachedFluidVariant: FluidVariant;
    // private defaultFluidState: FluidState;
    readonly stateDefinition: StateDefinition<Fluid, FluidState>;
    animateTick(level: Level, pos: BlockPos, fluidState: FluidState, random: RandomSource): void;
    builtInRegistryHolder(): Holder$Reference<Fluid>;
    canBeReplacedWith(state: FluidState, level: BlockGetter, pos: BlockPos, other: Fluid, direction: Direction): boolean;
    createFluidStateDefinition(builder: StateDefinition$Builder<Fluid, FluidState>): void;
    createLegacyBlock(fluidState: FluidState): BlockState;
    defaultFluidState(): FluidState;
    entityInside(level: Level, pos: BlockPos, entity: Entity, effectApplier: InsideBlockEffectApplier): void;
    fabric_getCachedFluidVariant(): FluidVariant;
    getAABB(state: FluidState, level: BlockGetter, pos: BlockPos): AABB;
    getAmount(fluidState: FluidState): number;
    getBucket(): Item;
    getDripParticle(): ParticleOptions;
    getExplosionResistance(): number;
    getFlow(level: BlockGetter, pos: BlockPos, fluidState: FluidState): Vec3;
    getHeight(fluidState: FluidState, level: BlockGetter, pos: BlockPos): number;
    getOwnHeight(fluidState: FluidState): number;
    getPickupSound(): Optional<SoundEvent>;
    getShape(state: FluidState, level: BlockGetter, pos: BlockPos): VoxelShape;
    getStateDefinition(): StateDefinition<Fluid, FluidState>;
    getTickDelay(level: LevelReader): number;
    is(tag: TagKey<Fluid>): boolean;
    isEmpty(): boolean;
    isRandomlyTicking(): boolean;
    isSame(other: Fluid): boolean;
    isSource(fluidState: FluidState): boolean;
    randomTick(level: ServerLevel, pos: BlockPos, fluidState: FluidState, random: RandomSource): void;
    registerDefaultState(state: FluidState): void;
    tick(level: ServerLevel, pos: BlockPos, blockState: BlockState, fluidState: FluidState): void;
}