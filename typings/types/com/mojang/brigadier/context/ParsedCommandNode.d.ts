import type { StringRange } from '../../../../com/mojang/brigadier/context/StringRange.d.ts'
import type { CommandNode } from '../../../../com/mojang/brigadier/tree/CommandNode.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ParsedCommandNode<S extends unknown> extends Object {
    constructor(arg0: CommandNode<S>, arg1: StringRange)
    readonly node: CommandNode<S>;
    readonly range: StringRange;
    equals(arg0: Object | null): boolean;
    getNode(): CommandNode<S>;
    getRange(): StringRange;
    hashCode(): number;
    toString(): string;
}