import type { ParserContext } from '../../../../../../eu/pb4/placeholders/api/ParserContext.d.ts'
import type { TextNode } from '../../../../../../eu/pb4/placeholders/api/node/TextNode.d.ts'
import type { ParentNode } from '../../../../../../eu/pb4/placeholders/api/node/parent/ParentNode.d.ts'
import type { ParentTextNode } from '../../../../../../eu/pb4/placeholders/api/node/parent/ParentTextNode.d.ts'
import type { SimpleStylingNode } from '../../../../../../eu/pb4/placeholders/api/node/parent/SimpleStylingNode.d.ts'
import type { StyledNode$HoverData } from '../../../../../../eu/pb4/placeholders/api/node/parent/StyledNode$HoverData.d.ts'
import type { NodeParser } from '../../../../../../eu/pb4/placeholders/api/parsers/NodeParser.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Style } from '../../../../../../net/minecraft/network/chat/Style.d.ts'
export class StyledNode extends SimpleStylingNode {
    static EMPTY: ParentNode;
    constructor(arg0: TextNode[], arg1: Style, arg2: ParentNode, arg3: TextNode, arg4: TextNode)
    constructor(arg0: TextNode[], arg1: Style, arg2: StyledNode$HoverData<Object>, arg3: TextNode, arg4: TextNode)
    // private clickValue: TextNode;
    // private hoverValue: StyledNode$HoverData<Object>;
    // private insertion: TextNode;
    // private style: Style;
    clickValue(): TextNode;
    copyWith(arg0: TextNode[]): ParentTextNode;
    copyWith(arg0: TextNode[], arg1: NodeParser): ParentTextNode;
    copyWith(arg0: E[]): ParentTextNode;
    copyWith(arg0: E[], arg1: NodeParser): ParentTextNode;
    hover(): StyledNode$HoverData<Object>;
    insertion(): TextNode;
    isDynamicNoChildren(): boolean;
    rawStyle(): Style;
    style(arg0: ParserContext): Style;
    toString(): string;
}