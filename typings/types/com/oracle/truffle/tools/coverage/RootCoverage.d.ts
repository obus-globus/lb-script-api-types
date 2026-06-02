import type { SourceSection } from '../../../../../com/oracle/truffle/api/source/SourceSection.d.ts'
import type { SectionCoverage } from '../../../../../com/oracle/truffle/tools/coverage/SectionCoverage.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class RootCoverage extends Object {
    constructor(sectionCoverage: SectionCoverage[], covered: boolean, count: number, sourceSection: SourceSection, name: string)
    readonly count: number;
    readonly covered: boolean;
    readonly name: string;
    readonly sectionCoverage: SectionCoverage[];
    readonly sourceSection: SourceSection;
    getCount(): number;
    getName(): string;
    getSectionCoverage(): SectionCoverage[];
    getSourceSection(): SourceSection;
    isCovered(): boolean;
}