import type { Object } from '../../../java/lang/Object.d.ts'
import type { InternetProtocolStats$TcpState } from '../../../oshi/software/os/InternetProtocolStats$TcpState.d.ts'
export class InternetProtocolStats$IPConnection extends Object {
    constructor(arg0: string, arg1: number[], arg2: number, arg3: number[], arg4: number, arg5: InternetProtocolStats$TcpState, arg6: number, arg7: number, arg8: number)
    readonly foreignAddress: number[];
    readonly foreignPort: number;
    readonly localAddress: number[];
    readonly localPort: number;
    readonly owningProcessId: number;
    readonly receiveQueue: number;
    readonly state: InternetProtocolStats$TcpState;
    readonly transmitQueue: number;
    readonly type: string;
    getForeignAddress(): number[];
    getForeignPort(): number;
    getLocalAddress(): number[];
    getLocalPort(): number;
    getReceiveQueue(): number;
    getState(): InternetProtocolStats$TcpState;
    getTransmitQueue(): number;
    getType(): string;
    getowningProcessId(): number;
    toString(): string;
}