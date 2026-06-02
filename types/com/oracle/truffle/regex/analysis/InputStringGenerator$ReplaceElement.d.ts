import type { InputStringGenerator } from '../../../../../com/oracle/truffle/regex/analysis/InputStringGenerator.d.ts'
import type { InputStringGenerator$InputElement } from '../../../../../com/oracle/truffle/regex/analysis/InputStringGenerator$InputElement.d.ts'
import type { InputStringGenerator$StateChange } from '../../../../../com/oracle/truffle/regex/analysis/InputStringGenerator$StateChange.d.ts'
export class InputStringGenerator$ReplaceElement extends InputStringGenerator$StateChange {
    private constructor(index: number, oldElement: InputStringGenerator$InputElement)
    // private index: number;
    // private oldElement: InputStringGenerator$InputElement;
    apply(gen: InputStringGenerator): void;
}