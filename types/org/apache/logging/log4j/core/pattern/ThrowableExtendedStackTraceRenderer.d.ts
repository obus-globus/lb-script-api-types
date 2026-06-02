import type { StackTraceElement } from '../../../../../../java/lang/StackTraceElement.d.ts'
import type { StringBuilder } from '../../../../../../java/lang/StringBuilder.d.ts'
import type { Throwable } from '../../../../../../java/lang/Throwable.d.ts'
import type { ThrowableExtendedStackTraceRenderer$ExtendedContext } from '../../../../../../org/apache/logging/log4j/core/pattern/ThrowableExtendedStackTraceRenderer$ExtendedContext.d.ts'
import type { ThrowableStackTraceRenderer } from '../../../../../../org/apache/logging/log4j/core/pattern/ThrowableStackTraceRenderer.d.ts'
export class ThrowableExtendedStackTraceRenderer extends ThrowableStackTraceRenderer<ThrowableExtendedStackTraceRenderer$ExtendedContext> {
    constructor(ignoredPackageNames: string[], maxLineCount: number)
    createContext(throwable: Throwable): ThrowableExtendedStackTraceRenderer$ExtendedContext;
    renderStackTraceElement(buffer: StringBuilder, stackTraceElement: StackTraceElement, context: ThrowableExtendedStackTraceRenderer$ExtendedContext, prefix: string, lineSeparator: string): void;
}