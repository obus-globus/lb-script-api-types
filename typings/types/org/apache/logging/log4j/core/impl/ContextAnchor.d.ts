import type { ThreadLocal } from '../../../../../../java/lang/ThreadLocal.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { LoggerContext } from '../../../../../../org/apache/logging/log4j/core/LoggerContext.d.ts'
export class ContextAnchor extends Object {
    static THREAD_CONTEXT: ThreadLocal<LoggerContext>;
    private constructor()
}