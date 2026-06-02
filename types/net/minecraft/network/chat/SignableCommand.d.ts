import type { ParseResults } from '../../../../com/mojang/brigadier/ParseResults.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { SignableCommand$Argument } from '../../../../net/minecraft/network/chat/SignableCommand$Argument.d.ts'
export class SignableCommand<S extends Object | number | string | boolean> extends Record {
    static hasSignableArguments(paramcommand: ParseResults<Object>): boolean;
    static of(paramcommand: ParseResults<Object>): SignableCommand<Object>;
    constructor(arguments: SignableCommand$Argument<S>[])
    // private arguments: SignableCommand$Argument<S>[];
    arguments(): SignableCommand$Argument<S>[];
    equals(o: Object | null): boolean;
    getArgument(name: string): SignableCommand$Argument<S>;
    hashCode(): number;
    toString(): string;
}