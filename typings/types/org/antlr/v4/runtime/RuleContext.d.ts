import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Parser } from '../../../../org/antlr/v4/runtime/Parser.d.ts'
import type { Recognizer } from '../../../../org/antlr/v4/runtime/Recognizer.d.ts'
import type { Interval } from '../../../../org/antlr/v4/runtime/misc/Interval.d.ts'
import type { ParseTree } from '../../../../org/antlr/v4/runtime/tree/ParseTree.d.ts'
import type { ParseTreeVisitor } from '../../../../org/antlr/v4/runtime/tree/ParseTreeVisitor.d.ts'
import type { RuleNode } from '../../../../org/antlr/v4/runtime/tree/RuleNode.d.ts'
export class RuleContext extends Object implements RuleNode {
    constructor()
    constructor(arg0: RuleContext, arg1: number)
    invokingState: number;
    parent: RuleContext;
    accept<T extends Object | number | string | boolean>(arg0: ParseTreeVisitor<T>): T;
    depth(): number;
    getAltNumber(): number;
    getChild(arg0: number): ParseTree;
    getChildCount(): number;
    getParent(): RuleContext;
    getPayload(): RuleContext;
    getRuleContext(): RuleContext;
    getRuleIndex(): number;
    getSourceInterval(): Interval;
    getText(): string;
    isEmpty(): boolean;
    setAltNumber(arg0: number): void;
    setParent(arg0: RuleContext): void;
    toString(): string;
    toString(arg0: string[]): string;
    toString(arg0: string[], arg1: RuleContext): string;
    toString(arg0: Recognizer<Object, any>): string;
    toString(arg0: Recognizer<Object, any>, arg1: RuleContext): string;
    toStringTree(): string;
    toStringTree(arg0: string[]): string;
    toStringTree(arg0: Parser): string;
}