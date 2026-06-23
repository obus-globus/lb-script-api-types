import type { Closeable } from '../../../../../../../java/io/Closeable.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { NoSqlObject } from '../../../../../../../org/apache/logging/log4j/core/appender/nosql/NoSqlObject.d.ts'
export interface NoSqlConnection<W extends unknown, T extends NoSqlObject<W>> extends Closeable, Object{
    close(): void;
    createList(length: number): T[];
    createObject(): T;
    insertObject(object: NoSqlObject<W>): void;
    isClosed(): boolean;
}