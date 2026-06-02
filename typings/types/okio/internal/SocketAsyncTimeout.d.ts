import type { IOException } from '../../java/io/IOException.d.ts'
import type { Socket } from '../../java/net/Socket.d.ts'
import type { AsyncTimeout } from '../../okio/AsyncTimeout.d.ts'
import type { Timeout } from '../../okio/Timeout.d.ts'
import type { Timeout$Companion } from '../../okio/Timeout$Companion.d.ts'
export class SocketAsyncTimeout extends AsyncTimeout {
    static Companion: Timeout$Companion;
    static NONE: Timeout;
    constructor(socket: Socket)
    // private socket: Socket;
    protected newTimeoutException(cause: IOException | null): IOException;
    protected timedOut(): void;
}