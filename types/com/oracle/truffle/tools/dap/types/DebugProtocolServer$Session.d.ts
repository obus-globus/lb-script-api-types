import type { DebugProtocolServer } from '../../../../../../com/oracle/truffle/tools/dap/types/DebugProtocolServer.d.ts'
import type { DebugProtocolServer$ExceptionWithMessage } from '../../../../../../com/oracle/truffle/tools/dap/types/DebugProtocolServer$ExceptionWithMessage.d.ts'
import type { ErrorResponse } from '../../../../../../com/oracle/truffle/tools/dap/types/ErrorResponse.d.ts'
import type { Event } from '../../../../../../com/oracle/truffle/tools/dap/types/Event.d.ts'
import type { Request } from '../../../../../../com/oracle/truffle/tools/dap/types/Request.d.ts'
import type { Response } from '../../../../../../com/oracle/truffle/tools/dap/types/Response.d.ts'
import type { InputStream } from '../../../../../../java/io/InputStream.d.ts'
import type { OutputStream } from '../../../../../../java/io/OutputStream.d.ts'
import type { Runnable } from '../../../../../../java/lang/Runnable.d.ts'
import type { CompletableFuture } from '../../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Executor } from '../../../../../../java/util/concurrent/Executor.d.ts'
import type { Future } from '../../../../../../java/util/concurrent/Future.d.ts'
import type { AtomicInteger } from '../../../../../../java/util/concurrent/atomic/AtomicInteger.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../../java/lang/Throwable.d.ts'
export class DebugProtocolServer$Session extends Object implements Runnable {
    static connect(paramserver: DebugProtocolServer, paramin: InputStream, paramout: OutputStream, paramexecutor: Executor): Future<Object>;
    private constructor(server: DebugProtocolServer, in_: InputStream, out: OutputStream)
    // private closed: boolean;
    // private in: InputStream;
    // private out: OutputStream;
    // private pendingSentRequests: { [key: number]: CompletableFuture<Response> };
    // private sequenceNum: AtomicInteger;
    // private server: DebugProtocolServer;
    // private asExceptionWithMessage(t: Throwable): DebugProtocolServer$ExceptionWithMessage;
    // private isCancellationException(t: Throwable): boolean;
    // private isExceptionWithMessage(t: Throwable): boolean;
    // private processMessage(messageBytes: number[]): void;
    // private processRequest(request: Request): void;
    // private processResponse(response: Response): void;
    run(): void;
    // private sendErrorResponse(response: ErrorResponse): void;
    // private sendEvent(event: Event): void;
    // private sendRequest(request: Request): CompletableFuture<Response>;
    // private sendResponse(response: Response): void;
    // private writeMessage(message: string): void;
}