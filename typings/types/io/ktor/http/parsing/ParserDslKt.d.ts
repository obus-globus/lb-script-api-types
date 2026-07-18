import type { Grammar } from '../../../../io/ktor/http/parsing/Grammar.d.ts'
import type { GrammarBuilder } from '../../../../io/ktor/http/parsing/GrammarBuilder.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ParserDslKt extends Object {
    static anyOf(value: string): Grammar;
    static atLeastOne(grammar: Grammar): Grammar;
    static flatten(self: Grammar[]): Grammar[];
    static many(grammar: Grammar): Grammar;
    static maybe(grammar: Grammar): Grammar;
    static maybe(value: string): Grammar;
    static maybe(block: (param0: GrammarBuilder) => void): () => Grammar;
    static named(self: Grammar, name: string): Grammar;
    static or(self: Grammar, grammar: Grammar): Grammar;
    static or(self: Grammar, value: string): Grammar;
    static or(self: string, grammar: Grammar): Grammar;
    static then(self: Grammar, grammar: Grammar): Grammar;
    static then(self: Grammar, value: string): Grammar;
    static then(self: string, grammar: Grammar): Grammar;
    static to(self: string, other: string): Grammar;
}