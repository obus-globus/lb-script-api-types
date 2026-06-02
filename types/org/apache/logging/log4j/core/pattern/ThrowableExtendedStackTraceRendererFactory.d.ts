import type { ThrowableFormatOptions } from '../../../../../../org/apache/logging/log4j/core/impl/ThrowableFormatOptions.d.ts'
import type { ThrowableExtendedStackTraceRenderer } from '../../../../../../org/apache/logging/log4j/core/pattern/ThrowableExtendedStackTraceRenderer.d.ts'
import type { ThrowableStackTraceRendererFactory } from '../../../../../../org/apache/logging/log4j/core/pattern/ThrowableStackTraceRendererFactory.d.ts'
export class ThrowableExtendedStackTraceRendererFactory extends ThrowableStackTraceRendererFactory {
    private constructor()
    createStackTraceRenderer(options: ThrowableFormatOptions): ThrowableExtendedStackTraceRenderer;
}