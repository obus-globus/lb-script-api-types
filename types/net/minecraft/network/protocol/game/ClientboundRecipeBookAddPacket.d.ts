import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { StreamDecoder } from '../../../../../net/minecraft/network/codec/StreamDecoder.d.ts'
import type { StreamMemberEncoder } from '../../../../../net/minecraft/network/codec/StreamMemberEncoder.d.ts'
import type { Packet } from '../../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { PacketType } from '../../../../../net/minecraft/network/protocol/PacketType.d.ts'
import type { ClientGamePacketListener } from '../../../../../net/minecraft/network/protocol/game/ClientGamePacketListener.d.ts'
import type { ClientboundRecipeBookAddPacket$Entry } from '../../../../../net/minecraft/network/protocol/game/ClientboundRecipeBookAddPacket$Entry.d.ts'
export class ClientboundRecipeBookAddPacket extends Record implements Packet<ClientGamePacketListener> {
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, ClientboundRecipeBookAddPacket>;
    static codec(paramwriter: (param0: Object | null, param1: Object | null) => void, paramreader: (param0: Object | null) => Object | null): StreamCodec<Object, Object>;
    // private entries: ClientboundRecipeBookAddPacket$Entry[];
    // private replace: boolean;
    entries(): ClientboundRecipeBookAddPacket$Entry[];
    equals(o: Object | null): boolean;
    handle(listener: ClientGamePacketListener): void;
    hashCode(): number;
    isSkippable(): boolean;
    isTerminal(): boolean;
    replace(): boolean;
    toString(): string;
    type(): PacketType<ClientboundRecipeBookAddPacket>;
}