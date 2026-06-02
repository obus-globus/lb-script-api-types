import type { TimeUnit } from '../../../../../../../java/util/concurrent/TimeUnit.d.ts'
import type { Level } from '../../../../../../../org/apache/logging/log4j/Level.d.ts'
import type { LoggerContext } from '../../../../../../../org/apache/logging/log4j/core/LoggerContext.d.ts'
import type { AbstractConfiguration } from '../../../../../../../org/apache/logging/log4j/core/config/AbstractConfiguration.d.ts'
import type { Configuration } from '../../../../../../../org/apache/logging/log4j/core/config/Configuration.d.ts'
import type { ConfigurationSource } from '../../../../../../../org/apache/logging/log4j/core/config/ConfigurationSource.d.ts'
import type { Node } from '../../../../../../../org/apache/logging/log4j/core/config/Node.d.ts'
import type { Reconfigurable } from '../../../../../../../org/apache/logging/log4j/core/config/Reconfigurable.d.ts'
import type { XmlConfiguration$Status } from '../../../../../../../org/apache/logging/log4j/core/config/xml/XmlConfiguration$Status.d.ts'
import type { Element } from '../../../../../../../org/w3c/dom/Element.d.ts'
export class XmlConfiguration extends AbstractConfiguration implements Reconfigurable {
    static CONTEXT_PROPERTIES: string;
    static DEFAULT_STOP_TIMEOUT: number;
    static DEFAULT_STOP_TIMEUNIT: TimeUnit;
    static getDefaultLevel(): Level;
    constructor(loggerContext: LoggerContext, configSource: ConfigurationSource)
    // private rootElement: Element;
    // private schemaResource: string;
    // private status: XmlConfiguration$Status[];
    // private strict: boolean;
    // private constructHierarchy(node: Node, element: Element): void;
    // private getType(element: Element): string;
    // private processAttributes(node: Node, element: Element): { [key: string]: string };
    reconfigure(): Configuration;
    setup(): void;
    toString(): string;
}