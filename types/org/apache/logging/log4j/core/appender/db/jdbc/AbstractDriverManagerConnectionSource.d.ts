import type { Connection } from '../../../../../../../../java/sql/Connection.d.ts'
import type { TimeUnit } from '../../../../../../../../java/util/concurrent/TimeUnit.d.ts'
import type { Logger } from '../../../../../../../../org/apache/logging/log4j/Logger.d.ts'
import type { AbstractConnectionSource } from '../../../../../../../../org/apache/logging/log4j/core/appender/db/jdbc/AbstractConnectionSource.d.ts'
import type { Property } from '../../../../../../../../org/apache/logging/log4j/core/config/Property.d.ts'
export class AbstractDriverManagerConnectionSource extends AbstractConnectionSource {
    static DEFAULT_STOP_TIMEOUT: number;
    static DEFAULT_STOP_TIMEUNIT: TimeUnit;
    static getLogger(): Logger;
    constructor(driverClassName: string, connectionString: string, actualConnectionString: string, userName: string[], password: string[], properties: Property[])
    readonly actualConnectionString: string;
    readonly connectionString: string;
    readonly driverClassName: string;
    readonly password: string[];
    readonly properties: Property[];
    readonly userName: string[];
    getActualConnectionString(): string;
    getConnection(): Connection;
    getConnectionString(): string;
    getDriverClassName(): string;
    getPassword(): string[];
    getProperties(): Property[];
    getUserName(): string[];
    loadDriver(): void;
    loadDriver(className: string): void;
    toProperties(properties: Property[]): Properties;
    toString(): string;
    toString(value: string[]): string;
}