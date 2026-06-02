import type { ParserContext } from '../../../../../../eu/pb4/placeholders/api/ParserContext.d.ts'
import type { TextNode } from '../../../../../../eu/pb4/placeholders/api/node/TextNode.d.ts'
import type { DynamicShadowNode$SimpleColoredTransformer } from '../../../../../../eu/pb4/placeholders/api/node/parent/DynamicShadowNode$SimpleColoredTransformer.d.ts'
import type { ParentNode } from '../../../../../../eu/pb4/placeholders/api/node/parent/ParentNode.d.ts'
import type { ParentTextNode } from '../../../../../../eu/pb4/placeholders/api/node/parent/ParentTextNode.d.ts'
import type { SimpleStylingNode } from '../../../../../../eu/pb4/placeholders/api/node/parent/SimpleStylingNode.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { Style } from '../../../../../../net/minecraft/network/chat/Style.d.ts'
import type { TextColor } from '../../../../../../net/minecraft/network/chat/TextColor.d.ts'
export class ColorNode extends SimpleStylingNode implements DynamicShadowNode$SimpleColoredTransformer {
    static EMPTY: ParentNode;
    constructor(arg0: TextNode[], arg1: TextColor)
    // private color: TextColor;
    applyShadowColors(arg0: Component, arg1: number, arg2: number, arg3: ParserContext): Component;
    copyWith(arg0: TextNode[]): ParentTextNode;
    getDefaultShadowColor(arg0: Component, arg1: number, arg2: number, arg3: ParserContext): number;
    style(arg0: ParserContext): Style;
    toString(): string;
}