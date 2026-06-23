import type { CommandNode } from '../../../../com/mojang/brigadier/tree/CommandNode.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class SuggestionContext<S extends unknown> extends Object {
    constructor(arg0: CommandNode<S>, arg1: number)
    parent: CommandNode<S>;
    startPos: number;
}