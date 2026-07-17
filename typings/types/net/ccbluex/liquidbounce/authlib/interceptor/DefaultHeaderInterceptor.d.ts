import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Interceptor } from '../../../../../okhttp3/Interceptor.d.ts'
import type { Interceptor$Chain } from '../../../../../okhttp3/Interceptor$Chain.d.ts'
import type { Interceptor$Companion } from '../../../../../okhttp3/Interceptor$Companion.d.ts'
import type { Response } from '../../../../../okhttp3/Response.d.ts'
export class DefaultHeaderInterceptor extends Object implements Interceptor {
    static Companion: Interceptor$Companion;
    constructor(key: string, value: string, skipIfExists?: boolean)
    readonly key: string;
    readonly skipIfExists: boolean;
    readonly value: string;
    intercept(chain: Interceptor$Chain): Response;
}