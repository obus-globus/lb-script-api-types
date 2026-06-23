import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Layout } from '../../../../../../org/apache/logging/log4j/core/Layout.d.ts'
import type { LogEvent } from '../../../../../../org/apache/logging/log4j/core/LogEvent.d.ts'
import type { LoggerContext } from '../../../../../../org/apache/logging/log4j/core/LoggerContext.d.ts'
import type { AbstractManager } from '../../../../../../org/apache/logging/log4j/core/appender/AbstractManager.d.ts'
import type { ManagerFactory } from '../../../../../../org/apache/logging/log4j/core/appender/ManagerFactory.d.ts'
export abstract class MailManager extends AbstractManager {
    static getManager(paramname: string, paramfactory: ManagerFactory<AbstractManager, Object>, paramdata: Object | null): AbstractManager | null;
    static hasManager(paramname: string): boolean;
    constructor(loggerContext: LoggerContext, name: string)
    add(event: LogEvent): void;
    sendEvents(layout: Layout<any>, appendEvent: LogEvent): void;
}