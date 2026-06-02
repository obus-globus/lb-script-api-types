import type { EventBinding$NearestSourceSection } from '../../../../../com/oracle/truffle/api/instrumentation/EventBinding$NearestSourceSection.d.ts'
import type { InstrumentationHandler$AbstractInstrumenter } from '../../../../../com/oracle/truffle/api/instrumentation/InstrumentationHandler$AbstractInstrumenter.d.ts'
import type { NearestSectionFilter } from '../../../../../com/oracle/truffle/api/instrumentation/NearestSectionFilter.d.ts'
import type { SourceSectionFilter } from '../../../../../com/oracle/truffle/api/instrumentation/SourceSectionFilter.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class EventBinding$NearestExecution<T extends Object | number | string | boolean> extends EventBinding$NearestSourceSection<T> {
    constructor(instrumenter: InstrumentationHandler$AbstractInstrumenter, nearestFilter: NearestSectionFilter, filterSourceSection: SourceSectionFilter, element: T)
    isExecutionEvent(): boolean;
}