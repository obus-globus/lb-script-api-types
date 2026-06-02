import type { BreakpointLocation } from '../../../../../com/oracle/truffle/api/debug/BreakpointLocation.d.ts'
import type { BreakpointLocation$LocationFilters } from '../../../../../com/oracle/truffle/api/debug/BreakpointLocation$LocationFilters.d.ts'
import type { SourceElement } from '../../../../../com/oracle/truffle/api/debug/SourceElement.d.ts'
import type { SuspendAnchor } from '../../../../../com/oracle/truffle/api/debug/SuspendAnchor.d.ts'
import type { SuspensionFilter } from '../../../../../com/oracle/truffle/api/debug/SuspensionFilter.d.ts'
import type { SourceSectionFilter } from '../../../../../com/oracle/truffle/api/instrumentation/SourceSectionFilter.d.ts'
import type { SourceSection } from '../../../../../com/oracle/truffle/api/source/SourceSection.d.ts'
export class BreakpointLocation$BreakpointFilteredLocation extends BreakpointLocation {
    constructor(sourceElements: SourceElement[], filter: SuspensionFilter)
    // private filter: SuspensionFilter;
    createExecLocationFilter(location: SourceSection, suspendAnchor: SuspendAnchor): SourceSectionFilter;
    createLocationFilters(suspendAnchor: SuspendAnchor): BreakpointLocation$LocationFilters;
    isLoadBindingNeeded(): boolean;
}