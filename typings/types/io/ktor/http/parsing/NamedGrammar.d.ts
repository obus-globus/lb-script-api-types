import type { Grammar } from '../../../../io/ktor/http/parsing/Grammar.d.ts'
export class NamedGrammar extends Grammar {
    constructor(name: string, grammar: Grammar)
    readonly grammar: Grammar;
    readonly name: string;
}