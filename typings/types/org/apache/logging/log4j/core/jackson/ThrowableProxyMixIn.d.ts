import type { StackTraceElement } from '../../../../../../java/lang/StackTraceElement.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../../java/lang/Throwable.d.ts'
import type { ExtendedStackTraceElement } from '../../../../../../org/apache/logging/log4j/core/impl/ExtendedStackTraceElement.d.ts'
import type { ThrowableProxy } from '../../../../../../org/apache/logging/log4j/core/impl/ThrowableProxy.d.ts'
export abstract class ThrowableProxyMixIn extends Object {
    constructor()
    // private causeProxy: ThrowableProxyMixIn;
    // private commonElementCount: number;
    // private extendedStackTrace: ExtendedStackTraceElement[];
    // private localizedMessage: string;
    // private message: string;
    // private name: string;
    readonly throwable: Throwable;
    getCauseStackTraceAsString(): string;
    getExtendedStackTraceAsString(): string;
    getStackTrace(): StackTraceElement[];
    getSuppressedProxies(): ThrowableProxy[];
    getSuppressedStackTrace(): string;
    getThrowable(): Throwable;
}