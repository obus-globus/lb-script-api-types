import type { ParserContext } from '../../../../../../eu/pb4/placeholders/api/ParserContext.d.ts'
import type { TextNode } from '../../../../../../eu/pb4/placeholders/api/node/TextNode.d.ts'
import type { HoverNode$Action } from '../../../../../../eu/pb4/placeholders/api/node/parent/HoverNode$Action.d.ts'
import type { ParentNode } from '../../../../../../eu/pb4/placeholders/api/node/parent/ParentNode.d.ts'
import type { ParentTextNode } from '../../../../../../eu/pb4/placeholders/api/node/parent/ParentTextNode.d.ts'
import type { SimpleStylingNode } from '../../../../../../eu/pb4/placeholders/api/node/parent/SimpleStylingNode.d.ts'
import type { NodeParser } from '../../../../../../eu/pb4/placeholders/api/parsers/NodeParser.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { HoverEvent } from '../../../../../../net/minecraft/network/chat/HoverEvent.d.ts'
import type { Style } from '../../../../../../net/minecraft/network/chat/Style.d.ts'
export class HoverNode<T extends Object | number | string | boolean, H extends Object | number | string | boolean> extends SimpleStylingNode {
    static EMPTY: ParentNode;
    static toVanilla(paramarg0: HoverNode$Action<Object, Object>, paramarg1: Object | null, paramarg2: ParserContext): HoverEvent;
    constructor(arg0: TextNode[], arg1: HoverNode$Action<T, H>, arg2: T)
    // private action: HoverNode$Action<T, H>;
    // private value: T;
    action(): HoverNode$Action<T, H>;
    copyWith(arg0: TextNode[]): ParentTextNode;
    copyWith(arg0: TextNode[], arg1: NodeParser): ParentTextNode;
    copyWith(arg0: E[]): ParentTextNode;
    copyWith(arg0: E[], arg1: NodeParser): ParentTextNode;
    isDynamicNoChildren(): boolean;
    style(arg0: ParserContext): Style;
    toString(): string;
    value(): T;
}