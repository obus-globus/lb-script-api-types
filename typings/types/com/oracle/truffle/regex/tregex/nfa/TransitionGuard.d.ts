import type { TransitionGuard$Kind } from '../../../../../../com/oracle/truffle/regex/tregex/nfa/TransitionGuard$Kind.d.ts'
import type { Token$Quantifier } from '../../../../../../com/oracle/truffle/regex/tregex/parser/Token$Quantifier.d.ts'
import type { JsonValue } from '../../../../../../com/oracle/truffle/regex/tregex/util/json/JsonValue.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class TransitionGuard extends Object {
    static NO_GUARDS: number[];
    static createCheckGroupMatched(paramgroupNumber: number): number;
    static createCheckGroupNotMatched(paramgroupNumber: number): number;
    static createCountGeMin(paramquantifier: Token$Quantifier): number;
    static createCountGeMin(paramquantifierIndex: number): number;
    static createCountInc(paramquantifier: Token$Quantifier): number;
    static createCountInc(paramquantifierIndex: number): number;
    static createCountLtMax(paramquantifier: Token$Quantifier): number;
    static createCountLtMax(paramquantifierIndex: number): number;
    static createCountLtMin(paramquantifier: Token$Quantifier): number;
    static createCountLtMin(paramquantifierIndex: number): number;
    static createCountSet1(paramquantifier: Token$Quantifier): number;
    static createCountSet1(paramquantifierIndex: number): number;
    static createCountSetMin(paramquantifier: Token$Quantifier): number;
    static createCountSetMin(paramquantifierIndex: number): number;
    static createEnterZeroWidth(paramquantifier: Token$Quantifier): number;
    static createEnterZeroWidthFromExit(paramguard: number): number;
    static createEscapeZeroWidth(paramquantifier: Token$Quantifier): number;
    static createEscapeZeroWidthFromEnter(paramguard: number): number;
    static createExitZeroWidth(paramquantifier: Token$Quantifier): number;
    static createUpdateCG(paramindex: number): number;
    static createUpdateRecursiveBackref(paramindex: number): number;
    static dump(paramguards: number[]): string;
    static getGroupBoundaryIndex(paramguard: number): number;
    static getGroupNumber(paramguard: number): number;
    static getKind(paramguard: number): TransitionGuard$Kind;
    static getQuantifierIndex(paramguard: number): number;
    static getZeroWidthQuantifierIndex(paramguard: number): number;
    static is(paramguard: number, paramkind: TransitionGuard$Kind): boolean;
    static isQuantifierGuard(paramguard: number): boolean;
    static isQuantifierGuardAllowedInDFA(paramguard: number): boolean;
    static isQuantifierOp(paramguard: number): boolean;
    static toJson(paramguard: number): JsonValue;
    static toString(paramguard: number): string;
    constructor()
}