import type { NoSqlDatabaseManager$1 } from '../../../../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ManagerFactory } from '../../../../../../../org/apache/logging/log4j/core/appender/ManagerFactory.d.ts'
import type { NoSqlDatabaseManager } from '../../../../../../../org/apache/logging/log4j/core/appender/nosql/NoSqlDatabaseManager.d.ts'
import type { NoSqlDatabaseManager$FactoryData } from '../../../../../../../org/apache/logging/log4j/core/appender/nosql/NoSqlDatabaseManager$FactoryData.d.ts'
export class NoSqlDatabaseManager$NoSQLDatabaseManagerFactory extends Object implements ManagerFactory<NoSqlDatabaseManager<Object>, NoSqlDatabaseManager$FactoryData> {
    private constructor()
    constructor(arg0: NoSqlDatabaseManager$1)
    createManager(name: string, data: NoSqlDatabaseManager$FactoryData): NoSqlDatabaseManager<Object>;
}