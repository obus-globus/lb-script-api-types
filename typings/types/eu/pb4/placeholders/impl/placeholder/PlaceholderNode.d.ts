import type { ParserContext } from '../../../../../eu/pb4/placeholders/api/ParserContext.d.ts'
import type { ParserContext$Key } from '../../../../../eu/pb4/placeholders/api/ParserContext$Key.d.ts'
import type { Placeholder$ArgumentedHandler } from '../../../../../eu/pb4/placeholders/api/Placeholder$ArgumentedHandler.d.ts'
import type { PlaceholderContext } from '../../../../../eu/pb4/placeholders/api/PlaceholderContext.d.ts'
import type { TextNode } from '../../../../../eu/pb4/placeholders/api/node/TextNode.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
export class PlaceholderNode<Ctx extends Object | number | string | boolean> extends Record implements TextNode {
    static array(paramarg0: (Object | null)[]): (Object | null)[];
    static asSingle(paramarg0: (Object | null)[]): TextNode;
    static asSingle(paramarg0: TextNode[]): TextNode;
    static convert(paramarg0: Component): TextNode;
    static empty(): TextNode;
    static of(paramarg0: string): TextNode;
    static wrap(paramarg0: (Object | null)[]): TextNode;
    static wrap(paramarg0: TextNode[]): TextNode;
    constructor(contextKey: ParserContext$Key<Ctx>, handler: Placeholder$ArgumentedHandler<Ctx, Object>)
    // private contextKey: ParserContext$Key<Ctx>;
    // private handler: Placeholder$ArgumentedHandler<Ctx, Object>;
    contextKey(): ParserContext$Key<Ctx>;
    equals(arg0: Object | null): boolean;
    handler(): Placeholder$ArgumentedHandler<Ctx, Object>;
    hashCode(): number;
    isDynamic(): boolean;
    isDynamic(): boolean;
    toComponent(): Component;
    toComponent(arg0: ParserContext): Component;
    toComponent(arg0: PlaceholderContext): Component;
    toComponent(): Component;
    toComponent(arg0: ParserContext): Component;
    toComponent(arg0: ParserContext, arg1: boolean): Component;
    toComponent(arg0: PlaceholderContext): Component;
    toString(): string;
}