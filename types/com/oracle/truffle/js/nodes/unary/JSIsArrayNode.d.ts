import type { InteropLibrary } from '../../../../../../com/oracle/truffle/api/interop/InteropLibrary.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class JSIsArrayNode extends JavaScriptBaseNode {
    static createIsArray(): JSIsArrayNode;
    static createIsArrayLike(): JSIsArrayNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(jsType: boolean)
    // private jsType: boolean;
    doJSArray(object: Object): boolean;
    doJSObject(object: Object): boolean;
    doJSProxy(object: JSDynamicObject): boolean;
    doNotObject(object: Object): boolean;
    doPrimitiveOrForeign(object: Object, interop: InteropLibrary): boolean;
    execute(operand: Object): boolean;
}