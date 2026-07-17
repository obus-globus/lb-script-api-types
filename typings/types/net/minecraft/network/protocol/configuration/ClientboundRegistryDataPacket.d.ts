import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { RegistrySynchronization$PackedRegistryEntry } from '../../../../../net/minecraft/core/RegistrySynchronization$PackedRegistryEntry.d.ts'
import type { FriendlyByteBuf } from '../../../../../net/minecraft/network/FriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { Packet } from '../../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { PacketType } from '../../../../../net/minecraft/network/protocol/PacketType.d.ts'
import type { ClientConfigurationPacketListener } from '../../../../../net/minecraft/network/protocol/configuration/ClientConfigurationPacketListener.d.ts'
import type { ResourceKey } from '../../../../../net/minecraft/resources/ResourceKey.d.ts'
export class ClientboundRegistryDataPacket extends Record implements Packet<ClientConfigurationPacketListener> {
    static STREAM_CODEC: StreamCodec<FriendlyByteBuf, ClientboundRegistryDataPacket>;
    constructor(registry: ResourceKey<(Object | null)[]>, entries: RegistrySynchronization$PackedRegistryEntry[])
    // private entries: RegistrySynchronization$PackedRegistryEntry[];
    // private registry: ResourceKey<(Object | null)[]>;
    entries(): RegistrySynchronization$PackedRegistryEntry[];
    equals(o: Object | null): boolean;
    handle(listener: ClientConfigurationPacketListener): void;
    hashCode(): number;
    isSkippable(): boolean;
    isTerminal(): boolean;
    registry(): ResourceKey<(Object | null)[]>;
    toString(): string;
    type(): PacketType<ClientboundRegistryDataPacket>;
}