import type { ConfigurationFactoryData } from '../../../../../../../org/apache/logging/log4j/core/appender/ConfigurationFactoryData.d.ts'
import type { RolloverStrategy } from '../../../../../../../org/apache/logging/log4j/core/appender/rolling/RolloverStrategy.d.ts'
import type { TriggeringPolicy } from '../../../../../../../org/apache/logging/log4j/core/appender/rolling/TriggeringPolicy.d.ts'
import type { Configuration } from '../../../../../../../org/apache/logging/log4j/core/config/Configuration.d.ts'
export class RollingFileManager$FactoryData extends ConfigurationFactoryData {
    constructor(pattern: string, policy: TriggeringPolicy, strategy: RolloverStrategy, configuration: Configuration)
    readonly pattern: string;
    // private policy: TriggeringPolicy;
    // private strategy: RolloverStrategy;
    getPattern(): string;
    getRolloverStrategy(): RolloverStrategy;
    getTriggeringPolicy(): TriggeringPolicy;
}