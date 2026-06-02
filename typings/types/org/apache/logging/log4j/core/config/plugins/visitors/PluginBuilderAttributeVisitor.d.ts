import type { StringBuilder } from '../../../../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { LogEvent } from '../../../../../../../../org/apache/logging/log4j/core/LogEvent.d.ts'
import type { Configuration } from '../../../../../../../../org/apache/logging/log4j/core/config/Configuration.d.ts'
import type { Node } from '../../../../../../../../org/apache/logging/log4j/core/config/Node.d.ts'
import type { PluginBuilderAttribute } from '../../../../../../../../org/apache/logging/log4j/core/config/plugins/PluginBuilderAttribute.d.ts'
import type { AbstractPluginVisitor } from '../../../../../../../../org/apache/logging/log4j/core/config/plugins/visitors/AbstractPluginVisitor.d.ts'
export class PluginBuilderAttributeVisitor extends AbstractPluginVisitor<PluginBuilderAttribute> {
    constructor()
    visit(configuration: Configuration, node: Node, event: LogEvent, log: StringBuilder): Object;
}