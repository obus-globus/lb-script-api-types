import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Direction } from '../../../../../net/minecraft/core/Direction.d.ts'
import type { ParticleOptions } from '../../../../../net/minecraft/core/particles/ParticleOptions.d.ts'
import type { ServerLevel } from '../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { SoundEvent } from '../../../../../net/minecraft/sounds/SoundEvent.d.ts'
import type { RandomSource } from '../../../../../net/minecraft/util/RandomSource.d.ts'
import type { Entity } from '../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { InsideBlockEffectApplier } from '../../../../../net/minecraft/world/entity/InsideBlockEffectApplier.d.ts'
import type { Item } from '../../../../../net/minecraft/world/item/Item.d.ts'
import type { BlockGetter } from '../../../../../net/minecraft/world/level/BlockGetter.d.ts'
import type { Level } from '../../../../../net/minecraft/world/level/Level.d.ts'
import type { LevelAccessor } from '../../../../../net/minecraft/world/level/LevelAccessor.d.ts'
import type { LevelReader } from '../../../../../net/minecraft/world/level/LevelReader.d.ts'
import type { BlockState } from '../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { BooleanProperty } from '../../../../../net/minecraft/world/level/block/state/properties/BooleanProperty.d.ts'
import type { IntegerProperty } from '../../../../../net/minecraft/world/level/block/state/properties/IntegerProperty.d.ts'
import type { FlowingFluid } from '../../../../../net/minecraft/world/level/material/FlowingFluid.d.ts'
import type { Fluid } from '../../../../../net/minecraft/world/level/material/Fluid.d.ts'
import type { FluidState } from '../../../../../net/minecraft/world/level/material/FluidState.d.ts'
export abstract class WaterFluid extends FlowingFluid {
    static FALLING: BooleanProperty;
    static FLUID_STATE_REGISTRY: FluidState[];
    static LEVEL: IntegerProperty;
    constructor()
    animateTick(level: Level, pos: BlockPos, fluidState: FluidState, random: RandomSource): void;
    beforeDestroyingBlock(level: LevelAccessor, pos: BlockPos, state: BlockState): void;
    canBeReplacedWith(state: FluidState, level: BlockGetter, pos: BlockPos, other: Fluid, direction: Direction): boolean;
    canConvertToSource(level: ServerLevel): boolean;
    createLegacyBlock(fluidState: FluidState): BlockState;
    entityInside(level: Level, pos: BlockPos, entity: Entity, effectApplier: InsideBlockEffectApplier): void;
    getBucket(): Item;
    getDripParticle(): ParticleOptions;
    getDropOff(level: LevelReader): number;
    getExplosionResistance(): number;
    getFlowing(): Fluid;
    getFlowing(amount: number, falling: boolean): FluidState;
    getPickupSound(): Optional<SoundEvent>;
    getSlopeFindDistance(level: LevelReader): number;
    getSource(): Fluid;
    getSource(falling: boolean): FluidState;
    getTickDelay(level: LevelReader): number;
    isSame(other: Fluid): boolean;
}