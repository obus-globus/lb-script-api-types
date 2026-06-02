import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ResourceKey } from '../../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { Level } from '../../../../../../net/minecraft/world/level/Level.d.ts'
export class RegionStorageInfo extends Record {
    constructor(level: string, dimension: ResourceKey<Level>, type: string)
    // private dimension: ResourceKey<Level>;
    // private level: string;
    // private type: string;
    dimension(): ResourceKey<Level>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    level(): string;
    toString(): string;
    type(): string;
    withTypeSuffix(suffix: string): RegionStorageInfo;
}