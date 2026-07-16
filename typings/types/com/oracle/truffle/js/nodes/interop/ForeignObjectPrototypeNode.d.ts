import type { InteropLibrary } from '../../../../../../com/oracle/truffle/api/interop/InteropLibrary.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class ForeignObjectPrototypeNode extends JavaScriptBaseNode {
    static create(): ForeignObjectPrototypeNode;
    static getUncached(): ForeignObjectPrototypeNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor()
    doTruffleObject(truffleObject: Object, interop: InteropLibrary): JSDynamicObject;
    execute(truffleObject: Object): JSDynamicObject;
}