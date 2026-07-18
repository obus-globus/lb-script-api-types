import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { AbstractInternalNode } from '../../../../../com/oracle/truffle/api/strings/AbstractInternalNode.d.ts'
import type { TruffleString$Encoding } from '../../../../../com/oracle/truffle/api/strings/TruffleString$Encoding.d.ts'
export abstract class TStringInternalNodes$StrideFromCodeRangeNode extends AbstractInternalNode {
    constructor()
    doOther(codeRange: number, encoding: TruffleString$Encoding): number;
    doUTF16(codeRange: number, encoding: TruffleString$Encoding): number;
    doUTF32(codeRange: number, encoding: TruffleString$Encoding): number;
    execute(node: Node, codeRange: number, encoding: TruffleString$Encoding): number;
}