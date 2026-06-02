import type { JsonGenerator } from '../../../../../../com/azure/json/implementation/jackson/core/JsonGenerator.d.ts'
import type { TreeNode } from '../../../../../../com/azure/json/implementation/jackson/core/TreeNode.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class TreeCodec extends Object {
    constructor()
    writeTree(arg0: JsonGenerator, arg1: TreeNode): void;
}