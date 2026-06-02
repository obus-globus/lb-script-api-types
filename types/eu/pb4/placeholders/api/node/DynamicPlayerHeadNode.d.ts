import type { ParserContext } from '../../../../../eu/pb4/placeholders/api/ParserContext.d.ts'
import type { PlaceholderContext } from '../../../../../eu/pb4/placeholders/api/PlaceholderContext.d.ts'
import type { DynamicPlayerHeadNode$Type } from '../../../../../eu/pb4/placeholders/api/node/DynamicPlayerHeadNode$Type.d.ts'
import type { TextNode } from '../../../../../eu/pb4/placeholders/api/node/TextNode.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
export class DynamicPlayerHeadNode extends Record implements TextNode {
    static array(paramarg0: (Object | null)[]): (Object | null)[];
    static asSingle(paramarg0: (Object | null)[]): TextNode;
    static asSingle(paramarg0: TextNode[]): TextNode;
    static convert(paramarg0: Component): TextNode;
    static empty(): TextNode;
    static of(paramarg0: string): TextNode;
    static wrap(paramarg0: (Object | null)[]): TextNode;
    static wrap(paramarg0: TextNode[]): TextNode;
    // private fallback: Optional<TextNode>;
    // private hat: boolean;
    // private name: TextNode;
    // private type: DynamicPlayerHeadNode$Type;
    equals(arg0: Object | null): boolean;
    fallback(): Optional<TextNode>;
    hashCode(): number;
    hat(): boolean;
    isDynamic(): boolean;
    name(): TextNode;
    toComponent(arg0: ParserContext, arg1: boolean): Component;
    toComponent(): Component;
    toComponent(arg0: ParserContext): Component;
    toComponent(arg0: PlaceholderContext): Component;
    toString(): string;
    type(): DynamicPlayerHeadNode$Type;
}