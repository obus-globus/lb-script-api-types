import type { TimeUnit } from '../java/util/concurrent/TimeUnit.d.ts'
import type { Object } from '../java/lang/Object.d.ts'
import type { Call } from '../okhttp3/Call.d.ts'
import type { Connection } from '../okhttp3/Connection.d.ts'
import type { Request } from '../okhttp3/Request.d.ts'
import type { Response } from '../okhttp3/Response.d.ts'
export interface Interceptor$Chain extends Object{
    call(): Call;
    connectTimeoutMillis(): number;
    connection(): Connection | null;
    proceed(request: Request): Response;
    readTimeoutMillis(): number;
    request(): Request;
    withConnectTimeout(timeout: number, unit: TimeUnit): Interceptor$Chain;
    withReadTimeout(timeout: number, unit: TimeUnit): Interceptor$Chain;
    withWriteTimeout(timeout: number, unit: TimeUnit): Interceptor$Chain;
    writeTimeoutMillis(): number;
}