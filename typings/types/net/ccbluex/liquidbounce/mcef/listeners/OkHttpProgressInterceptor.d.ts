import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { OkHttpProgressInterceptor$ProgressListener } from '../../../../../net/ccbluex/liquidbounce/mcef/listeners/OkHttpProgressInterceptor$ProgressListener.d.ts'
import type { Interceptor } from '../../../../../okhttp3/Interceptor.d.ts'
import type { Interceptor$Chain } from '../../../../../okhttp3/Interceptor$Chain.d.ts'
import type { Interceptor$Companion } from '../../../../../okhttp3/Interceptor$Companion.d.ts'
import type { Response } from '../../../../../okhttp3/Response.d.ts'
export class OkHttpProgressInterceptor extends Object implements Interceptor {
    static Companion: Interceptor$Companion;
    constructor(arg0: (param0: number, param1: number, param2: boolean) => void)
    // private progressListener: (param0: number, param1: number, param2: boolean) => void;
    intercept(arg0: Interceptor$Chain): Response;
}