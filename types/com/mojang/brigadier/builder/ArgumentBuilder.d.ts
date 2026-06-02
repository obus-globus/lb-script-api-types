import type { Command } from '../../../../com/mojang/brigadier/Command.d.ts'
import type { RedirectModifier } from '../../../../com/mojang/brigadier/RedirectModifier.d.ts'
import type { SingleRedirectModifier } from '../../../../com/mojang/brigadier/SingleRedirectModifier.d.ts'
import type { CommandNode } from '../../../../com/mojang/brigadier/tree/CommandNode.d.ts'
import type { RootCommandNode } from '../../../../com/mojang/brigadier/tree/RootCommandNode.d.ts'
import type { Predicate } from '../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class ArgumentBuilder<S extends Object | number | string | boolean, T extends ArgumentBuilder<S, T>> extends Object {
    constructor()
    readonly arguments: RootCommandNode<S>;
    readonly command: (param0: S) => kotlin.Int;
    // private forks: boolean;
    // private modifier: (param0: S) => kotlin.collections.Collection<unknown>;
    readonly requirement: (param0: S) => kotlin.Boolean;
    // private target: CommandNode<S>;
    build(): CommandNode<S>;
    executes(arg0: (param0: S) => kotlin.Int): T;
    fork(arg0: CommandNode<S>, arg1: (param0: S) => kotlin.collections.Collection<unknown>): T;
    forward(arg0: CommandNode<S>, arg1: (param0: S) => kotlin.collections.Collection<unknown>, arg2: boolean): T;
    getArguments(): E[];
    getCommand(): (param0: S) => kotlin.Int;
    getRedirect(): CommandNode<S>;
    getRedirectModifier(): (param0: S) => kotlin.collections.Collection<unknown>;
    getRequirement(): (param0: S) => kotlin.Boolean;
    getThis(): T;
    isFork(): boolean;
    redirect(arg0: CommandNode<S>): T;
    redirect(arg0: CommandNode<S>, arg1: (param0: S) => unknown): T;
    requires(arg0: (param0: S) => kotlin.Boolean): T;
    then(arg0: ArgumentBuilder<S, Object>): T;
    then(arg0: CommandNode<S>): T;
}