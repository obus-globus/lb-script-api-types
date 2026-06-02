import type { Object } from '../../../java/lang/Object.d.ts'
export class InternetProtocolStats$TcpStats extends Object {
    constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number)
    readonly connectionFailures: number;
    readonly connectionsActive: number;
    readonly connectionsEstablished: number;
    readonly connectionsPassive: number;
    readonly connectionsReset: number;
    readonly inErrors: number;
    readonly outResets: number;
    readonly segmentsReceived: number;
    readonly segmentsRetransmitted: number;
    readonly segmentsSent: number;
    getConnectionFailures(): number;
    getConnectionsActive(): number;
    getConnectionsEstablished(): number;
    getConnectionsPassive(): number;
    getConnectionsReset(): number;
    getInErrors(): number;
    getOutResets(): number;
    getSegmentsReceived(): number;
    getSegmentsRetransmitted(): number;
    getSegmentsSent(): number;
    toString(): string;
}