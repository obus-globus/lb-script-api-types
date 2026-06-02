import type { InputStringGenerator$InputElement } from '../../../../../com/oracle/truffle/regex/analysis/InputStringGenerator$InputElement.d.ts'
import type { InputStringGenerator$InputStringBuilder } from '../../../../../com/oracle/truffle/regex/analysis/InputStringGenerator$InputStringBuilder.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class InputStringGenerator$CCElement extends InputStringGenerator$InputElement {
    private constructor(cps: (Object | null)[])
    // private cps: (Object | null)[];
    getCodePointSet(builder: InputStringGenerator$InputStringBuilder): (Object | null)[];
    setCodePointSet(cps: (Object | null)[], builder: InputStringGenerator$InputStringBuilder): (Object | null)[];
}