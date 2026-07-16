import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ParseError } from '../../../../../kotlinx/datetime/internal/format/parser/ParseError.d.ts'
import type { ParseResult$Companion } from '../../../../../kotlinx/datetime/internal/format/parser/ParseResult$Companion.d.ts'
export class ParseResult extends Object {
    static Companion: ParseResult$Companion;
// (invalid TS: name contains '-')     static box-impl(paramarg0: Object): ParseResult;
// (invalid TS: name contains '-')     static equals-impl(paramarg0: Object, paramarg1: Object): boolean;
// (invalid TS: name contains '-')     static equals-impl0(paramarg0: Object, paramarg1: Object): boolean;
// (invalid TS: name contains '-')     static hashCode-impl(paramarg0: Object): number;
// (invalid TS: name contains '-')     static match-impl<T extends unknown>(onSuccess: (param0: number) => T, onFailure: (param0: ParseError) => T): T;
// (invalid TS: name contains '-')     static toString-impl(paramarg0: Object): string;
    private constructor(value: Object)
    readonly value: Object;
    equals(other: Object | null): boolean;
    hashCode(): number;
    match<T extends unknown>(onSuccess: (param0: number) => T, onFailure: (param0: ParseError) => T): T;
    toString(): string;
}