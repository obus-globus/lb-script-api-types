import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { BundlerInfo$Bundler } from '../../../../net/minecraft/network/protocol/BundlerInfo$Bundler.d.ts'
import type { Packet } from '../../../../net/minecraft/network/protocol/Packet.d.ts'
export interface BundlerInfo extends Object {
    startPacketBundling(packet: Packet<any>): BundlerInfo$Bundler;
    unbundlePacket(packet: Packet<any>, output: (param0: Packet<any>) => void): void;
}