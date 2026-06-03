import type { ParserContext } from '../../../../../../eu/pb4/placeholders/api/ParserContext.d.ts'
import type { TextNode } from '../../../../../../eu/pb4/placeholders/api/node/TextNode.d.ts'
import type { ParentNode } from '../../../../../../eu/pb4/placeholders/api/node/parent/ParentNode.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { MutableComponent } from '../../../../../../net/minecraft/network/chat/MutableComponent.d.ts'
import type { Style } from '../../../../../../net/minecraft/network/chat/Style.d.ts'
export abstract class SimpleStylingNode extends ParentNode {
    static EMPTY: ParentNode;
    constructor(arg0: TextNode[])
    constructor(arg0: E[])
    applyFormatting(arg0: MutableComponent, arg1: ParserContext): Component;
    applyFormatting(arg0: Style, arg1: ParserContext): Style;
    style(arg0: ParserContext): Style;
}