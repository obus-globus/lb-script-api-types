import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { ReadElementNode } from '../../../../../../com/oracle/truffle/js/nodes/access/ReadElementNode.d.ts'
import type { ReadElementNode$ToPropertyKeyCachedReadElementTypeCacheNode } from '../../../../../../com/oracle/truffle/js/nodes/access/ReadElementNode$ToPropertyKeyCachedReadElementTypeCacheNode.d.ts'
import type { JSToPropertyKeyNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToPropertyKeyNode.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class ReadElementNode$SymbolReadElementTypeCacheNode extends ReadElementNode$ToPropertyKeyCachedReadElementTypeCacheNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor()
    doSymbol(target: Object, index: Object, receiver: Object, defaultValue: Object, root: ReadElementNode, indexToPropertyKeyNode: JSToPropertyKeyNode): Object;
    doSymbol(target: Object, index: number, receiver: Object, defaultValue: Object, root: ReadElementNode): Object;
    guard(target: Object): boolean;
}