import type { Serializable } from '../../../../../../../../java/io/Serializable.d.ts'
import type { Exception } from '../../../../../../../../java/lang/Exception.d.ts'
import type { Connection } from '../../../../../../../../java/sql/Connection.d.ts'
import type { PreparedStatement } from '../../../../../../../../java/sql/PreparedStatement.d.ts'
import type { Statement } from '../../../../../../../../java/sql/Statement.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Layout } from '../../../../../../../../org/apache/logging/log4j/core/Layout.d.ts'
import type { LogEvent } from '../../../../../../../../org/apache/logging/log4j/core/LogEvent.d.ts'
import type { AbstractManager } from '../../../../../../../../org/apache/logging/log4j/core/appender/AbstractManager.d.ts'
import type { ManagerFactory } from '../../../../../../../../org/apache/logging/log4j/core/appender/ManagerFactory.d.ts'
import type { AbstractDatabaseManager } from '../../../../../../../../org/apache/logging/log4j/core/appender/db/AbstractDatabaseManager.d.ts'
import type { ColumnConfig } from '../../../../../../../../org/apache/logging/log4j/core/appender/db/jdbc/ColumnConfig.d.ts'
import type { ConnectionSource } from '../../../../../../../../org/apache/logging/log4j/core/appender/db/jdbc/ConnectionSource.d.ts'
import type { JdbcDatabaseManager$FactoryData } from '../../../../../../../../org/apache/logging/log4j/core/appender/db/jdbc/JdbcDatabaseManager$FactoryData.d.ts'
import type { JdbcDatabaseManager$Reconnector } from '../../../../../../../../org/apache/logging/log4j/core/appender/db/jdbc/JdbcDatabaseManager$Reconnector.d.ts'
import type { JdbcDatabaseManager$ResultSetColumnMetaData } from '../../../../../../../../org/apache/logging/log4j/core/appender/db/jdbc/JdbcDatabaseManager$ResultSetColumnMetaData.d.ts'
import type { MapMessage } from '../../../../../../../../org/apache/logging/log4j/message/MapMessage.d.ts'
export class JdbcDatabaseManager extends AbstractDatabaseManager {
    static getJDBCDatabaseManager(paramname: string, parambufferSize: number, paramconnectionSource: ConnectionSource, paramtableName: string, paramcolumnConfigs: (Object | null)[]): JdbcDatabaseManager;
    static getManager(paramname: string, paramfactory: ManagerFactory<AbstractManager, Object>, paramdata: Object | null): AbstractManager | null;
    static getManager(paramname: string, parambufferSize: number, paramlayout: Layout<Serializable>, paramconnectionSource: ConnectionSource, paramtableName: string, paramcolumnConfigs: (Object | null)[], paramcolumnMappings: (Object | null)[]): JdbcDatabaseManager;
    static getManager(paramname: string, parambufferSize: number, paramlayout: Layout<Serializable>, paramconnectionSource: ConnectionSource, paramtableName: string, paramcolumnConfigs: (Object | null)[], paramcolumnMappings: (Object | null)[], paramimmediateFail: boolean, paramreconnectIntervalMillis: number): JdbcDatabaseManager;
    static getManager(paramname: string, parambufferSize: number, paramlayout: Layout<Serializable>, paramconnectionSource: ConnectionSource, paramtableName: string, paramcolumnConfigs: (Object | null)[], paramcolumnMappings: (Object | null)[], paramimmediateFail: boolean, paramreconnectIntervalMillis: number, paramtruncateStrings: boolean): JdbcDatabaseManager;
    static hasManager(paramname: string): boolean;
    constructor(arg0: string, arg1: string, arg2: (Object | null)[], arg3: JdbcDatabaseManager$FactoryData, arg4: any)
    // private columnConfigs: ColumnConfig[];
    // private columnMetaData: { [key: string]: JdbcDatabaseManager$ResultSetColumnMetaData };
    // private connection: Connection;
    // private factoryData: JdbcDatabaseManager$FactoryData;
    // private isBatchSupported: boolean;
    // private reconnector: JdbcDatabaseManager$Reconnector;
    readonly sqlStatement: string;
    // private statement: PreparedStatement;
    // private checkConnection(): void;
    closeResources(logExceptions: boolean): void;
    commitAndClose(): boolean;
    // private commitAndCloseAll(): boolean;
    // private connectAndPrepare(): void;
    connectAndStart(): void;
    // private createReconnector(): JdbcDatabaseManager$Reconnector;
    // private createSqlSelect(): string;
    // private fieldsToString(): string;
    getConnectionSource(): ConnectionSource;
    getSqlStatement(): string;
    getTableName(): string;
    // private initColumnMetaData(): void;
    // private isClosed(connection: Connection): boolean;
    // private isClosed(statement: Statement): boolean;
    // private reconnectOn(exception: Exception): void;
    // private setFields(mapMessage: MapMessage<any, Object>): void;
    // private setStatementObject(j: number, nameKey: string, value: Object): void;
    shutdownInternal(): boolean;
    startupInternal(): void;
    // private truncate(nameKey: string, value: Object): Object;
    writeInternal(event: LogEvent): void;
    writeInternal(event: LogEvent, serializable: Serializable): void;
    writeThrough(event: LogEvent, serializable: Serializable): void;
}