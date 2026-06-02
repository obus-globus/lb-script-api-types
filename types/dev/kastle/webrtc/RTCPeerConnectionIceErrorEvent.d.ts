import type { Object } from '../../../java/lang/Object.d.ts'
export class RTCPeerConnectionIceErrorEvent extends Object {
    constructor(arg0: string, arg1: number, arg2: string, arg3: number, arg4: string)
    readonly address: string;
    readonly errorCode: number;
    readonly errorText: string;
    readonly port: number;
    readonly url: string;
    getAddress(): string;
    getErrorCode(): number;
    getErrorText(): string;
    getPort(): number;
    getUrl(): string;
}