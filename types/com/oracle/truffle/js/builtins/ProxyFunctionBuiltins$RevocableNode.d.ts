import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { ConstructorBuiltins$ConstructJSProxyNode } from '../../../../../com/oracle/truffle/js/builtins/ConstructorBuiltins$ConstructJSProxyNode.d.ts'
import type { JavaScriptNode } from '../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { CreateDataPropertyNode } from '../../../../../com/oracle/truffle/js/nodes/access/CreateDataPropertyNode.d.ts'
import type { CreateObjectNode } from '../../../../../com/oracle/truffle/js/nodes/access/CreateObjectNode.d.ts'
import type { PropertySetNode } from '../../../../../com/oracle/truffle/js/nodes/access/PropertySetNode.d.ts'
import type { JSBuiltin } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSBuiltinNode } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltinNode.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class ProxyFunctionBuiltins$RevocableNode extends JSBuiltinNode {
    static ARGUMENTS: string;
    static cloneUninitialized(paramnode: Object | null, parammaterializedTags: (Object | null)[]): Object | null;
    static cloneUninitialized(paramnodeArray: Object | null, parammaterializedTags: (Object | null)[]): Object | null;
    static createBuiltin(paramctx: JSContext, parambuiltin: JSBuiltin, paramconstruct: boolean, paramnewTarget: boolean): JSBuiltinNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    constructor(context: JSContext, builtin: JSBuiltin)
    // private createObjectNode: CreateObjectNode;
    // private createProxyPropertyNode: CreateDataPropertyNode;
    // private createRevokePropertyNode: CreateDataPropertyNode;
    // private proxyCreateNode: ConstructorBuiltins$ConstructJSProxyNode;
    // private setRevocableProxySlotNode: PropertySetNode;
    doDefault(target: Object, handler: Object): Object;
}