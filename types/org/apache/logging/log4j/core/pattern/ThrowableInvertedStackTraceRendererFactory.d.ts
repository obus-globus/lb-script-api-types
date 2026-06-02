import type { ThrowableFormatOptions } from '../../../../../../org/apache/logging/log4j/core/impl/ThrowableFormatOptions.d.ts'
import type { ThrowableInvertedStackTraceRenderer } from '../../../../../../org/apache/logging/log4j/core/pattern/ThrowableInvertedStackTraceRenderer.d.ts'
import type { ThrowableStackTraceRendererFactory } from '../../../../../../org/apache/logging/log4j/core/pattern/ThrowableStackTraceRendererFactory.d.ts'
export class ThrowableInvertedStackTraceRendererFactory extends ThrowableStackTraceRendererFactory {
    private constructor()
    createStackTraceRenderer(options: ThrowableFormatOptions): ThrowableInvertedStackTraceRenderer;
}