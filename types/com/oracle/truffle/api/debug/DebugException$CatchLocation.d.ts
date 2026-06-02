import type { DebugStackFrame } from '../../../../../com/oracle/truffle/api/debug/DebugStackFrame.d.ts'
import type { DebuggerSession } from '../../../../../com/oracle/truffle/api/debug/DebuggerSession.d.ts'
import type { SuspendedEvent } from '../../../../../com/oracle/truffle/api/debug/SuspendedEvent.d.ts'
import type { FrameInstance } from '../../../../../com/oracle/truffle/api/frame/FrameInstance.d.ts'
import type { SourceSection } from '../../../../../com/oracle/truffle/api/source/SourceSection.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class DebugException$CatchLocation extends Object {
    private constructor(session: DebuggerSession, section: SourceSection, frameInstance: FrameInstance, depth: number)
    constructor(section: SourceSection, frameInstance: FrameInstance, depth: number)
    // private depth: number;
    readonly frame: DebugStackFrame;
    // private frameInstance: FrameInstance;
    // private section: SourceSection;
    // private session: DebuggerSession;
    // private cloneFor(ds: DebuggerSession): DebugException$CatchLocation;
    getFrame(): DebugStackFrame;
    getSourceSection(): SourceSection;
    setSuspendedEvent(suspendedEvent: SuspendedEvent): void;
}