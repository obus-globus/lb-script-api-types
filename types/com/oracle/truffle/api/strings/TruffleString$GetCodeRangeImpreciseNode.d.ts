import type { AbstractPublicNode } from '../../../../../com/oracle/truffle/api/strings/AbstractPublicNode.d.ts'
import type { AbstractTruffleString } from '../../../../../com/oracle/truffle/api/strings/AbstractTruffleString.d.ts'
import type { TruffleString$CodeRange } from '../../../../../com/oracle/truffle/api/strings/TruffleString$CodeRange.d.ts'
import type { TruffleString$Encoding } from '../../../../../com/oracle/truffle/api/strings/TruffleString$Encoding.d.ts'
export abstract class TruffleString$GetCodeRangeImpreciseNode extends AbstractPublicNode {
    static create(): TruffleString$GetCodeRangeImpreciseNode;
    static getUncached(): TruffleString$GetCodeRangeImpreciseNode;
    constructor()
    execute(a: AbstractTruffleString, expectedEncoding: TruffleString$Encoding): TruffleString$CodeRange;
}