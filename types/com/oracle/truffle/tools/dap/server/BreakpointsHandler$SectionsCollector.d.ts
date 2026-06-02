import type { LoadSourceSectionEvent } from '../../../../../../com/oracle/truffle/api/instrumentation/LoadSourceSectionEvent.d.ts'
import type { LoadSourceSectionListener } from '../../../../../../com/oracle/truffle/api/instrumentation/LoadSourceSectionListener.d.ts'
import type { SourceSection } from '../../../../../../com/oracle/truffle/api/source/SourceSection.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class BreakpointsHandler$SectionsCollector extends Object implements LoadSourceSectionListener {
    constructor(startIndex: number)
    // private sections: SourceSection[];
    // private startIndex: number;
    getSections(): SourceSection[];
    onLoad(event: LoadSourceSectionEvent): void;
}