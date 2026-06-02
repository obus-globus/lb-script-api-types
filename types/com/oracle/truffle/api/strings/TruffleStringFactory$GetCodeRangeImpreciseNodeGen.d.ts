import type { AbstractTruffleString } from '../../../../../com/oracle/truffle/api/strings/AbstractTruffleString.d.ts'
import type { TruffleString$CodeRange } from '../../../../../com/oracle/truffle/api/strings/TruffleString$CodeRange.d.ts'
import type { TruffleString$Encoding } from '../../../../../com/oracle/truffle/api/strings/TruffleString$Encoding.d.ts'
import type { TruffleString$GetCodeRangeImpreciseNode } from '../../../../../com/oracle/truffle/api/strings/TruffleString$GetCodeRangeImpreciseNode.d.ts'
export class TruffleStringFactory$GetCodeRangeImpreciseNodeGen extends TruffleString$GetCodeRangeImpreciseNode {
    static create(): TruffleString$GetCodeRangeImpreciseNode;
    static getUncached(): TruffleString$GetCodeRangeImpreciseNode;
    private constructor()
    execute(arg0Value: AbstractTruffleString, arg1Value: TruffleString$Encoding): TruffleString$CodeRange;
}