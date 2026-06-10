import type { ParserContext } from '../../../../../../eu/pb4/placeholders/api/ParserContext.d.ts'
import type { TextNode } from '../../../../../../eu/pb4/placeholders/api/node/TextNode.d.ts'
import type { DynamicShadowNode$SimpleColoredTransformer } from '../../../../../../eu/pb4/placeholders/api/node/parent/DynamicShadowNode$SimpleColoredTransformer.d.ts'
import type { ParentNode } from '../../../../../../eu/pb4/placeholders/api/node/parent/ParentNode.d.ts'
import type { ParentTextNode } from '../../../../../../eu/pb4/placeholders/api/node/parent/ParentTextNode.d.ts'
import type { SimpleStylingNode } from '../../../../../../eu/pb4/placeholders/api/node/parent/SimpleStylingNode.d.ts'
import type { NodeParser } from '../../../../../../eu/pb4/placeholders/api/parsers/NodeParser.d.ts'
import type { Function } from '../../../../../../java/util/function/Function.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { Style } from '../../../../../../net/minecraft/network/chat/Style.d.ts'
import type { TextColor } from '../../../../../../net/minecraft/network/chat/TextColor.d.ts'
export class DynamicColorNode extends SimpleStylingNode implements DynamicShadowNode$SimpleColoredTransformer {
    static EMPTY: ParentNode;
    static extendedTextColorParse(paramarg0: (param0: string) => TextColor): (param0: string) => TextColor;
    constructor(arg0: TextNode[], arg1: TextNode)
    constructor(arg0: TextNode[], arg1: TextNode, arg2: (param0: string) => TextColor)
    // private color: TextNode;
    // private resolver: (param0: string) => TextColor;
    applyShadowColors(arg0: Component, arg1: number, arg2: number, arg3: ParserContext): Component;
    copyWith(arg0: TextNode[]): ParentTextNode;
    copyWith(arg0: TextNode[], arg1: NodeParser): ParentTextNode;
    getDefaultShadowColor(arg0: Component, arg1: number, arg2: number, arg3: ParserContext): number;
    hasShadowColor(arg0: ParserContext): boolean;
    isDynamicNoChildren(): boolean;
    style(arg0: ParserContext): Style;
    toString(): string;
}