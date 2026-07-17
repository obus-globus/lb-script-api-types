import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
import type { LoggerConfig } from '../../../../../../org/apache/logging/log4j/core/config/LoggerConfig.d.ts'
export class LoggerConfig$LoggerConfigPredicate extends Enum<LoggerConfig$LoggerConfigPredicate> {
    static ALL: LoggerConfig$LoggerConfigPredicate;
    static ASYNCHRONOUS_ONLY: LoggerConfig$LoggerConfigPredicate;
    static SYNCHRONOUS_ONLY: LoggerConfig$LoggerConfigPredicate;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): LoggerConfig$LoggerConfigPredicate;
    static values(): LoggerConfig$LoggerConfigPredicate[];
    private constructor()
    allow(config: LoggerConfig): boolean;
    name(): "ALL" | "ASYNCHRONOUS_ONLY" | "SYNCHRONOUS_ONLY";
}