import type { SSLEngineResult$HandshakeStatus } from '../../../javax/net/ssl/SSLEngineResult$HandshakeStatus.d.ts'
import type { SSLEngineResult$Status } from '../../../javax/net/ssl/SSLEngineResult$Status.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class SSLEngineResult extends Object {
    constructor(arg0: SSLEngineResult$Status, arg1: SSLEngineResult$HandshakeStatus, arg2: number, arg3: number)
    constructor(arg0: SSLEngineResult$Status, arg1: SSLEngineResult$HandshakeStatus, arg2: number, arg3: number, arg4: number)
    // private bytesConsumed: number;
    // private bytesProduced: number;
    readonly handshakeStatus: SSLEngineResult$HandshakeStatus;
    // private sequenceNumber: number;
    readonly status: SSLEngineResult$Status;
    bytesConsumed(): number;
    bytesProduced(): number;
    getHandshakeStatus(): SSLEngineResult$HandshakeStatus;
    getStatus(): SSLEngineResult$Status;
    sequenceNumber(): number;
    toString(): string;
}