import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { AbstractInternalNode } from '../../../../../com/oracle/truffle/api/strings/AbstractInternalNode.d.ts'
import type { AbstractTruffleString } from '../../../../../com/oracle/truffle/api/strings/AbstractTruffleString.d.ts'
import type { TranscodingErrorHandler } from '../../../../../com/oracle/truffle/api/strings/TranscodingErrorHandler.d.ts'
import type { TranscodingErrorHandler$ReplacementString } from '../../../../../com/oracle/truffle/api/strings/TranscodingErrorHandler$ReplacementString.d.ts'
import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TruffleString$Encoding } from '../../../../../com/oracle/truffle/api/strings/TruffleString$Encoding.d.ts'
export abstract class TStringInternalNodes$TransCodeNode extends AbstractInternalNode {
    constructor()
    execute(node: Node, a: AbstractTruffleString, arrayA: number[], offsetA: number, codePointLengthA: number, codeRangeA: number, targetEncoding: TruffleString$Encoding, errorHandler: (param0: AbstractTruffleString, param1: number, param2: number, param3: TruffleString$Encoding, param4: TruffleString$Encoding) => TranscodingErrorHandler$ReplacementString): TruffleString;
}