import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class GetPrototypeNode extends JavaScriptBaseNode {
    static create(paramobject: JavaScriptNode): JavaScriptNode;
    static create(): GetPrototypeNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor()
    execute(obj: JSDynamicObject): JSDynamicObject;
    execute(obj: Object): JSDynamicObject;
}