import type { Grammar } from '../../../../io/ktor/http/parsing/Grammar.d.ts'
export class StringGrammar extends Grammar {
    constructor(value: string)
    readonly value: string;
}