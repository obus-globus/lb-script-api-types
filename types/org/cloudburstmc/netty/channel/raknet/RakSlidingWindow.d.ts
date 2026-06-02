import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { RakDatagramPacket } from '../../../../../org/cloudburstmc/netty/channel/raknet/packet/RakDatagramPacket.d.ts'
export class RakSlidingWindow extends Object {
    constructor(arg0: number)
    // private backoffThisBlock: boolean;
    // private cwnd: number;
    // private deviationRTT: number;
    // private estimatedRTT: number;
    // private lastRTT: number;
    // private mtu: number;
    // private nextCongestionControlBlock: number;
    // private oldestUnsentAck: number;
    // private ssThresh: number;
    readonly unackedBytes: number;
    getRTT(): number;
    getRetransmissionBandwidth(): number;
    getRtoForRetransmission(): number;
    getSenderRtoForAck(): number;
    getTransmissionBandwidth(): number;
    getUnackedBytes(): number;
    isInSlowStart(): boolean;
    onAck(arg0: number, arg1: RakDatagramPacket, arg2: number): void;
    onNak(): void;
    onPacketReceived(arg0: number): void;
    onReliableSend(arg0: RakDatagramPacket): void;
    onResend(arg0: number): void;
    onSendAck(): void;
    shouldSendAcks(arg0: number): boolean;
}