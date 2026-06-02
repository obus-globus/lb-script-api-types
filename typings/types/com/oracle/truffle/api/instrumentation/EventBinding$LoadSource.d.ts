import type { EventBinding$LoadedNotifier } from '../../../../../com/oracle/truffle/api/instrumentation/EventBinding$LoadedNotifier.d.ts'
import type { EventBinding$Source } from '../../../../../com/oracle/truffle/api/instrumentation/EventBinding$Source.d.ts'
import type { InstrumentationHandler$AbstractInstrumenter } from '../../../../../com/oracle/truffle/api/instrumentation/InstrumentationHandler$AbstractInstrumenter.d.ts'
import type { SourceSectionFilter } from '../../../../../com/oracle/truffle/api/instrumentation/SourceSectionFilter.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class EventBinding$LoadSource<T extends Object | number | string | boolean> extends EventBinding$Source<T> implements EventBinding$LoadedNotifier {
    constructor(instrumenter: InstrumentationHandler$AbstractInstrumenter, filterSourceSection: SourceSectionFilter, inputFilter: SourceSectionFilter, element: T, attached: boolean, notifyLoaded: boolean)
    readonly notifyLoaded: boolean;
    isExecutionEvent(): boolean;
    isNotifyLoaded(): boolean;
}