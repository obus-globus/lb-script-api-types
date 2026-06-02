import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { WorldDataConfiguration } from '../../../../../../net/minecraft/world/level/WorldDataConfiguration.d.ts'
import type { WorldGenSettings } from '../../../../../../net/minecraft/world/level/levelgen/WorldGenSettings.d.ts'
export class DataPackReloadCookie extends Record {
    constructor(worldGenSettings: WorldGenSettings, dataConfiguration: WorldDataConfiguration)
    // private dataConfiguration: WorldDataConfiguration;
    // private worldGenSettings: WorldGenSettings;
    dataConfiguration(): WorldDataConfiguration;
    equals(o: Object | null): boolean;
    hashCode(): number;
    toString(): string;
    worldGenSettings(): WorldGenSettings;
}