import type { ClassLoader } from '../../../../../java/lang/ClassLoader.d.ts'
import type { URI } from '../../../../../java/net/URI.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { LoggerContext } from '../../../../../org/apache/logging/log4j/spi/LoggerContext.d.ts'
import type { LoggerContextFactory } from '../../../../../org/apache/logging/log4j/spi/LoggerContextFactory.d.ts'
export class SimpleLoggerContextFactory extends Object implements LoggerContextFactory {
    static INSTANCE: SimpleLoggerContextFactory;
    constructor()
    getContext(fqcn: string, loader: ClassLoader, externalContext: Object, currentContext: boolean): LoggerContext;
    getContext(fqcn: string, loader: ClassLoader, externalContext: Object, currentContext: boolean, configLocation: URI, name: string): LoggerContext;
    hasContext(fqcn: string, loader: ClassLoader, currentContext: boolean): boolean;
    isClassLoaderDependent(): boolean;
    isClassLoaderDependent(): boolean;
    removeContext(removeContext: LoggerContext): void;
    shutdown(fqcn: string, loader: ClassLoader, currentContext: boolean, allContexts: boolean): void;
}