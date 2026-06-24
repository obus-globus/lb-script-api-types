import type { EventBinding$Source } from '../../../../../com/oracle/truffle/api/instrumentation/EventBinding$Source.d.ts'
import type { SourceInstrumentationHandler } from '../../../../../com/oracle/truffle/api/instrumentation/SourceInstrumentationHandler.d.ts'
import type { SourceInstrumentationHandler$AllSourcesNotification } from '../../../../../com/oracle/truffle/api/instrumentation/SourceInstrumentationHandler$AllSourcesNotification.d.ts'
import type { Source } from '../../../../../com/oracle/truffle/api/source/Source.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class SourceInstrumentationHandler$NewSourcesNotification extends SourceInstrumentationHandler$AllSourcesNotification {
    constructor(null_: SourceInstrumentationHandler, bindingsToNotify: EventBinding$Source<Object>[], collectedSources: Source[])
    // private collectedSources: Source[];
    resolveSources(): void;
}