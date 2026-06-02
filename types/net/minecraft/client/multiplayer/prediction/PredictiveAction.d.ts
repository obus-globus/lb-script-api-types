import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Packet } from '../../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { ServerGamePacketListener } from '../../../../../net/minecraft/network/protocol/game/ServerGamePacketListener.d.ts'
export interface PredictiveAction extends Object{
    predict(sequence: number): Packet<ServerGamePacketListener>;
}