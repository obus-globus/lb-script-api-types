import type { Parser } from '../../../../org/antlr/v4/runtime/Parser.d.ts'
import type { RecognitionException } from '../../../../org/antlr/v4/runtime/RecognitionException.d.ts'
export class FailedPredicateException extends RecognitionException {
    constructor(arg0: Parser)
    constructor(arg0: Parser, arg1: string)
    constructor(arg0: Parser, arg1: string, arg2: string)
    readonly predicate: string;
    // private predicateIndex: number;
    readonly ruleIndex: number;
    getPredIndex(): number;
    getPredicate(): string;
    getRuleIndex(): number;
}