import type { Breakpoint$SessionList } from '../../../../../com/oracle/truffle/api/debug/Breakpoint$SessionList.d.ts'
import type { DebuggerSession$ThreadSuspension } from '../../../../../com/oracle/truffle/api/debug/DebuggerSession$ThreadSuspension.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
export abstract class SetThreadSuspensionEnabledNode extends Node {
    constructor()
    doCached(suspensionEnabled: boolean, sessions: Breakpoint$SessionList, threadId: number, currentThreadId: number, threadSuspension: DebuggerSession$ThreadSuspension): void;
    doGeneric(suspensionEnabled: boolean, sessions: Breakpoint$SessionList, threadId: number): void;
    execute(suspensionEnabled: boolean, sessions: Breakpoint$SessionList): void;
    execute(suspensionEnabled: boolean, sessions: Breakpoint$SessionList, threadId: number): void;
    getThreadSuspension(sessions: Breakpoint$SessionList): DebuggerSession$ThreadSuspension;
}