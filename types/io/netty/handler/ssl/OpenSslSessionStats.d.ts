import type { ReferenceCountedOpenSslContext } from '../../../../io/netty/handler/ssl/ReferenceCountedOpenSslContext.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class OpenSslSessionStats extends Object {
    constructor(arg0: ReferenceCountedOpenSslContext)
    // private context: ReferenceCountedOpenSslContext;
    accept(): number;
    acceptGood(): number;
    acceptRenegotiate(): number;
    cacheFull(): number;
    cbHits(): number;
    connect(): number;
    connectGood(): number;
    connectRenegotiate(): number;
    hits(): number;
    misses(): number;
    number(): number;
    ticketKeyFail(): number;
    ticketKeyNew(): number;
    ticketKeyRenew(): number;
    ticketKeyResume(): number;
    timeouts(): number;
}