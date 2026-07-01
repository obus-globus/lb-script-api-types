import type { BreakpointLocation } from '../../../../../com/oracle/truffle/api/debug/BreakpointLocation.d.ts'
import type { BreakpointLocation$LocationFilters } from '../../../../../com/oracle/truffle/api/debug/BreakpointLocation$LocationFilters.d.ts'
import type { SourceElement } from '../../../../../com/oracle/truffle/api/debug/SourceElement.d.ts'
import type { SuspendAnchor } from '../../../../../com/oracle/truffle/api/debug/SuspendAnchor.d.ts'
import type { SourceFilter } from '../../../../../com/oracle/truffle/api/instrumentation/SourceFilter.d.ts'
import type { SourceSectionFilter } from '../../../../../com/oracle/truffle/api/instrumentation/SourceSectionFilter.d.ts'
import type { Source } from '../../../../../com/oracle/truffle/api/source/Source.d.ts'
import type { SourceSection } from '../../../../../com/oracle/truffle/api/source/SourceSection.d.ts'
import type { Predicate } from '../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class BreakpointLocation$BreakpointSourceLocation extends BreakpointLocation {
    constructor(key: Object, sourceElements: SourceElement[], sourceSection: SourceSection)
    constructor(key: Object, sourceElements: SourceElement[], line: number, column: number)
    // private column: number;
    // private key: Object;
    // private line: number;
    // private sourceSection: SourceSection;
    createExecLocationFilter(location: SourceSection, suspendAnchor: SuspendAnchor): SourceSectionFilter;
    createLocationFilters(suspendAnchor: SuspendAnchor): BreakpointLocation$LocationFilters;
    // private createSourceFilter(): SourceFilter;
    // private createSourcePredicate(): (param0: Source) => boolean;
    isLoadBindingNeeded(): boolean;
    toString(): string;
}