import type { StackTraceElement } from '../../../../../../java/lang/StackTraceElement.d.ts'
import type { Function } from '../../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../../java/lang/Throwable.d.ts'
import type { ThrowableRenderer } from '../../../../../../org/apache/logging/log4j/core/pattern/ThrowableRenderer.d.ts'
export class ThrowablePropertyRendererFactory extends Object {
    constructor(throwingMethodExtractor: (param0: Throwable) => StackTraceElement)
    // private rendererByPropertyName: { [key: string]: ThrowableRenderer };
    createPropertyRenderer(options: string[]): ThrowableRenderer;
}