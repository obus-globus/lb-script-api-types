import type { IOException } from '../../../java/io/IOException.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Interceptor } from '../../../okhttp3/Interceptor.d.ts'
import type { Interceptor$Chain } from '../../../okhttp3/Interceptor$Chain.d.ts'
import type { Interceptor$Companion } from '../../../okhttp3/Interceptor$Companion.d.ts'
import type { OkHttpClient } from '../../../okhttp3/OkHttpClient.d.ts'
import type { Request } from '../../../okhttp3/Request.d.ts'
import type { Response } from '../../../okhttp3/Response.d.ts'
import type { Exchange } from '../../../okhttp3/internal/connection/Exchange.d.ts'
import type { RealCall } from '../../../okhttp3/internal/connection/RealCall.d.ts'
import type { RetryAndFollowUpInterceptor$Companion } from '../../../okhttp3/internal/http/RetryAndFollowUpInterceptor$Companion.d.ts'
export class RetryAndFollowUpInterceptor extends Object implements Interceptor {
    static Companion: Interceptor$Companion;
    static Companion: RetryAndFollowUpInterceptor$Companion;
    constructor(client: OkHttpClient)
    // private client: OkHttpClient;
    // private buildRedirectRequest(userResponse: Response, method: string): Request | null;
    // private followUpRequest(userResponse: Response, exchange: Exchange | null): Request | null;
    intercept(chain: Interceptor$Chain): Response;
    // private isRecoverable(e: IOException, requestSendStarted: boolean): boolean;
    // private recover(e: IOException, call: RealCall, userRequest: Request): boolean;
    // private requestIsOneShot(e: IOException, userRequest: Request): boolean;
    // private retryAfter(userResponse: Response, defaultDelay: number): number;
}