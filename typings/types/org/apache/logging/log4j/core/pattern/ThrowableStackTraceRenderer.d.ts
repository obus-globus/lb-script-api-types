import type { StackTraceElement } from '../../../../../../java/lang/StackTraceElement.d.ts'
import type { StringBuilder } from '../../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../../java/lang/Throwable.d.ts'
import type { ThrowableRenderer } from '../../../../../../org/apache/logging/log4j/core/pattern/ThrowableRenderer.d.ts'
import type { ThrowableStackTraceRenderer$Context } from '../../../../../../org/apache/logging/log4j/core/pattern/ThrowableStackTraceRenderer$Context.d.ts'
import type { ThrowableStackTraceRenderer$Context$Metadata } from '../../../../../../org/apache/logging/log4j/core/pattern/ThrowableStackTraceRenderer$Context$Metadata.d.ts'
export class ThrowableStackTraceRenderer<C extends ThrowableStackTraceRenderer$Context> extends Object implements ThrowableRenderer {
    constructor(ignoredPackageNames: string[], maxLineCount: number)
    // private ignoredPackageNames: string[];
    // private maxLineCount: number;
    acquireLineCapacity(context: C): void;
    createContext(throwable: Throwable): C;
    isStackTraceElementIgnored(element: StackTraceElement): boolean;
    // private renderCause(buffer: StringBuilder, cause: Throwable, context: C, visitedThrowables: Throwable[], prefix: string, lineSeparator: string): void;
    renderStackTraceElement(buffer: StringBuilder, stackTraceElement: StackTraceElement, context: C, prefix: string, lineSeparator: string): void;
    renderStackTraceElements(buffer: StringBuilder, context: C, metadata: ThrowableStackTraceRenderer$Context$Metadata, prefix: string, lineSeparator: string): void;
    renderSuppressed(buffer: StringBuilder, suppressedThrowables: Throwable[], context: C, visitedThrowables: Throwable[], prefix: string, lineSeparator: string): void;
    renderSuppressedCount(buffer: StringBuilder, context: C, prefix: string, lineSeparator: string): void;
    renderThrowable(buffer: StringBuilder, throwable: Throwable, context: C, visitedThrowables: Throwable[], lineSeparator: string): void;
    // private renderThrowable(buffer: StringBuilder, throwable: Throwable, context: C, visitedThrowables: Throwable[], prefix: string, lineSeparator: string, caption: string): void;
    renderThrowable(buffer: StringBuilder, throwable: Throwable, lineSeparator: string): void;
}