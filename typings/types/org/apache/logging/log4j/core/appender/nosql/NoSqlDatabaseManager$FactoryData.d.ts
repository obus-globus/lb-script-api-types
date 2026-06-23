import type { AbstractDatabaseManager$AbstractFactoryData } from '../../../../../../../org/apache/logging/log4j/core/appender/db/AbstractDatabaseManager$AbstractFactoryData.d.ts'
import type { NoSqlProvider } from '../../../../../../../org/apache/logging/log4j/core/appender/nosql/NoSqlProvider.d.ts'
import type { Configuration } from '../../../../../../../org/apache/logging/log4j/core/config/Configuration.d.ts'
import type { KeyValuePair } from '../../../../../../../org/apache/logging/log4j/core/util/KeyValuePair.d.ts'
export class NoSqlDatabaseManager$FactoryData extends AbstractDatabaseManager$AbstractFactoryData {
    constructor(configuration: Configuration, bufferSize: number, provider: NoSqlProvider<any>, additionalFields: KeyValuePair[])
    // private additionalFields: KeyValuePair[];
    // private provider: NoSqlProvider<any>;
}