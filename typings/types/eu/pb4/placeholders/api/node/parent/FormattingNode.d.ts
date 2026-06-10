import type { ParserContext } from '../../../../../../eu/pb4/placeholders/api/ParserContext.d.ts'
import type { TextNode } from '../../../../../../eu/pb4/placeholders/api/node/TextNode.d.ts'
import type { DynamicShadowNode$SimpleColoredTransformer } from '../../../../../../eu/pb4/placeholders/api/node/parent/DynamicShadowNode$SimpleColoredTransformer.d.ts'
import type { ParentNode } from '../../../../../../eu/pb4/placeholders/api/node/parent/ParentNode.d.ts'
import type { ParentTextNode } from '../../../../../../eu/pb4/placeholders/api/node/parent/ParentTextNode.d.ts'
import type { SimpleStylingNode } from '../../../../../../eu/pb4/placeholders/api/node/parent/SimpleStylingNode.d.ts'
import type { NodeParser } from '../../../../../../eu/pb4/placeholders/api/parsers/NodeParser.d.ts'
import type { ChatFormatting } from '../../../../../../net/minecraft/ChatFormatting.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { Style } from '../../../../../../net/minecraft/network/chat/Style.d.ts'
export class FormattingNode extends SimpleStylingNode implements DynamicShadowNode$SimpleColoredTransformer {
    static EMPTY: ParentNode;
    constructor(arg0: TextNode[], arg1: ChatFormatting[])
    constructor(arg0: TextNode[], arg1: ChatFormatting)
    // private formatting: ChatFormatting[];
    applyShadowColors(arg0: Component, arg1: number, arg2: number, arg3: ParserContext): Component;
    copyWith(arg0: TextNode[]): ParentTextNode;
    copyWith(arg0: TextNode[], arg1: NodeParser): ParentTextNode;
    getDefaultShadowColor(arg0: Component, arg1: number, arg2: number, arg3: ParserContext): number;
    hasShadowColor(arg0: ParserContext): boolean;
    style(arg0: ParserContext): Style;
    toString(): string;
}