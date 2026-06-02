import type { DebuggerSuspendedInfo } from '../../../../../com/oracle/truffle/tools/chromeinspector/DebuggerSuspendedInfo.d.ts'
import type { Event } from '../../../../../com/oracle/truffle/tools/chromeinspector/events/Event.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface InspectorDebugger$CommandLazyResponse extends Object{
    getResponse(suspendedInfo: DebuggerSuspendedInfo): Event;
}