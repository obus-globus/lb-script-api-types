import type { IOException } from '../../../java/io/IOException.d.ts'
import type { AsyncTimeout } from '../../../okio/AsyncTimeout.d.ts'
import type { Timeout } from '../../../okio/Timeout.d.ts'
import type { Timeout$Companion } from '../../../okio/Timeout$Companion.d.ts'
export class Http2Stream$StreamTimeout extends AsyncTimeout {
    static Companion: Timeout$Companion;
    static NONE: Timeout;
    constructor(null_: Http2Stream$StreamTimeout)
    exitAndThrowIfTimedOut(): void;
    protected newTimeoutException(cause: IOException | null): IOException;
    protected timedOut(): void;
}