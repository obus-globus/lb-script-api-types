import type { Tag } from '../../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedBranchProfile } from '../../../../../../com/oracle/truffle/api/profiles/InlinedBranchProfile.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { JSNumberToDoubleNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSNumberToDoubleNode.d.ts'
import type { JSToNumberNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToNumberNode.d.ts'
import type { JSBuiltin } from '../../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSBuiltinNode } from '../../../../../../com/oracle/truffle/js/nodes/function/JSBuiltinNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class MinMaxNode extends JSBuiltinNode {
    static ARGUMENTS: string;
    static cloneUninitialized(paramnode: JavaScriptNode | null, parammaterializedTags: Class<Tag>[]): JavaScriptNode | null;
    static cloneUninitialized(paramnodeArray: (JavaScriptNode | null)[], parammaterializedTags: Class<Tag>[]): (JavaScriptNode | null)[];
    static createBuiltin(paramctx: JSContext, parambuiltin: JSBuiltin, paramconstruct: boolean, paramnewTarget: boolean): JSBuiltinNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    constructor(context: JSContext, builtin: JSBuiltin)
    do2(args: Object[], isIntBranch: InlinedBranchProfile, numberToDouble: JSNumberToDoubleNode, toNumber0Node: JSToNumberNode, toNumber1Node: JSToNumberNode): Object;
    do3(args: Object[], isIntBranch: InlinedBranchProfile, numberToDouble: JSNumberToDoubleNode, toNumber0Node: JSToNumberNode, toNumber1Node: JSToNumberNode, toNumber2Node: JSToNumberNode): Object;
    do4OrMore(args: Object[], isIntBranch: InlinedBranchProfile, toNumber0Node: JSToNumberNode, toNumber1Node: JSToNumberNode, toNumber2Node: JSToNumberNode, numberToDouble: JSNumberToDoubleNode): Object;
    minOrMaxDouble(a: number, b: number): number;
    minOrMaxInt(a: number, b: number): number;
}