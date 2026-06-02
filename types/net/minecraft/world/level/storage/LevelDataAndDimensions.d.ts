import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { WorldDimensions$Complete } from '../../../../../net/minecraft/world/level/levelgen/WorldDimensions$Complete.d.ts'
import type { WorldGenSettings } from '../../../../../net/minecraft/world/level/levelgen/WorldGenSettings.d.ts'
import type { LevelDataAndDimensions$WorldDataAndGenSettings } from '../../../../../net/minecraft/world/level/storage/LevelDataAndDimensions$WorldDataAndGenSettings.d.ts'
import type { WorldData } from '../../../../../net/minecraft/world/level/storage/WorldData.d.ts'
export class LevelDataAndDimensions extends Record {
    static create(paramdata: WorldData, paramgenSettings: WorldGenSettings, paramdimensions: WorldDimensions$Complete): LevelDataAndDimensions;
    constructor(worldDataAndGenSettings: LevelDataAndDimensions$WorldDataAndGenSettings, dimensions: WorldDimensions$Complete)
    // private dimensions: WorldDimensions$Complete;
    // private worldDataAndGenSettings: LevelDataAndDimensions$WorldDataAndGenSettings;
    dimensions(): WorldDimensions$Complete;
    equals(o: Object | null): boolean;
    hashCode(): number;
    toString(): string;
    worldDataAndGenSettings(): LevelDataAndDimensions$WorldDataAndGenSettings;
}