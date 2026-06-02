import type { Object } from '../../java/lang/Object.d.ts'
import type { Cache } from '../../okhttp3/Cache.d.ts'
import type { Dispatcher } from '../../okhttp3/Dispatcher.d.ts'
import type { Response } from '../../okhttp3/Response.d.ts'
import type { Exchange } from '../../okhttp3/internal/connection/Exchange.d.ts'
import type { RealCall$AsyncCall } from '../../okhttp3/internal/connection/RealCall$AsyncCall.d.ts'
import type { RealConnection } from '../../okhttp3/internal/connection/RealConnection.d.ts'
import type { FileSystem } from '../../okio/FileSystem.d.ts'
import type { Path } from '../../okio/Path.d.ts'
export class NativeImageTestsAccessorsKt extends Object {
    static buildCache(paramarg0: Path, paramarg1: number, paramarg2: FileSystem): Cache;
    static finishedAccessor(paramarg0: Dispatcher, paramarg1: RealCall$AsyncCall): void;
    static getConnectionAccessor(paramarg0: Exchange): RealConnection;
    static getExchangeAccessor(paramarg0: Response): Exchange;
    static getIdleAtNsAccessor(paramarg0: RealConnection): number;
    static setIdleAtNsAccessor(paramarg0: RealConnection, paramarg1: number): void;
}