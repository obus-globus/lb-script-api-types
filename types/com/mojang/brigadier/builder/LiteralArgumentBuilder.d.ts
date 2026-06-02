import type { ArgumentBuilder } from '../../../../com/mojang/brigadier/builder/ArgumentBuilder.d.ts'
import type { LiteralCommandNode } from '../../../../com/mojang/brigadier/tree/LiteralCommandNode.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class LiteralArgumentBuilder<S extends Object | number | string | boolean> extends ArgumentBuilder<S, LiteralArgumentBuilder<S>> {
    static literal(paramarg0: string): LiteralArgumentBuilder<Object>;
    constructor(arg0: string)
    readonly literal: string;
    build(): LiteralCommandNode<S>;
    getLiteral(): string;
    getThis(): LiteralArgumentBuilder<S>;
}