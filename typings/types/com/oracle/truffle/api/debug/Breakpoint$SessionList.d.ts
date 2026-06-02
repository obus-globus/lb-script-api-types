import type { Assumption } from '../../../../../com/oracle/truffle/api/Assumption.d.ts'
import type { DebuggerSession } from '../../../../../com/oracle/truffle/api/debug/DebuggerSession.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Breakpoint$SessionList extends Object {
    constructor(current: Breakpoint$SessionList, next: Breakpoint$SessionList)
    constructor(session: DebuggerSession, next: Breakpoint$SessionList)
    // private next: Breakpoint$SessionList;
    // private session: DebuggerSession;
    // private suspensionFilterUnchanged: Assumption;
    isValid(): boolean;
}