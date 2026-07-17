import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Schema } from '../../../../../net/minecraft/server/jsonrpc/api/Schema.d.ts'
export class DiscoveryService$DiscoverComponents extends Record {
    static CODEC: MapCodec<DiscoveryService$DiscoverComponents>;
    constructor(schemas: JavaMap<string, Schema<Object>>)
    // private schemas: JavaMap<string, Schema<Object>>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    schemas(): JavaMap<string, Schema<Object>>;
    toString(): string;
}