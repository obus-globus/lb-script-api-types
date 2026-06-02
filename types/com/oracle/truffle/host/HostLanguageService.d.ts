import type { HostContext } from '../../../../com/oracle/truffle/host/HostContext.d.ts'
import type { HostLanguage } from '../../../../com/oracle/truffle/host/HostLanguage.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { ClassLoader } from '../../../../java/lang/ClassLoader.d.ts'
import type { Error } from '../../../../java/lang/Error.d.ts'
import type { RuntimeException } from '../../../../java/lang/RuntimeException.d.ts'
import type { StackTraceElement } from '../../../../java/lang/StackTraceElement.d.ts'
import type { Type } from '../../../../java/lang/reflect/Type.d.ts'
import type { Predicate } from '../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
import type { AbstractPolyglotImpl } from '../../../../org/graalvm/polyglot/impl/AbstractPolyglotImpl.d.ts'
import type { AbstractPolyglotImpl$APIAccess } from '../../../../org/graalvm/polyglot/impl/AbstractPolyglotImpl$APIAccess.d.ts'
import type { AbstractPolyglotImpl$AbstractHostLanguageService } from '../../../../org/graalvm/polyglot/impl/AbstractPolyglotImpl$AbstractHostLanguageService.d.ts'
export class HostLanguageService extends AbstractPolyglotImpl$AbstractHostLanguageService {
    constructor(polyglot: AbstractPolyglotImpl, language: HostLanguage)
    // private api: AbstractPolyglotImpl$APIAccess;
    // private language: HostLanguage;
    addToHostClassPath(receiver: Object, truffleFile: Object): void;
    allowsPublicAccess(): boolean;
    asHostDynamicClass(context: Object, value: Class<Object>): Object;
    asHostStaticClass(context: Object, value: Class<Object>): Object;
    createHostAdapter(context: Object, hostTypes: Object[], classOverrides: Object): Object;
    findDynamicClass(receiver: Object, classValue: string): Object;
    findNextGuestToHostStackTraceElement(firstElement: StackTraceElement, hostStack: StackTraceElement[], nextElementIndex: number): number;
    findStaticClass(receiver: Object, classValue: string): Object;
    hostExit(exitCode: number): void;
    initializeHostContext(internalContext: Object, receiver: Object, hostAccess: Object, cl: ClassLoader, clFilter: (param0: string) => kotlin.Boolean, hostCLAllowed: boolean, hostLookupAllowed: boolean): void;
    isHostException(exception: Object): boolean;
    isHostFunction(value: Object): boolean;
    isHostObject(value: Object): boolean;
    isHostProxy(value: Object): boolean;
    isHostSymbol(obj: Object): boolean;
    isHostValue(value: Object): boolean;
    migrateValue(targetContext: Object, value: Object, valueContext: Object): Object;
    pin(receiver: Object): void;
    release(): void;
    throwHostLanguageException(message: string): void;
    toGuestValue(hostContext: Object, hostValue: Object, asValue: boolean): Object;
    toHostException(context: Object, exception: Throwable): RuntimeException;
    toHostObject(hostContext: Object, value: Object): Object;
    toHostResourceError(hostException: Throwable): Error;
    toHostType<T extends Object | number | string | boolean>(hostNode: Object, targetNode: Object, hostContext: Object, value: Object, targetType: Class<T>, genericType: Type): T;
    unboxHostException(hostValue: Throwable): Throwable;
    unboxHostObject(hostValue: Object): Object;
    unboxProxyObject(hostValue: Object): Object;
    // private validHostValue(hostValue: Object, context: HostContext): boolean;
}