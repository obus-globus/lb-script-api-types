import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { ParserContext } from '../../../../../eu/pb4/placeholders/api/ParserContext.d.ts'
import type { LiteralNode } from '../../../../../eu/pb4/placeholders/api/node/LiteralNode.d.ts'
import type { TextNode } from '../../../../../eu/pb4/placeholders/api/node/TextNode.d.ts'
import type { ParentTextNode } from '../../../../../eu/pb4/placeholders/api/node/parent/ParentTextNode.d.ts'
import type { NodeParser } from '../../../../../eu/pb4/placeholders/api/parsers/NodeParser.d.ts'
import type { ParserBuilder } from '../../../../../eu/pb4/placeholders/api/parsers/ParserBuilder.d.ts'
import type { WrappedText } from '../../../../../eu/pb4/placeholders/api/parsers/WrappedText.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ChatFormatting } from '../../../../../net/minecraft/ChatFormatting.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
export class LegacyFormattingParser extends Object implements NodeParser {
    static ALL: NodeParser;
    static BASE_COLORS: NodeParser;
    static COLORS: NodeParser;
    static NOOP: NodeParser;
    static builder(): ParserBuilder;
    static merge(paramarg0: (Object | null)[]): NodeParser;
    static merge(paramarg0: NodeParser[]): NodeParser;
    constructor(arg0: boolean, arg1: ChatFormatting[])
    // private allowRgb: boolean;
    // private map: Char2ObjectOpenHashMap<ChatFormatting>;
    allowRGB(): boolean;
    codec(): Codec<WrappedText>;
    formatting(): ChatFormatting[];
    parseComponent(arg0: TextNode, arg1: ParserContext): Component;
    parseComponent(arg0: string, arg1: ParserContext): Component;
    // private parseLiteral(arg0: LiteralNode, arg1: TextNode[]): TextNode[];
    parseNode(arg0: TextNode): TextNode;
    parseNode(arg0: string): TextNode;
    parseNodes(arg0: TextNode): TextNode[];
    parseNodes(arg0: TextNode, arg1: TextNode[]): TextNode[];
    // private parseParents(arg0: ParentTextNode): TextNode[];
}