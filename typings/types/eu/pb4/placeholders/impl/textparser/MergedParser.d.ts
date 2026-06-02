import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { ParserContext } from '../../../../../eu/pb4/placeholders/api/ParserContext.d.ts'
import type { TextNode } from '../../../../../eu/pb4/placeholders/api/node/TextNode.d.ts'
import type { NodeParser } from '../../../../../eu/pb4/placeholders/api/parsers/NodeParser.d.ts'
import type { ParserBuilder } from '../../../../../eu/pb4/placeholders/api/parsers/ParserBuilder.d.ts'
import type { WrappedText } from '../../../../../eu/pb4/placeholders/api/parsers/WrappedText.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
export class MergedParser extends Record implements NodeParser {
    static NOOP: NodeParser;
    static builder(): ParserBuilder;
    static merge(paramarg0: (Object | null)[]): NodeParser;
    static merge(paramarg0: NodeParser[]): NodeParser;
    // private parsers: NodeParser[];
    codec(): Codec<WrappedText>;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    parseComponent(arg0: TextNode, arg1: ParserContext): Component;
    parseComponent(arg0: string, arg1: ParserContext): Component;
    parseNode(arg0: TextNode): TextNode;
    parseNode(arg0: string): TextNode;
    parseNodes(arg0: TextNode): TextNode[];
    parsers(): NodeParser[];
    toString(): string;
}