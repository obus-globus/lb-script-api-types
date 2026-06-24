import type { NoSqlDatabaseManager$1 } from '../../../../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { Serializable } from '../../../../../../../java/io/Serializable.d.ts'
import type { StackTraceElement } from '../../../../../../../java/lang/StackTraceElement.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Marker } from '../../../../../../../org/apache/logging/log4j/Marker.d.ts'
import type { LogEvent } from '../../../../../../../org/apache/logging/log4j/core/LogEvent.d.ts'
import type { AbstractManager } from '../../../../../../../org/apache/logging/log4j/core/appender/AbstractManager.d.ts'
import type { ManagerFactory } from '../../../../../../../org/apache/logging/log4j/core/appender/ManagerFactory.d.ts'
import type { AbstractDatabaseManager } from '../../../../../../../org/apache/logging/log4j/core/appender/db/AbstractDatabaseManager.d.ts'
import type { NoSqlConnection } from '../../../../../../../org/apache/logging/log4j/core/appender/nosql/NoSqlConnection.d.ts'
import type { NoSqlObject } from '../../../../../../../org/apache/logging/log4j/core/appender/nosql/NoSqlObject.d.ts'
import type { NoSqlProvider } from '../../../../../../../org/apache/logging/log4j/core/appender/nosql/NoSqlProvider.d.ts'
import type { Configuration } from '../../../../../../../org/apache/logging/log4j/core/config/Configuration.d.ts'
import type { KeyValuePair } from '../../../../../../../org/apache/logging/log4j/core/util/KeyValuePair.d.ts'
import type { MapMessage } from '../../../../../../../org/apache/logging/log4j/message/MapMessage.d.ts'
export class NoSqlDatabaseManager<W extends unknown> extends AbstractDatabaseManager {
    static getManager(paramname: string, paramfactory: ManagerFactory<AbstractManager, Object>, paramdata: Object | null): AbstractManager | null;
    static getNoSqlDatabaseManager(paramname: string, parambufferSize: number, paramprovider: NoSqlProvider<any>): NoSqlDatabaseManager<Object>;
    static getNoSqlDatabaseManager(paramname: string, parambufferSize: number, paramprovider: NoSqlProvider<any>, paramadditionalFields: (Object | null)[], paramconfiguration: Configuration): NoSqlDatabaseManager<Object>;
    static hasManager(paramname: string): boolean;
    constructor(arg0: string, arg1: number, arg2: NoSqlProvider<NoSqlConnection<Object, any>>, arg3: KeyValuePair[], arg4: Configuration, arg5: NoSqlDatabaseManager$1)
    private constructor(name: string, bufferSize: number, provider: NoSqlProvider<NoSqlConnection<W, NoSqlObject<W>>>, additionalFields: KeyValuePair[], configuration: Configuration)
    // private additionalFields: KeyValuePair[];
    // private connection: NoSqlConnection<W, NoSqlObject<W>>;
    // private provider: NoSqlProvider<NoSqlConnection<W, NoSqlObject<W>>>;
    // private buildMarkerEntity(marker: Marker): NoSqlObject<W>;
    commitAndClose(): boolean;
    connectAndStart(): void;
    // private convertStackTrace(stackTrace: StackTraceElement[]): NoSqlObject<W>[];
    // private convertStackTraceElement(element: StackTraceElement): NoSqlObject<W>;
    // private setAdditionalFields(entity: NoSqlObject<W>): void;
    // private setFields(event: LogEvent, entity: NoSqlObject<W>): void;
    // private setFields(mapMessage: MapMessage<any, Object>, noSqlObject: NoSqlObject<W>): void;
    shutdownInternal(): boolean;
    startupInternal(): void;
    writeInternal(event: LogEvent): void;
    writeInternal(event: LogEvent, serializable: Serializable): void;
}