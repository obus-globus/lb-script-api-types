import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedBranchProfile } from '../../../../../../com/oracle/truffle/api/profiles/InlinedBranchProfile.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { JSToNumberNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToNumberNode.d.ts'
import type { JSException } from '../../../../../../com/oracle/truffle/js/runtime/JSException.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class DefaultNumberOptionNode extends JavaScriptBaseNode {
    static create(): DefaultNumberOptionNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor()
    // private createRangeError(value: number, minimum: number, maximum: number): JSException;
    executeInt(value: Object, minimum: number, maximum: number, fallback: number): number;
    getOption(value: Object, minimum: number, maximum: number, fallback: number, toNumberNode: JSToNumberNode, errorBranch: InlinedBranchProfile): number;
    getOptionFromUndefined(value: Object, minimum: number, maximum: number, fallback: number): number;
}