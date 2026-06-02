import type { InputStringGenerator } from '../../../../../com/oracle/truffle/regex/analysis/InputStringGenerator.d.ts'
import type { InputStringGenerator$StateChange } from '../../../../../com/oracle/truffle/regex/analysis/InputStringGenerator$StateChange.d.ts'
import type { QuantifiableTerm } from '../../../../../com/oracle/truffle/regex/tregex/parser/ast/QuantifiableTerm.d.ts'
export class InputStringGenerator$PopQuantifierStack extends InputStringGenerator$StateChange {
    private constructor(term: QuantifiableTerm)
    // private term: QuantifiableTerm;
    apply(gen: InputStringGenerator): void;
}