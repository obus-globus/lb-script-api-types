import type { AtomicReference } from '../../../java/util/concurrent/atomic/AtomicReference.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { RealDnsCache$State } from '../../../okhttp3/internal/dns/RealDnsCache$State.d.ts'
export class RealDnsCache$Entry extends Object {
    constructor()
    readonly state: AtomicReference<RealDnsCache$State>;
}