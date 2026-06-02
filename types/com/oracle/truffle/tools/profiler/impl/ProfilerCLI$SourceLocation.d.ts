import type { SourceSection } from '../../../../../../com/oracle/truffle/api/source/SourceSection.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ProfilerCLI$SourceLocation extends Object {
    constructor(sourceSection: SourceSection, rootName: string)
    readonly rootName: string;
    // private sourceSection: SourceSection;
    equals(o: Object | null): boolean;
    getRootName(): string;
    getSourceSection(): SourceSection;
    hashCode(): number;
}