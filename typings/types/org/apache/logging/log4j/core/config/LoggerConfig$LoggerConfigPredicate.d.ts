import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
import type { LoggerConfig } from '../../../../../../org/apache/logging/log4j/core/config/LoggerConfig.d.ts'
export class LoggerConfig$LoggerConfigPredicate extends Enum<LoggerConfig$LoggerConfigPredicate> {
    static ALL: LoggerConfig$LoggerConfigPredicate;
    static ASYNCHRONOUS_ONLY: LoggerConfig$LoggerConfigPredicate;
    static SYNCHRONOUS_ONLY: LoggerConfig$LoggerConfigPredicate;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): LoggerConfig$LoggerConfigPredicate;
    static values(): (Object | null)[];
    constructor(arg2: any)
    allow(config: LoggerConfig): boolean;
    name(): "ALL" | "ASYNCHRONOUS_ONLY" | "SYNCHRONOUS_ONLY";
}