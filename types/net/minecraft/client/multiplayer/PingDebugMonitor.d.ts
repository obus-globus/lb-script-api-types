import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ClientPacketListener } from '../../../../net/minecraft/client/multiplayer/ClientPacketListener.d.ts'
import type { ClientboundPongResponsePacket } from '../../../../net/minecraft/network/protocol/ping/ClientboundPongResponsePacket.d.ts'
import type { LocalSampleLogger } from '../../../../net/minecraft/util/debugchart/LocalSampleLogger.d.ts'
export class PingDebugMonitor extends Object {
    constructor(connection: ClientPacketListener, delayTimer: LocalSampleLogger)
    // private connection: ClientPacketListener;
    // private delayTimer: LocalSampleLogger;
    onPongReceived(packet: ClientboundPongResponsePacket): void;
    tick(): void;
}