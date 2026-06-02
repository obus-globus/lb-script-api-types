import type { Object } from '../../../java/lang/Object.d.ts'
export class RTCIceCandidate extends Object {
    constructor(arg0: string, arg1: number, arg2: string)
    constructor(arg0: string, arg1: number, arg2: string, arg3: string)
    sdp: string;
    sdpMLineIndex: number;
    sdpMid: string;
    serverUrl: string;
    toString(): string;
}