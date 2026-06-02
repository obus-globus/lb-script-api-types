import type { ArgumentCommandNode } from '../../../../com/mojang/brigadier/tree/ArgumentCommandNode.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class SignableCommand$Argument<S extends Object | number | string | boolean> extends Record {
    constructor(node: ArgumentCommandNode<S, Object>, value: string)
    // private node: ArgumentCommandNode<S, Object>;
    // private value: string;
    equals(o: Object | null): boolean;
    hashCode(): number;
    name(): string;
    node(): ArgumentCommandNode<S, Object>;
    toString(): string;
    value(): string;
}