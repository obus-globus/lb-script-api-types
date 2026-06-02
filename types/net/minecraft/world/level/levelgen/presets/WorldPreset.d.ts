import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Optional } from '../../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ResourceKey } from '../../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { LevelStem } from '../../../../../../net/minecraft/world/level/dimension/LevelStem.d.ts'
import type { WorldDimensions } from '../../../../../../net/minecraft/world/level/levelgen/WorldDimensions.d.ts'
export class WorldPreset extends Object {
    static CODEC: Codec<Object>;
    static DIRECT_CODEC: Codec<WorldPreset>;
    constructor(dimensions: Map<ResourceKey<LevelStem>, LevelStem>)
    // private dimensions: Map<ResourceKey<LevelStem>, LevelStem>;
    createWorldDimensions(): WorldDimensions;
    // private dimensionsInOrder(): Map<ResourceKey<LevelStem>, LevelStem>;
    overworld(): Optional<LevelStem>;
}