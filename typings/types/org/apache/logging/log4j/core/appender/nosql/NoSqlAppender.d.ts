import type { Serializable } from '../../../../../../../java/io/Serializable.d.ts'
import type { TimeUnit } from '../../../../../../../java/util/concurrent/TimeUnit.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Filter } from '../../../../../../../org/apache/logging/log4j/core/Filter.d.ts'
import type { Layout } from '../../../../../../../org/apache/logging/log4j/core/Layout.d.ts'
import type { AbstractDatabaseAppender } from '../../../../../../../org/apache/logging/log4j/core/appender/db/AbstractDatabaseAppender.d.ts'
import type { NoSqlDatabaseManager } from '../../../../../../../org/apache/logging/log4j/core/appender/nosql/NoSqlDatabaseManager.d.ts'
import type { NoSqlProvider } from '../../../../../../../org/apache/logging/log4j/core/appender/nosql/NoSqlProvider.d.ts'
import type { Property } from '../../../../../../../org/apache/logging/log4j/core/config/Property.d.ts'
export class NoSqlAppender extends AbstractDatabaseAppender<NoSqlDatabaseManager<Object>> {
    static DEFAULT_RECONNECT_INTERVAL_MILLIS: number;
    static DEFAULT_STOP_TIMEOUT: number;
    static DEFAULT_STOP_TIMEUNIT: TimeUnit;
    static ELEMENT_TYPE: string;
    static EMPTY_ARRAY: (Object | null)[];
    static createAppender(paramname: string, paramignore: string, paramfilter: Filter, parambufferSize: string, paramprovider: NoSqlProvider<any>): NoSqlAppender;
    static newBuilder(): Object | null;
    static parseInt(params: string, paramdefaultValue: number): number;
    constructor(arg0: string, arg1: Filter, arg2: Layout<Serializable>, arg3: boolean, arg4: Property[], arg5: NoSqlDatabaseManager<Object>, arg6: any)
    // private description: string;
    toString(): string;
}