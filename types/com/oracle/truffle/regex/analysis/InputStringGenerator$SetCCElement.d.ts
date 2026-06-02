import type { InputStringGenerator } from '../../../../../com/oracle/truffle/regex/analysis/InputStringGenerator.d.ts'
import type { InputStringGenerator$StateChange } from '../../../../../com/oracle/truffle/regex/analysis/InputStringGenerator$StateChange.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class InputStringGenerator$SetCCElement extends InputStringGenerator$StateChange {
    private constructor(index: number, oldCPS: (Object | null)[])
    // private index: number;
    // private oldCPS: (Object | null)[];
    apply(gen: InputStringGenerator): void;
}