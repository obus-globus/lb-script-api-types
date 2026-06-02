import type { InputStringGenerator } from '../../../../../com/oracle/truffle/regex/analysis/InputStringGenerator.d.ts'
import type { InputStringGenerator$StateChange } from '../../../../../com/oracle/truffle/regex/analysis/InputStringGenerator$StateChange.d.ts'
export class InputStringGenerator$SetGroupBoundaryAction extends InputStringGenerator$StateChange {
    private constructor(boundaryIndex: number, oldValue: number)
    // private boundaryIndex: number;
    // private oldValue: number;
    apply(gen: InputStringGenerator): void;
}