import type { EventBinding$Source } from '../../../../../com/oracle/truffle/api/instrumentation/EventBinding$Source.d.ts'
import type { SourceInstrumentationHandler } from '../../../../../com/oracle/truffle/api/instrumentation/SourceInstrumentationHandler.d.ts'
import type { SourceInstrumentationHandler$InitializeSourcesNotification } from '../../../../../com/oracle/truffle/api/instrumentation/SourceInstrumentationHandler$InitializeSourcesNotification.d.ts'
import type { Source } from '../../../../../com/oracle/truffle/api/source/Source.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class SourceInstrumentationHandler$AllSourcesNotification extends SourceInstrumentationHandler$InitializeSourcesNotification {
    constructor(null_: SourceInstrumentationHandler, bindingsToNotify: EventBinding$Source<Object>[])
    // private bindingsToNotify: EventBinding$Source<Object>[];
    // private sourcesForNotification: Source[];
    resolveSources(): void;
    runNotifications(): void;
}