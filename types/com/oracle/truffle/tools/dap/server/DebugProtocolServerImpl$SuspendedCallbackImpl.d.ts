import type { SuspendedCallback } from '../../../../../../com/oracle/truffle/api/debug/SuspendedCallback.d.ts'
import type { SuspendedEvent } from '../../../../../../com/oracle/truffle/api/debug/SuspendedEvent.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class DebugProtocolServerImpl$SuspendedCallbackImpl extends Object implements SuspendedCallback {
    private constructor(null_: DebugProtocolServerImpl$SuspendedCallbackImpl)
    onSuspend(event: SuspendedEvent): void;
}