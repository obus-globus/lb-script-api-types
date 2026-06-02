import type { TruffleString } from '../../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TruffleString$ByteIndexOfCodePointSetNode } from '../../../../../../../com/oracle/truffle/api/strings/TruffleString$ByteIndexOfCodePointSetNode.d.ts'
import type { TruffleString$ByteIndexOfStringNode } from '../../../../../../../com/oracle/truffle/api/strings/TruffleString$ByteIndexOfStringNode.d.ts'
import type { TruffleString$CodePointSet } from '../../../../../../../com/oracle/truffle/api/strings/TruffleString$CodePointSet.d.ts'
import type { TruffleString$RegionEqualByteIndexNode } from '../../../../../../../com/oracle/truffle/api/strings/TruffleString$RegionEqualByteIndexNode.d.ts'
import type { InnerLiteral } from '../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/InnerLiteral.d.ts'
import type { Encodings$Encoding } from '../../../../../../../com/oracle/truffle/regex/tregex/string/Encodings$Encoding.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class InputOps extends Object {
    static indexOf(paraminput: TruffleString, paramfromIndex: number, parammaxIndex: number, paramcodePointSet: TruffleString$CodePointSet, paramencoding: Encodings$Encoding, paramindexOfNode: TruffleString$ByteIndexOfCodePointSetNode): number;
    static indexOf(paraminput: TruffleString, paramfromIndex: number, parammaxIndex: number, paramliteral: InnerLiteral, paramencoding: Encodings$Encoding, paramindexOfStringNode: TruffleString$ByteIndexOfStringNode): number;
    static length(paraminput: TruffleString, paramencoding: Encodings$Encoding): number;
    static regionEquals(paraminput: TruffleString, paramliteral: InnerLiteral, paramliteralLength: number, paramencoding: Encodings$Encoding, paramfromIndex: number, paramtoIndex: number, paramregionEqualsNode: TruffleString$RegionEqualByteIndexNode): boolean;
    constructor()
}