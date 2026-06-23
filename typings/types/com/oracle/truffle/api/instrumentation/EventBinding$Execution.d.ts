import type { EventBinding$Source } from '../../../../../com/oracle/truffle/api/instrumentation/EventBinding$Source.d.ts'
import type { InstrumentationHandler$AbstractInstrumenter } from '../../../../../com/oracle/truffle/api/instrumentation/InstrumentationHandler$AbstractInstrumenter.d.ts'
import type { SourceSectionFilter } from '../../../../../com/oracle/truffle/api/instrumentation/SourceSectionFilter.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class EventBinding$Execution<T extends unknown> extends EventBinding$Source<T> {
    constructor(instrumenter: InstrumentationHandler$AbstractInstrumenter, filterSourceSection: SourceSectionFilter, inputFilter: SourceSectionFilter, element: T)
    isExecutionEvent(): boolean;
}