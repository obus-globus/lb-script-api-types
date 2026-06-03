import type { HttpClient } from '../../../../../java/net/http/HttpClient.d.ts'
import type { HttpRequest } from '../../../../../java/net/http/HttpRequest.d.ts'
import type { HttpResponse } from '../../../../../java/net/http/HttpResponse.d.ts'
import type { HttpResponse$BodyHandler } from '../../../../../java/net/http/HttpResponse$BodyHandler.d.ts'
import type { Executor } from '../../../../../java/util/concurrent/Executor.d.ts'
import type { ExecutorService } from '../../../../../java/util/concurrent/ExecutorService.d.ts'
import type { HttpClient as HttpClient_2 } from '../../../../../net/lenni0451/commons/httpclient/HttpClient.d.ts'
import type { HttpResponse as HttpResponse_2 } from '../../../../../net/lenni0451/commons/httpclient/HttpResponse.d.ts'
import type { RequestExecutor } from '../../../../../net/lenni0451/commons/httpclient/executor/RequestExecutor.d.ts'
import type { HttpRequest as HttpRequest_2 } from '../../../../../net/lenni0451/commons/httpclient/requests/HttpRequest.d.ts'
import type { CloseListenerInputStream$CloseListener } from '../../../../../net/lenni0451/commons/httpclient/utils/stream/CloseListenerInputStream$CloseListener.d.ts'
export class HttpClientExecutor extends RequestExecutor {
    constructor(arg0: HttpClient_2)
    // private buildClient(arg0: HttpRequest_2, arg1: Executor): HttpClient;
    // private buildRequest(arg0: HttpRequest_2): HttpRequest;
    // private closeListener(arg0: ExecutorService, arg1: HttpClient): () => void;
    execute(arg0: HttpRequest_2): HttpResponse_2;
    // private executeRequest(arg0: HttpClient, arg1: HttpRequest, arg2: (param0: T) => java.net.http.HttpResponse.BodySubscriber<unknown>): HttpResponse<T>;
}