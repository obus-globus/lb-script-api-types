import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { AbstractConfiguration } from '../../../../../../../org/apache/logging/log4j/core/config/AbstractConfiguration.d.ts'
import type { Node } from '../../../../../../../org/apache/logging/log4j/core/config/Node.d.ts'
import type { PluginManager } from '../../../../../../../org/apache/logging/log4j/core/config/plugins/util/PluginManager.d.ts'
export interface MergeStrategy extends Object{
    mergConfigurations(target: Node, source: Node, pluginManager: PluginManager): void;
    mergeRootProperties(rootNode: Node, configuration: AbstractConfiguration): void;
}