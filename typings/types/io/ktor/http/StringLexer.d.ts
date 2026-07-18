import type { Object } from '../../../java/lang/Object.d.ts'
export class StringLexer extends Object {
    constructor(source: string)
    readonly hasRemaining: boolean;
    index: number;
    readonly source: string;
    accept(predicate: (param0: string) => boolean): boolean;
    acceptWhile(predicate: (param0: string) => boolean): boolean;
    capture(block: (param0: StringLexer) => void): string;
    test(predicate: (param0: string) => boolean): boolean;
}