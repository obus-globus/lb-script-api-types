import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { DeclareGlobalLexicalVariableNode } from '../../../../../../com/oracle/truffle/js/nodes/access/DeclareGlobalLexicalVariableNode.d.ts'
import type { PropertySetNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertySetNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSRealm } from '../../../../../../com/oracle/truffle/js/runtime/JSRealm.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
export class DeclareGlobalLexicalVariableNodeGen extends DeclareGlobalLexicalVariableNode {
    static create(paramvarName: TruffleString, paramisConst: boolean): DeclareGlobalLexicalVariableNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor(varName: TruffleString, isConst: boolean)
    // private cached_cache_: PropertySetNode;
    // private state_0_: number;
    // private executeAndSpecialize(arg0Value: JSDynamicObject, arg1Value: JSContext): void;
    executeVoid(context: JSContext, realm: JSRealm): void;
    executeVoid(arg0Value: JSDynamicObject, arg1Value: JSContext): void;
}