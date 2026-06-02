import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class StringEscape extends Object {
    static escape(params: TruffleString): TruffleString;
    static unescape(paramstring: TruffleString): TruffleString;
    private constructor()
}