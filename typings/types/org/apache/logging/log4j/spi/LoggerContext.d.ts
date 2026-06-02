import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Logger } from '../../../../../org/apache/logging/log4j/Logger.d.ts'
import type { MessageFactory } from '../../../../../org/apache/logging/log4j/message/MessageFactory.d.ts'
import type { ExtendedLogger } from '../../../../../org/apache/logging/log4j/spi/ExtendedLogger.d.ts'
import type { LoggerRegistry } from '../../../../../org/apache/logging/log4j/spi/LoggerRegistry.d.ts'
export interface LoggerContext extends Object{
    getExternalContext(): Object;
    getLogger(cls: Class<Object>): ExtendedLogger;
    getLogger(cls: Class<Object>, messageFactory: MessageFactory): ExtendedLogger;
    getLogger(name: string): ExtendedLogger;
    getLogger(name: string, messageFactory: MessageFactory): ExtendedLogger;
    getLoggerRegistry(): LoggerRegistry<Logger>;
    getObject(key: string): Object;
    hasLogger(name: string): boolean;
    hasLogger(name: string, messageFactoryClass: Class<MessageFactory>): boolean;
    hasLogger(name: string, messageFactory: MessageFactory): boolean;
    putObject(key: string, value: Object): Object;
    putObjectIfAbsent(key: string, value: Object): Object;
    removeObject(key: string): Object;
    removeObject(key: string, value: Object): boolean;
}