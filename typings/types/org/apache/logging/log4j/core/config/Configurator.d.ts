import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { ClassLoader } from '../../../../../../java/lang/ClassLoader.d.ts'
import type { URI } from '../../../../../../java/net/URI.d.ts'
import type { TimeUnit } from '../../../../../../java/util/concurrent/TimeUnit.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../../java/util/Map$Entry.d.ts'
import type { Level } from '../../../../../../org/apache/logging/log4j/Level.d.ts'
import type { Logger } from '../../../../../../org/apache/logging/log4j/Logger.d.ts'
import type { LoggerContext } from '../../../../../../org/apache/logging/log4j/core/LoggerContext.d.ts'
import type { Configuration } from '../../../../../../org/apache/logging/log4j/core/config/Configuration.d.ts'
import type { ConfigurationSource } from '../../../../../../org/apache/logging/log4j/core/config/ConfigurationSource.d.ts'
export class Configurator extends Object {
    static initialize(paramloader: ClassLoader, paramconfiguration: Configuration): LoggerContext;
    static initialize(paramloader: ClassLoader, paramconfiguration: Configuration, paramexternalContext: Object): LoggerContext;
    static initialize(paramloader: ClassLoader, paramsource: ConfigurationSource): LoggerContext;
    static initialize(paramloader: ClassLoader, paramsource: ConfigurationSource, paramexternalContext: Object): LoggerContext;
    static initialize(paramname: string, paramloader: ClassLoader, paramconfigLocation: string): LoggerContext;
    static initialize(paramname: string, paramloader: ClassLoader, paramconfigLocation: string, paramexternalContext: Object): LoggerContext;
    static initialize(paramname: string, paramloader: ClassLoader, paramconfigLocation: URI): LoggerContext;
    static initialize(paramname: string, paramloader: ClassLoader, paramconfigLocation: URI, paramexternalContext: Object): LoggerContext;
    static initialize(paramname: string, paramloader: ClassLoader, paramconfigLocation: URI, paramentry: Map$Entry<string, Object>): LoggerContext;
    static initialize(paramname: string, paramloader: ClassLoader, paramconfigLocations: URI[], paramexternalContext: Object): LoggerContext;
    static initialize(paramname: string, paramconfigLocation: string): LoggerContext;
    static initialize(paramconfiguration: Configuration): LoggerContext;
    static reconfigure(): void;
    static reconfigure(paramuri: URI): void;
    static reconfigure(paramconfiguration: Configuration): void;
    static setAllLevels(paramparentLogger: string, paramlevel: Level): void;
    static setLevel(paramlogger: Logger, paramlevel: Level): Logger;
    static setLevel(paramclazz: Class<Object>, paramlevel: Level): void;
    static setLevel(paramloggerName: string, paramlevel: string): void;
    static setLevel(paramloggerName: string, paramlevel: Level): void;
    static setLevel(paramlevelMap: JavaMap<string, Level>): void;
    static setRootLevel(paramlevel: Level): void;
    static shutdown(paramctx: LoggerContext, paramtimeout: number, paramtimeUnit: TimeUnit): boolean;
    static shutdown(paramctx: LoggerContext): void;
    private constructor()
}