import type { InteropLibrary } from '../../../../../../com/oracle/truffle/api/interop/InteropLibrary.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { PropertyGetNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertyGetNode.d.ts'
import type { IteratorRecord } from '../../../../../../com/oracle/truffle/js/runtime/objects/IteratorRecord.d.ts'
import type { JSObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class GetIteratorDirectNode extends JavaScriptBaseNode {
    static create(): GetIteratorDirectNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor()
    createGetNextNode(): PropertyGetNode;
    execute(node: Node, iterator: Object): IteratorRecord;
    execute(iterator: Object): IteratorRecord;
    get(obj: JSObject, getNextMethodNode: PropertyGetNode): IteratorRecord;
    get(obj: Object, getNextMethodNode: PropertyGetNode, interop: InteropLibrary): IteratorRecord;
    unsupported(obj: Object): IteratorRecord;
}