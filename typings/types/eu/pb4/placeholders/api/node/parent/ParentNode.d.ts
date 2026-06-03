import type { ParserContext } from '../../../../../../eu/pb4/placeholders/api/ParserContext.d.ts'
import type { PlaceholderContext } from '../../../../../../eu/pb4/placeholders/api/PlaceholderContext.d.ts'
import type { TextNode } from '../../../../../../eu/pb4/placeholders/api/node/TextNode.d.ts'
import type { ParentTextNode } from '../../../../../../eu/pb4/placeholders/api/node/parent/ParentTextNode.d.ts'
import type { NodeParser } from '../../../../../../eu/pb4/placeholders/api/parsers/NodeParser.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { MutableComponent } from '../../../../../../net/minecraft/network/chat/MutableComponent.d.ts'
import type { Style } from '../../../../../../net/minecraft/network/chat/Style.d.ts'
export class ParentNode extends Object implements ParentTextNode {
    static EMPTY: ParentNode;
    constructor(arg0: TextNode[])
    constructor(arg0: E[])
    readonly children: TextNode[];
    applyFormatting(arg0: MutableComponent, arg1: ParserContext): Component;
    applyFormatting(arg0: Style, arg1: ParserContext): Style;
    copyWith(arg0: TextNode[]): ParentTextNode;
    copyWith(arg0: TextNode[], arg1: NodeParser): ParentTextNode;
    copyWith(arg0: E[]): ParentTextNode;
    copyWith(arg0: E[], arg1: NodeParser): ParentTextNode;
    copyWith(arg0: TextNode[], arg1: NodeParser): ParentTextNode;
    copyWith(arg0: E[]): ParentTextNode;
    copyWith(arg0: E[], arg1: NodeParser): ParentTextNode;
    getChildren(): TextNode[];
    isDynamic(): boolean;
    isDynamicNoChildren(): boolean;
    toComponent(): Component;
    toComponent(arg0: ParserContext): Component;
    toComponent(arg0: ParserContext, arg1: boolean): Component;
    toComponent(arg0: PlaceholderContext): Component;
    toString(): string;
}