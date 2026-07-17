import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { BiConsumer } from '../../../../java/util/function/BiConsumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ResourceKey } from '../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { TagNetworkSerialization$NetworkPayload } from '../../../../net/minecraft/tags/TagNetworkSerialization$NetworkPayload.d.ts'
export class RegistryDataCollector$TagCollector extends Object {
    private constructor()
    // private tags: JavaMap<ResourceKey<(Object | null)[]>, TagNetworkSerialization$NetworkPayload>;
    append(registry: ResourceKey<(Object | null)[]>, tagData: TagNetworkSerialization$NetworkPayload): void;
    forEach(action: (param0: ResourceKey<(Object | null)[]>, param1: TagNetworkSerialization$NetworkPayload) => void): void;
}