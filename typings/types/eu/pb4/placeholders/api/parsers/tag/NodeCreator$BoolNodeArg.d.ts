import type { TextNode } from '../../../../../../eu/pb4/placeholders/api/node/TextNode.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface NodeCreator$BoolNodeArg extends Object{
    apply(arg0: TextNode[], arg1: boolean): TextNode;
}