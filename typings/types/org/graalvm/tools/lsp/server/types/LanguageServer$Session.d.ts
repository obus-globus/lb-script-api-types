import type { InputStream } from '../../../../../../java/io/InputStream.d.ts'
import type { OutputStream } from '../../../../../../java/io/OutputStream.d.ts'
import type { Runnable } from '../../../../../../java/lang/Runnable.d.ts'
import type { CompletableFuture } from '../../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { ExecutorService } from '../../../../../../java/util/concurrent/ExecutorService.d.ts'
import type { Future } from '../../../../../../java/util/concurrent/Future.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../../java/lang/Throwable.d.ts'
import type { DelegateServers } from '../../../../../../org/graalvm/tools/lsp/server/DelegateServers.d.ts'
import type { ErrorCodes } from '../../../../../../org/graalvm/tools/lsp/server/types/ErrorCodes.d.ts'
import type { LanguageServer } from '../../../../../../org/graalvm/tools/lsp/server/types/LanguageServer.d.ts'
import type { NotificationMessage } from '../../../../../../org/graalvm/tools/lsp/server/types/NotificationMessage.d.ts'
import type { RequestMessage } from '../../../../../../org/graalvm/tools/lsp/server/types/RequestMessage.d.ts'
export class LanguageServer$Session extends Object implements Runnable {
    static connect(paramserver: LanguageServer, paramin: InputStream, paramout: OutputStream, paramexecutors: ExecutorService, paramdelegateServers: DelegateServers): Future<Object>;
    private constructor(server: LanguageServer, in_: InputStream, out: OutputStream, delegateServers: DelegateServers)
    // private closed: boolean;
    // private delegateServers: DelegateServers;
    // private in: InputStream;
    // private out: OutputStream;
    // private pendingReceivedRequests: Map<Object, CompletableFuture<Object>>;
    // private server: LanguageServer;
    // private isCancel(t: Throwable): boolean;
    // private processMessage(messageBytes: number[]): void;
    // private processNotification(msg: NotificationMessage, buffer: number[]): void;
    // private processRequest(req: RequestMessage, buffer: number[]): void;
    run(): void;
    // private sendErrorResponse(id: Object, code: ErrorCodes, message: string): void;
    // private sendNotification(method: string, params: Object): void;
    // private sendResponse(id: Object, result: Object): void;
    // private writeMessage(message: string): void;
}