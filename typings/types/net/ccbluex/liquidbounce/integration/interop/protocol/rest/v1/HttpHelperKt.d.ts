import type { InputStream } from '../../../../../../../../java/io/InputStream.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { ApplicationCall } from '../../../../../../../../net/ccbluex/netty/http/application/ApplicationCall.d.ts'
export class HttpHelperKt extends Object {
    /**
     * Write all data from {@link inputStream} and close it
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/567a259aa7f4250a1b2911700de4282fe934a3d9/src/main/kotlin/net/ccbluex/liquidbounce/integration/interop/protocol/rest/v1/HttpHelper.kt#L28 | src/main/kotlin/net/ccbluex/liquidbounce/integration/interop/protocol/rest/v1/HttpHelper.kt:28}
     */
    static respondInputStream(self: ApplicationCall, inputStream: InputStream, contentType: string | null): void;
}