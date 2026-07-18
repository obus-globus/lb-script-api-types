import type { ServerConfig } from '../../../../io/ktor/server/application/ServerConfig.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CoroutineContext } from '../../../../kotlin/coroutines/CoroutineContext.d.ts'
export class ApplicationRootConfigBridge extends Object {
    constructor(rootConfig: ServerConfig, parentCoroutineContext: CoroutineContext)
    readonly parentCoroutineContext: CoroutineContext;
}