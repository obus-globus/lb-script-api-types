import type { InteropLibrary } from '../../../../../../com/oracle/truffle/api/interop/InteropLibrary.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { PropertyGetNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertyGetNode.d.ts'
import type { ImportValueNode } from '../../../../../../com/oracle/truffle/js/nodes/interop/ImportValueNode.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class IteratorValueNode extends JavaScriptBaseNode {
    static create(paramiterResult: JavaScriptNode): JavaScriptNode;
    static create(): IteratorValueNode;
    static getUncached(): IteratorValueNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor()
    createGetValueNode(): PropertyGetNode;
    doForeignObject(obj: Object, interop: InteropLibrary, importValueNode: ImportValueNode): Object;
    doIteratorNext(iterResult: JSDynamicObject, getValueNode: PropertyGetNode): Object;
    execute(iterResult: Object): Object;
}