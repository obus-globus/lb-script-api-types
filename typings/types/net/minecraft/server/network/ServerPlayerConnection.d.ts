import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Packet } from '../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { ServerPlayer } from '../../../../net/minecraft/server/level/ServerPlayer.d.ts'
export interface ServerPlayerConnection extends Object{
    getPlayer(): ServerPlayer;
    send(packet: Packet<Object>): void;
}