import type { Object } from '../../../java/lang/Object.d.ts'
import type { ExchangeFinder } from '../../../okhttp3/internal/connection/ExchangeFinder.d.ts'
import type { RealConnection } from '../../../okhttp3/internal/connection/RealConnection.d.ts'
import type { RoutePlanner } from '../../../okhttp3/internal/connection/RoutePlanner.d.ts'
export class SequentialExchangeFinder extends Object implements ExchangeFinder {
    constructor(routePlanner: RoutePlanner)
    readonly routePlanner: RoutePlanner;
    find(): RealConnection;
}