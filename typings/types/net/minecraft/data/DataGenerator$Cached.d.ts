import type { Path } from '../../../java/nio/file/Path.d.ts'
import type { WorldVersion } from '../../../net/minecraft/WorldVersion.d.ts'
import type { DataGenerator } from '../../../net/minecraft/data/DataGenerator.d.ts'
export class DataGenerator$Cached extends DataGenerator {
    constructor(output: Path, version: WorldVersion, alwaysGenerate: boolean)
    // private alwaysGenerate: boolean;
    // private rootOutputFolder: Path;
    // private version: WorldVersion;
    run(): void;
}