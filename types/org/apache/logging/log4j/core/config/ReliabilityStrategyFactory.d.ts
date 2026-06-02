import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { LoggerConfig } from '../../../../../../org/apache/logging/log4j/core/config/LoggerConfig.d.ts'
import type { ReliabilityStrategy } from '../../../../../../org/apache/logging/log4j/core/config/ReliabilityStrategy.d.ts'
export class ReliabilityStrategyFactory extends Object {
    static getReliabilityStrategy(paramloggerConfig: LoggerConfig): ReliabilityStrategy;
    private constructor()
}