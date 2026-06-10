import type { Command } from '../../../../com/mojang/brigadier/Command.d.ts'
import type { RedirectModifier } from '../../../../com/mojang/brigadier/RedirectModifier.d.ts'
import type { SingleRedirectModifier } from '../../../../com/mojang/brigadier/SingleRedirectModifier.d.ts'
import type { CommandContext } from '../../../../com/mojang/brigadier/context/CommandContext.d.ts'
import type { CommandNode } from '../../../../com/mojang/brigadier/tree/CommandNode.d.ts'
import type { RootCommandNode } from '../../../../com/mojang/brigadier/tree/RootCommandNode.d.ts'
import type { Predicate } from '../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class ArgumentBuilder<S extends Object | number | string | boolean, T extends ArgumentBuilder<S, T>> extends Object {
    constructor()
    readonly arguments: RootCommandNode<S>;
    readonly command: (param0: CommandContext<S>) => number;
    // private forks: boolean;
    // private modifier: (param0: CommandContext<S>) => S[];
    readonly requirement: (param0: S) => boolean;
    // private target: CommandNode<S>;
    build(): CommandNode<S>;
    executes(arg0: (param0: CommandContext<S>) => number): T;
    fork(arg0: CommandNode<S>, arg1: (param0: CommandContext<S>) => S[]): T;
    forward(arg0: CommandNode<S>, arg1: (param0: CommandContext<S>) => S[], arg2: boolean): T;
    getArguments(): CommandNode<S>[];
    getCommand(): (param0: CommandContext<S>) => number;
    getRedirect(): CommandNode<S>;
    getRedirectModifier(): (param0: CommandContext<S>) => S[];
    getRequirement(): (param0: S) => boolean;
    getThis(): T;
    isFork(): boolean;
    redirect(arg0: CommandNode<S>): T;
    redirect(arg0: CommandNode<S>, arg1: (param0: CommandContext<S>) => S): T;
    requires(arg0: (param0: S) => boolean): T;
    then(arg0: ArgumentBuilder<S, Object>): T;
    then(arg0: CommandNode<S>): T;
}