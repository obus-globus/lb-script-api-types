import type { PluginBuilder } from '../../../../io/ktor/server/application/PluginBuilder.d.ts'
import type { PluginInstance } from '../../../../io/ktor/server/application/PluginInstance.d.ts'
import type { RoutingNode } from '../../../../io/ktor/server/routing/RoutingNode.d.ts'
import type { AttributeKey } from '../../../../io/ktor/util/AttributeKey.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class RouteScopedPluginBuilder<PluginConfig extends unknown> extends PluginBuilder<PluginConfig> {
    constructor(key: AttributeKey<PluginInstance>)
    readonly route: RoutingNode | null;
}