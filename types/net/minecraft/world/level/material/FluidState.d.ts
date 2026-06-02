import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Stream } from '../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../java/lang/Comparable.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Direction } from '../../../../../net/minecraft/core/Direction.d.ts'
import type { Holder } from '../../../../../net/minecraft/core/Holder.d.ts'
import type { TypedInstance } from '../../../../../net/minecraft/core/TypedInstance.d.ts'
import type { ParticleOptions } from '../../../../../net/minecraft/core/particles/ParticleOptions.d.ts'
import type { ResourceKey } from '../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { ServerLevel } from '../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { TagKey } from '../../../../../net/minecraft/tags/TagKey.d.ts'
import type { RandomSource } from '../../../../../net/minecraft/util/RandomSource.d.ts'
import type { Entity } from '../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { InsideBlockEffectApplier } from '../../../../../net/minecraft/world/entity/InsideBlockEffectApplier.d.ts'
import type { BlockGetter } from '../../../../../net/minecraft/world/level/BlockGetter.d.ts'
import type { Level } from '../../../../../net/minecraft/world/level/Level.d.ts'
import type { BlockState } from '../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { StateHolder } from '../../../../../net/minecraft/world/level/block/state/StateHolder.d.ts'
import type { Property } from '../../../../../net/minecraft/world/level/block/state/properties/Property.d.ts'
import type { Fluid } from '../../../../../net/minecraft/world/level/material/Fluid.d.ts'
import type { AABB } from '../../../../../net/minecraft/world/phys/AABB.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
import type { VoxelShape } from '../../../../../net/minecraft/world/phys/shapes/VoxelShape.d.ts'
export class FluidState extends StateHolder<Fluid, FluidState> implements TypedInstance<Fluid> {
    static AMOUNT_FULL: number;
    static AMOUNT_MAX: number;
    static CODEC: Codec<FluidState>;
    static NAME_TAG: string;
    static PROPERTIES_TAG: string;
    constructor(owner: Fluid, propertyKeys: Property<Object>[], propertyValues: Comparable<Object>[])
    // private isEmptyCache: boolean;
    animateTick(level: Level, pos: BlockPos, random: RandomSource): void;
    canBeReplacedWith(level: BlockGetter, pos: BlockPos, other: Fluid, direction: Direction): boolean;
    createLegacyBlock(): BlockState;
    entityInside(level: Level, pos: BlockPos, entity: Entity, effectApplier: InsideBlockEffectApplier): void;
    getAABB(level: BlockGetter, pos: BlockPos): AABB;
    getAmount(): number;
    getDripParticle(): ParticleOptions;
    getExplosionResistance(): number;
    getFlow(level: BlockGetter, pos: BlockPos): Vec3;
    getHeight(level: BlockGetter, pos: BlockPos): number;
    getOwnHeight(): number;
    getShape(level: BlockGetter, pos: BlockPos): VoxelShape;
    getType(): Fluid;
    is<T extends Object | number | string | boolean>(rawType: T): boolean;
    is(type: Holder<T>): boolean;
    is(set: Holder<T>[]): boolean;
    is(type: ResourceKey<T>): boolean;
    is(tag: TagKey<T>): boolean;
    isEmpty(): boolean;
    isFull(): boolean;
    isRandomlyTicking(): boolean;
    isSource(): boolean;
    isSourceOfType(fluidType: Fluid): boolean;
    randomTick(level: ServerLevel, pos: BlockPos, random: RandomSource): void;
    shouldRenderBackwardUpFace(level: BlockGetter, above: BlockPos): boolean;
    tags(): Stream<TagKey<T>>;
    tick(level: ServerLevel, pos: BlockPos, blockState: BlockState): void;
    typeHolder(): Holder<Fluid>;
}