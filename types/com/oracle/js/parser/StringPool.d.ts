import type { TruffleString } from '../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface StringPool extends Object{
    stringIntern(candidate: TruffleString): TruffleString;
}