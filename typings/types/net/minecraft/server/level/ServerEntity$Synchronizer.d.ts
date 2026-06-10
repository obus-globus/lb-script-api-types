import type { Predicate } from '../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Packet } from '../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { ClientGamePacketListener } from '../../../../net/minecraft/network/protocol/game/ClientGamePacketListener.d.ts'
import type { ServerPlayer } from '../../../../net/minecraft/server/level/ServerPlayer.d.ts'
export interface ServerEntity$Synchronizer extends Object {
    sendToTrackingPlayers(packet: Packet<ClientGamePacketListener>): void;
    sendToTrackingPlayersAndSelf(packet: Packet<ClientGamePacketListener>): void;
    sendToTrackingPlayersFiltered(packet: Packet<ClientGamePacketListener>, predicate: (param0: ServerPlayer) => boolean): void;
}