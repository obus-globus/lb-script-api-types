import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { ArgumentsObjectNode } from '../../../../../../com/oracle/truffle/js/nodes/arguments/ArgumentsObjectNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSArgumentsObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSArgumentsObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ArgumentsObjectNodeGen extends ArgumentsObjectNode {
    static cloneUninitialized(paramnode: Object | null, parammaterializedTags: (Object | null)[]): Object | null;
    static cloneUninitialized(paramnodeArray: Object | null, parammaterializedTags: (Object | null)[]): Object | null;
    static create(paramcontext: JSContext, paramstrict: boolean, paramleadingArgCount: number): JavaScriptNode;
    static create(paramcontext: JSContext, paramstrict: boolean, paramleadingArgCount: number): ArgumentsObjectNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    private constructor(context: JSContext, strict: boolean, leadingArgCount: number)
    // private state_0_: number;
    execute(frameValue: VirtualFrame): Object;
    // private executeAndSpecialize(frameValue: VirtualFrame): JSArgumentsObject;
    executeVoid(frameValue: VirtualFrame): void;
}