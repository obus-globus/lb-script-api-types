import type { Serializable } from '../../../../../../java/io/Serializable.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { StackTraceElement } from '../../../../../../java/lang/StackTraceElement.d.ts'
import type { StringBuilder } from '../../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../../java/lang/Throwable.d.ts'
import type { ExtendedStackTraceElement } from '../../../../../../org/apache/logging/log4j/core/impl/ExtendedStackTraceElement.d.ts'
import type { ThrowableProxyHelper$CacheEntry } from '../../../../../../org/apache/logging/log4j/core/impl/ThrowableProxyHelper$CacheEntry.d.ts'
import type { TextRenderer } from '../../../../../../org/apache/logging/log4j/core/pattern/TextRenderer.d.ts'
export class ThrowableProxy extends Object implements Serializable {
    constructor()
    constructor(throwable: Throwable)
    private constructor(parent: Throwable, stack: Class<Object>[], map: { [key: string]: ThrowableProxyHelper$CacheEntry }, cause: Throwable, suppressedVisited: Throwable[], causeVisited: Throwable[])
    constructor(throwable: Throwable, visited: Throwable[])
    readonly causeProxy: ThrowableProxy;
    readonly commonElementCount: number;
    readonly extendedStackTrace: ExtendedStackTraceElement[];
    readonly localizedMessage: string;
    readonly message: string;
    readonly name: string;
    readonly suppressedProxies: ThrowableProxy[];
    readonly throwable: Throwable;
    equals(obj: Object | null): boolean;
    formatExtendedStackTraceTo(sb: StringBuilder, ignorePackages: string[], textRenderer: TextRenderer, suffix: string, lineSeparator: string): void;
    formatWrapper(sb: StringBuilder, cause: ThrowableProxy, suffix: string): void;
    formatWrapper(sb: StringBuilder, cause: ThrowableProxy, ignorePackages: string[], suffix: string): void;
    formatWrapper(sb: StringBuilder, cause: ThrowableProxy, ignorePackages: string[], textRenderer: TextRenderer, suffix: string): void;
    formatWrapper(sb: StringBuilder, cause: ThrowableProxy, ignorePackages: string[], textRenderer: TextRenderer, suffix: string, lineSeparator: string): void;
    getCauseProxy(): ThrowableProxy;
    getCauseStackTraceAsString(suffix: string): string;
    getCauseStackTraceAsString(packages: string[], suffix: string): string;
    getCauseStackTraceAsString(ignorePackages: string[], textRenderer: TextRenderer, suffix: string): string;
    getCauseStackTraceAsString(ignorePackages: string[], textRenderer: TextRenderer, suffix: string, lineSeparator: string): string;
    getCommonElementCount(): number;
    getExtendedStackTrace(): ExtendedStackTraceElement[];
    getExtendedStackTraceAsString(): string;
    getExtendedStackTraceAsString(suffix: string): string;
    getExtendedStackTraceAsString(ignorePackages: string[], suffix: string): string;
    getExtendedStackTraceAsString(ignorePackages: string[], textRenderer: TextRenderer, suffix: string): string;
    getExtendedStackTraceAsString(ignorePackages: string[], textRenderer: TextRenderer, suffix: string, lineSeparator: string): string;
    getLocalizedMessage(): string;
    getMessage(): string;
    getName(): string;
    getStackTrace(): StackTraceElement[];
    getSuppressedProxies(): ThrowableProxy[];
    getSuppressedStackTrace(suffix: string): string;
    getThrowable(): Throwable;
    hashCode(): number;
    setCommonElementCount(value: number): void;
    toString(): string;
}