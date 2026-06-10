import type { SourceInstrumentationHandler$AllSourcesNotification } from '../../../../../com/oracle/truffle/api/instrumentation/SourceInstrumentationHandler$AllSourcesNotification.d.ts'
import type { Source } from '../../../../../com/oracle/truffle/api/source/Source.d.ts'
export class SourceInstrumentationHandler$NewSourcesNotification extends SourceInstrumentationHandler$AllSourcesNotification {
    constructor(null_: SourceInstrumentationHandler$NewSourcesNotification, collectedSources: Source[])
    // private collectedSources: Source[];
    resolveSources(): void;
}