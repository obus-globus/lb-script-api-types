import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { StreamDecoder } from '../../../../../net/minecraft/network/codec/StreamDecoder.d.ts'
import type { StreamMemberEncoder } from '../../../../../net/minecraft/network/codec/StreamMemberEncoder.d.ts'
import type { Packet } from '../../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { PacketType } from '../../../../../net/minecraft/network/protocol/PacketType.d.ts'
import type { ClientGamePacketListener } from '../../../../../net/minecraft/network/protocol/game/ClientGamePacketListener.d.ts'
import type { ClientboundPlayerInfoUpdatePacket$Action } from '../../../../../net/minecraft/network/protocol/game/ClientboundPlayerInfoUpdatePacket$Action.d.ts'
import type { ClientboundPlayerInfoUpdatePacket$Entry } from '../../../../../net/minecraft/network/protocol/game/ClientboundPlayerInfoUpdatePacket$Entry.d.ts'
import type { ServerPlayer } from '../../../../../net/minecraft/server/level/ServerPlayer.d.ts'
export class ClientboundPlayerInfoUpdatePacket extends Object implements Packet<ClientGamePacketListener> {
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, ClientboundPlayerInfoUpdatePacket>;
    static codec(paramwriter: (param0: Object | null, param1: ByteBuf | null) => void, paramreader: (param0: ByteBuf | null) => Object | null): StreamCodec<ByteBuf, Object>;
    static createPlayerInitializing(paramplayers: ServerPlayer[]): ClientboundPlayerInfoUpdatePacket;
    constructor(actions: ClientboundPlayerInfoUpdatePacket$Action[], players: ServerPlayer[])
    constructor(action: ClientboundPlayerInfoUpdatePacket$Action, player: ServerPlayer)
    // private actions: ClientboundPlayerInfoUpdatePacket$Action[];
    // private entries: ClientboundPlayerInfoUpdatePacket$Entry[];
    actions(): ClientboundPlayerInfoUpdatePacket$Action[];
    entries(): ClientboundPlayerInfoUpdatePacket$Entry[];
    handle(listener: ClientGamePacketListener): void;
    isSkippable(): boolean;
    isTerminal(): boolean;
    newEntries(): ClientboundPlayerInfoUpdatePacket$Entry[];
    toString(): string;
    type(): PacketType<ClientboundPlayerInfoUpdatePacket>;
    // private write(output: RegistryFriendlyByteBuf): void;
}