import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { LoggerContext } from '../../../../../../../../org/apache/logging/log4j/core/LoggerContext.d.ts'
import type { AbstractManager } from '../../../../../../../../org/apache/logging/log4j/core/appender/AbstractManager.d.ts'
import type { ManagerFactory } from '../../../../../../../../org/apache/logging/log4j/core/appender/ManagerFactory.d.ts'
import type { Property } from '../../../../../../../../org/apache/logging/log4j/core/config/Property.d.ts'
export class KafkaManager extends AbstractManager {
    static DEFAULT_TIMEOUT_MILLIS: string;
    static getManager(paramname: string, paramfactory: ManagerFactory<Object, Object>, paramdata: Object | null): Object | null;
    static getManager(paramloggerContext: LoggerContext, paramname: string, paramtopic: string, paramsyncSend: boolean, paramproperties: (Object | null)[], paramkey: string): KafkaManager;
    static hasManager(paramname: string): boolean;
    constructor(loggerContext: LoggerContext, name: string, topic: string, syncSend: boolean, properties: Property[], key: string)
    private constructor(loggerContext: LoggerContext, name: string, topic: string, syncSend: boolean, sendTimestamp: boolean, properties: Property[], key: string)
}