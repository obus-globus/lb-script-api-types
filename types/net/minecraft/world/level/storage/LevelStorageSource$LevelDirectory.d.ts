import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { ZonedDateTime } from '../../../../../java/time/ZonedDateTime.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { LevelResource } from '../../../../../net/minecraft/world/level/storage/LevelResource.d.ts'
export class LevelStorageSource$LevelDirectory extends Record {
    constructor(path: Path[])
    // private path: Path[];
    corruptedDataFile(time: ZonedDateTime): Path[];
    dataFile(): Path[];
    directoryName(): string;
    equals(o: Object | null): boolean;
    hashCode(): number;
    iconFile(): Path[];
    lockFile(): Path[];
    oldDataFile(): Path[];
    path(): Path[];
    rawDataFile(time: ZonedDateTime): Path[];
    resourcePath(resource: LevelResource): Path[];
    toString(): string;
}