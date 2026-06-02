import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Function1 } from '../../../../../kotlin/jvm/functions/Function1.d.ts'
import type { ParseError } from '../../../../../kotlinx/datetime/internal/format/parser/ParseError.d.ts'
import type { ParseResult$Companion } from '../../../../../kotlinx/datetime/internal/format/parser/ParseResult$Companion.d.ts'
export class ParseResult extends Object {
    static Companion: ParseResult$Companion;
//     static box-impl(paramarg0: Object): ParseResult;
 // ; invalid because of -//     static equals-impl(paramarg0: Object, paramarg1: Object): boolean;
 // ; invalid because of -//     static equals-impl0(paramarg0: Object, paramarg1: Object): boolean;
 // ; invalid because of -//     static hashCode-impl(paramarg0: Object): number;
 // ; invalid because of -//     static match-impl(paramarg0: Object, paramarg1: Function1<Object, Object>, paramarg2: Function1<Object, Object>): Object | null;
 // ; invalid because of -//     static toString-impl(paramarg0: Object): string;
 // ; invalid because of -    private constructor(value: Object)
    readonly value: Object;
    equals(other: Object | null): boolean;
    hashCode(): number;
    match<T extends Object | number | string | boolean>(onSuccess: Function1<number, T>, onFailure: Function1<ParseError, T>): T;
    toString(): string;
}