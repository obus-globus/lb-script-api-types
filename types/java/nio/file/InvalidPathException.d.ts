import type { IllegalArgumentException } from '../../../java/lang/IllegalArgumentException.d.ts'
export class InvalidPathException extends IllegalArgumentException {
    constructor(arg0: string, arg1: string)
    constructor(arg0: string, arg1: string, arg2: number)
    readonly index: number;
    readonly input: string;
    readonly message: string | null;
    getIndex(): number;
    getInput(): string;
    getReason(): string;
}