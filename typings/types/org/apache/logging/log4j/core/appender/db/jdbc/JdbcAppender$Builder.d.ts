import type { AbstractDatabaseAppender$Builder } from '../../../../../../../../org/apache/logging/log4j/core/appender/db/AbstractDatabaseAppender$Builder.d.ts'
import type { ColumnMapping } from '../../../../../../../../org/apache/logging/log4j/core/appender/db/ColumnMapping.d.ts'
import type { ColumnConfig } from '../../../../../../../../org/apache/logging/log4j/core/appender/db/jdbc/ColumnConfig.d.ts'
import type { ConnectionSource } from '../../../../../../../../org/apache/logging/log4j/core/appender/db/jdbc/ConnectionSource.d.ts'
import type { JdbcAppender } from '../../../../../../../../org/apache/logging/log4j/core/appender/db/jdbc/JdbcAppender.d.ts'
import type { Builder } from '../../../../../../../../org/apache/logging/log4j/core/util/Builder.d.ts'
export class JdbcAppender$Builder<B extends JdbcAppender$Builder<B>> extends AbstractDatabaseAppender$Builder<B> implements Builder<JdbcAppender> {
    constructor()
    // private bufferSize: number;
    // private columnConfigs: ColumnConfig[];
    // private columnMappings: ColumnMapping[];
    // private connectionSource: ConnectionSource;
    readonly immediateFail: boolean;
    readonly reconnectIntervalMillis: number;
    // private tableName: string;
    // private truncateStrings: boolean;
    build(): JdbcAppender;
    getErrorPrefix(): string;
    getReconnectIntervalMillis(): number;
    isImmediateFail(): boolean;
    isValid(): boolean;
    setBufferSize(bufferSize: number): B;
    setColumnConfigs(columnConfigs: ColumnConfig[]): B;
    setColumnMappings(columnMappings: ColumnMapping[]): B;
    setConnectionSource(connectionSource: ConnectionSource): B;
    setImmediateFail(immediateFail: boolean): void;
    setReconnectIntervalMillis(reconnectIntervalMillis: number): void;
    setTableName(tableName: string): B;
    setTruncateStrings(truncateStrings: boolean): B;
}