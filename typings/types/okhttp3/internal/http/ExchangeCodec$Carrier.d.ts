import type { IOException } from '../../../java/io/IOException.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Route } from '../../../okhttp3/Route.d.ts'
import type { RealCall } from '../../../okhttp3/internal/connection/RealCall.d.ts'
export interface ExchangeCodec$Carrier extends Object{
    readonly route: Route;
    cancel(): void;
    noNewExchanges(): void;
    trackFailure(call: RealCall, e: IOException | null): void;
}