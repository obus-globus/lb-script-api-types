import type { Class } from '../../../../java/lang/Class.d.ts'
import type { ClassLoader } from '../../../../java/lang/ClassLoader.d.ts'
import type { URI } from '../../../../java/net/URI.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Logger } from '../../../../org/apache/logging/log4j/Logger.d.ts'
import type { MessageFactory } from '../../../../org/apache/logging/log4j/message/MessageFactory.d.ts'
import type { LoggerContext } from '../../../../org/apache/logging/log4j/spi/LoggerContext.d.ts'
import type { LoggerContextFactory } from '../../../../org/apache/logging/log4j/spi/LoggerContextFactory.d.ts'
export class LogManager extends Object {
    static FACTORY_PROPERTY_NAME: string;
    static ROOT_LOGGER_NAME: string;
    static exists(paramname: string): boolean;
    static getContext(): LoggerContext;
    static getContext(paramcurrentContext: boolean): LoggerContext;
    static getContext(paramloader: ClassLoader, paramcurrentContext: boolean): LoggerContext;
    static getContext(paramloader: ClassLoader, paramcurrentContext: boolean, paramexternalContext: Object): LoggerContext;
    static getContext(paramloader: ClassLoader, paramcurrentContext: boolean, paramexternalContext: Object, paramconfigLocation: URI): LoggerContext;
    static getContext(paramloader: ClassLoader, paramcurrentContext: boolean, paramexternalContext: Object, paramconfigLocation: URI, paramname: string): LoggerContext;
    static getContext(paramloader: ClassLoader, paramcurrentContext: boolean, paramconfigLocation: URI): LoggerContext;
    static getFactory(): LoggerContextFactory;
    static getFormatterLogger(): Logger;
    static getFormatterLogger(paramclazz: Class<Object>): Logger;
    static getFormatterLogger(paramvalue: Object): Logger;
    static getFormatterLogger(paramname: string): Logger;
    static getLogger(): Logger;
    static getLogger(paramclazz: Class<Object>): Logger;
    static getLogger(paramclazz: Class<Object>, parammessageFactory: MessageFactory): Logger;
    static getLogger(paramvalue: Object): Logger;
    static getLogger(paramvalue: Object, parammessageFactory: MessageFactory): Logger;
    static getLogger(paramname: string): Logger;
    static getLogger(paramname: string, parammessageFactory: MessageFactory): Logger;
    static getLogger(parammessageFactory: MessageFactory): Logger;
    static getRootLogger(): Logger;
    static setFactory(paramfactory: LoggerContextFactory): void;
    static shutdown(): void;
    static shutdown(paramcurrentContext: boolean): void;
    static shutdown(paramcurrentContext: boolean, paramallContexts: boolean): void;
    static shutdown(paramcontext: LoggerContext): void;
    constructor()
}