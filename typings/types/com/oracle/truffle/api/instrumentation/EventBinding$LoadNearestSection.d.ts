import type { EventBinding$LoadedNotifier } from '../../../../../com/oracle/truffle/api/instrumentation/EventBinding$LoadedNotifier.d.ts'
import type { EventBinding$NearestSourceSection } from '../../../../../com/oracle/truffle/api/instrumentation/EventBinding$NearestSourceSection.d.ts'
import type { InstrumentationHandler$AbstractInstrumenter } from '../../../../../com/oracle/truffle/api/instrumentation/InstrumentationHandler$AbstractInstrumenter.d.ts'
import type { NearestSectionFilter } from '../../../../../com/oracle/truffle/api/instrumentation/NearestSectionFilter.d.ts'
import type { SourceSectionFilter } from '../../../../../com/oracle/truffle/api/instrumentation/SourceSectionFilter.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class EventBinding$LoadNearestSection<T extends unknown> extends EventBinding$NearestSourceSection<T> implements EventBinding$LoadedNotifier {
    constructor(instrumenter: InstrumentationHandler$AbstractInstrumenter, nearestFilter: NearestSectionFilter, filterSourceSection: SourceSectionFilter, element: T, attached: boolean, notifyLoaded: boolean)
    readonly notifyLoaded: boolean;
    doAttach(): void;
    isExecutionEvent(): boolean;
    isNotifyLoaded(): boolean;
}