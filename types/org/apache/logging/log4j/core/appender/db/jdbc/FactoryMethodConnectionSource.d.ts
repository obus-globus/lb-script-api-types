import type { Connection } from '../../../../../../../../java/sql/Connection.d.ts'
import type { TimeUnit } from '../../../../../../../../java/util/concurrent/TimeUnit.d.ts'
import type { DataSource } from '../../../../../../../../javax/sql/DataSource.d.ts'
import type { AbstractConnectionSource } from '../../../../../../../../org/apache/logging/log4j/core/appender/db/jdbc/AbstractConnectionSource.d.ts'
export class FactoryMethodConnectionSource extends AbstractConnectionSource {
    static DEFAULT_STOP_TIMEOUT: number;
    static DEFAULT_STOP_TIMEUNIT: TimeUnit;
    static createConnectionSource(paramclassName: string, parammethodName: string): FactoryMethodConnectionSource;
    private constructor(dataSource: DataSource, className: string, methodName: string, returnType: string)
    // private dataSource: DataSource;
    // private description: string;
    getConnection(): Connection;
    toString(): string;
}