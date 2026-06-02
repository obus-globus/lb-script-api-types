import type { ExecuteSourceEvent } from '../../../../../com/oracle/truffle/api/instrumentation/ExecuteSourceEvent.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface ExecuteSourceListener extends Object{
    onExecute(event: ExecuteSourceEvent): void;
}