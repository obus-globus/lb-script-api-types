import type { AllocationEventFilter } from '../../../../../com/oracle/truffle/api/instrumentation/AllocationEventFilter.d.ts'
import type { EventBinding } from '../../../../../com/oracle/truffle/api/instrumentation/EventBinding.d.ts'
import type { InstrumentationHandler$AbstractInstrumenter } from '../../../../../com/oracle/truffle/api/instrumentation/InstrumentationHandler$AbstractInstrumenter.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class EventBinding$Allocation<T extends unknown> extends EventBinding<T> {
    constructor(instrumenter: InstrumentationHandler$AbstractInstrumenter, filter: AllocationEventFilter, listener: T)
    // private filterAllocation: AllocationEventFilter;
    getAllocationFilter(): AllocationEventFilter;
}