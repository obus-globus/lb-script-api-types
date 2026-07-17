import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Appender } from '../../../../../../org/apache/logging/log4j/core/Appender.d.ts'
import type { AppenderSet$Builder } from '../../../../../../org/apache/logging/log4j/core/appender/AppenderSet$Builder.d.ts'
import type { Configuration } from '../../../../../../org/apache/logging/log4j/core/config/Configuration.d.ts'
import type { Node } from '../../../../../../org/apache/logging/log4j/core/config/Node.d.ts'
export class AppenderSet extends Object {
    static newBuilder(): AppenderSet$Builder;
    private constructor(configuration: Configuration, appenders: { [key: string]: Node })
    // private configuration: Configuration;
    // private nodeMap: { [key: string]: Node };
    createAppender(actualAppenderName: string, sourceAppenderName: string): Appender;
}