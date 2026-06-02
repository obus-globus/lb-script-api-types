import type { ImmutableStringReader } from '../../../../com/mojang/brigadier/ImmutableStringReader.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class StringRange extends Object {
    static at(paramarg0: number): StringRange;
    static between(paramarg0: number, paramarg1: number): StringRange;
    static encompassing(paramarg0: StringRange, paramarg1: StringRange): StringRange;
    constructor(arg0: number, arg1: number)
    readonly end: number;
    readonly start: number;
    equals(arg0: Object | null): boolean;
    get(arg0: ImmutableStringReader): string;
    get(arg0: string): string;
    getEnd(): number;
    getLength(): number;
    getStart(): number;
    hashCode(): number;
    isEmpty(): boolean;
    toString(): string;
}