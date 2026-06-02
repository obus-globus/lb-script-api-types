import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { AppenderSet } from '../../../../../../org/apache/logging/log4j/core/appender/AppenderSet.d.ts'
import type { Configuration } from '../../../../../../org/apache/logging/log4j/core/config/Configuration.d.ts'
import type { Node } from '../../../../../../org/apache/logging/log4j/core/config/Node.d.ts'
import type { Builder } from '../../../../../../org/apache/logging/log4j/core/util/Builder.d.ts'
export class AppenderSet$Builder extends Object implements Builder<AppenderSet> {
    constructor()
    readonly configuration: Configuration;
    readonly node: Node;
    build(): AppenderSet;
    getConfiguration(): Configuration;
    getErrorPrefix(): string;
    getNode(): Node;
    isValid(): boolean;
    toString(): string;
    withConfiguration(configuration: Configuration): AppenderSet$Builder;
    withNode(node: Node): AppenderSet$Builder;
}