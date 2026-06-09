import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { BundlerInfo$Bundler } from '../../../../net/minecraft/network/protocol/BundlerInfo$Bundler.d.ts'
import type { Packet } from '../../../../net/minecraft/network/protocol/Packet.d.ts'
export interface BundlerInfo extends Object {
    startPacketBundling(packet: Packet<Object>): BundlerInfo$Bundler;
    unbundlePacket(packet: Packet<Object>, output: (param0: Packet<Object>) => void): void;
}