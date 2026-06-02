import type { SuspendedEvent } from '../../../../../com/oracle/truffle/api/debug/SuspendedEvent.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface SuspendedCallback extends Object{
    onSuspend(event: SuspendedEvent): void;
}