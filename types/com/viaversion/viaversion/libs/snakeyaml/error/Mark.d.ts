import type { Serializable } from '../../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class Mark extends Object implements Serializable {
    constructor(arg0: string, arg1: number, arg2: number, arg3: number, arg4: string[], arg5: number)
    constructor(arg0: string, arg1: number, arg2: number, arg3: number, arg4: number[], arg5: number)
    readonly buffer: number[];
    readonly column: number;
    readonly index: number;
    readonly line: number;
    readonly name: string;
    readonly pointer: number;
    getBuffer(): number[];
    getColumn(): number;
    getIndex(): number;
    getLine(): number;
    getName(): string;
    getPointer(): number;
    get_snippet(): string;
    get_snippet(arg0: number, arg1: number): string;
    // private isLineBreak(arg0: number): boolean;
    toString(): string;
}