import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { WriteElementNode } from '../../../../../../com/oracle/truffle/js/nodes/access/WriteElementNode.d.ts'
import type { WriteElementNode$ToPropertyKeyCachedWriteElementTypeCacheNode } from '../../../../../../com/oracle/truffle/js/nodes/access/WriteElementNode$ToPropertyKeyCachedWriteElementTypeCacheNode.d.ts'
import type { JSToPropertyKeyNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToPropertyKeyNode.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class WriteElementNode$SymbolWriteElementTypeCacheNode extends WriteElementNode$ToPropertyKeyCachedWriteElementTypeCacheNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor()
    doSymbol(target: Object, index: Object, value: Object, receiver: Object, root: WriteElementNode, indexToPropertyKeyNode: JSToPropertyKeyNode): void;
    doSymbol(target: Object, index: number, value: Object, receiver: Object, root: WriteElementNode): void;
    guard(target: Object): boolean;
}