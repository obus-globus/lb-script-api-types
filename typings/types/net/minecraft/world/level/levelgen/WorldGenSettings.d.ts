import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { RegistryAccess } from '../../../../../net/minecraft/core/RegistryAccess.d.ts'
import type { WorldDimensions } from '../../../../../net/minecraft/world/level/levelgen/WorldDimensions.d.ts'
import type { WorldOptions } from '../../../../../net/minecraft/world/level/levelgen/WorldOptions.d.ts'
import type { SavedData } from '../../../../../net/minecraft/world/level/saveddata/SavedData.d.ts'
import type { SavedDataType } from '../../../../../net/minecraft/world/level/saveddata/SavedDataType.d.ts'
export class WorldGenSettings extends SavedData {
    static CODEC: Codec<WorldGenSettings>;
    static TYPE: SavedDataType<WorldGenSettings>;
    static of(paramoptions: WorldOptions, paramregistryAccess: RegistryAccess): WorldGenSettings;
    constructor(options: WorldOptions, dimensions: WorldDimensions)
    // private dimensions: WorldDimensions;
    // private options: WorldOptions;
    dimensions(): WorldDimensions;
    hashCode(): number;
    options(): WorldOptions;
    toString(): string;
}