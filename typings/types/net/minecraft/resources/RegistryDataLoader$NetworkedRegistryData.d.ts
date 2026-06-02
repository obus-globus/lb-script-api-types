import type { Record } from '../../../java/lang/Record.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { RegistrySynchronization$PackedRegistryEntry } from '../../../net/minecraft/core/RegistrySynchronization$PackedRegistryEntry.d.ts'
import type { TagNetworkSerialization$NetworkPayload } from '../../../net/minecraft/tags/TagNetworkSerialization$NetworkPayload.d.ts'
export class RegistryDataLoader$NetworkedRegistryData extends Record {
    constructor(elements: RegistrySynchronization$PackedRegistryEntry[], tags: TagNetworkSerialization$NetworkPayload)
    // private elements: RegistrySynchronization$PackedRegistryEntry[];
    // private tags: TagNetworkSerialization$NetworkPayload;
    elements(): RegistrySynchronization$PackedRegistryEntry[];
    equals(o: Object | null): boolean;
    hashCode(): number;
    tags(): TagNetworkSerialization$NetworkPayload;
    toString(): string;
}