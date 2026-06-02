import type { VirtualFrame } from '../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { FinalizationRegistryPrototypeBuiltins$JSFinalizationRegistryRegisterNode } from '../../../../../com/oracle/truffle/js/builtins/FinalizationRegistryPrototypeBuiltins$JSFinalizationRegistryRegisterNode.d.ts'
import type { JavaScriptNode } from '../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { JSIdenticalNode } from '../../../../../com/oracle/truffle/js/nodes/binary/JSIdenticalNode.d.ts'
import type { JSBuiltin } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSBuiltinNode } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltinNode.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSDynamicObject } from '../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class FinalizationRegistryPrototypeBuiltinsFactory$JSFinalizationRegistryRegisterNodeGen extends FinalizationRegistryPrototypeBuiltins$JSFinalizationRegistryRegisterNode {
    static ARGUMENTS: string;
    static cloneUninitialized(paramnode: Object | null, parammaterializedTags: (Object | null)[]): Object | null;
    static cloneUninitialized(paramnodeArray: Object | null, parammaterializedTags: (Object | null)[]): Object | null;
    static create(paramcontext: JSContext, parambuiltin: JSBuiltin, paramarguments: (Object | null)[]): FinalizationRegistryPrototypeBuiltins$JSFinalizationRegistryRegisterNode;
    static createBuiltin(paramctx: JSContext, parambuiltin: JSBuiltin, paramconstruct: boolean, paramnewTarget: boolean): JSBuiltinNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    private constructor(context: JSContext, builtin: JSBuiltin, arguments: JavaScriptNode[])
    // private arguments0_: JavaScriptNode;
    // private arguments1_: JavaScriptNode;
    // private arguments2_: JavaScriptNode;
    // private arguments3_: JavaScriptNode;
    // private register_sameValueNode_: JSIdenticalNode;
    // private state_0_: number;
    execute(frameValue: VirtualFrame): Object;
    // private executeAndSpecialize(arguments0Value: Object, arguments1Value: Object, arguments2Value: Object, arguments3Value: Object): JSDynamicObject;
    getArguments(): JavaScriptNode[];
}