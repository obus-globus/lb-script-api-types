import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { ParserContext } from '../../../../../eu/pb4/placeholders/api/ParserContext.d.ts'
import type { TextNode } from '../../../../../eu/pb4/placeholders/api/node/TextNode.d.ts'
import type { WrappedText } from '../../../../../eu/pb4/placeholders/api/parsers/WrappedText.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
export interface NodeParser extends Object{
    codec(): Codec<WrappedText>;
    parseComponent(arg0: TextNode, arg1: ParserContext): Component;
    parseComponent(arg0: string, arg1: ParserContext): Component;
    parseNode(arg0: TextNode): TextNode;
    parseNode(arg0: string): TextNode;
    parseNodes(arg0: TextNode): TextNode[];
}