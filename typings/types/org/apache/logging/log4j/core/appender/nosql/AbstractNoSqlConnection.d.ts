import type { AtomicBoolean } from '../../../../../../../java/util/concurrent/atomic/AtomicBoolean.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { NoSqlConnection } from '../../../../../../../org/apache/logging/log4j/core/appender/nosql/NoSqlConnection.d.ts'
import type { NoSqlObject } from '../../../../../../../org/apache/logging/log4j/core/appender/nosql/NoSqlObject.d.ts'
export abstract class AbstractNoSqlConnection<W extends unknown, T extends NoSqlObject<W>> extends Object implements NoSqlConnection<W, T> {
    constructor()
    readonly closed: AtomicBoolean;
    close(): void;
    closeImpl(): void;
    isClosed(): boolean;
}