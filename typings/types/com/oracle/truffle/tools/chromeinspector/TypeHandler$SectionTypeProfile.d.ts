import type { SourceSection } from '../../../../../com/oracle/truffle/api/source/SourceSection.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class TypeHandler$SectionTypeProfile extends Object {
    private constructor(sourceSection: SourceSection)
    readonly sourceSection: SourceSection;
    readonly types: string[];
    getSourceSection(): SourceSection;
    getTypes(): string[];
}