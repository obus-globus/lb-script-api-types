import type { Object } from '../java/lang/Object.d.ts'
import type { Throwable } from '../java/lang/Throwable.d.ts'
import type { Call } from '../okhttp3/Call.d.ts'
import type { Call$Factory } from '../okhttp3/Call$Factory.d.ts'
import type { Request } from '../okhttp3/Request.d.ts'
import type { Response } from '../okhttp3/Response.d.ts'
import type { ResponseBody } from '../okhttp3/ResponseBody.d.ts'
import type { Timeout } from '../okio/Timeout.d.ts'
import type { Call as Call_2 } from '../retrofit2/Call.d.ts'
import type { Callback } from '../retrofit2/Callback.d.ts'
import type { Converter } from '../retrofit2/Converter.d.ts'
import type { RequestFactory } from '../retrofit2/RequestFactory.d.ts'
import type { Response as Response_2 } from '../retrofit2/Response.d.ts'
export class OkHttpCall<T extends unknown> extends Object implements Call_2<T> {
    constructor(arg0: RequestFactory, arg1: Object, arg2: Object[], arg3: Call$Factory, arg4: Converter<ResponseBody, T>)
    // private args: Object[];
    // private callFactory: Call$Factory;
    readonly canceled: boolean;
    // private creationFailure: Throwable;
    readonly executed: boolean;
    // private instance: Object;
    // private rawCall: Call;
    // private requestFactory: RequestFactory;
    // private responseConverter: Converter<ResponseBody, T>;
    cancel(): void;
    clone(): OkHttpCall<T>;
    // private createRawCall(): Call;
    enqueue(arg0: Callback<T>): void;
    execute(): Response_2<T>;
    // private getRawCall(): Call;
    isCanceled(): boolean;
    isExecuted(): boolean;
    parseResponse(arg0: Response): Response_2<T>;
    request(): Request;
    timeout(): Timeout;
}