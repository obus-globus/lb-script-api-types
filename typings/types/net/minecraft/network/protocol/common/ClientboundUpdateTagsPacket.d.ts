import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FriendlyByteBuf } from '../../../../../net/minecraft/network/FriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { Packet } from '../../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { PacketType } from '../../../../../net/minecraft/network/protocol/PacketType.d.ts'
import type { ClientCommonPacketListener } from '../../../../../net/minecraft/network/protocol/common/ClientCommonPacketListener.d.ts'
import type { ResourceKey } from '../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { TagNetworkSerialization$NetworkPayload } from '../../../../../net/minecraft/tags/TagNetworkSerialization$NetworkPayload.d.ts'
export class ClientboundUpdateTagsPacket extends Object implements Packet<ClientCommonPacketListener> {
    static STREAM_CODEC: StreamCodec<FriendlyByteBuf, ClientboundUpdateTagsPacket>;
    constructor(tags: JavaMap<ResourceKey<(Object | null)[]>, TagNetworkSerialization$NetworkPayload>)
    readonly tags: JavaMap<ResourceKey<(Object | null)[]>, TagNetworkSerialization$NetworkPayload>;
    getTags(): JavaMap<ResourceKey<(Object | null)[]>, TagNetworkSerialization$NetworkPayload>;
    handle(listener: ClientCommonPacketListener): void;
    isSkippable(): boolean;
    isTerminal(): boolean;
    type(): PacketType<ClientboundUpdateTagsPacket>;
    // private write(output: FriendlyByteBuf): void;
}