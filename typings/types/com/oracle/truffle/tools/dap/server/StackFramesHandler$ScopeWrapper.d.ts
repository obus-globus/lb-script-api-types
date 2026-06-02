import type { DebugScope } from '../../../../../../com/oracle/truffle/api/debug/DebugScope.d.ts'
import type { DebugStackFrame } from '../../../../../../com/oracle/truffle/api/debug/DebugStackFrame.d.ts'
import type { DebugValue } from '../../../../../../com/oracle/truffle/api/debug/DebugValue.d.ts'
import type { StackFramesHandler$FrameWrapper } from '../../../../../../com/oracle/truffle/tools/dap/server/StackFramesHandler$FrameWrapper.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class StackFramesHandler$ScopeWrapper extends Object {
    private constructor(frame: StackFramesHandler$FrameWrapper, scope: DebugScope)
    readonly frame: StackFramesHandler$FrameWrapper;
    readonly scope: DebugScope;
    readonly thisValue: DebugValue;
    getFrame(): DebugStackFrame;
    getReturnValue(): DebugValue;
    getScope(): DebugScope;
    getThisValue(): DebugValue;
}