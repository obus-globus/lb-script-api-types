import type { Serializable } from '../../../../../../../../java/io/Serializable.d.ts'
import type { Layout } from '../../../../../../../../org/apache/logging/log4j/core/Layout.d.ts'
import type { AbstractDatabaseManager$AbstractFactoryData } from '../../../../../../../../org/apache/logging/log4j/core/appender/db/AbstractDatabaseManager$AbstractFactoryData.d.ts'
import type { ColumnMapping } from '../../../../../../../../org/apache/logging/log4j/core/appender/db/ColumnMapping.d.ts'
import type { ColumnConfig } from '../../../../../../../../org/apache/logging/log4j/core/appender/db/jdbc/ColumnConfig.d.ts'
import type { ConnectionSource } from '../../../../../../../../org/apache/logging/log4j/core/appender/db/jdbc/ConnectionSource.d.ts'
export class JdbcDatabaseManager$FactoryData extends AbstractDatabaseManager$AbstractFactoryData {
    constructor(bufferSize: number, layout: Layout<Serializable>, connectionSource: ConnectionSource, tableName: string, columnConfigs: ColumnConfig[], columnMappings: ColumnMapping[], immediateFail: boolean, reconnectIntervalMillis: number, truncateStrings: boolean)
    // private columnConfigs: ColumnConfig[];
    // private columnMappings: ColumnMapping[];
    // private connectionSource: ConnectionSource;
    // private immediateFail: boolean;
    // private reconnectIntervalMillis: number;
    // private retry: boolean;
    // private tableName: string;
    // private truncateStrings: boolean;
    toString(): string;
}