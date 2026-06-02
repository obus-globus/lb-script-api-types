import type { Suggestions } from '../../../../../com/mojang/brigadier/suggestion/Suggestions.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { StreamDecoder } from '../../../../../net/minecraft/network/codec/StreamDecoder.d.ts'
import type { StreamMemberEncoder } from '../../../../../net/minecraft/network/codec/StreamMemberEncoder.d.ts'
import type { Packet } from '../../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { PacketType } from '../../../../../net/minecraft/network/protocol/PacketType.d.ts'
import type { ClientGamePacketListener } from '../../../../../net/minecraft/network/protocol/game/ClientGamePacketListener.d.ts'
import type { ClientboundCommandSuggestionsPacket$Entry } from '../../../../../net/minecraft/network/protocol/game/ClientboundCommandSuggestionsPacket$Entry.d.ts'
export class ClientboundCommandSuggestionsPacket extends Record implements Packet<ClientGamePacketListener> {
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, ClientboundCommandSuggestionsPacket>;
    static codec(paramwriter: (param0: Object | null, param1: Object | null) => void, paramreader: (param0: Object | null) => Object | null): StreamCodec<Object, Object>;
    // private id: number;
    // private length: number;
    // private start: number;
    // private suggestions: ClientboundCommandSuggestionsPacket$Entry[];
    equals(o: Object | null): boolean;
    handle(listener: ClientGamePacketListener): void;
    hashCode(): number;
    id(): number;
    isSkippable(): boolean;
    isTerminal(): boolean;
    length(): number;
    start(): number;
    suggestions(): ClientboundCommandSuggestionsPacket$Entry[];
    toString(): string;
    toSuggestions(): Suggestions;
    type(): PacketType<ClientboundCommandSuggestionsPacket>;
}