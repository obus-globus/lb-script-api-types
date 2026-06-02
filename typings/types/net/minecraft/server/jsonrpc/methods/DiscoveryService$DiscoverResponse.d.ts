import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { MethodInfo$Named } from '../../../../../net/minecraft/server/jsonrpc/api/MethodInfo$Named.d.ts'
import type { DiscoveryService$DiscoverComponents } from '../../../../../net/minecraft/server/jsonrpc/methods/DiscoveryService$DiscoverComponents.d.ts'
import type { DiscoveryService$DiscoverInfo } from '../../../../../net/minecraft/server/jsonrpc/methods/DiscoveryService$DiscoverInfo.d.ts'
export class DiscoveryService$DiscoverResponse extends Record {
    static CODEC: MapCodec<DiscoveryService$DiscoverResponse>;
    constructor(jsonRpcProtocolVersion: string, discoverInfo: DiscoveryService$DiscoverInfo, methods: MethodInfo$Named<Object, Object>[], components: DiscoveryService$DiscoverComponents)
    // private components: DiscoveryService$DiscoverComponents;
    // private discoverInfo: DiscoveryService$DiscoverInfo;
    // private jsonRpcProtocolVersion: string;
    // private methods: MethodInfo$Named<Object, Object>[];
    components(): DiscoveryService$DiscoverComponents;
    discoverInfo(): DiscoveryService$DiscoverInfo;
    equals(o: Object | null): boolean;
    hashCode(): number;
    jsonRpcProtocolVersion(): string;
    methods(): MethodInfo$Named<Object, Object>[];
    toString(): string;
}