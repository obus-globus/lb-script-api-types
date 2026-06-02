import type { DebugStackFrame } from '../../../../../../com/oracle/truffle/api/debug/DebugStackFrame.d.ts'
import type { DebugValue } from '../../../../../../com/oracle/truffle/api/debug/DebugValue.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class StackFramesHandler$FrameWrapper extends Object {
    private constructor(frame: DebugStackFrame, returnValue: DebugValue)
    readonly frame: DebugStackFrame;
    readonly returnValue: DebugValue;
    getFrame(): DebugStackFrame;
    getReturnValue(): DebugValue;
}