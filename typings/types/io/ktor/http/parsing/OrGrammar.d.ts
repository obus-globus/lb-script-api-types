import type { ComplexGrammar } from '../../../../io/ktor/http/parsing/ComplexGrammar.d.ts'
import type { Grammar } from '../../../../io/ktor/http/parsing/Grammar.d.ts'
export class OrGrammar extends Grammar implements ComplexGrammar {
    constructor(sourceGrammars: Grammar[])
    readonly grammars: Grammar[];
}