import type { InputStream } from '../../../../../../../../java/io/InputStream.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../../../../../../kotlin/coroutines/Continuation.d.ts'
import type { ApplicationCall } from '../../../../../../../../net/ccbluex/netty/http/application/ApplicationCall.d.ts'
export class HttpHelperKt extends Object {
    /**
     * Write all data from {@link inputStream} and close it
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/integration/interop/protocol/rest/v1/HttpHelper.kt#L25 | src/main/kotlin/net/ccbluex/liquidbounce/integration/interop/protocol/rest/v1/HttpHelper.kt:25}
     */
    static respondInputStream(paramarg0: ApplicationCall, paramarg1: InputStream, paramarg2: string, paramarg3: Continuation<Object>): Object;
}