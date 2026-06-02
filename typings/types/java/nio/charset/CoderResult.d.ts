import type { Object } from '../../../java/lang/Object.d.ts'
export class CoderResult extends Object {
    static OVERFLOW: CoderResult;
    static UNDERFLOW: CoderResult;
    static malformedForLength(paramarg0: number): CoderResult;
    static unmappableForLength(paramarg0: number): CoderResult;
    private constructor(arg0: number, arg1: number)
    // private length: number;
    // private type: number;
    isError(): boolean;
    isMalformed(): boolean;
    isOverflow(): boolean;
    isUnderflow(): boolean;
    isUnmappable(): boolean;
    length(): number;
    throwException(): void;
    toString(): string;
}