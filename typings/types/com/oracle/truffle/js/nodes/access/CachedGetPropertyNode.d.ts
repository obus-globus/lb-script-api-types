import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString$EqualNode } from '../../../../../../com/oracle/truffle/api/strings/TruffleString$EqualNode.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { JSProxyPropertyGetNode } from '../../../../../../com/oracle/truffle/js/nodes/access/JSProxyPropertyGetNode.d.ts'
import type { PropertyGetNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertyGetNode.d.ts'
import type { ToArrayIndexNoToPropertyKeyNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/ToArrayIndexNoToPropertyKeyNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { JSClassProfile } from '../../../../../../com/oracle/truffle/js/runtime/util/JSClassProfile.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class CachedGetPropertyNode extends JavaScriptBaseNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(context: JSContext)
    // private context: JSContext;
    doArrayIndex(target: JSDynamicObject, key: Object, receiver: Object, defaultValue: Object, toArrayIndexNode: ToArrayIndexNoToPropertyKeyNode, index: number, jsclassProfile: JSClassProfile): Object;
    doCachedKey(target: JSDynamicObject, key: Object, receiver: Object, defaultValue: Object, cachedKey: Object, propertyNode: PropertyGetNode, equalsNode: TruffleString$EqualNode): Object;
    doIntIndex(target: JSDynamicObject, index: number, receiver: Object, defaultValue: Object, jsclassProfile: JSClassProfile): Object;
    doProxy(target: JSDynamicObject, index: Object, receiver: Object, defaultValue: Object, proxyGet: JSProxyPropertyGetNode): Object;
    execute(target: JSDynamicObject, propertyKey: Object, receiver: Object, defaultValue: Object): Object;
}