import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { BlockPredicate } from '../../../../net/minecraft/advancements/criterion/BlockPredicate.d.ts'
import type { BlockPredicate$Builder } from '../../../../net/minecraft/advancements/criterion/BlockPredicate$Builder.d.ts'
import type { FluidPredicate } from '../../../../net/minecraft/advancements/criterion/FluidPredicate.d.ts'
import type { FluidPredicate$Builder } from '../../../../net/minecraft/advancements/criterion/FluidPredicate$Builder.d.ts'
import type { LightPredicate } from '../../../../net/minecraft/advancements/criterion/LightPredicate.d.ts'
import type { LightPredicate$Builder } from '../../../../net/minecraft/advancements/criterion/LightPredicate$Builder.d.ts'
import type { LocationPredicate } from '../../../../net/minecraft/advancements/criterion/LocationPredicate.d.ts'
import type { MinMaxBounds$Doubles } from '../../../../net/minecraft/advancements/criterion/MinMaxBounds$Doubles.d.ts'
import type { Holder } from '../../../../net/minecraft/core/Holder.d.ts'
import type { ResourceKey } from '../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { Level } from '../../../../net/minecraft/world/level/Level.d.ts'
import type { Biome } from '../../../../net/minecraft/world/level/biome/Biome.d.ts'
import type { Structure } from '../../../../net/minecraft/world/level/levelgen/structure/Structure.d.ts'
export class LocationPredicate$Builder extends Object {
    static atYLocation(paramyLocation: MinMaxBounds$Doubles): LocationPredicate$Builder;
    static inBiome(parambiome: Holder<Biome>): LocationPredicate$Builder;
    static inDimension(paramdimension: ResourceKey<Level>): LocationPredicate$Builder;
    static inStructure(paramstructure: Holder<Structure>): LocationPredicate$Builder;
    static location(): LocationPredicate$Builder;
    constructor()
    // private biomes: Optional<Holder<T>[]>;
    // private block: Optional<BlockPredicate>;
    // private canSeeSky: Optional<boolean>;
    // private dimension: Optional<ResourceKey<Level>>;
    // private fluid: Optional<FluidPredicate>;
    // private light: Optional<LightPredicate>;
    // private smokey: Optional<boolean>;
    // private structures: Optional<Holder<T>[]>;
    // private x: MinMaxBounds$Doubles;
    // private y: MinMaxBounds$Doubles;
    // private z: MinMaxBounds$Doubles;
    build(): LocationPredicate;
    setBiomes(biomes: Holder<T>[]): LocationPredicate$Builder;
    setBlock(block: BlockPredicate$Builder): LocationPredicate$Builder;
    setCanSeeSky(canSeeSky: boolean): LocationPredicate$Builder;
    setDimension(dimension: ResourceKey<Level>): LocationPredicate$Builder;
    setFluid(fluid: FluidPredicate$Builder): LocationPredicate$Builder;
    setLight(light: LightPredicate$Builder): LocationPredicate$Builder;
    setSmokey(smokey: boolean): LocationPredicate$Builder;
    setStructures(structures: Holder<T>[]): LocationPredicate$Builder;
    setX(x: MinMaxBounds$Doubles): LocationPredicate$Builder;
    setY(y: MinMaxBounds$Doubles): LocationPredicate$Builder;
    setZ(z: MinMaxBounds$Doubles): LocationPredicate$Builder;
}