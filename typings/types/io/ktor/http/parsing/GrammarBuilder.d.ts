import type { Grammar } from '../../../../io/ktor/http/parsing/Grammar.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class GrammarBuilder extends Object {
    constructor()
    // private grammars: Grammar[];
    build(): Grammar;
    then(grammar: Grammar): GrammarBuilder;
    then(value: string): GrammarBuilder;
}