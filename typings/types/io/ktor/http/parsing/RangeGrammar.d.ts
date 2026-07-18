import type { Grammar } from '../../../../io/ktor/http/parsing/Grammar.d.ts'
export class RangeGrammar extends Grammar {
    constructor(from: string, to: string)
    readonly from: string;
    readonly to: string;
}