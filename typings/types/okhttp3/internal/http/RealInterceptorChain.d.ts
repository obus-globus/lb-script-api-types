import type { TimeUnit } from '../../../java/util/concurrent/TimeUnit.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Call } from '../../../okhttp3/Call.d.ts'
import type { Connection } from '../../../okhttp3/Connection.d.ts'
import type { Interceptor } from '../../../okhttp3/Interceptor.d.ts'
import type { Interceptor$Chain } from '../../../okhttp3/Interceptor$Chain.d.ts'
import type { Request } from '../../../okhttp3/Request.d.ts'
import type { Response } from '../../../okhttp3/Response.d.ts'
import type { Exchange } from '../../../okhttp3/internal/connection/Exchange.d.ts'
import type { RealCall } from '../../../okhttp3/internal/connection/RealCall.d.ts'
export class RealInterceptorChain extends Object implements Interceptor$Chain {
    constructor(call: RealCall, interceptors: Interceptor[], index: number, exchange: Exchange | null, request: Request, connectTimeoutMillis: number, readTimeoutMillis: number, writeTimeoutMillis: number)
    // private call: RealCall;
    /*not mapped: */ getCall$okhttp(): RealCall;
    // private calls: number;
    // private connectTimeoutMillis: number;
    /*not mapped: */ getConnectTimeoutMillis$okhttp(): number;
    // private exchange: Exchange | null;
    /*not mapped: */ getExchange$okhttp(): Exchange | null;
    // private index: number;
    // private interceptors: Interceptor[];
    // private readTimeoutMillis: number;
    /*not mapped: */ getReadTimeoutMillis$okhttp(): number;
    // private request: Request;
    /*not mapped: */ getRequest$okhttp(): Request;
    // private writeTimeoutMillis: number;
    /*not mapped: */ getWriteTimeoutMillis$okhttp(): number;
    call(): Call;
    connectTimeoutMillis(): number;
    connection(): Connection | null;
    copy(index: number, exchange: Exchange | null, request: Request, connectTimeoutMillis: number, readTimeoutMillis: number, writeTimeoutMillis: number): RealInterceptorChain;
    proceed(request: Request): Response;
    readTimeoutMillis(): number;
    request(): Request;
    withConnectTimeout(timeout: number, unit: TimeUnit): Interceptor$Chain;
    withReadTimeout(timeout: number, unit: TimeUnit): Interceptor$Chain;
    withWriteTimeout(timeout: number, unit: TimeUnit): Interceptor$Chain;
    writeTimeoutMillis(): number;
}