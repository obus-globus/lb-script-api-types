import type { CallTarget } from '../../../../com/oracle/truffle/api/CallTarget.d.ts'
import type { PolyglotLanguageContext } from '../../../../com/oracle/truffle/polyglot/PolyglotLanguageContext.d.ts'
import type { Runnable } from '../../../../java/lang/Runnable.d.ts'
import type { Thread } from '../../../../java/lang/Thread.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class PolyglotThreadTask extends Object implements Runnable {
    static ISOLATE_POLYGLOT_THREAD: PolyglotThreadTask;
    private constructor()
    constructor(languageContext: PolyglotLanguageContext, runnable: () => void, beforeEnter: () => void, afterLeave: () => void)
    // private afterLeave: () => void;
    // private beforeEnter: () => void;
    // private callTarget: CallTarget;
    // private languageContext: PolyglotLanguageContext;
    // private parentThread: Thread;
    // private userRunnable: () => void;
    run(): void;
}