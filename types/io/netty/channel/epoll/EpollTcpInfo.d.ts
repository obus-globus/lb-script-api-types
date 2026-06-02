import type { Object } from '../../../../java/lang/Object.d.ts'
export class EpollTcpInfo extends Object {
    constructor()
    // private info: number[];
    advmss(): number;
    ato(): number;
    backoff(): number;
    caState(): number;
    fackets(): number;
    lastAckRecv(): number;
    lastAckSent(): number;
    lastDataRecv(): number;
    lastDataSent(): number;
    lost(): number;
    options(): number;
    pmtu(): number;
    probes(): number;
    rcvMss(): number;
    rcvRtt(): number;
    rcvSpace(): number;
    rcvSsthresh(): number;
    rcvWscale(): number;
    reordering(): number;
    retrans(): number;
    retransmits(): number;
    rto(): number;
    rtt(): number;
    rttvar(): number;
    sacked(): number;
    sndCwnd(): number;
    sndMss(): number;
    sndSsthresh(): number;
    sndWscale(): number;
    state(): number;
    totalRetrans(): number;
    unacked(): number;
}