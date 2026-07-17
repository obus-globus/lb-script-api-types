import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { LoggerContext } from '../../../../../../../../org/apache/logging/log4j/core/LoggerContext.d.ts'
import type { AbstractManager } from '../../../../../../../../org/apache/logging/log4j/core/appender/AbstractManager.d.ts'
import type { ManagerFactory } from '../../../../../../../../org/apache/logging/log4j/core/appender/ManagerFactory.d.ts'
import type { Property } from '../../../../../../../../org/apache/logging/log4j/core/config/Property.d.ts'
export class KafkaManager extends AbstractManager {
    static DEFAULT_TIMEOUT_MILLIS: string;
    static getManager<M extends AbstractManager, T extends unknown>(paramname: string, paramfactory: ManagerFactory<M, T>, paramdata: T): M;
    static getManager(paramloggerContext: LoggerContext, paramname: string, paramtopic: string, paramsyncSend: boolean, paramproperties: Property[], paramkey: string): KafkaManager;
    static hasManager(paramname: string): boolean;
    constructor(loggerContext: LoggerContext, name: string, topic: string, syncSend: boolean, properties: Property[], key: string)
}