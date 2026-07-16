import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Layout } from '../../../../../../org/apache/logging/log4j/core/Layout.d.ts'
import type { LogEvent } from '../../../../../../org/apache/logging/log4j/core/LogEvent.d.ts'
import type { LoggerContext } from '../../../../../../org/apache/logging/log4j/core/LoggerContext.d.ts'
import type { AbstractManager } from '../../../../../../org/apache/logging/log4j/core/appender/AbstractManager.d.ts'
import type { ManagerFactory } from '../../../../../../org/apache/logging/log4j/core/appender/ManagerFactory.d.ts'
export abstract class MailManager extends AbstractManager {
    static getManager<M extends AbstractManager, T extends unknown>(paramname: string, paramfactory: ManagerFactory<M, T>, paramdata: T): M;
    static hasManager(paramname: string): boolean;
    constructor(loggerContext: LoggerContext, name: string)
    add(event: LogEvent): void;
    sendEvents(layout: Layout<any>, appendEvent: LogEvent): void;
}