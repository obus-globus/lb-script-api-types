import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { DeclareGlobalFunctionNode } from '../../../../../../com/oracle/truffle/js/nodes/access/DeclareGlobalFunctionNode.d.ts'
import type { PropertySetNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertySetNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSRealm } from '../../../../../../com/oracle/truffle/js/runtime/JSRealm.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { PropertyDescriptor } from '../../../../../../com/oracle/truffle/js/runtime/objects/PropertyDescriptor.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class DeclareGlobalFunctionNodeGen extends DeclareGlobalFunctionNode {
    static create(paramvarName: TruffleString, paramconfigurable: boolean): DeclareGlobalFunctionNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor(varName: TruffleString, configurable: boolean)
    // private cached_cache_: PropertySetNode;
    // private state_0_: number;
    // private executeAndSpecialize(arg0Value: JSDynamicObject, arg1Value: Object, arg2Value: PropertyDescriptor, arg3Value: JSContext): void;
    executeVoid(context: JSContext, realm: JSRealm): void;
    executeVoid(arg0Value: JSDynamicObject, arg1Value: Object, arg2Value: PropertyDescriptor, arg3Value: JSContext): void;
    // private fallbackGuard_(state_0: number, arg0Value: JSDynamicObject, arg1Value: Object, arg2Value: PropertyDescriptor, arg3Value: JSContext): boolean;
}