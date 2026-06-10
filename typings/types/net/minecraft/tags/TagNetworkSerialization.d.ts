import type { Object } from '../../../java/lang/Object.d.ts'
import type { LayeredRegistryAccess } from '../../../net/minecraft/core/LayeredRegistryAccess.d.ts'
import type { ResourceKey } from '../../../net/minecraft/resources/ResourceKey.d.ts'
import type { RegistryLayer } from '../../../net/minecraft/server/RegistryLayer.d.ts'
import type { TagNetworkSerialization$NetworkPayload } from '../../../net/minecraft/tags/TagNetworkSerialization$NetworkPayload.d.ts'
export class TagNetworkSerialization extends Object {
    static serializeTagsToNetwork(paramregistries: LayeredRegistryAccess<RegistryLayer>): Map<ResourceKey<Object[]>, TagNetworkSerialization$NetworkPayload>;
    constructor()
}