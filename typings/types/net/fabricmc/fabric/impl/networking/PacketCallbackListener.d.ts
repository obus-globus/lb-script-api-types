import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Packet } from '../../../../../net/minecraft/network/protocol/Packet.d.ts'
export interface PacketCallbackListener extends Object{
    sent(arg0: Packet<any>): void;
}