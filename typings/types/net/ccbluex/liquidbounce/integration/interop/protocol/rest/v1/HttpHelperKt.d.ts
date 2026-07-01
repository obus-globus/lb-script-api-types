import type { InputStream } from '../../../../../../../../java/io/InputStream.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../../../../../../kotlin/coroutines/Continuation.d.ts'
import type { ApplicationCall } from '../../../../../../../../net/ccbluex/netty/http/application/ApplicationCall.d.ts'
export class HttpHelperKt extends Object {
    /**
     * Write all data from {@link inputStream} and close it
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/707b7339b27ee1da75cb769c96b0d9d292d0a8ad/src/main/kotlin/net/ccbluex/liquidbounce/integration/interop/protocol/rest/v1/HttpHelper.kt#L28 | src/main/kotlin/net/ccbluex/liquidbounce/integration/interop/protocol/rest/v1/HttpHelper.kt:28}
     */
    static respondInputStream(paramarg0: ApplicationCall, paramarg1: InputStream, paramarg2: string, paramarg3: Continuation<Object>): Object;
}