import type { ResumableX509ExtendedTrustManager } from '../../../../io/netty/handler/ssl/ResumableX509ExtendedTrustManager.d.ts'
import type { AtomicReference } from '../../../../java/util/concurrent/atomic/AtomicReference.d.ts'
import type { SSLEngine } from '../../../../javax/net/ssl/SSLEngine.d.ts'
import type { TrustManager } from '../../../../javax/net/ssl/TrustManager.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ResumptionController extends Object {
    constructor()
    // private confirmedValidations: SSLEngine[];
    // private resumableTm: AtomicReference<ResumableX509ExtendedTrustManager>;
    remove(arg0: SSLEngine): void;
    validateResumeIfNeeded(arg0: SSLEngine): boolean;
    wrapIfNeeded(arg0: TrustManager): TrustManager;
}