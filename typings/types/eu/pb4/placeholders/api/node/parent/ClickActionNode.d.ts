import type { Either } from '../../../../../../com/mojang/datafixers/util/Either.d.ts'
import type { ParserContext } from '../../../../../../eu/pb4/placeholders/api/ParserContext.d.ts'
import type { StringArgs } from '../../../../../../eu/pb4/placeholders/api/arguments/StringArgs.d.ts'
import type { TextNode } from '../../../../../../eu/pb4/placeholders/api/node/TextNode.d.ts'
import type { ParentNode } from '../../../../../../eu/pb4/placeholders/api/node/parent/ParentNode.d.ts'
import type { ParentTextNode } from '../../../../../../eu/pb4/placeholders/api/node/parent/ParentTextNode.d.ts'
import type { SimpleStylingNode } from '../../../../../../eu/pb4/placeholders/api/node/parent/SimpleStylingNode.d.ts'
import type { NodeParser } from '../../../../../../eu/pb4/placeholders/api/parsers/NodeParser.d.ts'
import type { ClickEvent$Action } from '../../../../../../net/minecraft/network/chat/ClickEvent$Action.d.ts'
import type { Style } from '../../../../../../net/minecraft/network/chat/Style.d.ts'
export class ClickActionNode extends SimpleStylingNode {
    static EMPTY: ParentNode;
    constructor(arg0: TextNode[], arg1: ClickEvent$Action, arg2: TextNode)
    constructor(arg0: TextNode[], arg1: ClickEvent$Action, arg2: TextNode, arg3: Either<TextNode, StringArgs>)
    // private action: ClickEvent$Action;
    // private data: Either<TextNode, StringArgs>;
    // private value: TextNode;
    clickEventAction(): ClickEvent$Action;
    copyWith(arg0: TextNode[]): ParentTextNode;
    copyWith(arg0: TextNode[], arg1: NodeParser): ParentTextNode;
    copyWith(arg0: E[]): ParentTextNode;
    copyWith(arg0: E[], arg1: NodeParser): ParentTextNode;
    isDynamicNoChildren(): boolean;
    style(arg0: ParserContext): Style;
    toString(): string;
    value(): TextNode;
}