import type { StringBuilder } from '../../../../../../java/lang/StringBuilder.d.ts'
import type { Throwable } from '../../../../../../java/lang/Throwable.d.ts'
import type { ThrowableStackTraceRenderer } from '../../../../../../org/apache/logging/log4j/core/pattern/ThrowableStackTraceRenderer.d.ts'
import type { ThrowableStackTraceRenderer$Context } from '../../../../../../org/apache/logging/log4j/core/pattern/ThrowableStackTraceRenderer$Context.d.ts'
export class ThrowableInvertedStackTraceRenderer extends ThrowableStackTraceRenderer<ThrowableStackTraceRenderer$Context> {
    constructor(ignoredPackageNames: string[], maxLineCount: number)
    // private renderCause(buffer: StringBuilder, cause: Throwable, context: ThrowableStackTraceRenderer$Context, visitedThrowables: Throwable[], prefix: string, lineSeparator: string, lineCapacityAcquired: boolean): boolean;
    renderSuppressed(buffer: StringBuilder, suppressedThrowables: Throwable[], context: ThrowableStackTraceRenderer$Context, visitedThrowables: Throwable[], prefix: string, lineSeparator: string): void;
    renderThrowable(buffer: StringBuilder, throwable: Throwable, context: ThrowableStackTraceRenderer$Context, visitedThrowables: Throwable[], lineSeparator: string): void;
    // private renderThrowable(buffer: StringBuilder, throwable: Throwable, context: ThrowableStackTraceRenderer$Context, visitedThrowables: Throwable[], prefix: string, lineSeparator: string, lineCapacityAcquired: boolean): void;
}