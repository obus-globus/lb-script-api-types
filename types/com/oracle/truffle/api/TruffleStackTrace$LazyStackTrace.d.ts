import type { TruffleStackTrace } from '../../../../com/oracle/truffle/api/TruffleStackTrace.d.ts'
import type { TruffleStackTrace$TracebackElement } from '../../../../com/oracle/truffle/api/TruffleStackTrace$TracebackElement.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
export class TruffleStackTrace$LazyStackTrace extends Throwable {
    constructor()
    // private current: TruffleStackTrace$TracebackElement;
    frameCount: number;
    readonly stackTrace: TruffleStackTrace;
    getInternalStackTrace(): TruffleStackTrace;
    toString(): string;
}