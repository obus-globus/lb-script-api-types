import type { Either } from '../../../../../com/mojang/datafixers/util/Either.d.ts'
import type { ParserContext } from '../../../../../eu/pb4/placeholders/api/ParserContext.d.ts'
import type { PlaceholderContext } from '../../../../../eu/pb4/placeholders/api/PlaceholderContext.d.ts'
import type { TextNode } from '../../../../../eu/pb4/placeholders/api/node/TextNode.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { EntitySelector } from '../../../../../net/minecraft/commands/arguments/selector/EntitySelector.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { CompilableString } from '../../../../../net/minecraft/util/CompilableString.d.ts'
export class ScoreNode extends Record implements TextNode {
    static array(paramarg0: (Object | null)[]): (Object | null)[];
    static asSingle(paramarg0: (Object | null)[]): TextNode;
    static asSingle(paramarg0: TextNode[]): TextNode;
    static convert(paramarg0: Component): TextNode;
    static empty(): TextNode;
    static of(paramarg0: string): TextNode;
    static wrap(paramarg0: (Object | null)[]): TextNode;
    static wrap(paramarg0: TextNode[]): TextNode;
    constructor(name: Either<CompilableString<EntitySelector>, string>, objective: string)
    constructor(arg0: string, arg1: string)
    // private name: Either<CompilableString<EntitySelector>, string>;
    // private objective: string;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    isDynamic(): boolean;
    name(): Either<CompilableString<EntitySelector>, string>;
    objective(): string;
    toComponent(): Component;
    toComponent(arg0: ParserContext): Component;
    toComponent(arg0: ParserContext, arg1: boolean): Component;
    toComponent(arg0: PlaceholderContext): Component;
    toComponent(): Component;
    toComponent(arg0: ParserContext): Component;
    toComponent(arg0: PlaceholderContext): Component;
    toString(): string;
}