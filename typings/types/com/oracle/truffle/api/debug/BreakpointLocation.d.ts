import type { BreakpointLocation$LocationFilters } from '../../../../../com/oracle/truffle/api/debug/BreakpointLocation$LocationFilters.d.ts'
import type { SourceElement } from '../../../../../com/oracle/truffle/api/debug/SourceElement.d.ts'
import type { SuspendAnchor } from '../../../../../com/oracle/truffle/api/debug/SuspendAnchor.d.ts'
import type { SourceSectionFilter } from '../../../../../com/oracle/truffle/api/instrumentation/SourceSectionFilter.d.ts'
import type { SourceSection } from '../../../../../com/oracle/truffle/api/source/SourceSection.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class BreakpointLocation extends Object {
    constructor(sourceElements: SourceElement[])
    // private sourceElements: SourceElement[];
    containsRoot(): boolean;
    createExecLocationFilter(location: SourceSection, suspendAnchor: SuspendAnchor): SourceSectionFilter;
    createLocationFilters(suspendAnchor: SuspendAnchor): BreakpointLocation$LocationFilters;
    isLoadBindingNeeded(): boolean;
}