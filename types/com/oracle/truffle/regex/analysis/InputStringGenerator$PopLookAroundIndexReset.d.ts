import type { InputStringGenerator } from '../../../../../com/oracle/truffle/regex/analysis/InputStringGenerator.d.ts'
import type { InputStringGenerator$StateChange } from '../../../../../com/oracle/truffle/regex/analysis/InputStringGenerator$StateChange.d.ts'
export class InputStringGenerator$PopLookAroundIndexReset extends InputStringGenerator$StateChange {
    private constructor(oldIndex: number, lookAroundIndexReset: number)
    // private lookAroundIndexReset: number;
    // private oldIndex: number;
    apply(gen: InputStringGenerator): void;
}