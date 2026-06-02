import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ThrowableFormatOptions } from '../../../../../../org/apache/logging/log4j/core/impl/ThrowableFormatOptions.d.ts'
import type { ThrowableStackTraceRenderer } from '../../../../../../org/apache/logging/log4j/core/pattern/ThrowableStackTraceRenderer.d.ts'
export class ThrowableStackTraceRendererFactory extends Object {
    constructor()
    createStackTraceRenderer(options: ThrowableFormatOptions): ThrowableStackTraceRenderer<Object>;
}