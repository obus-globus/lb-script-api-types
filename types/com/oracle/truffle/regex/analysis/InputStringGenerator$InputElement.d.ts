import type { InputStringGenerator$InputStringBuilder } from '../../../../../com/oracle/truffle/regex/analysis/InputStringGenerator$InputStringBuilder.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class InputStringGenerator$InputElement extends Object {
    private constructor()
    getCodePointSet(builder: InputStringGenerator$InputStringBuilder): (Object | null)[];
    setCodePointSet(cps: (Object | null)[], builder: InputStringGenerator$InputStringBuilder): (Object | null)[];
}