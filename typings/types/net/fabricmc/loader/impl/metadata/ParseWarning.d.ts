import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ParseWarning extends Object {
    constructor(arg0: number, arg1: number, arg2: string)
    constructor(arg0: number, arg1: number, arg2: string, arg3: string)
    readonly column: number;
    readonly key: string;
    readonly line: number;
    readonly reason: string;
    getColumn(): number;
    getKey(): string;
    getLine(): number;
    getReason(): string;
}