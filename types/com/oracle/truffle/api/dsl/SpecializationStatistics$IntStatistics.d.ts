import type { SourceSection } from '../../../../../com/oracle/truffle/api/source/SourceSection.d.ts'
import type { IntSummaryStatistics } from '../../../../../java/util/IntSummaryStatistics.d.ts'
export class SpecializationStatistics$IntStatistics extends IntSummaryStatistics {
    constructor()
    // private maxSourceSection: SourceSection;
    accept(value: number): void;
    accept(value: number, sourceSection: SourceSection): void;
    combine(other: SpecializationStatistics$IntStatistics): void;
    combine(other: IntSummaryStatistics): void;
}