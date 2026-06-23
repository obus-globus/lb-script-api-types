import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { ClassLoader } from '../../../../java/lang/ClassLoader.d.ts'
import type { URL } from '../../../../java/net/URL.d.ts'
import type { Enumeration } from '../../../../java/util/Enumeration.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { InitializableProblemHandler } from '../../../../org/apache/tika/config/InitializableProblemHandler.d.ts'
import type { LoadErrorHandler } from '../../../../org/apache/tika/config/LoadErrorHandler.d.ts'
export class ServiceLoader extends Object {
    static setContextClassLoader(paramarg0: ClassLoader): void;
    constructor()
    constructor(arg0: ClassLoader)
    constructor(arg0: ClassLoader, arg1: LoadErrorHandler)
    constructor(arg0: ClassLoader, arg1: LoadErrorHandler, arg2: boolean)
    constructor(arg0: ClassLoader, arg1: LoadErrorHandler, arg2: InitializableProblemHandler, arg3: boolean)
    readonly dynamic: boolean;
    // private handler: LoadErrorHandler;
    readonly initializableProblemHandler: InitializableProblemHandler;
    readonly loader: ClassLoader;
    // private collectServiceClassNames(arg0: URL, arg1: string[]): void;
    findServiceResources(arg0: string): Enumeration<URL>;
    getInitializableProblemHandler(): InitializableProblemHandler;
    getLoadErrorHandler(): LoadErrorHandler;
    getLoader(): ClassLoader;
    getResourceAsStream(arg0: string): InputStream;
    getServiceClass<T extends unknown>(arg0: Class<T>, arg1: string): Class<T>;
    identifyStaticServiceProviders<T extends unknown>(arg0: Class<T>): string[];
    isDynamic(): boolean;
    loadDynamicServiceProviders<T extends unknown>(arg0: Class<T>): T[];
    loadServiceProviders<T extends unknown>(arg0: Class<T>): T[];
    loadStaticServiceProviders<T extends unknown>(arg0: Class<T>): T[];
    loadStaticServiceProviders<T extends unknown>(arg0: Class<T>, arg1: Class<T>[]): T[];
}