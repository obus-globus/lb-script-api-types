import type { ThreadLocalAction } from '../../../../com/oracle/truffle/api/ThreadLocalAction.d.ts'
import type { ThreadLocalAction$Access } from '../../../../com/oracle/truffle/api/ThreadLocalAction$Access.d.ts'
import type { PolyglotContextImpl } from '../../../../com/oracle/truffle/polyglot/PolyglotContextImpl.d.ts'
export class PolyglotContextImpl$InterruptThreadLocalAction extends ThreadLocalAction {
    constructor(null_: PolyglotContextImpl)
    perform(access: ThreadLocalAction$Access): void;
}