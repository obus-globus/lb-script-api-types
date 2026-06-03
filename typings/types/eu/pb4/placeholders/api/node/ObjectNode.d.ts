import type { ParserContext } from '../../../../../eu/pb4/placeholders/api/ParserContext.d.ts'
import type { PlaceholderContext } from '../../../../../eu/pb4/placeholders/api/PlaceholderContext.d.ts'
import type { TextNode } from '../../../../../eu/pb4/placeholders/api/node/TextNode.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { ObjectInfo } from '../../../../../net/minecraft/network/chat/contents/objects/ObjectInfo.d.ts'
export class ObjectNode extends Record implements TextNode {
    static array(paramarg0: (Object | null)[]): (Object | null)[];
    static asSingle(paramarg0: (Object | null)[]): TextNode;
    static asSingle(paramarg0: TextNode[]): TextNode;
    static convert(paramarg0: Component): TextNode;
    static empty(): TextNode;
    static of(paramarg0: string): TextNode;
    static wrap(paramarg0: (Object | null)[]): TextNode;
    static wrap(paramarg0: TextNode[]): TextNode;
    constructor(arg0: ObjectInfo)
    constructor(content: ObjectInfo, fallback: Optional<TextNode>)
    // private content: ObjectInfo;
    // private fallback: Optional<TextNode>;
    content(): ObjectInfo;
    equals(arg0: Object | null): boolean;
    fallback(): Optional<TextNode>;
    hashCode(): number;
    isDynamic(): boolean;
    toComponent(): Component;
    toComponent(arg0: ParserContext): Component;
    toComponent(arg0: ParserContext, arg1: boolean): Component;
    toComponent(arg0: PlaceholderContext): Component;
    toComponent(): Component;
    toComponent(arg0: ParserContext): Component;
    toComponent(arg0: PlaceholderContext): Component;
    toString(): string;
}