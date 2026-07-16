import type { Serializable } from '../../../../../../../../java/io/Serializable.d.ts'
import type { TimeUnit } from '../../../../../../../../java/util/concurrent/TimeUnit.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Appender } from '../../../../../../../../org/apache/logging/log4j/core/Appender.d.ts'
import type { Filter } from '../../../../../../../../org/apache/logging/log4j/core/Filter.d.ts'
import type { Layout } from '../../../../../../../../org/apache/logging/log4j/core/Layout.d.ts'
import type { AbstractDatabaseAppender } from '../../../../../../../../org/apache/logging/log4j/core/appender/db/AbstractDatabaseAppender.d.ts'
import type { ColumnConfig } from '../../../../../../../../org/apache/logging/log4j/core/appender/db/jdbc/ColumnConfig.d.ts'
import type { ConnectionSource } from '../../../../../../../../org/apache/logging/log4j/core/appender/db/jdbc/ConnectionSource.d.ts'
import type { JdbcDatabaseManager } from '../../../../../../../../org/apache/logging/log4j/core/appender/db/jdbc/JdbcDatabaseManager.d.ts'
import type { Property } from '../../../../../../../../org/apache/logging/log4j/core/config/Property.d.ts'
export class JdbcAppender extends AbstractDatabaseAppender<JdbcDatabaseManager> {
    static DEFAULT_RECONNECT_INTERVAL_MILLIS: number;
    static DEFAULT_STOP_TIMEOUT: number;
    static DEFAULT_STOP_TIMEUNIT: TimeUnit;
    static ELEMENT_TYPE: string;
    static EMPTY_ARRAY: Appender[];
    static createAppender(paramname: string, paramignore: string, paramfilter: Filter, paramconnectionSource: ConnectionSource, parambufferSize: string, paramtableName: string, paramcolumnConfigs: ColumnConfig[]): JdbcAppender;
    static newBuilder(): Object | null;
    static parseInt(params: string, paramdefaultValue: number): number;
    constructor(arg0: string, arg1: Filter, arg2: Layout<Serializable>, arg3: boolean, arg4: Property[], arg5: JdbcDatabaseManager, arg6: any)
    // private description: string;
    toString(): string;
}