import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { AbstractConfiguration } from '../../../../../../../org/apache/logging/log4j/core/config/AbstractConfiguration.d.ts'
import type { Node } from '../../../../../../../org/apache/logging/log4j/core/config/Node.d.ts'
import type { MergeStrategy } from '../../../../../../../org/apache/logging/log4j/core/config/composite/MergeStrategy.d.ts'
import type { PluginManager } from '../../../../../../../org/apache/logging/log4j/core/config/plugins/util/PluginManager.d.ts'
export class DefaultMergeStrategy extends Object implements MergeStrategy {
    constructor()
    // private getLoggerNode(parentNode: Node, name: string): Node;
    // private isFilterNode(node: Node): boolean;
    // private isSameName(node1: Node, node2: Node): boolean;
    // private isSameReference(node1: Node, node2: Node): boolean;
    mergConfigurations(target: Node, source: Node, pluginManager: PluginManager): void;
    mergeRootProperties(rootNode: Node, configuration: AbstractConfiguration): void;
    // private updateFilterNode(target: Node, targetChildNode: Node, sourceChildNode: Node, pluginManager: PluginManager): void;
}