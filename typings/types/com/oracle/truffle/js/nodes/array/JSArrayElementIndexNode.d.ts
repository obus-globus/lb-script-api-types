import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { IsArrayNode } from '../../../../../../com/oracle/truffle/js/nodes/access/IsArrayNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class JSArrayElementIndexNode extends JavaScriptBaseNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(context: JSContext)
    // private context: JSContext;
    // private isArrayNode: IsArrayNode;
    hasPrototypeElements(object: JSDynamicObject): boolean;
    isArray(obj: Object): boolean;
    isSuitableForEnumBasedProcessingUsingOwnKeys(object: JSDynamicObject, length: number): boolean;
}