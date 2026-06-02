import type { Serializable } from '../../../../../../../java/io/Serializable.d.ts'
import type { Layout } from '../../../../../../../org/apache/logging/log4j/core/Layout.d.ts'
import type { ConfigurationFactoryData } from '../../../../../../../org/apache/logging/log4j/core/appender/ConfigurationFactoryData.d.ts'
import type { RolloverStrategy } from '../../../../../../../org/apache/logging/log4j/core/appender/rolling/RolloverStrategy.d.ts'
import type { TriggeringPolicy } from '../../../../../../../org/apache/logging/log4j/core/appender/rolling/TriggeringPolicy.d.ts'
import type { Configuration } from '../../../../../../../org/apache/logging/log4j/core/config/Configuration.d.ts'
export class RollingFileManager$FactoryData extends ConfigurationFactoryData {
    constructor(fileName: string, pattern: string, append: boolean, bufferedIO: boolean, policy: TriggeringPolicy, strategy: RolloverStrategy, advertiseURI: string, layout: Layout<Serializable>, bufferSize: number, immediateFlush: boolean, createOnDemand: boolean, filePermissions: string, fileOwner: string, fileGroup: string, configuration: Configuration)
    // private advertiseURI: string;
    // private append: boolean;
    // private bufferSize: number;
    // private bufferedIO: boolean;
    // private createOnDemand: boolean;
    // private fileGroup: string;
    // private fileName: string;
    // private fileOwner: string;
    // private filePermissions: string;
    // private immediateFlush: boolean;
    // private layout: Layout<Serializable>;
    readonly pattern: string;
    // private policy: TriggeringPolicy;
    // private strategy: RolloverStrategy;
    getPattern(): string;
    getRolloverStrategy(): RolloverStrategy;
    getTriggeringPolicy(): TriggeringPolicy;
    toString(): string;
}