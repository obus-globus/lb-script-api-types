import type { SourceSection } from '../../../../../com/oracle/truffle/api/source/SourceSection.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class SourceInformation extends Object {
    constructor(token: Object)
    getEndBytecodeIndex(): number;
    getSourceSection(): SourceSection;
    getStartBytecodeIndex(): number;
    toString(): string;
}