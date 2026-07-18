import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { TruffleFile } from '../../../../com/oracle/truffle/api/TruffleFile.d.ts'
import type { TruffleLanguage$Env } from '../../../../com/oracle/truffle/api/TruffleLanguage$Env.d.ts'
import type { Node } from '../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { GuestToHostCodeCache } from '../../../../com/oracle/truffle/host/GuestToHostCodeCache.d.ts'
import type { HostAdapterFactory$AdapterResult } from '../../../../com/oracle/truffle/host/HostAdapterFactory$AdapterResult.d.ts'
import type { HostClassCache } from '../../../../com/oracle/truffle/host/HostClassCache.d.ts'
import type { HostClassLoader } from '../../../../com/oracle/truffle/host/HostClassLoader.d.ts'
import type { HostException } from '../../../../com/oracle/truffle/host/HostException.d.ts'
import type { HostLanguage } from '../../../../com/oracle/truffle/host/HostLanguage.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { ClassLoader } from '../../../../java/lang/ClassLoader.d.ts'
import type { ClassValue } from '../../../../java/lang/ClassValue.d.ts'
import type { RuntimeException } from '../../../../java/lang/RuntimeException.d.ts'
import type { Predicate } from '../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
import type { HostAccess$MutableTargetMapping } from '../../../../org/graalvm/polyglot/HostAccess$MutableTargetMapping.d.ts'
import type { AbstractPolyglotImpl$AbstractHostAccess } from '../../../../org/graalvm/polyglot/impl/AbstractPolyglotImpl$AbstractHostAccess.d.ts'
export class HostContext extends Object {
    constructor(hostLanguage: HostLanguage, env: TruffleLanguage$Env)
    // private access: AbstractPolyglotImpl$AbstractHostAccess;
    // private adapterCache: ClassValue<JavaMap<Class<Object>[], HostAdapterFactory$AdapterResult>>;
    // private classCache: JavaMap<string, Class<Object>>;
    // private classFilter: (param0: string) => boolean;
    // private classloader: HostClassLoader;
    // private contextClassLoader: ClassLoader;
    // private env: TruffleLanguage$Env;
    // private hostClassLoadingAllowed: boolean;
    // private hostLookupAllowed: boolean;
    // private internalContext: Object;
    // private language: HostLanguage;
    // private mutableTargetMappings: HostAccess$MutableTargetMapping[];
    // private stackoverflowError: HostException;
    // private topScope: Object;
    // private accessClass(clazz: Class<Object>): Class<Object>;
    addToHostClasspath(classpathEntry: TruffleFile): void;
    asValue(node: Node, value: Object): Object;
    // private checkHostAccessAllowed(): void;
    disposeClassLoader(): void;
    findClass(className: string): Class<Object>;
    // private findClassImpl(className: string): Class<Object>;
    getClassloader(): HostClassLoader;
    getGuestToHostCache(): GuestToHostCodeCache;
    getHostClassCache(): HostClassCache;
    getMutableTargetMappings(): HostAccess$MutableTargetMapping[];
    hostToGuestException<T extends Throwable>(e: T): RuntimeException;
    hostToGuestException<T extends Throwable>(e: T, location: Node): RuntimeException;
    initialize(internalContext: Object, cl: ClassLoader, clFilter: (param0: string) => boolean, hostCLAllowed: boolean, hostLookupAllowed: boolean, ...mutableTargetMappings: HostAccess$MutableTargetMapping[]): void;
    // private loadClassViaClassLoader(className: string): Class<Object>;
    toGuestValue(node: Node, hostValue: Object): Object;
    toGuestValue(receiver: Class<Object>): Object;
    validateClass(className: string): void;
}