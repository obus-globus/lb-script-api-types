import type { Class } from '../../../../java/lang/Class.d.ts'
import type { ClassLoader } from '../../../../java/lang/ClassLoader.d.ts'
import type { RuntimeException } from '../../../../java/lang/RuntimeException.d.ts'
import type { StackTraceElement } from '../../../../java/lang/StackTraceElement.d.ts'
import type { Type } from '../../../../java/lang/reflect/Type.d.ts'
import type { Predicate } from '../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
import type { AbstractPolyglotImpl } from '../../../../org/graalvm/polyglot/impl/AbstractPolyglotImpl.d.ts'
import type { AbstractPolyglotImpl$AbstractDispatchClass } from '../../../../org/graalvm/polyglot/impl/AbstractPolyglotImpl$AbstractDispatchClass.d.ts'
export abstract class AbstractPolyglotImpl$AbstractHostLanguageService extends AbstractPolyglotImpl$AbstractDispatchClass {
    constructor(polyglot: AbstractPolyglotImpl)
    addToHostClassPath(context: Object, truffleFile: Object): void;
    allowsPublicAccess(): boolean;
    asHostDynamicClass(context: Object, value: Class<Object>): Object;
    asHostStaticClass(context: Object, value: Class<Object>): Object;
    createHostAdapter(hostContextObject: Object, types: Object[], classOverrides: Object): Object;
    findDynamicClass(context: Object, classValue: string): Object;
    findNextGuestToHostStackTraceElement(firstElement: StackTraceElement, hostStack: StackTraceElement[], nextElementIndex: number): number;
    findNextHostToGuestStackTraceElement(firstElement: StackTraceElement, hostStack: StackTraceElement[], nextElementIndex: number): number;
    findStaticClass(context: Object, classValue: string): Object;
    hostExit(exitCode: number): void;
    initializeHostContext(internalContext: Object, context: Object, hostAccess: Object, cl: ClassLoader, clFilter: (param0: string) => boolean, hostCLAllowed: boolean, hostLookupAllowed: boolean): void;
    isHostProxy(value: Object): boolean;
    isHostStackTraceVisibleToGuest(): boolean;
    migrateValue(hostContext: Object, value: Object, valueContext: Object): Object;
    pin(receiver: Object): void;
    release(): void;
    throwHostLanguageException(message: string): void;
    toGuestValue(node: Object, hostValue: Object, asValue: boolean): Object;
    toHostException(hostContext: Object, exception: Throwable): RuntimeException;
    toHostObject(context: Object, value: Object): Object;
    toHostType<T extends unknown>(hostNode: Object, targetNode: Object, hostContext: Object, value: Object, targetType: Class<T>, genericType: Type): T;
    unboxProxyObject(hostValue: Object): Object;
}