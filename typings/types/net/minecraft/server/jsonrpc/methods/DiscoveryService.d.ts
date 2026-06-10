import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { SchemaComponent } from '../../../../../net/minecraft/server/jsonrpc/api/SchemaComponent.d.ts'
import type { DiscoveryService$DiscoverResponse } from '../../../../../net/minecraft/server/jsonrpc/methods/DiscoveryService$DiscoverResponse.d.ts'
export class DiscoveryService extends Object {
    static discover(paramschemaRegistry: SchemaComponent<Object>[]): DiscoveryService$DiscoverResponse;
    constructor()
}