import type { Object } from '../../../java/lang/Object.d.ts'
import type { Address } from '../../../okhttp3/Address.d.ts'
import type { HttpUrl } from '../../../okhttp3/HttpUrl.d.ts'
import type { RealConnection } from '../../../okhttp3/internal/connection/RealConnection.d.ts'
import type { RealRoutePlanner } from '../../../okhttp3/internal/connection/RealRoutePlanner.d.ts'
import type { RoutePlanner } from '../../../okhttp3/internal/connection/RoutePlanner.d.ts'
import type { RoutePlanner$Plan } from '../../../okhttp3/internal/connection/RoutePlanner$Plan.d.ts'
export class ForceConnectRoutePlanner extends Object implements RoutePlanner {
    constructor(delegate: RealRoutePlanner)
    readonly address: Address;
    readonly deferredPlans: RoutePlanner$Plan[];
    // private delegate: RealRoutePlanner;
    hasNext(failedConnection: RealConnection | null): boolean;
    isCanceled(): boolean;
    plan(): RoutePlanner$Plan;
    sameHostAndPort(url: HttpUrl): boolean;
}