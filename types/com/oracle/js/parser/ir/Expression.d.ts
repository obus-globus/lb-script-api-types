import type { Node } from '../../../../../com/oracle/js/parser/ir/Node.d.ts'
export abstract class Expression extends Node {
    constructor(expr: Expression)
    constructor(token: number, finish: number)
    constructor(token: number, start: number, finish: number)
    // private parensFinish: number;
    // private parensStart: number;
    readonly parenthesized: boolean;
    getFinish(): number;
    getFinishWithoutParens(): number;
    getStart(): number;
    getStartWithoutParens(): number;
    isAlwaysFalse(): boolean;
    isAlwaysTrue(): boolean;
    isParenthesized(): boolean;
    isSelfModifying(): boolean;
    makeParenthesized(parenStart: number, parenFinish: number): void;
}