import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { BranchProfile } from '../../../../../../com/oracle/truffle/api/profiles/BranchProfile.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TruffleString$ParseDoubleNode } from '../../../../../../com/oracle/truffle/api/strings/TruffleString$ParseDoubleNode.d.ts'
import type { TruffleString$ReadCharUTF16Node } from '../../../../../../com/oracle/truffle/api/strings/TruffleString$ReadCharUTF16Node.d.ts'
import type { TruffleString$SubstringByteIndexNode } from '../../../../../../com/oracle/truffle/api/strings/TruffleString$SubstringByteIndexNode.d.ts'
export class FloatParserNode extends Node {
    static create(): FloatParserNode;
    constructor()
    // private charAtNode: TruffleString$ReadCharUTF16Node;
    // private exponentBranch: BranchProfile;
    // private parseDoubleNode: TruffleString$ParseDoubleNode;
    // private substringNode: TruffleString$SubstringByteIndexNode;
    parse(input: TruffleString): number;
}