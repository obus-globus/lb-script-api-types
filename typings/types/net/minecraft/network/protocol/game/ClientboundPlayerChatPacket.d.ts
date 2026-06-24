import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { UUID } from '../../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { ChatType$Bound } from '../../../../../net/minecraft/network/chat/ChatType$Bound.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { FilterMask } from '../../../../../net/minecraft/network/chat/FilterMask.d.ts'
import type { MessageSignature } from '../../../../../net/minecraft/network/chat/MessageSignature.d.ts'
import type { SignedMessageBody$Packed } from '../../../../../net/minecraft/network/chat/SignedMessageBody$Packed.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { StreamDecoder } from '../../../../../net/minecraft/network/codec/StreamDecoder.d.ts'
import type { StreamMemberEncoder } from '../../../../../net/minecraft/network/codec/StreamMemberEncoder.d.ts'
import type { Packet } from '../../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { PacketType } from '../../../../../net/minecraft/network/protocol/PacketType.d.ts'
import type { ClientGamePacketListener } from '../../../../../net/minecraft/network/protocol/game/ClientGamePacketListener.d.ts'
export class ClientboundPlayerChatPacket extends Record implements Packet<ClientGamePacketListener> {
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, ClientboundPlayerChatPacket>;
    static codec(paramwriter: (param0: Object | null, param1: ByteBuf | null) => void, paramreader: (param0: ByteBuf | null) => Object | null): StreamCodec<ByteBuf, Object>;
    constructor(globalIndex: number, sender: UUID, index: number, signature: MessageSignature, body: SignedMessageBody$Packed, unsignedContent: Component, filterMask: FilterMask, chatType: ChatType$Bound)
    private constructor(input: RegistryFriendlyByteBuf)
    // private body: SignedMessageBody$Packed;
    // private chatType: ChatType$Bound;
    // private filterMask: FilterMask;
    // private globalIndex: number;
    // private index: number;
    // private sender: UUID;
    // private signature: MessageSignature;
    // private unsignedContent: Component;
    body(): SignedMessageBody$Packed;
    chatType(): ChatType$Bound;
    equals(o: Object | null): boolean;
    filterMask(): FilterMask;
    globalIndex(): number;
    handle(listener: ClientGamePacketListener): void;
    hashCode(): number;
    index(): number;
    isSkippable(): boolean;
    isTerminal(): boolean;
    sender(): UUID;
    signature(): MessageSignature;
    toString(): string;
    type(): PacketType<ClientboundPlayerChatPacket>;
    unsignedContent(): Component;
    // private write(output: RegistryFriendlyByteBuf): void;
}