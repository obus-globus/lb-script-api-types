import type { AllocationEvent } from '../../../../../com/oracle/truffle/api/instrumentation/AllocationEvent.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface AllocationListener extends Object{
    onEnter(event: AllocationEvent): void;
    onReturnValue(event: AllocationEvent): void;
}