import type { Grammar } from '../../../../io/ktor/http/parsing/Grammar.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface ComplexGrammar extends Object{
    readonly grammars: Grammar[];
}