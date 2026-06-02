import type { HttpRequest } from '../../../java/net/http/HttpRequest.d.ts'
import type { HttpResponse } from '../../../java/net/http/HttpResponse.d.ts'
import type { HttpResponse$BodyHandler } from '../../../java/net/http/HttpResponse$BodyHandler.d.ts'
import type { CompletableFuture } from '../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Function } from '../../../java/util/function/Function.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface HttpResponse$PushPromiseHandler<T extends Object | number | string | boolean> extends Object{
    applyPushPromise(arg0: HttpRequest, arg1: HttpRequest, arg2: (param0: (param0: T) => java.net.http.HttpResponse.BodySubscriber<unknown>) => CompletableFuture<HttpResponse<T>>): void;
}