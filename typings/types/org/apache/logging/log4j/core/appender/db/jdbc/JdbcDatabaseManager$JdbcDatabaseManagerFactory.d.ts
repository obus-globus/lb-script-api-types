import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { ManagerFactory } from '../../../../../../../../org/apache/logging/log4j/core/appender/ManagerFactory.d.ts'
import type { JdbcDatabaseManager } from '../../../../../../../../org/apache/logging/log4j/core/appender/db/jdbc/JdbcDatabaseManager.d.ts'
import type { JdbcDatabaseManager$FactoryData } from '../../../../../../../../org/apache/logging/log4j/core/appender/db/jdbc/JdbcDatabaseManager$FactoryData.d.ts'
export class JdbcDatabaseManager$JdbcDatabaseManagerFactory extends Object implements ManagerFactory<JdbcDatabaseManager, JdbcDatabaseManager$FactoryData> {
    constructor(arg0: any)
    createManager(name: string, data: JdbcDatabaseManager$FactoryData): JdbcDatabaseManager;
}