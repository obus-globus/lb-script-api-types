import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JavaScriptNode } from '../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { PropertyGetNode } from '../../../../../com/oracle/truffle/js/nodes/access/PropertyGetNode.d.ts'
import type { JSBuiltin } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSBuiltinNode } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltinNode.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSRealm } from '../../../../../com/oracle/truffle/js/runtime/JSRealm.d.ts'
import type { JSDynamicObject } from '../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { JSObject } from '../../../../../com/oracle/truffle/js/runtime/objects/JSObject.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class ConstructorBuiltins$ConstructWithNewTargetNode extends JSBuiltinNode {
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
    constructor(context: JSContext, builtin: JSBuiltin, isNewTargetCase: boolean)
    // private getPrototypeNode: PropertyGetNode;
    // private isNewTargetCase: boolean;
    getIntrinsicDefaultProto(realm: JSRealm): JSDynamicObject;
    getPrototype(realm: JSRealm, newTarget: JSDynamicObject): JSDynamicObject;
    // private getPrototypeFromNewTarget(newTarget: JSDynamicObject): JSDynamicObject;
    getRealmFromNewTarget(newTarget: Object): JSRealm;
    setPrototypeFromNewTarget<T extends JSObject>(resultObj: T, newTarget: JSDynamicObject): T;
    swapPrototype<T extends JSObject>(resultObj: T, newTarget: JSDynamicObject): T;
}