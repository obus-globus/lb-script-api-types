import type { WebSocket } from '../../../../../../../com/oracle/truffle/tools/utils/java_websocket/WebSocket.d.ts'
import type { IOException } from '../../../../../../../java/io/IOException.d.ts'
import type { Exception } from '../../../../../../../java/lang/Exception.d.ts'
export class WrappedIOException extends Exception {
    constructor(arg0: WebSocket, arg1: IOException)
    readonly connection: WebSocket;
    // private ioException: IOException;
    getConnection(): WebSocket;
    getIOException(): IOException;
}