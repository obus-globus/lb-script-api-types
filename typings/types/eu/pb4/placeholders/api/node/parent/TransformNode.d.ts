import type { ParserContext } from '../../../../../../eu/pb4/placeholders/api/ParserContext.d.ts'
import type { TextNode } from '../../../../../../eu/pb4/placeholders/api/node/TextNode.d.ts'
import type { ParentNode } from '../../../../../../eu/pb4/placeholders/api/node/parent/ParentNode.d.ts'
import type { ParentTextNode } from '../../../../../../eu/pb4/placeholders/api/node/parent/ParentTextNode.d.ts'
import type { NodeParser } from '../../../../../../eu/pb4/placeholders/api/parsers/NodeParser.d.ts'
import type { Function } from '../../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { MutableComponent } from '../../../../../../net/minecraft/network/chat/MutableComponent.d.ts'
import type { Style } from '../../../../../../net/minecraft/network/chat/Style.d.ts'
export class TransformNode extends ParentNode {
    static EMPTY: ParentNode;
    static deepStyle(paramarg0: (param0: Style) => Style, paramarg1: (Object | null)[]): TransformNode;
    constructor(arg0: TextNode[], arg1: (param0: MutableComponent) => Component)
    // private transform: (param0: MutableComponent) => Component;
    applyFormatting(arg0: MutableComponent, arg1: ParserContext): Component;
    applyFormatting(arg0: Style, arg1: ParserContext): Style;
    copyWith(arg0: TextNode[]): ParentTextNode;
    copyWith(arg0: TextNode[], arg1: NodeParser): ParentTextNode;
    toString(): string;
}