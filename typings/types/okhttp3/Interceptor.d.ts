import type { Object } from '../java/lang/Object.d.ts'
import type { Interceptor$Chain } from '../okhttp3/Interceptor$Chain.d.ts'
import type { Response } from '../okhttp3/Response.d.ts'
export interface Interceptor extends Object{
    intercept(chain: Interceptor$Chain): Response;
}