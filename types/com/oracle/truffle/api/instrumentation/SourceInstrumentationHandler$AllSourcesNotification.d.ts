import type { EventBinding$Source } from '../../../../../com/oracle/truffle/api/instrumentation/EventBinding$Source.d.ts'
import type { SourceInstrumentationHandler$InitializeSourcesNotification } from '../../../../../com/oracle/truffle/api/instrumentation/SourceInstrumentationHandler$InitializeSourcesNotification.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class SourceInstrumentationHandler$AllSourcesNotification extends SourceInstrumentationHandler$InitializeSourcesNotification {
    constructor(null_: SourceInstrumentationHandler$AllSourcesNotification)
    // private bindingsToNotify: EventBinding$Source<Object>[];
    // private sourcesForNotification: E[];
    resolveSources(): void;
    runNotifications(): void;
}