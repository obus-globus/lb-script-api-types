import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { BlockPredicate } from '../../../../net/minecraft/advancements/criterion/BlockPredicate.d.ts'
import type { FluidPredicate } from '../../../../net/minecraft/advancements/criterion/FluidPredicate.d.ts'
import type { LightPredicate } from '../../../../net/minecraft/advancements/criterion/LightPredicate.d.ts'
import type { LocationPredicate$PositionPredicate } from '../../../../net/minecraft/advancements/criterion/LocationPredicate$PositionPredicate.d.ts'
import type { Holder } from '../../../../net/minecraft/core/Holder.d.ts'
import type { ResourceKey } from '../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { ServerLevel } from '../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { Level } from '../../../../net/minecraft/world/level/Level.d.ts'
export class LocationPredicate extends Record {
    static CODEC: Codec<LocationPredicate>;
    constructor(position: Optional<LocationPredicate$PositionPredicate>, biomes: Optional<Holder<T>[]>, structures: Optional<Holder<T>[]>, dimension: Optional<ResourceKey<Level>>, smokey: Optional<boolean>, light: Optional<LightPredicate>, block: Optional<BlockPredicate>, fluid: Optional<FluidPredicate>, canSeeSky: Optional<boolean>)
    // private biomes: Optional<Holder<T>[]>;
    // private block: Optional<BlockPredicate>;
    // private canSeeSky: Optional<boolean>;
    // private dimension: Optional<ResourceKey<Level>>;
    // private fluid: Optional<FluidPredicate>;
    // private light: Optional<LightPredicate>;
    // private position: Optional<LocationPredicate$PositionPredicate>;
    // private smokey: Optional<boolean>;
    // private structures: Optional<Holder<T>[]>;
    biomes(): Optional<Holder<T>[]>;
    block(): Optional<BlockPredicate>;
    canSeeSky(): Optional<boolean>;
    dimension(): Optional<ResourceKey<Level>>;
    equals(o: Object | null): boolean;
    fluid(): Optional<FluidPredicate>;
    hashCode(): number;
    light(): Optional<LightPredicate>;
    matches(level: ServerLevel, x: number, y: number, z: number): boolean;
    position(): Optional<LocationPredicate$PositionPredicate>;
    smokey(): Optional<boolean>;
    structures(): Optional<Holder<T>[]>;
    toString(): string;
}