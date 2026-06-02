import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Schema } from '../../../../../net/minecraft/server/jsonrpc/api/Schema.d.ts'
export class DiscoveryService$DiscoverComponents extends Record {
    static CODEC: MapCodec<DiscoveryService$DiscoverComponents>;
    constructor(schemas: { [key: string]: Schema<Object> })
    // private schemas: { [key: string]: Schema<Object> };
    equals(o: Object | null): boolean;
    hashCode(): number;
    schemas(): { [key: string]: Schema<Object> };
    toString(): string;
}