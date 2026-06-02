import type { TimeUnit } from '../../../../../../../java/util/concurrent/TimeUnit.d.ts'
import type { Level } from '../../../../../../../org/apache/logging/log4j/Level.d.ts'
import type { LoggerContext } from '../../../../../../../org/apache/logging/log4j/core/LoggerContext.d.ts'
import type { AbstractConfiguration } from '../../../../../../../org/apache/logging/log4j/core/config/AbstractConfiguration.d.ts'
import type { ConfigurationSource } from '../../../../../../../org/apache/logging/log4j/core/config/ConfigurationSource.d.ts'
import type { Reconfigurable } from '../../../../../../../org/apache/logging/log4j/core/config/Reconfigurable.d.ts'
export class JsonConfiguration extends AbstractConfiguration implements Reconfigurable {
    static CONTEXT_PROPERTIES: string;
    static DEFAULT_STOP_TIMEOUT: number;
    static DEFAULT_STOP_TIMEUNIT: TimeUnit;
    static getDefaultLevel(): Level;
    constructor(loggerContext: LoggerContext, configSource: ConfigurationSource)
}