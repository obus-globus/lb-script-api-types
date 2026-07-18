import type { Plugin } from '../../../../io/ktor/server/application/Plugin.d.ts'
import type { RoutingNode } from '../../../../io/ktor/server/routing/RoutingNode.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class RouteScopedPluginKt extends Object {
    static findPluginInRoute<F extends unknown>(self: RoutingNode, plugin: Plugin<any, Object, F>): F | null;
}