import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { ParserContext } from '../../../../../eu/pb4/placeholders/api/ParserContext.d.ts'
import type { LiteralNode } from '../../../../../eu/pb4/placeholders/api/node/LiteralNode.d.ts'
import type { TextNode } from '../../../../../eu/pb4/placeholders/api/node/TextNode.d.ts'
import type { MarkdownLiteParserV1$MarkdownFormat } from '../../../../../eu/pb4/placeholders/api/parsers/MarkdownLiteParserV1$MarkdownFormat.d.ts'
import type { MarkdownLiteParserV1$SubNode } from '../../../../../eu/pb4/placeholders/api/parsers/MarkdownLiteParserV1$SubNode.d.ts'
import type { MarkdownLiteParserV1$SubNodeType } from '../../../../../eu/pb4/placeholders/api/parsers/MarkdownLiteParserV1$SubNodeType.d.ts'
import type { NodeParser } from '../../../../../eu/pb4/placeholders/api/parsers/NodeParser.d.ts'
import type { ParserBuilder } from '../../../../../eu/pb4/placeholders/api/parsers/ParserBuilder.d.ts'
import type { WrappedText } from '../../../../../eu/pb4/placeholders/api/parsers/WrappedText.d.ts'
import type { BiFunction } from '../../../../../java/util/function/BiFunction.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ListIterator } from '../../../../../java/util/ListIterator.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
export class MarkdownLiteParserV1 extends Object implements NodeParser {
    static ALL: NodeParser;
    static NOOP: NodeParser;
    static builder(): ParserBuilder;
    static defaultQuoteFormatting(paramarg0: (Object | null)[]): TextNode;
    static defaultSpoilerFormatting(paramarg0: (Object | null)[]): TextNode;
    static defaultUrlFormatting(paramarg0: (Object | null)[], paramarg1: TextNode): TextNode;
    static merge(paramarg0: (Object | null)[]): NodeParser;
    static merge(paramarg0: NodeParser[]): NodeParser;
    constructor(arg0: (param0: TextNode[]) => TextNode, arg1: (param0: TextNode[]) => TextNode, arg2: (param0: TextNode[], param1: TextNode) => TextNode, arg3: MarkdownLiteParserV1$MarkdownFormat[])
    constructor(arg0: (param0: TextNode[]) => TextNode, arg1: (param0: TextNode[]) => TextNode, arg2: MarkdownLiteParserV1$MarkdownFormat[])
    constructor(arg0: MarkdownLiteParserV1$MarkdownFormat[])
    // private allowedFormatting: MarkdownLiteParserV1$MarkdownFormat[];
    // private backtickFormatting: (param0: TextNode[]) => TextNode;
    // private spoilerFormatting: (param0: TextNode[]) => TextNode;
    // private urlFormatting: (param0: TextNode[], param1: TextNode) => TextNode;
    codec(): Codec<WrappedText>;
    parseComponent(arg0: TextNode, arg1: ParserContext): Component;
    parseComponent(arg0: string, arg1: ParserContext): Component;
    // private parseLiteral(arg0: LiteralNode, arg1: (param0: MarkdownLiteParserV1$SubNode<Object>) => void): void;
    parseNode(arg0: TextNode): TextNode;
    parseNode(arg0: string): TextNode;
    parseNodes(arg0: TextNode): TextNode[];
    // private parseSubNodes(arg0: ListIterator<MarkdownLiteParserV1$SubNode<Object>>, arg1: MarkdownLiteParserV1$SubNodeType<Object>, arg2: number): TextNode[];
}