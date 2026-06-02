import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Method } from '../../../../../../../../java/lang/reflect/Method.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { LogEvent } from '../../../../../../../../org/apache/logging/log4j/core/LogEvent.d.ts'
import type { Configuration } from '../../../../../../../../org/apache/logging/log4j/core/config/Configuration.d.ts'
import type { Node } from '../../../../../../../../org/apache/logging/log4j/core/config/Node.d.ts'
import type { PluginType } from '../../../../../../../../org/apache/logging/log4j/core/config/plugins/util/PluginType.d.ts'
import type { Builder } from '../../../../../../../../org/apache/logging/log4j/core/util/Builder.d.ts'
export class PluginBuilder extends Object implements Builder<Object> {
    static validateFields(parambuilder: Builder<Object>, paramerrorPrefix: string): boolean;
    constructor(pluginType: PluginType<Object>)
    // private clazz: Class<Object>;
    // private configuration: Configuration;
    // private event: LogEvent;
    // private node: Node;
    // private pluginType: PluginType<Object>;
    build(): Object;
    // private checkForRemainingAttributes(): void;
    forLogEvent(event: LogEvent): PluginBuilder;
    // private generateParameters(factory: Method): Object[];
    getErrorPrefix(): string;
    // private injectFields(builder: Builder<Object>): void;
    isValid(): boolean;
    // private verify(): void;
    // private verifyNodeChildrenUsed(): void;
    withConfiguration(configuration: Configuration): PluginBuilder;
    withConfigurationNode(node: Node): PluginBuilder;
}