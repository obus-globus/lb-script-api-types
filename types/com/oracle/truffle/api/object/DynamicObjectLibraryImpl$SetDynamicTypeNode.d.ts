import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { DynamicObject } from '../../../../../com/oracle/truffle/api/object/DynamicObject.d.ts'
import type { Shape } from '../../../../../com/oracle/truffle/api/object/Shape.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class DynamicObjectLibraryImpl$SetDynamicTypeNode extends Node {
    constructor()
    execute(node: Node, object: DynamicObject, cachedShape: Shape, objectType: Object): boolean;
}