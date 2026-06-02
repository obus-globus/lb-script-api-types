import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class ColognePhonetic$CologneBuffer extends Object {
    constructor(arg0: string[])
    constructor(arg0: number)
    // private data: string[];
    // private length: number;
    copyData(arg0: number, arg1: number): string[];
    isEmpty(): boolean;
    length(): number;
    toString(): string;
}