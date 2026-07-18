import type { Grammar } from '../../../../io/ktor/http/parsing/Grammar.d.ts'
import type { GrammarBuilder } from '../../../../io/ktor/http/parsing/GrammarBuilder.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class GrammarBuilderKt extends Object {
    static grammar(block: (param0: GrammarBuilder) => void): Grammar;
}