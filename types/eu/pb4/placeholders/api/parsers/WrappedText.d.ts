import type { TextNode } from '../../../../../eu/pb4/placeholders/api/node/TextNode.d.ts'
import type { NodeParser } from '../../../../../eu/pb4/placeholders/api/parsers/NodeParser.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
export class WrappedText extends Record {
    static from(paramarg0: NodeParser, paramarg1: string): WrappedText;
    constructor(input: string, textNode: TextNode, text: Component)
    // private input: string;
    // private text: Component;
    // private textNode: TextNode;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    input(): string;
    text(): Component;
    textNode(): TextNode;
    toString(): string;
}