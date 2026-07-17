import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Optional } from '../../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../../net/minecraft/core/Holder.d.ts'
import type { ResourceKey } from '../../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { LevelStem } from '../../../../../../net/minecraft/world/level/dimension/LevelStem.d.ts'
import type { WorldDimensions } from '../../../../../../net/minecraft/world/level/levelgen/WorldDimensions.d.ts'
export class WorldPreset extends Object {
    static CODEC: Codec<Holder<WorldPreset>>;
    static DIRECT_CODEC: Codec<WorldPreset>;
    constructor(dimensions: JavaMap<ResourceKey<LevelStem>, LevelStem>)
    // private dimensions: JavaMap<ResourceKey<LevelStem>, LevelStem>;
    createWorldDimensions(): WorldDimensions;
    // private dimensionsInOrder(): JavaMap<ResourceKey<LevelStem>, LevelStem>;
    overworld(): Optional<LevelStem>;
}