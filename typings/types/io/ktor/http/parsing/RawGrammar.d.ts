import type { Grammar } from '../../../../io/ktor/http/parsing/Grammar.d.ts'
export class RawGrammar extends Grammar {
    constructor(value: string)
    readonly value: string;
}