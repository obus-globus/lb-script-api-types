import type { RouteScopedPlugin } from '../../../../../../io/ktor/server/application/RouteScopedPlugin.d.ts'
import type { CORSConfig } from '../../../../../../io/ktor/server/plugins/cors/CORSConfig.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class CORSKt extends Object {
    static getCORS(): RouteScopedPlugin<CORSConfig>;
}