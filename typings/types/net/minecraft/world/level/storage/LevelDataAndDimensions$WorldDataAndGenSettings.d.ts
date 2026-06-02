import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { WorldGenSettings } from '../../../../../net/minecraft/world/level/levelgen/WorldGenSettings.d.ts'
import type { WorldData } from '../../../../../net/minecraft/world/level/storage/WorldData.d.ts'
export class LevelDataAndDimensions$WorldDataAndGenSettings extends Record {
    constructor(data: WorldData, genSettings: WorldGenSettings)
    // private data: WorldData;
    // private genSettings: WorldGenSettings;
    data(): WorldData;
    equals(o: Object | null): boolean;
    genSettings(): WorldGenSettings;
    hashCode(): number;
    toString(): string;
}