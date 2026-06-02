import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class ArrayIteratorGetLengthNode extends Node {
    constructor()
    execute(node: Node, array: Object, context: JSContext): number;
}