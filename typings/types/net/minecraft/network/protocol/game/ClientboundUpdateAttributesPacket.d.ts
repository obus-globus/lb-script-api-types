import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { StreamDecoder } from '../../../../../net/minecraft/network/codec/StreamDecoder.d.ts'
import type { StreamMemberEncoder } from '../../../../../net/minecraft/network/codec/StreamMemberEncoder.d.ts'
import type { Packet } from '../../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { PacketType } from '../../../../../net/minecraft/network/protocol/PacketType.d.ts'
import type { ClientGamePacketListener } from '../../../../../net/minecraft/network/protocol/game/ClientGamePacketListener.d.ts'
import type { ClientboundUpdateAttributesPacket$AttributeSnapshot } from '../../../../../net/minecraft/network/protocol/game/ClientboundUpdateAttributesPacket$AttributeSnapshot.d.ts'
import type { AttributeInstance } from '../../../../../net/minecraft/world/entity/ai/attributes/AttributeInstance.d.ts'
export class ClientboundUpdateAttributesPacket extends Object implements Packet<ClientGamePacketListener> {
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, ClientboundUpdateAttributesPacket>;
    static codec<B extends ByteBuf, T extends Packet<any>>(paramwriter: (param0: T, param1: B) => void, paramreader: (param0: B) => T): StreamCodec<B, T>;
    constructor(entityId: number, values: AttributeInstance[])
    // private attributes: ClientboundUpdateAttributesPacket$AttributeSnapshot[];
    readonly entityId: number;
    getEntityId(): number;
    getValues(): ClientboundUpdateAttributesPacket$AttributeSnapshot[];
    handle(listener: ClientGamePacketListener): void;
    isSkippable(): boolean;
    isTerminal(): boolean;
    type(): PacketType<ClientboundUpdateAttributesPacket>;
}