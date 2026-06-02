import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class DiscoveryService$DiscoverInfo extends Record {
    static CODEC: MapCodec<DiscoveryService$DiscoverInfo>;
    constructor(title: string, version: string)
    // private title: string;
    // private version: string;
    equals(o: Object | null): boolean;
    hashCode(): number;
    title(): string;
    toString(): string;
    version(): string;
}