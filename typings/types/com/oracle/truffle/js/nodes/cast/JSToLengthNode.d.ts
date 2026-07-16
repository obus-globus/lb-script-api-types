import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedBranchProfile } from '../../../../../../com/oracle/truffle/api/profiles/InlinedBranchProfile.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { JSToNumberNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToNumberNode.d.ts'
import type { SafeInteger } from '../../../../../../com/oracle/truffle/js/runtime/SafeInteger.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class JSToLengthNode extends JavaScriptBaseNode {
    static create(): JSToLengthNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor()
    doDouble(value: number, negativeBranch: InlinedBranchProfile, tooLargeBranch: InlinedBranchProfile): number;
    doInt(value: number, negativeBranch: InlinedBranchProfile): number;
    // private doLong(value: number, negativeBranch: InlinedBranchProfile, tooLargeBranch: InlinedBranchProfile): number;
    doObject(value: Object, toNumberNode: JSToNumberNode, negativeBranch: InlinedBranchProfile, tooLargeBranch: InlinedBranchProfile): number;
    doSafeInteger(value: SafeInteger, negativeBranch: InlinedBranchProfile): number;
    executeLong(value: Object): number;
}