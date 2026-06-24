import type { ThreadLocalAction } from '../../../../com/oracle/truffle/api/ThreadLocalAction.d.ts'
import type { ThreadLocalAction$Access } from '../../../../com/oracle/truffle/api/ThreadLocalAction$Access.d.ts'
import type { PolyglotLanguageContext } from '../../../../com/oracle/truffle/polyglot/PolyglotLanguageContext.d.ts'
import type { Thread } from '../../../../java/lang/Thread.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
export class PolyglotLanguageContext$InitializeThreadAction extends ThreadLocalAction {
    constructor(null_: PolyglotLanguageContext, triggeringThread: Thread, initThreadErrors: Throwable[])
    // private initThreadErrors: Throwable[];
    // private triggeringThread: Thread;
    perform(access: ThreadLocalAction$Access): void;
}