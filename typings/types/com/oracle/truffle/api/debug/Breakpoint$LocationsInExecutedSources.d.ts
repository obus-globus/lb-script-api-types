import type { Breakpoint } from '../../../../../com/oracle/truffle/api/debug/Breakpoint.d.ts'
import type { EventBinding } from '../../../../../com/oracle/truffle/api/instrumentation/EventBinding.d.ts'
import type { ExecuteSourceEvent } from '../../../../../com/oracle/truffle/api/instrumentation/ExecuteSourceEvent.d.ts'
import type { ExecuteSourceListener } from '../../../../../com/oracle/truffle/api/instrumentation/ExecuteSourceListener.d.ts'
import type { LoadSourceSectionEvent } from '../../../../../com/oracle/truffle/api/instrumentation/LoadSourceSectionEvent.d.ts'
import type { LoadSourceSectionListener } from '../../../../../com/oracle/truffle/api/instrumentation/LoadSourceSectionListener.d.ts'
import type { Source } from '../../../../../com/oracle/truffle/api/source/Source.d.ts'
import type { SourceSection } from '../../../../../com/oracle/truffle/api/source/SourceSection.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { EconomicMap } from '../../../../../org/graalvm/collections/EconomicMap.d.ts'
export class Breakpoint$LocationsInExecutedSources extends Object implements ExecuteSourceListener, LoadSourceSectionListener {
    private constructor(null_: Breakpoint)
    // private executeBindings: EconomicMap<Source, EventBinding<Object>>;
    // private executedSources: Source[];
    // private loadedSections: EconomicMap<Source, SourceSection>;
    // private assignAt(section: SourceSection): void;
    dispose(): void;
    onExecute(event: ExecuteSourceEvent): void;
    onLoad(event: LoadSourceSectionEvent): void;
}