import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedBranchProfile } from '../../../../../../com/oracle/truffle/api/profiles/InlinedBranchProfile.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { SafeInteger } from '../../../../../../com/oracle/truffle/js/runtime/SafeInteger.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class JSToIndexNode extends JavaScriptBaseNode {
    static create(): JSToIndexNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor()
    doDouble(value: number, negativeIndexBranch: InlinedBranchProfile, tooLargeIndexBranch: InlinedBranchProfile): number;
    doInt(value: number, negativeIndexBranch: InlinedBranchProfile): number;
    doSafeInteger(value: SafeInteger, negativeIndexBranch: InlinedBranchProfile): number;
    executeLong(value: Object): number;
}