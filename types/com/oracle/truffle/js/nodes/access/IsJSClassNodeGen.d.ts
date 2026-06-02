import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { IsJSClassNode } from '../../../../../../com/oracle/truffle/js/nodes/access/IsJSClassNode.d.ts'
import type { IsJSClassNodeGen$IsInstanceShapeData } from '../../../../../../com/oracle/truffle/js/nodes/access/IsJSClassNodeGen$IsInstanceShapeData.d.ts'
import type { JSClass } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSClass.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class IsJSClassNodeGen extends IsJSClassNode {
    static cloneUninitialized(paramnode: Object | null, parammaterializedTags: (Object | null)[]): Object | null;
    static cloneUninitialized(paramnodeArray: Object | null, parammaterializedTags: (Object | null)[]): Object | null;
    static create(paramclazz: JSClass): IsJSClassNode;
    static create(paramjsclass: JSClass, paramoperand: JavaScriptNode): IsJSClassNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    private constructor(jsclass: JSClass, operand: JavaScriptNode)
    // private isInstanceShape_cache: IsJSClassNodeGen$IsInstanceShapeData;
    // private state_0_: number;
    execute(frameValue: VirtualFrame): Object;
    // private executeAndSpecialize(operandNodeValue: Object): boolean;
    executeBoolean(frameValue: VirtualFrame): boolean;
    executeBoolean(operandNodeValue: Object): boolean;
    executeVoid(frameValue: VirtualFrame): void;
}