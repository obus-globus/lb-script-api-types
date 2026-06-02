import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FriendlyByteBuf } from '../../../../../net/minecraft/network/FriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { StreamDecoder } from '../../../../../net/minecraft/network/codec/StreamDecoder.d.ts'
import type { StreamMemberEncoder } from '../../../../../net/minecraft/network/codec/StreamMemberEncoder.d.ts'
import type { Packet } from '../../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { PacketType } from '../../../../../net/minecraft/network/protocol/PacketType.d.ts'
import type { ClientCommonPacketListener } from '../../../../../net/minecraft/network/protocol/common/ClientCommonPacketListener.d.ts'
import type { ResourceKey } from '../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { TagNetworkSerialization$NetworkPayload } from '../../../../../net/minecraft/tags/TagNetworkSerialization$NetworkPayload.d.ts'
export class ClientboundUpdateTagsPacket extends Object implements Packet<ClientCommonPacketListener> {
    static STREAM_CODEC: StreamCodec<FriendlyByteBuf, ClientboundUpdateTagsPacket>;
    static codec(paramwriter: (param0: Object | null, param1: Object | null) => void, paramreader: (param0: Object | null) => Object | null): StreamCodec<Object, Object>;
    constructor(tags: Map<ResourceKey<(Object | null)[]>, TagNetworkSerialization$NetworkPayload>)
    private constructor(input: FriendlyByteBuf)
    readonly tags: Map<ResourceKey<(Object | null)[]>, TagNetworkSerialization$NetworkPayload>;
    getTags(): Map<ResourceKey<(Object | null)[]>, TagNetworkSerialization$NetworkPayload>;
    handle(listener: ClientCommonPacketListener): void;
    isSkippable(): boolean;
    isTerminal(): boolean;
    type(): PacketType<ClientboundUpdateTagsPacket>;
    // private write(output: FriendlyByteBuf): void;
}