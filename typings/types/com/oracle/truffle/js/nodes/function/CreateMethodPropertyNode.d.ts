import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { IsJSObjectNode } from '../../../../../../com/oracle/truffle/js/nodes/access/IsJSObjectNode.d.ts'
import type { PropertySetNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertySetNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class CreateMethodPropertyNode extends JavaScriptBaseNode {
    static create(paramcontext: JSContext, paramkey: Object): CreateMethodPropertyNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(context: JSContext, key: Object)
    // private context: JSContext;
    // private isObject: IsJSObjectNode;
    // private key: Object;
    doNonObject(object: Object, value: Object): void;
    doUncached(object: JSObject, value: Object): void;
    executeVoid(object: Object, value: Object): void;
    makeDefinePropertyCache(): PropertySetNode;
}