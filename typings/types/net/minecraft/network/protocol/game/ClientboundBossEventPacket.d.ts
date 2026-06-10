import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { UUID } from '../../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { StreamDecoder } from '../../../../../net/minecraft/network/codec/StreamDecoder.d.ts'
import type { StreamMemberEncoder } from '../../../../../net/minecraft/network/codec/StreamMemberEncoder.d.ts'
import type { Packet } from '../../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { PacketType } from '../../../../../net/minecraft/network/protocol/PacketType.d.ts'
import type { ClientGamePacketListener } from '../../../../../net/minecraft/network/protocol/game/ClientGamePacketListener.d.ts'
import type { ClientboundBossEventPacket$Handler } from '../../../../../net/minecraft/network/protocol/game/ClientboundBossEventPacket$Handler.d.ts'
import type { ClientboundBossEventPacket$Operation } from '../../../../../net/minecraft/network/protocol/game/ClientboundBossEventPacket$Operation.d.ts'
import type { BossEvent } from '../../../../../net/minecraft/world/BossEvent.d.ts'
export class ClientboundBossEventPacket extends Object implements Packet<ClientGamePacketListener> {
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, ClientboundBossEventPacket>;
    static codec(paramwriter: (param0: Object | null, param1: ByteBuf | null) => void, paramreader: (param0: ByteBuf | null) => Object | null): StreamCodec<ByteBuf, Object>;
    static createAddPacket(paramevent: BossEvent): ClientboundBossEventPacket;
    static createRemovePacket(paramid: UUID): ClientboundBossEventPacket;
    static createUpdateNamePacket(paramevent: BossEvent): ClientboundBossEventPacket;
    static createUpdateProgressPacket(paramevent: BossEvent): ClientboundBossEventPacket;
    static createUpdatePropertiesPacket(paramevent: BossEvent): ClientboundBossEventPacket;
    static createUpdateStylePacket(paramevent: BossEvent): ClientboundBossEventPacket;
    private constructor(id: UUID, operation: ClientboundBossEventPacket$Operation)
    private constructor(input: RegistryFriendlyByteBuf)
    // private id: UUID;
    // private operation: ClientboundBossEventPacket$Operation;
    dispatch(handler: ClientboundBossEventPacket$Handler): void;
    handle(listener: ClientGamePacketListener): void;
    isSkippable(): boolean;
    isTerminal(): boolean;
    type(): PacketType<ClientboundBossEventPacket>;
    // private write(output: RegistryFriendlyByteBuf): void;
}