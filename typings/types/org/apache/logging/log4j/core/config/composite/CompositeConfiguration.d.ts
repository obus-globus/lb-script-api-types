import type { StringBuilder } from '../../../../../../../java/lang/StringBuilder.d.ts'
import type { TimeUnit } from '../../../../../../../java/util/concurrent/TimeUnit.d.ts'
import type { Level } from '../../../../../../../org/apache/logging/log4j/Level.d.ts'
import type { AbstractConfiguration } from '../../../../../../../org/apache/logging/log4j/core/config/AbstractConfiguration.d.ts'
import type { Configuration } from '../../../../../../../org/apache/logging/log4j/core/config/Configuration.d.ts'
import type { Node } from '../../../../../../../org/apache/logging/log4j/core/config/Node.d.ts'
import type { Reconfigurable } from '../../../../../../../org/apache/logging/log4j/core/config/Reconfigurable.d.ts'
import type { MergeStrategy } from '../../../../../../../org/apache/logging/log4j/core/config/composite/MergeStrategy.d.ts'
export class CompositeConfiguration extends AbstractConfiguration implements Reconfigurable {
    static CONTEXT_PROPERTIES: string;
    static DEFAULT_STOP_TIMEOUT: number;
    static DEFAULT_STOP_TIMEUNIT: TimeUnit;
    static MERGE_STRATEGY_PROPERTY: string;
    static getDefaultLevel(): Level;
    constructor(configurations: AbstractConfiguration[])
    // private configurations: AbstractConfiguration[];
    // private mergeStrategy: MergeStrategy;
    // private printNodes(indent: string, node: Node, sb: StringBuilder): void;
    reconfigure(): Configuration;
    setup(): void;
    // private staffChildConfiguration(childConfiguration: AbstractConfiguration): void;
    toString(): string;
}