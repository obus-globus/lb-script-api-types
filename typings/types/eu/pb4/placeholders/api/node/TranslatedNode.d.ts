import type { ParserContext } from '../../../../../eu/pb4/placeholders/api/ParserContext.d.ts'
import type { PlaceholderContext } from '../../../../../eu/pb4/placeholders/api/PlaceholderContext.d.ts'
import type { TextNode } from '../../../../../eu/pb4/placeholders/api/node/TextNode.d.ts'
import type { NodeParser } from '../../../../../eu/pb4/placeholders/api/parsers/NodeParser.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
export class TranslatedNode extends Record implements TextNode {
    static array(paramarg0: (Object | null)[]): (Object | null)[];
    static asSingle(paramarg0: (Object | null)[]): TextNode;
    static asSingle(paramarg0: TextNode[]): TextNode;
    static convert(paramarg0: Component): TextNode;
    static empty(): TextNode;
    static of(paramarg0: string): TextNode;
    static of(paramarg0: string, paramarg1: (Object | null)[]): TranslatedNode;
    static ofFallback(paramarg0: string, paramarg1: string, paramarg2: (Object | null)[]): TranslatedNode;
    static wrap(paramarg0: (Object | null)[]): TextNode;
    static wrap(paramarg0: TextNode[]): TextNode;
    // private args: Object[];
    // private fallback: string;
    // private key: string;
    args(): Object[];
    equals(arg0: Object | null): boolean;
    fallback(): string;
    hashCode(): number;
    isDynamic(): boolean;
    key(): string;
    toComponent(): Component;
    toComponent(arg0: ParserContext): Component;
    toComponent(arg0: PlaceholderContext): Component;
    toComponent(arg0: ParserContext, arg1: boolean): Component;
    toString(): string;
    transform(arg0: NodeParser): TextNode;
}