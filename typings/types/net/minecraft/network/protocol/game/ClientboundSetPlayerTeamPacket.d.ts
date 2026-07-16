import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { StreamDecoder } from '../../../../../net/minecraft/network/codec/StreamDecoder.d.ts'
import type { StreamMemberEncoder } from '../../../../../net/minecraft/network/codec/StreamMemberEncoder.d.ts'
import type { Packet } from '../../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { PacketType } from '../../../../../net/minecraft/network/protocol/PacketType.d.ts'
import type { ClientGamePacketListener } from '../../../../../net/minecraft/network/protocol/game/ClientGamePacketListener.d.ts'
import type { ClientboundSetPlayerTeamPacket$Action } from '../../../../../net/minecraft/network/protocol/game/ClientboundSetPlayerTeamPacket$Action.d.ts'
import type { ClientboundSetPlayerTeamPacket$Parameters } from '../../../../../net/minecraft/network/protocol/game/ClientboundSetPlayerTeamPacket$Parameters.d.ts'
import type { PlayerTeam } from '../../../../../net/minecraft/world/scores/PlayerTeam.d.ts'
export class ClientboundSetPlayerTeamPacket extends Object implements Packet<ClientGamePacketListener> {
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, ClientboundSetPlayerTeamPacket>;
    static codec<B extends ByteBuf, T extends Packet<any>>(paramwriter: (param0: T, param1: B) => void, paramreader: (param0: B) => T): StreamCodec<B, T>;
    static createAddOrModifyPacket(paramteam: PlayerTeam, paramcreateNew: boolean): ClientboundSetPlayerTeamPacket;
    static createPlayerPacket(paramteam: PlayerTeam, paramplayer: string, paramaction: ClientboundSetPlayerTeamPacket$Action): ClientboundSetPlayerTeamPacket;
    static createRemovePacket(paramteam: PlayerTeam): ClientboundSetPlayerTeamPacket;
    private constructor(name: string, method: number, parameters: Optional<ClientboundSetPlayerTeamPacket$Parameters>, players: string[])
    private constructor(input: RegistryFriendlyByteBuf)
    // private method: number;
    readonly name: string;
    readonly parameters: Optional<ClientboundSetPlayerTeamPacket$Parameters>;
    readonly players: string[];
    getName(): string;
    getParameters(): Optional<ClientboundSetPlayerTeamPacket$Parameters>;
    getPlayerAction(): ClientboundSetPlayerTeamPacket$Action;
    getPlayers(): string[];
    getTeamAction(): ClientboundSetPlayerTeamPacket$Action;
    handle(listener: ClientGamePacketListener): void;
    isSkippable(): boolean;
    isTerminal(): boolean;
    type(): PacketType<ClientboundSetPlayerTeamPacket>;
    // private write(output: RegistryFriendlyByteBuf): void;
}