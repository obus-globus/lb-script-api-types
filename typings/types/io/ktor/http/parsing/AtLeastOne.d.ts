import type { Grammar } from '../../../../io/ktor/http/parsing/Grammar.d.ts'
import type { SimpleGrammar } from '../../../../io/ktor/http/parsing/SimpleGrammar.d.ts'
export class AtLeastOne extends Grammar implements SimpleGrammar {
    constructor(grammar: Grammar)
    readonly grammar: Grammar;
}