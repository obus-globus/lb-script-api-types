import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Tag } from '../../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { JSIsNullOrUndefinedNode } from '../../../../../../com/oracle/truffle/js/nodes/unary/JSIsNullOrUndefinedNode.d.ts'
import type { JSIsNullOrUndefinedNodeGen$JSObjectCachedData } from '../../../../../../com/oracle/truffle/js/nodes/unary/JSIsNullOrUndefinedNodeGen$JSObjectCachedData.d.ts'
import type { JSIsNullOrUndefinedNodeGen$JSValueOrForeign0Data } from '../../../../../../com/oracle/truffle/js/nodes/unary/JSIsNullOrUndefinedNodeGen$JSValueOrForeign0Data.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JSIsNullOrUndefinedNodeGen extends JSIsNullOrUndefinedNode {
    static cloneUninitialized(paramnode: JavaScriptNode | null, parammaterializedTags: Class<Tag>[]): JavaScriptNode | null;
    static cloneUninitialized(paramnodeArray: (JavaScriptNode | null)[], parammaterializedTags: Class<Tag>[]): (JavaScriptNode | null)[];
    static create(): JSIsNullOrUndefinedNode;
    static create(paramoperand: JavaScriptNode, paramisUndefined: boolean, paramisLeft: boolean): JSIsNullOrUndefinedNode;
    static createFromEquals(paramleft: JavaScriptNode, paramright: JavaScriptNode): JSIsNullOrUndefinedNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    private constructor(operand: JavaScriptNode, isUndefined: boolean, isLeft: boolean)
    // private jSObjectCached_cache: JSIsNullOrUndefinedNodeGen$JSObjectCachedData;
    // private jSValueOrForeign0_cache: JSIsNullOrUndefinedNodeGen$JSValueOrForeign0Data;
    // private state_0_: number;
    execute(frameValue: VirtualFrame): Object;
    // private executeAndSpecialize(operandNodeValue: Object): boolean;
    executeBoolean(frameValue: VirtualFrame): boolean;
    executeBoolean(operandNodeValue: Object): boolean;
    executeVoid(frameValue: VirtualFrame): void;
    // private jSValueOrForeign1Boundary(state_0: number, operandNodeValue: Object): boolean;
    // private jSValueOrForeign1Boundary0(state_0: number, operandNodeValue_: Object): Object;
    // private jSValueOrForeign1Boundary1(state_0: number, operandNodeValue_: Object): boolean;
}