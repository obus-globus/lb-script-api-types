import type { SourceSection } from '../../../../../com/oracle/truffle/api/source/SourceSection.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class SectionCoverage extends Object {
    constructor(sourceSection: SourceSection, covered: boolean, count: number)
    readonly count: number;
    readonly covered: boolean;
    readonly sourceSection: SourceSection;
    getCount(): number;
    getSourceSection(): SourceSection;
    isCovered(): boolean;
}