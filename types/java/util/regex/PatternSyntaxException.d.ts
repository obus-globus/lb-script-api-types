import type { IllegalArgumentException } from '../../../java/lang/IllegalArgumentException.d.ts'
export class PatternSyntaxException extends IllegalArgumentException {
    constructor(arg0: string, arg1: string, arg2: number)
    // private desc: string;
    readonly index: number;
    readonly message: string | null;
    readonly pattern: string;
    getDescription(): string;
    getIndex(): number;
    getPattern(): string;
}