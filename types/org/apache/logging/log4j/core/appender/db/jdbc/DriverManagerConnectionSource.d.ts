import type { TimeUnit } from '../../../../../../../../java/util/concurrent/TimeUnit.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Logger } from '../../../../../../../../org/apache/logging/log4j/Logger.d.ts'
import type { AbstractDriverManagerConnectionSource } from '../../../../../../../../org/apache/logging/log4j/core/appender/db/jdbc/AbstractDriverManagerConnectionSource.d.ts'
import type { Property } from '../../../../../../../../org/apache/logging/log4j/core/config/Property.d.ts'
export class DriverManagerConnectionSource extends AbstractDriverManagerConnectionSource {
    static DEFAULT_STOP_TIMEOUT: number;
    static DEFAULT_STOP_TIMEUNIT: TimeUnit;
    static getLogger(): Logger;
    static newBuilder(): Object | null;
    constructor(driverClassName: string, connectionString: string, actualConnectionString: string, userName: string[], password: string[], properties: Property[])
}