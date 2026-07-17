import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { ClassLoader } from '../../../../../java/lang/ClassLoader.d.ts'
import type { WeakReference } from '../../../../../java/lang/ref/WeakReference.d.ts'
import type { URL } from '../../../../../java/net/URL.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { LoggerContextFactory } from '../../../../../org/apache/logging/log4j/spi/LoggerContextFactory.d.ts'
import type { ThreadContextMap } from '../../../../../org/apache/logging/log4j/spi/ThreadContextMap.d.ts'
export class Provider extends Object {
    static FACTORY_PRIORITY: string;
    static LOGGER_CONTEXT_FACTORY: string;
    static PROVIDER_PROPERTY_NAME: string;
    static THREAD_CONTEXT_MAP: string;
    constructor(props: JavaMap<any, any>, url: URL, classLoader: ClassLoader)
    constructor(priority: number, versions: string)
    constructor(priority: number, versions: string, loggerContextFactoryClass: Class<LoggerContextFactory>)
    constructor(priority: number, versions: string, loggerContextFactoryClass: Class<LoggerContextFactory>, threadContextMapClass: Class<ThreadContextMap>)
    // private classLoader: WeakReference<ClassLoader>;
    readonly className: string;
    // private loggerContextFactoryClass: Class<LoggerContextFactory>;
    readonly priority: number;
    readonly threadContextMap: string;
    // private threadContextMapClass: Class<ThreadContextMap>;
    readonly url: URL;
    readonly versions: string;
    equals(o: Object | null): boolean;
    getClassName(): string;
    getLoggerContextFactory(): LoggerContextFactory;
    getPriority(): number;
    getThreadContextMap(): string;
    getThreadContextMapInstance(): ThreadContextMap;
    getUrl(): URL;
    getVersions(): string;
    hashCode(): number;
    loadLoggerContextFactory(): Class<LoggerContextFactory>;
    loadThreadContextMap(): Class<ThreadContextMap>;
    toString(): string;
}