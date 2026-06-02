import type { StringArgs } from '../../../../../../eu/pb4/placeholders/api/arguments/StringArgs.d.ts'
import type { TextNode } from '../../../../../../eu/pb4/placeholders/api/node/TextNode.d.ts'
import type { NodeParser } from '../../../../../../eu/pb4/placeholders/api/parsers/NodeParser.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface NodeCreator extends Object{
    createTextNode(arg0: TextNode[], arg1: StringArgs, arg2: NodeParser): TextNode;
}