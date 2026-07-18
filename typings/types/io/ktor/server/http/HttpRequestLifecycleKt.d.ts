import type { RouteScopedPlugin } from '../../../../io/ktor/server/application/RouteScopedPlugin.d.ts'
import type { HttpRequestLifecycleConfig } from '../../../../io/ktor/server/http/HttpRequestLifecycleConfig.d.ts'
import type { AttributeKey } from '../../../../io/ktor/util/AttributeKey.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class HttpRequestLifecycleKt extends Object {
    static getHttpRequestCloseHandlerKey(): AttributeKey<() => void>;
    static getHttpRequestLifecycle(): RouteScopedPlugin<HttpRequestLifecycleConfig>;
}