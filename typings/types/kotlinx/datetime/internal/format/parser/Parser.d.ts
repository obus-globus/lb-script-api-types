import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
import type { Copyable } from '../../../../../kotlinx/datetime/internal/format/parser/Copyable.d.ts'
import type { ParseError } from '../../../../../kotlinx/datetime/internal/format/parser/ParseError.d.ts'
import type { ParserStructure } from '../../../../../kotlinx/datetime/internal/format/parser/ParserStructure.d.ts'
export class Parser<Output extends Copyable<Output>> extends Object {
// (invalid TS: name contains '-')     static box-impl(paramarg0: ParserStructure<Object>): Parser<any>;
// (invalid TS: name contains '-')     static constructor-impl<Output extends Copyable<Output>>(paramarg0: ParserStructure<Object>): ParserStructure<Output>;
// (invalid TS: name contains '-')     static equals-impl(paramarg0: ParserStructure<Object>, paramarg1: Object): boolean;
// (invalid TS: name contains '-')     static equals-impl0(paramarg0: ParserStructure<Object>, paramarg1: ParserStructure<Object>): boolean;
// (invalid TS: name contains '-')     static hashCode-impl(paramarg0: ParserStructure<Object>): number;
// (invalid TS: name contains '-')     static match-impl<Output extends Copyable<Output>>(input: CharSequence, initialContainer: Output, startIndex: number): Output;
// (invalid TS: name contains '-')     static matchOrNull-impl<Output extends Copyable<Output>>(input: CharSequence, initialContainer: Output, startIndex: number): Output | null;
// (invalid TS: name contains '-')     static toString-impl(paramarg0: ParserStructure<Object>): string;
    constructor(commands: ParserStructure<Output>)
    // private commands: ParserStructure<Output>;
    equals(other: Object | null): boolean;
    hashCode(): number;
    match(input: CharSequence, initialContainer: Output, startIndex: number): Output;
    matchOrNull(input: CharSequence, initialContainer: Output, startIndex: number): Output | null;
    // private parse(input: CharSequence, startIndex: number, initialContainer: Output, allowDanglingInput: boolean, onError: (param0: ParseError) => void, onSuccess: (param0: number, param1: Output) => void): void;
    toString(): string;
}