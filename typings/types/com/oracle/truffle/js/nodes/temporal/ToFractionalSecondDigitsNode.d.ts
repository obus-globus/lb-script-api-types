import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedBranchProfile } from '../../../../../../com/oracle/truffle/api/profiles/InlinedBranchProfile.d.ts'
import type { TruffleString$EqualNode } from '../../../../../../com/oracle/truffle/api/strings/TruffleString$EqualNode.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { PropertyGetNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertyGetNode.d.ts'
import type { JSToStringNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToStringNode.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class ToFractionalSecondDigitsNode extends JavaScriptBaseNode {
    static AUTO: number;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor()
    execute(normalizedOptions: Object): number;
    toFractionalSecondDigits(normalizedOptions: Object, getFractionalSecondDigits: PropertyGetNode, toStringNode: JSToStringNode, equalNode: TruffleString$EqualNode, errorBranch: InlinedBranchProfile): number;
}