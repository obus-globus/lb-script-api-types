import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { NoSqlConnection } from '../../../../../../../org/apache/logging/log4j/core/appender/nosql/NoSqlConnection.d.ts'
import type { NoSqlObject } from '../../../../../../../org/apache/logging/log4j/core/appender/nosql/NoSqlObject.d.ts'
export interface NoSqlProvider<C extends NoSqlConnection<Object, NoSqlObject<Object>>> extends Object{
    getConnection(): C;
}