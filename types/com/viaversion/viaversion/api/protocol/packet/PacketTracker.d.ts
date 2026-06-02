import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { PacketTracker$RateTracker } from '../../../../../../com/viaversion/viaversion/api/protocol/packet/PacketTracker$RateTracker.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class PacketTracker extends Object {
    constructor(arg0: UserConnection)
    // private connection: UserConnection;
    readonly packetLimiterEnabled: boolean;
    // private packetSizeTracker: PacketTracker$RateTracker;
    // private packetTracker: PacketTracker$RateTracker;
    // private receivedPacketsTotal: number;
    // private sentPacketsTotal: number;
    // private startTime: number;
    exceedsLimits(): boolean;
    getIntervalPackets(): number;
    getPacketsPerSecond(): number;
    getReceivedPackets(): number;
    getSentPackets(): number;
    incrementReceived(): boolean;
    incrementReceived(arg0: number): boolean;
    incrementSent(): void;
    isPacketLimiterEnabled(): boolean;
    reset(): void;
    setIntervalPackets(arg0: number): void;
    setPacketLimiterEnabled(arg0: boolean): void;
    setReceivedPackets(arg0: number): void;
    setSentPackets(arg0: number): void;
    setWarnings(arg0: number): void;
}