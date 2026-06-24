import type { ThreadLocalAction } from '../../../../com/oracle/truffle/api/ThreadLocalAction.d.ts'
import type { ThreadLocalAction$Access } from '../../../../com/oracle/truffle/api/ThreadLocalAction$Access.d.ts'
import type { PolyglotThreadLocalActions } from '../../../../com/oracle/truffle/polyglot/PolyglotThreadLocalActions.d.ts'
export class PolyglotThreadLocalActions$PrintStackTraceAction extends ThreadLocalAction {
    constructor(null_: PolyglotThreadLocalActions, hasSideEffects: boolean, synchronous: boolean)
    perform(access: ThreadLocalAction$Access): void;
}