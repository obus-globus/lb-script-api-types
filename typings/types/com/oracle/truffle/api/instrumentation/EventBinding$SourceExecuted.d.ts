import type { EventBinding$LoadSource } from '../../../../../com/oracle/truffle/api/instrumentation/EventBinding$LoadSource.d.ts'
import type { InstrumentationHandler$AbstractInstrumenter } from '../../../../../com/oracle/truffle/api/instrumentation/InstrumentationHandler$AbstractInstrumenter.d.ts'
import type { SourceSectionFilter } from '../../../../../com/oracle/truffle/api/instrumentation/SourceSectionFilter.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class EventBinding$SourceExecuted<T extends unknown> extends EventBinding$LoadSource<T> {
    constructor(instrumenter: InstrumentationHandler$AbstractInstrumenter, filterSourceSection: SourceSectionFilter, inputFilter: SourceSectionFilter, element: T, attached: boolean, notifyLoaded: boolean)
    doAttach(): void;
}