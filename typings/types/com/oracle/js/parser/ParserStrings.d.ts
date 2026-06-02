import type { TruffleString } from '../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ParserStrings extends Object {
    static constant(params: string): TruffleString;
    static fromJavaString(params: string): TruffleString;
    private constructor()
}