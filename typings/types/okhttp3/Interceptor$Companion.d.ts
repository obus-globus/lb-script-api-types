import type { Object } from '../java/lang/Object.d.ts'
import type { Function1 } from '../kotlin/jvm/functions/Function1.d.ts'
import type { Interceptor } from '../okhttp3/Interceptor.d.ts'
import type { Interceptor$Chain } from '../okhttp3/Interceptor$Chain.d.ts'
import type { Response } from '../okhttp3/Response.d.ts'
export class Interceptor$Companion extends Object {
    invoke(block: Function1<Interceptor$Chain, Response>): Interceptor;
}