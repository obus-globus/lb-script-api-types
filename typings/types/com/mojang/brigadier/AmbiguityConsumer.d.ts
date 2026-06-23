import type { CommandNode } from '../../../com/mojang/brigadier/tree/CommandNode.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface AmbiguityConsumer<S extends unknown> extends Object{
    ambiguous(arg0: CommandNode<S>, arg1: CommandNode<S>, arg2: CommandNode<S>, arg3: string[]): void;
}