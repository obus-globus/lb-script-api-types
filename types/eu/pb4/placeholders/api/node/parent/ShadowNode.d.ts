import type { ParserContext } from '../../../../../../eu/pb4/placeholders/api/ParserContext.d.ts'
import type { TextNode } from '../../../../../../eu/pb4/placeholders/api/node/TextNode.d.ts'
import type { ParentNode } from '../../../../../../eu/pb4/placeholders/api/node/parent/ParentNode.d.ts'
import type { ParentTextNode } from '../../../../../../eu/pb4/placeholders/api/node/parent/ParentTextNode.d.ts'
import type { SimpleStylingNode } from '../../../../../../eu/pb4/placeholders/api/node/parent/SimpleStylingNode.d.ts'
import type { Style } from '../../../../../../net/minecraft/network/chat/Style.d.ts'
export class ShadowNode extends SimpleStylingNode {
    static EMPTY: ParentNode;
    constructor(arg0: TextNode[], arg1: number)
    // private color: number;
    copyWith(arg0: TextNode[]): ParentTextNode;
    style(arg0: ParserContext): Style;
    toString(): string;
}