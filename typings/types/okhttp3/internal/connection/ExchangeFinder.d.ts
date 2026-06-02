import type { Object } from '../../../java/lang/Object.d.ts'
import type { RealConnection } from '../../../okhttp3/internal/connection/RealConnection.d.ts'
import type { RoutePlanner } from '../../../okhttp3/internal/connection/RoutePlanner.d.ts'
export interface ExchangeFinder extends Object{
    readonly routePlanner: RoutePlanner;
    find(): RealConnection;
}