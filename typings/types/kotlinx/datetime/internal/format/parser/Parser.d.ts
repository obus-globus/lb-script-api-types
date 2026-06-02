import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
import type { Function1 } from '../../../../../kotlin/jvm/functions/Function1.d.ts'
import type { Function2 } from '../../../../../kotlin/jvm/functions/Function2.d.ts'
import type { Copyable } from '../../../../../kotlinx/datetime/internal/format/parser/Copyable.d.ts'
import type { ParseError } from '../../../../../kotlinx/datetime/internal/format/parser/ParseError.d.ts'
import type { ParserStructure } from '../../../../../kotlinx/datetime/internal/format/parser/ParserStructure.d.ts'
export class Parser<Output extends Copyable<Output>> extends Object {
//     static box-impl(paramarg0: ParserStructure<Object>): Parser<Object>;
 // ; invalid because of -//     static constructor-impl(paramarg0: ParserStructure<Object>): ParserStructure<Object>;
 // ; invalid because of -//     static equals-impl(paramarg0: ParserStructure<Object>, paramarg1: Object): boolean;
 // ; invalid because of -//     static equals-impl0(paramarg0: ParserStructure<Object>, paramarg1: ParserStructure<Object>): boolean;
 // ; invalid because of -//     static hashCode-impl(paramarg0: ParserStructure<Object>): number;
 // ; invalid because of -//     static match-impl(paramarg0: ParserStructure<Object>, paramarg1: CharSequence, paramarg2: Object | null, paramarg3: number): Object | null;
 // ; invalid because of -//     static matchOrNull-impl(paramarg0: ParserStructure<Object>, paramarg1: CharSequence, paramarg2: Object | null, paramarg3: number): Object | null;
 // ; invalid because of -//     static toString-impl(paramarg0: ParserStructure<Object>): string;
 // ; invalid because of -    constructor(commands: ParserStructure<Output>)
    // private commands: ParserStructure<Output>;
    equals(other: Object | null): boolean;
    hashCode(): number;
    match(input: CharSequence, initialContainer: Output, startIndex: number): Output;
    matchOrNull(input: CharSequence, initialContainer: Output, startIndex: number): Output | null;
    // private parse(input: CharSequence, startIndex: number, initialContainer: Output, allowDanglingInput: boolean, onError: Function1<ParseError, void>, onSuccess: Function2<number, Output, void>): void;
    toString(): string;
}