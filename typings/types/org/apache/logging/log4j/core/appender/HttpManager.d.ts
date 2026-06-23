import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Layout } from '../../../../../../org/apache/logging/log4j/core/Layout.d.ts'
import type { LogEvent } from '../../../../../../org/apache/logging/log4j/core/LogEvent.d.ts'
import type { LoggerContext } from '../../../../../../org/apache/logging/log4j/core/LoggerContext.d.ts'
import type { AbstractManager } from '../../../../../../org/apache/logging/log4j/core/appender/AbstractManager.d.ts'
import type { ManagerFactory } from '../../../../../../org/apache/logging/log4j/core/appender/ManagerFactory.d.ts'
import type { Configuration } from '../../../../../../org/apache/logging/log4j/core/config/Configuration.d.ts'
export abstract class HttpManager extends AbstractManager {
    static getManager(paramname: string, paramfactory: ManagerFactory<AbstractManager, Object>, paramdata: Object | null): AbstractManager | null;
    static hasManager(paramname: string): boolean;
    constructor(configuration: Configuration, loggerContext: LoggerContext, name: string)
    readonly configuration: Configuration;
    getConfiguration(): Configuration;
    send(layout: Layout<any>, event: LogEvent): void;
    startup(): void;
}