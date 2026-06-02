import type { DebugValue } from '../../../../../com/oracle/truffle/api/debug/DebugValue.d.ts'
import type { SuspendedEvent } from '../../../../../com/oracle/truffle/api/debug/SuspendedEvent.d.ts'
import type { InspectorDebugger } from '../../../../../com/oracle/truffle/tools/chromeinspector/InspectorDebugger.d.ts'
import type { CallFrame } from '../../../../../com/oracle/truffle/tools/chromeinspector/types/CallFrame.d.ts'
import type { AtomicReference } from '../../../../../java/util/concurrent/atomic/AtomicReference.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Pair } from '../../../../../org/graalvm/collections/Pair.d.ts'
export class DebuggerSuspendedInfo extends Object {
    constructor(debugger_: InspectorDebugger, se: SuspendedEvent, callFrames: CallFrame[])
    readonly callFrames: CallFrame[];
    // private debugger: InspectorDebugger;
    // private lastEvaluatedValue: AtomicReference<Pair<DebugValue, Object>>;
    // private se: SuspendedEvent;
    getCallFrames(): CallFrame[];
    getSuspendedEvent(): SuspendedEvent;
    refreshFrames(): void;
}