import type { Executor } from '../java/util/concurrent/Executor.d.ts'
import type { Object } from '../java/lang/Object.d.ts'
import type { Request } from '../okhttp3/Request.d.ts'
import type { Timeout } from '../okio/Timeout.d.ts'
import type { Call } from '../retrofit2/Call.d.ts'
import type { Callback } from '../retrofit2/Callback.d.ts'
import type { Response } from '../retrofit2/Response.d.ts'
export class DefaultCallAdapterFactory$ExecutorCallbackCall<T extends unknown> extends Object implements Call<T> {
    constructor(arg0: Executor, arg1: Call<T>)
    // private callbackExecutor: Executor;
    // private delegate: Call<T>;
    cancel(): void;
    clone(): Call<T>;
    enqueue(arg0: Callback<T>): void;
    execute(): Response<T>;
    isCanceled(): boolean;
    isExecuted(): boolean;
    request(): Request;
    timeout(): Timeout;
}