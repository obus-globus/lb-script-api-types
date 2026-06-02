import type { TimeUnit } from '../../../../../../../java/util/concurrent/TimeUnit.d.ts'
import type { Level } from '../../../../../../../org/apache/logging/log4j/Level.d.ts'
import type { LoggerContext } from '../../../../../../../org/apache/logging/log4j/core/LoggerContext.d.ts'
import type { Configuration } from '../../../../../../../org/apache/logging/log4j/core/config/Configuration.d.ts'
import type { ConfigurationSource } from '../../../../../../../org/apache/logging/log4j/core/config/ConfigurationSource.d.ts'
import type { Reconfigurable } from '../../../../../../../org/apache/logging/log4j/core/config/Reconfigurable.d.ts'
import type { Component } from '../../../../../../../org/apache/logging/log4j/core/config/builder/api/Component.d.ts'
import type { BuiltConfiguration } from '../../../../../../../org/apache/logging/log4j/core/config/builder/impl/BuiltConfiguration.d.ts'
export class PropertiesConfiguration extends BuiltConfiguration implements Reconfigurable {
    static CONTEXT_PROPERTIES: string;
    static DEFAULT_STOP_TIMEOUT: number;
    static DEFAULT_STOP_TIMEUNIT: TimeUnit;
    static getDefaultLevel(): Level;
    constructor(loggerContext: LoggerContext, source: ConfigurationSource, root: Component)
    reconfigure(): Configuration;
}