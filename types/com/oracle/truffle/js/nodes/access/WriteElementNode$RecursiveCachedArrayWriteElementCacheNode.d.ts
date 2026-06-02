import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { WriteElementNode } from '../../../../../../com/oracle/truffle/js/nodes/access/WriteElementNode.d.ts'
import type { WriteElementNode$ArrayWriteElementCacheDispatchNode } from '../../../../../../com/oracle/truffle/js/nodes/access/WriteElementNode$ArrayWriteElementCacheDispatchNode.d.ts'
import type { WriteElementNode$ArrayWriteElementCacheNode } from '../../../../../../com/oracle/truffle/js/nodes/access/WriteElementNode$ArrayWriteElementCacheNode.d.ts'
import type { ScriptArray } from '../../../../../../com/oracle/truffle/js/runtime/array/ScriptArray.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class WriteElementNode$RecursiveCachedArrayWriteElementCacheNode extends WriteElementNode$ArrayWriteElementCacheNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor()
    // private recursiveWrite: WriteElementNode$ArrayWriteElementCacheDispatchNode;
    // private executeRecursive(targetObject: JSDynamicObject, array: ScriptArray, index: number, value: Object, root: WriteElementNode): boolean;
    setArrayAndWrite(newArray: ScriptArray, target: JSDynamicObject, index: number, value: Object, root: WriteElementNode): boolean;
}