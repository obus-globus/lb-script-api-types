import type { Connection } from '../../../../../../../../java/sql/Connection.d.ts'
import type { TimeUnit } from '../../../../../../../../java/util/concurrent/TimeUnit.d.ts'
import type { AbstractLifeCycle } from '../../../../../../../../org/apache/logging/log4j/core/AbstractLifeCycle.d.ts'
import type { ConnectionSource } from '../../../../../../../../org/apache/logging/log4j/core/appender/db/jdbc/ConnectionSource.d.ts'
export abstract class AbstractConnectionSource extends AbstractLifeCycle implements ConnectionSource {
    static DEFAULT_STOP_TIMEOUT: number;
    static DEFAULT_STOP_TIMEUNIT: TimeUnit;
    constructor()
    getConnection(): Connection;
}