import type { Object } from '../../../java/lang/Object.d.ts'
export class InternetProtocolStats$UdpStats extends Object {
    constructor(arg0: number, arg1: number, arg2: number, arg3: number)
    readonly datagramsNoPort: number;
    readonly datagramsReceived: number;
    readonly datagramsReceivedErrors: number;
    readonly datagramsSent: number;
    getDatagramsNoPort(): number;
    getDatagramsReceived(): number;
    getDatagramsReceivedErrors(): number;
    getDatagramsSent(): number;
    toString(): string;
}