import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Packet } from '../../../../net/minecraft/network/protocol/Packet.d.ts'
export interface BundlerInfo$Bundler extends Object{
    addPacket(packet: Packet<any>): Packet<any>;
}