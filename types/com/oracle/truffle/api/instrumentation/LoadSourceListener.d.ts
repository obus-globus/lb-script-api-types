import type { LoadSourceEvent } from '../../../../../com/oracle/truffle/api/instrumentation/LoadSourceEvent.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface LoadSourceListener extends Object{
    onLoad(event: LoadSourceEvent): void;
}