import type { ParserContext } from '../../../../../../eu/pb4/placeholders/api/ParserContext.d.ts'
import type { TextNode } from '../../../../../../eu/pb4/placeholders/api/node/TextNode.d.ts'
import type { ParentNode } from '../../../../../../eu/pb4/placeholders/api/node/parent/ParentNode.d.ts'
import type { ParentTextNode } from '../../../../../../eu/pb4/placeholders/api/node/parent/ParentTextNode.d.ts'
import type { NodeParser } from '../../../../../../eu/pb4/placeholders/api/parsers/NodeParser.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { MutableComponent } from '../../../../../../net/minecraft/network/chat/MutableComponent.d.ts'
import type { Style } from '../../../../../../net/minecraft/network/chat/Style.d.ts'
export class DynamicShadowNode extends ParentNode {
    static EMPTY: ParentNode;
    static modifiedColor(paramarg0: number, paramarg1: number, paramarg2: number): number;
    constructor(arg0: TextNode[])
    constructor(arg0: TextNode[], arg1: number, arg2: number)
    // private alpha: number;
    // private scale: number;
    applyFormatting(arg0: MutableComponent, arg1: ParserContext): Component;
    applyFormatting(arg0: Style, arg1: ParserContext): Style;
    copyWith(arg0: TextNode[]): ParentTextNode;
    copyWith(arg0: TextNode[], arg1: NodeParser): ParentTextNode;
    toString(): string;
}