import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FriendlyByteBuf } from '../../../../../net/minecraft/network/FriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { Packet } from '../../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { PacketType } from '../../../../../net/minecraft/network/protocol/PacketType.d.ts'
import type { ClientGamePacketListener } from '../../../../../net/minecraft/network/protocol/game/ClientGamePacketListener.d.ts'
import type { LevelData$RespawnData } from '../../../../../net/minecraft/world/level/storage/LevelData$RespawnData.d.ts'
export class ClientboundSetDefaultSpawnPositionPacket extends Record implements Packet<ClientGamePacketListener> {
    static STREAM_CODEC: StreamCodec<FriendlyByteBuf, ClientboundSetDefaultSpawnPositionPacket>;
    constructor(respawnData: LevelData$RespawnData)
    // private respawnData: LevelData$RespawnData;
    equals(o: Object | null): boolean;
    handle(listener: ClientGamePacketListener): void;
    hashCode(): number;
    isSkippable(): boolean;
    isTerminal(): boolean;
    respawnData(): LevelData$RespawnData;
    toString(): string;
    type(): PacketType<ClientboundSetDefaultSpawnPositionPacket>;
}